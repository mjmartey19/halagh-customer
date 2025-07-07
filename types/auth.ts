// types/auth.ts
import { BaseEntity } from './index';

export interface User extends BaseEntity {
  phoneNumber: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  isActive: boolean;
  hasCompletedOnboarding: boolean;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface SignInCredentials {
  phoneNumber: string;
  password: string;
}

export interface CreatePasswordCredentials {
  phoneNumber: string;
  password: string;
  confirmPassword: string;
}

export interface PhoneVerificationResponse {
  exists: boolean;
  isFirstTime: boolean;
  user?: Pick<User, 'phoneNumber' | 'firstName' | 'lastName'>;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
  expiresAt: number;
}

export interface AuthResponse {
  user: User;
  tokens: AuthTokens;
}