import { useMemo } from 'react';

export default function useRecords(workouts) {
  const records = useMemo(() => {
    const map = {};
    workouts.forEach((w) => {
      const key = w.exercise;
      if (!map[key]) {
        map[key] = { bestWeight: 0, bestReps: 0, bestVolume: 0 };
      }
      const weight = Number(w.weight) || 0;
      const reps = Number(w.reps) || 0;
      const volume = weight * reps * (Number(w.sets) || 1);
      if (weight > map[key].bestWeight) map[key].bestWeight = weight;
      if (reps > map[key].bestReps) map[key].bestReps = reps;
      if (volume > map[key].bestVolume) map[key].bestVolume = volume;
    });
    return map;
  }, [workouts]);

  return records;
}
