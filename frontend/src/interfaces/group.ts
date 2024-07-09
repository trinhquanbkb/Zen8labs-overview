export interface IGroup {
  id: number;
  name: string;
  avatar: string;
  is_delete: boolean;
  created_at?: Date;
  updated_at?: Date;
  users: {
    id: number;
    first_name: string;
    last_name: string;
    nick_name: string;
  }[];
}
