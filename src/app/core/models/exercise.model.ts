export type MuscleGroup =
  | 'chest'
  | 'back'
  | 'legs'
  | 'shoulders'
  | 'biceps'
  | 'triceps'
  | 'core';

export type Difficulty = 'easy' | 'medium' | 'hard';

export interface JointAngleRange {
  min: number;
  max: number;
  ideal: number;
}

/** Plain type mirroring the backend `Exercise` model (see architecture doc §3.3). */
export interface Exercise {
  id: string;
  name: string;
  muscleGroup: MuscleGroup;
  difficulty: Difficulty;
  description: string;
  instructions: string[];
  commonMistakes: string[];
  animationUrl?: string;
  thumbnailUrl?: string;
  jointAngles: Record<string, JointAngleRange>;
  primaryMuscles: string[];
  secondaryMuscles: string[];
  isFavorite?: boolean;
}
