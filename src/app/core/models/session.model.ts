export interface RepData {
  repNumber: number;
  score: number;
  angles: Record<string, number>;
  errors: string[];
}

/** Plain type mirroring the backend `Session` model (see architecture doc §3.3). */
export interface TrainingSession {
  id: string;
  exerciseId: string;
  startedAt: string;
  endedAt: string;
  setsCompleted: number;
  repsCompleted: number;
  techniqueScoreAvg: number;
  repsData: RepData[];
  notes?: string;
}
