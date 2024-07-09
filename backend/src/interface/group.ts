export interface IGroupRequest {
  id?: number;
  name?: string;
  avatar?: string;
  is_delete?: boolean;
  created_at?: Date;
  updated_at?: Date;
}

export interface IGroup {
  id?: number;
  name?: string;
  avatar?: string;
  is_delete?: boolean;
  created_at?: Date;
  updated_at?: Date;
}

export interface IUserGroup {
  id?: number;
  user_id?: number;
  group_id?: number;
  created_at?: Date;
  updated_at?: Date;
}
