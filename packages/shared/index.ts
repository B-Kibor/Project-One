export enum UserRole {
  OWNER = 'owner',
  ADMIN = 'admin',
  MEMBER = 'member',
}

export interface BaseEntity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface User extends BaseEntity {
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  organizationId: string;
}

export interface Organization extends BaseEntity {
  name: string;
  slug: string;
  description?: string;
  isActive: boolean;
  settings: Record<string, any>;
}

export const API_ROUTES = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
  },
  USERS: {
    BASE: '/users',
    PROFILE: '/users/profile',
  },
  ORGANIZATIONS: {
    BASE: '/organizations',
  },
} as const;