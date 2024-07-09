export interface IUser {
  id: number;
  first_name?: string;
  last_name?: string;
  nick_name?: string;
  full_name?: string;
  avatar?: string;
  email?: string;
  phone?: string;
  address?: string;
  deleted?: boolean;
  blocked?: boolean;
  created_at?: Date;
  updated_at?: Date;
  last_online?: Date;
  dob?: Date;
  about?: string;
  facebook_auth?: string | null;
  google_auth?: string | null;
  converstations_id: number[];
  group_id: number[];
  code?: string;
  socket?: string;
  user: {
    id: number;
    full_name: string;
  };
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
