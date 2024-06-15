export default function StatsPanel({ streak, longestStreak, records, totalWorkouts }) {
  const recordEntries = Object.entries(records);

  return (
    <div className="stats-section">
      <div className="stat-cards">
        <div className="stat-card">
          <span className="stat-value">{totalWorkouts}</span>
          <span className="stat-label">Total Workouts</span>
        </div>
        <div className="stat-card accent">
          <span className="stat-value">{streak}🔥</span>
          <span className="stat-label">Current Streak</span>
        </div>
        <div className="stat-card">
          <span className="stat-value">{longestStreak}</span>
          <span className="stat-label">Longest Streak</span>
        </div>
      </div>

      {recordEntries.length > 0 && (
        <div className="card">
          <h2>Personal Records</h2>
          <div className="records-table">
            <div className="records-header">
              <span>Exercise</span>
              <span>Best Weight</span>
              <span>Best Reps</span>
              <span>Best Volume</span>
            </div>
            {recordEntries.map(([exercise, rec]) => (
              <div key={exercise} className="records-row">
                <span>{exercise}</span>
                <span>{rec.bestWeight} lbs</span>
                <span>{rec.bestReps}</span>
                <span>{rec.bestVolume.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
