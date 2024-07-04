export interface IUser {
  id: number;
  first_name?: string;
  last_name?: string;
  nick_name?: string;
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
  converstations_id: number[];
  code?: string;
  socket?: string;
}

export interface UserInforCookie {
  id: number;
  first_name: string;
  last_name: string;
  nick_name: string;
  avatar: string;
  exp: number;
  iat: number;
}
