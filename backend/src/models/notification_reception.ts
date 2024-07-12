("use strict");
import { Model, DataTypes, Sequelize } from "sequelize";

export class notification_reception extends Model {
  public id!: number;
  public notification_id!: number;
  public user_id!: number;
  public seen!: boolean;
  public created_at!: Date;
  public updated_at!: Date;

  public static associate(models: any) {
    this.belongsTo(models.users, {
      foreignKey: "user_id",
    });
    this.belongsTo(models.notifications, {
      foreignKey: "notification_id",
    });
  }
}
export default (sequelize: Sequelize) => {
  notification_reception.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      notification_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      seen: DataTypes.BOOLEAN,
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
      modelName: "notification_reception",
      underscored: true,
    }
  );

  return notification_reception;
};
