export interface IMessage {
  id?: number;
  content?: string;
  seen_at?: Date;
  status?: number;
  user_id?: number;
  convertation_id: number | null;
  group_id: number | null;
  created_at: Date;
  updated_at: Date;
  user: {
    id: number;
    full_name: string;
  };
}
