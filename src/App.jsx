import { useState } from 'react';
import useWorkouts from './hooks/useWorkouts';
import useStreaks from './hooks/useStreaks';
import useRecords from './hooks/useRecords';
import WorkoutForm from './components/WorkoutForm';
import WorkoutHistory from './components/WorkoutHistory';
import ProgressCharts from './components/ProgressCharts';
import ExerciseLibrary from './components/ExerciseLibrary';
import StatsPanel from './components/StatsPanel';
import './App.css';

const TABS = ['Dashboard', 'Log', 'History', 'Exercises'];

export default function App() {
  const [tab, setTab] = useState('Dashboard');
  const { workouts, addWorkout, removeWorkout, getWeeklyVolume, getMonthlyFrequency } = useWorkouts();
  const { streak, longestStreak } = useStreaks(workouts);
  const records = useRecords(workouts);

  return (
    <div className="app">
      <header className="header">
        <h1>🏋️ Fitness Tracker</h1>
        <nav className="nav">
          {TABS.map((t) => (
            <button
              key={t}
              className={`nav-btn ${tab === t ? 'active' : ''}`}
              onClick={() => setTab(t)}
            >
              {t}
            </button>
          ))}
        </nav>
      </header>

      <main className="main">
        {tab === 'Dashboard' && (
          <>
            <StatsPanel
              streak={streak}
              longestStreak={longestStreak}
              records={records}
              totalWorkouts={workouts.length}
            />
            <ProgressCharts
              weeklyVolume={getWeeklyVolume()}
              monthlyFrequency={getMonthlyFrequency()}
            />
          </>
        )}
        {tab === 'Log' && <WorkoutForm onAdd={addWorkout} />}
        {tab === 'History' && <WorkoutHistory workouts={workouts} onRemove={removeWorkout} />}
        {tab === 'Exercises' && <ExerciseLibrary />}
      </main>
    </div>
  );
}
