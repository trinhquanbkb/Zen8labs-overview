"use strict";
import { Model, DataTypes, Sequelize } from "sequelize";

export class messages extends Model {
  public id!: number;
  public content!: string;
  public user_id!: number;
  public convertation_id!: number;
  public group_id!: number;
  public status!: number;
  public seen_at!: Date;
  public created_at!: Date;
  public updated_at!: Date;

  public static associate(models: any) {
    this.belongsTo(models.users, { foreignKey: "user_id" as "user" });
    this.belongsTo(models.convertations, { foreignKey: "convertation_id" });
    this.belongsTo(models.groups, { foreignKey: "group_id" as "group" });
  }
}
export default (sequelize: Sequelize) => {
  messages.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      content: DataTypes.TEXT,
      user_id: DataTypes.INTEGER,
      convertation_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      seen_at: DataTypes.DATE,
      status: DataTypes.INTEGER,
      group_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
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
      modelName: "messages",
      underscored: true,
    }
  );

  return messages;
};
