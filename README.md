# Fitness Tracker

A comprehensive fitness and workout tracking application built with React and Vite.

## Features

- **Workout Logging** — Log exercises with sets, reps, weight, duration, and date
- **Workout History** — View and manage past workouts
- **Progress Charts** — Weekly volume line chart and monthly frequency bar chart (powered by Recharts)
- **Exercise Library** — 18 predefined exercises with muscle group filtering
- **Streak Counter** — Track consecutive workout days (current and longest)
- **Personal Records** — Automatic tracking of best weight, reps, and volume per exercise
- **Persistent Storage** — All data saved to localStorage

## Tech Stack

- React 19 + Vite
- Recharts for data visualization
- Custom hooks: `useWorkouts()`, `useStreaks()`, `useRecords()`

## Getting Started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```
