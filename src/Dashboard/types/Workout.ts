type WorkoutItem = {
  planName: string
  planId: number,
  workoutId: number,
  workoutName: string
  sets: { name: string, reps: number, weight: number }[]
};

export { WorkoutItem };
