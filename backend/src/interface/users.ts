export interface UsersModel {
  id: number;
  first_name: string;
  last_name: string;
  nick_name?: string;
  email: string;
  phone?: string;
  address?: string;
  password: string;
  avatar?: string;
  role_id: number;
  deleted?: boolean;
  blocked?: boolean;
  facebook_auth?: string | null;
  google_auth?: string | null;
}

export interface IUserResponse {
  id: number;
  first_name: string;
  last_name: string;
  nick_name?: string;
  email: string;
  phone?: string;
  address?: string;
  avatar?: string;
  created_at?: Date;
  updated_at?: Date;
  facebook_auth?: string | null;
  google_auth?: string | null;
  deleted?: boolean;
  blocked?: boolean;
}

export interface IUserRequest {
  id?: number;
  first_name?: string;
  last_name?: string;
  nick_name?: string;
  password?: string;
  avatar?: string;
  email?: string;
  phone?: string;
  address?: string;
  deleted?: boolean;
  blocked?: boolean;
  created_at?: Date;
  updated_at?: Date;
  facebook_auth?: string | null;
  google_auth?: string | null;
}
