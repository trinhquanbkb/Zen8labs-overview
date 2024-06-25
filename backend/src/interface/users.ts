export interface UsersModel {
  id: number;
  first_name: string;
  last_name: string;
  nick_name?: string;
  email: string;
  phone?: string;
  address?: string;
  password: string;
  role_id: number;
  deleted?: boolean;
  blocked?: boolean;
  facebook_auth?: boolean;
  google_auth?: boolean;
}

export interface IUserResponse {
  id: number;
  first_name: string;
  last_name: string;
  nick_name?: string;
  email: string;
  phone?: string;
  address?: string;
  created_at?: Date;
  updated_at?: Date;
}

export interface IUserRequest {
  id?: number;
  first_name?: string;
  last_name?: string;
  nick_name?: string;
  password?: string;
  email?: string;
  phone?: string;
  address?: string;
  deleted?: boolean;
  blocked?: boolean;
  created_at?: Date;
  updated_at?: Date;
}
