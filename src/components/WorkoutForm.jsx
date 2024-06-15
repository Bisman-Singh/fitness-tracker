import { useState } from 'react';
import exercises from '../data/exercises';

export default function WorkoutForm({ onAdd }) {
  const today = new Date().toISOString().split('T')[0];
  const [form, setForm] = useState({
    exercise: exercises[0].name,
    sets: '',
    reps: '',
    weight: '',
    duration: '',
    date: today,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.exercise || !form.sets || !form.reps) return;
    onAdd({
      ...form,
      sets: Number(form.sets),
      reps: Number(form.reps),
      weight: Number(form.weight) || 0,
      duration: Number(form.duration) || 0,
    });
    setForm({ ...form, sets: '', reps: '', weight: '', duration: '' });
  };

  return (
    <form className="workout-form" onSubmit={handleSubmit}>
      <h2>Log Workout</h2>
      <div className="form-grid">
        <label>
          Exercise
          <select name="exercise" value={form.exercise} onChange={handleChange}>
            {exercises.map((ex) => (
              <option key={ex.name} value={ex.name}>
                {ex.name} ({ex.muscle})
              </option>
            ))}
          </select>
        </label>
        <label>
          Sets
          <input type="number" name="sets" min="1" value={form.sets} onChange={handleChange} placeholder="3" required />
        </label>
        <label>
          Reps
          <input type="number" name="reps" min="1" value={form.reps} onChange={handleChange} placeholder="10" required />
        </label>
        <label>
          Weight (lbs)
          <input type="number" name="weight" min="0" value={form.weight} onChange={handleChange} placeholder="135" />
        </label>
        <label>
          Duration (min)
          <input type="number" name="duration" min="0" value={form.duration} onChange={handleChange} placeholder="5" />
        </label>
        <label>
          Date
          <input type="date" name="date" value={form.date} onChange={handleChange} />
        </label>
      </div>
      <button type="submit" className="btn-primary">Add Workout</button>
    </form>
  );
}
