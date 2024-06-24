interface UsersModel {
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
