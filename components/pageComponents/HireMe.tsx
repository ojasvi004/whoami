import React from "react";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const HireMe = () => {
  return (
    <section className="mb-10 p-3 rounded-xl bg-gradient-to-br from-zinc-900/40 to-zinc-800/20 backdrop-blur-sm border border-zinc-700/40">
      <h2 className="text-lg sm:text-xl font-bold mb-4 text-zinc-100 flex items-center gap-2">
        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
        Available for Hire
      </h2>
      <p className="text-zinc-200 text-sm sm:text-base mb-6 leading-relaxed">
        I&apos;m currently available for internships, full-time opportunities,
        and freelance projects. If you&apos;re looking for someone passionate,
        skilled, and ready to contribute, I&apos;m here to help bring your ideas
        to life!
      </p>
      <a
        href="mailto:ojasvidoye@gmail.com?subject=Interested%20in%20hiring%20you"
        className="inline-block"
      >
        <Button className="bg-zinc-900 border border-zinc-700 hover:bg-zinc-800 text-zinc-100 text-md h-8 px-3">
          <Mail className="h-3 w-3 mr-2" />
          Hire Me
        </Button>
      </a>
    </section>
  );
};

export default HireMe;
