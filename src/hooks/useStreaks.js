import { useMemo } from 'react';

export default function useStreaks(workouts) {
  const streak = useMemo(() => {
    if (!workouts.length) return 0;

    const uniqueDates = [...new Set(workouts.map((w) => w.date))].sort().reverse();
    const today = new Date().toISOString().split('T')[0];
    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];

    if (uniqueDates[0] !== today && uniqueDates[0] !== yesterday) return 0;

    let count = 1;
    for (let i = 0; i < uniqueDates.length - 1; i++) {
      const curr = new Date(uniqueDates[i]);
      const next = new Date(uniqueDates[i + 1]);
      const diff = (curr - next) / 86400000;
      if (diff === 1) {
        count++;
      } else {
        break;
      }
    }
    return count;
  }, [workouts]);

  const longestStreak = useMemo(() => {
    if (!workouts.length) return 0;
    const uniqueDates = [...new Set(workouts.map((w) => w.date))].sort();
    let max = 1;
    let current = 1;
    for (let i = 1; i < uniqueDates.length; i++) {
      const prev = new Date(uniqueDates[i - 1]);
      const curr = new Date(uniqueDates[i]);
      if ((curr - prev) / 86400000 === 1) {
        current++;
        max = Math.max(max, current);
      } else {
        current = 1;
      }
    }
    return max;
  }, [workouts]);

  return { streak, longestStreak };
}
