export enum MuscleGroup {
  Chest = 'chest',
  Back = 'back',
  Legs = 'legs',
  Shoulders = 'shoulders',
  Biceps = 'biceps',
  Triceps = 'triceps',
  Core = 'core',
}

export enum ExerciseDifficulty {
  Easy = 'easy',
  Medium = 'medium',
  Hard = 'hard',
}

/** Joints tracked for technique analysis, per the calibration/analysis screens. */
export type JointName = 'shoulder' | 'elbow' | 'wrist' | 'hip' | 'knee' | 'ankle';

export interface JointAngleRange {
  min: number;
  max: number;
  ideal: number;
}

/** Mirrors the backend `joint_angles` JSON column, e.g. `{ knee: {...}, hip: {...} }`. */
export type JointAngles = Partial<Record<JointName, JointAngleRange>>;

/** Mirrors the backend `ExerciseResponse` schema (detail view). */
export interface Exercise {
  id: number;
  name: string;
  muscleGroup: MuscleGroup;
  difficulty: ExerciseDifficulty;
  description: string;
  instructions: string[];
  commonMistakes: string[];
  animationUrl: string | null;
  thumbnailUrl: string | null;
  jointAngles: JointAngles;
  primaryMuscles: string[];
  secondaryMuscles: string[];
  isFavorite?: boolean;
}

/** Lighter shape for catalog/list views (GET /exercises). */
export type ExerciseSummary = Pick<
  Exercise,
  'id' | 'name' | 'muscleGroup' | 'difficulty' | 'thumbnailUrl' | 'isFavorite'
>;
