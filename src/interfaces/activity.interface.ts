export interface Activity {
  title: string;
  timeframes: Timeframes;
}

export interface Timeframes {
  daily: Times;
  weekly: Times;
  monthly: Times;
}

export interface Times {
  current: number;
  previous: number;
}
