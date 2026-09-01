export type ExperienceLevel = 'beginner' | 'intermediate' | 'advanced';

/** Plain type mirroring the backend `User` model (see architecture doc §3.3). */
export interface User {
  id: string;
  email: string;
  name: string;
  heightCm: number;
  weightKg: number;
  experienceLevel: ExperienceLevel;
}
