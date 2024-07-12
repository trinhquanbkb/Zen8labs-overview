export interface UsersModel {
  id: number;
  first_name: string;
  last_name: string;
  nick_name?: string;
  full_name?: string;
  email: string;
  phone?: string;
  address?: string;
  password: string;
  avatar?: string;
  role_id: number;
  token_fcm?: string;
  deleted?: boolean;
  socket?: string;
  blocked?: boolean;
  code?: string;
  facebook_auth?: string | null;
  google_auth?: string | null;
  last_online?: Date;
  about?: string;
  dob?: Date;
}

export interface IUserResponse {
  id: number;
  first_name: string;
  last_name: string;
  nick_name?: string;
  full_name?: string;
  email: string;
  phone?: string;
  address?: string;
  token_fcm?: string;
  avatar?: string;
  created_at?: Date;
  updated_at?: Date;
  socket?: string;
  facebook_auth?: string | null;
  google_auth?: string | null;
  code?: string;
  deleted?: boolean;
  blocked?: boolean;
  last_online?: Date;
  dob?: Date;
  about?: string;
}

export interface IUserRequest {
  id?: any;
  first_name?: string;
  last_name?: string;
  nick_name?: string;
  full_name?: string;
  password?: string;
  avatar?: string;
  email?: string;
  phone?: string;
  address?: string;
  token_fcm?: string;
  deleted?: boolean;
  blocked?: boolean;
  created_at?: Date;
  updated_at?: Date;
  dob?: Date;
  code?: string;
  socket?: string;
  facebook_auth?: string | null;
  google_auth?: string | null;
  last_online?: Date;
  about?: string;
}
