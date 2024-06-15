import {
  LineChart, Line, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';

export default function ProgressCharts({ weeklyVolume, monthlyFrequency }) {
  return (
    <div className="charts-section">
      <div className="card chart-card">
        <h3>Weekly Volume (weight × reps × sets)</h3>
        <ResponsiveContainer width="100%" height={220}>
          <LineChart data={weeklyVolume}>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis dataKey="day" stroke="#888" />
            <YAxis stroke="#888" />
            <Tooltip
              contentStyle={{ background: '#1e1e1e', border: '1px solid #333' }}
              labelStyle={{ color: '#f97316' }}
            />
            <Line
              type="monotone"
              dataKey="volume"
              stroke="#f97316"
              strokeWidth={2}
              dot={{ fill: '#f97316' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="card chart-card">
        <h3>Monthly Workout Frequency</h3>
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={monthlyFrequency}>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis dataKey="week" stroke="#888" />
            <YAxis stroke="#888" allowDecimals={false} />
            <Tooltip
              contentStyle={{ background: '#1e1e1e', border: '1px solid #333' }}
              labelStyle={{ color: '#f97316' }}
            />
            <Bar dataKey="workouts" fill="#f97316" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
