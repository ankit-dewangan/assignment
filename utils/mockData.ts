export interface UserStats {
  title: string;
  value: string;
  change: number;
}

export const mockStats: UserStats[] = [
  { title: 'Total Points', value: '2,547', change: 12.5 },
  { title: 'Activities', value: '48', change: -2.3 },
  { title: 'Achievements', value: '16', change: 8.1 },
];