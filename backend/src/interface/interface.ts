export interface INotificationRequest {
  id?: number;
  content?: string;
  sender_id: number;
  date: Date;
  title: string;
}
