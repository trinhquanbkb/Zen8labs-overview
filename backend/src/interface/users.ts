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
  socket?: string;
  blocked?: boolean;
  code?: string;
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
  socket?: string;
  facebook_auth?: string | null;
  google_auth?: string | null;
  code?: string;
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
  code?: string;
  socket?: string;
  facebook_auth?: string | null;
  google_auth?: string | null;
}
