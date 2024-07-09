export interface IMessageRequest {
  id?: number;
  content?: string;
  seen_at?: Date;
  status?: number;
  user_id?: number;
  convertation_id?: number;
  group_id?: number;
  created_at?: Date;
  updated_at?: Date;
}
