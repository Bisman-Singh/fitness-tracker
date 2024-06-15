import { useState } from 'react';
import exercises from '../data/exercises';

const muscleGroups = ['All', ...new Set(exercises.map((e) => e.muscle))];

export default function ExerciseLibrary() {
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All'
    ? exercises
    : exercises.filter((e) => e.muscle === filter);

  return (
    <div className="card">
      <h2>Exercise Library</h2>
      <div className="filter-tabs">
        {muscleGroups.map((g) => (
          <button
            key={g}
            className={`tab ${filter === g ? 'active' : ''}`}
            onClick={() => setFilter(g)}
          >
            {g}
          </button>
        ))}
      </div>
      <div className="exercise-grid">
        {filtered.map((ex) => (
          <div key={ex.name} className="exercise-card">
            <span className="exercise-name">{ex.name}</span>
            <span className="muscle-tag">{ex.muscle}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
