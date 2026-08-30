export enum ExperienceLevel {
  Beginner = 'beginner',
  Intermediate = 'intermediate',
  Advanced = 'advanced',
}

/** Mirrors the backend `UserResponse` schema. */
export interface User {
  id: number;
  email: string;
  name: string;
  heightCm: number;
  weightKg: number;
  experienceLevel: ExperienceLevel;
  createdAt: string;
  updatedAt: string;
}

/** Mirrors the backend `UserCreate` / register request body. */
export interface RegisterPayload {
  email: string;
  password: string;
  name: string;
  heightCm: number;
  weightKg: number;
  experienceLevel: ExperienceLevel;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

/** Mirrors the backend token response from POST /auth/login. */
export interface AuthTokenResponse {
  accessToken: string;
  tokenType: string;
}

/** Mirrors the backend `UserUpdate` schema for PATCH /users/me. */
export interface UserProfileUpdate {
  name?: string;
  heightCm?: number;
  weightKg?: number;
}
