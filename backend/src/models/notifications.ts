("use strict");
import { Model, DataTypes, Sequelize } from "sequelize";

export class notifications extends Model {
  public id!: number;
  public content!: string;
  public title!: string;
  public sender_id!: number;
  public created_at!: Date;
  public updated_at!: Date;

  public static associate(models: any) {
    this.hasMany(models.notification_reception, {
      foreignKey: "notification_id",
    });
  }
}
export default (sequelize: Sequelize) => {
  notifications.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      content: DataTypes.TEXT,
      title: DataTypes.TEXT,
      sender_id: DataTypes.INTEGER,
      created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: "notifications",
      underscored: true,
    }
  );

  return notifications;
};
