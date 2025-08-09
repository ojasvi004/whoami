import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const username = searchParams.get("username");
    if (!username) {
      return NextResponse.json({ error: "username required" }, { status: 400 });
    }

    const now = new Date();
    const from = new Date(now);
    from.setDate(from.getDate() - 371); // 53 weeks to match GitHub
    const fromStr = from.toISOString().slice(0, 10);
    const toStr = now.toISOString().slice(0, 10);

    const url = `https://github.com/users/${username}/contributions?from=${fromStr}&to=${toStr}`;
    const res = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123 Safari/537.36",
        Accept: "text/html,application/xhtml+xml,application/xml",
      },
      cache: "no-store",
    });

    const svg = await res.text();
    const entries: { date: string; count: number }[] = [];

    // Prefer data-count
    let m: RegExpExecArray | null;
    const countRegex = /data-date="([0-9-]+)"[^>]*data-count="([0-9]+)"/g;
    while ((m = countRegex.exec(svg)) !== null) {
      entries.push({ date: m[1], count: Number(m[2]) });
    }

    // Fallback for data-level
    if (entries.length === 0) {
      const levelRegex = /data-date="([0-9-]+)"[^>]*data-level="([0-4])"/g;
      while ((m = levelRegex.exec(svg)) !== null) {
        entries.push({ date: m[1], count: Number(m[2]) });
      }
    }

    // Fallback for aria-label
    if (entries.length === 0) {
      const ariaRegex = /data-date="([0-9-]+)"[^>]*aria-label="([^\"]+)"/g;
      while ((m = ariaRegex.exec(svg)) !== null) {
        const numMatch = m[2].match(/(\d+)/);
        const count = numMatch ? Number(numMatch[1]) : 0;
        entries.push({ date: m[1], count });
      }
    }

    return NextResponse.json(entries);
  } catch (e) {
    return NextResponse.json({ error: "failed to fetch" }, { status: 500 });
  }
}
