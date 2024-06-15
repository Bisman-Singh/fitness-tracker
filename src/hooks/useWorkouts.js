import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'fitness-tracker-workouts';

function loadWorkouts() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export default function useWorkouts() {
  const [workouts, setWorkouts] = useState(loadWorkouts);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(workouts));
  }, [workouts]);

  const addWorkout = useCallback((workout) => {
    setWorkouts((prev) => [
      { ...workout, id: Date.now().toString() },
      ...prev,
    ]);
  }, []);

  const removeWorkout = useCallback((id) => {
    setWorkouts((prev) => prev.filter((w) => w.id !== id));
  }, []);

  const getWeeklyVolume = useCallback(() => {
    const now = new Date();
    const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    const days = [];
    for (let i = 6; i >= 0; i--) {
      const d = new Date(now.getTime() - i * 24 * 60 * 60 * 1000);
      const key = d.toISOString().split('T')[0];
      const dayWorkouts = workouts.filter((w) => w.date === key);
      const volume = dayWorkouts.reduce(
        (sum, w) => sum + (w.sets || 0) * (w.reps || 0) * (w.weight || 0),
        0
      );
      days.push({
        day: d.toLocaleDateString('en-US', { weekday: 'short' }),
        date: key,
        volume,
      });
    }
    return days;
  }, [workouts]);

  const getMonthlyFrequency = useCallback(() => {
    const now = new Date();
    const weeks = [];
    for (let i = 3; i >= 0; i--) {
      const weekEnd = new Date(now.getTime() - i * 7 * 24 * 60 * 60 * 1000);
      const weekStart = new Date(weekEnd.getTime() - 7 * 24 * 60 * 60 * 1000);
      const count = workouts.filter((w) => {
        const d = new Date(w.date);
        return d >= weekStart && d <= weekEnd;
      }).length;
      weeks.push({
        week: `Week ${4 - i}`,
        workouts: count,
      });
    }
    return weeks;
  }, [workouts]);

  return { workouts, addWorkout, removeWorkout, getWeeklyVolume, getMonthlyFrequency };
}
