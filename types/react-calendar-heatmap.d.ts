declare module 'react-calendar-heatmap' {
  import * as React from 'react';
  export interface ValueType { date: string | Date; count?: number }
  export interface CalendarHeatmapProps {
    startDate: Date | string;
    endDate: Date | string;
    values: ValueType[];
    classForValue?: (value?: ValueType) => string | undefined;
    tooltipDataAttrs?: (value?: ValueType) => Record<string, string>;
    showWeekdayLabels?: boolean;
    gutterSize?: number;
  }
  const CalendarHeatmap: React.FC<CalendarHeatmapProps>;
  export default CalendarHeatmap;
}
