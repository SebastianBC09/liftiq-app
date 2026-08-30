import { JointName } from './exercise.model';

/** One entry of the backend `reps_data` JSON array. */
export interface RepData {
  repNumber: number;
  score: number;
  angles: Partial<Record<JointName, number>>;
  errors: string[];
}

/** Mirrors the backend `SessionResponse` schema. */
export interface Session {
  id: number;
  userId: number;
  exerciseId: number;
  startedAt: string;
  endedAt: string | null;
  setsCompleted: number;
  repsCompleted: number;
  techniqueScoreAvg: number | null;
  repsData: RepData[];
  notes: string | null;
}

/** Mirrors the backend `SessionCreate` schema for POST /sessions. */
export interface SessionCreatePayload {
  exerciseId: number;
  startedAt: string;
  endedAt: string;
  setsCompleted: number;
  repsCompleted: number;
  techniqueScoreAvg: number;
  repsData: RepData[];
  notes?: string;
}

/** Response shape for GET /sessions/stats/weekly. */
export interface WeeklySummary {
  totalSessions: number;
  totalReps: number;
  exercisesWorked: number;
  sessionsByDay: Record<string, number>;
}

/** One point in the GET /sessions/stats/exercise/{id} progress series. */
export interface ExerciseProgressPoint {
  sessionId: number;
  date: string;
  techniqueScoreAvg: number;
}
