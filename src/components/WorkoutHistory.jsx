export default function WorkoutHistory({ workouts, onRemove }) {
  if (!workouts.length) {
    return (
      <div className="card">
        <h2>Workout History</h2>
        <p className="empty-state">No workouts logged yet. Start tracking!</p>
      </div>
    );
  }

  return (
    <div className="card">
      <h2>Workout History</h2>
      <div className="history-list">
        {workouts.slice(0, 20).map((w) => (
          <div key={w.id} className="history-item">
            <div className="history-info">
              <strong>{w.exercise}</strong>
              <span className="history-meta">
                {w.sets}×{w.reps} @ {w.weight}lbs
                {w.duration > 0 && ` · ${w.duration}min`}
              </span>
              <span className="history-date">{w.date}</span>
            </div>
            <button className="btn-remove" onClick={() => onRemove(w.id)} title="Remove">
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
