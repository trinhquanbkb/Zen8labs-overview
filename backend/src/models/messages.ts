"use strict";
import { Model, DataTypes, Sequelize } from "sequelize";

export class messages extends Model {
  public id!: number;
  public content!: string;
  public user_id!: number;
  public conversation_id!: number;
  public status!: number;
  public seen_at!: Date;
  public created_at!: Date;
  public updated_at!: Date;

  public static associate(models: any) {
    this.belongsTo(models.users, { foreignKey: "user_id" });
    this.belongsTo(models.conversations, { foreignKey: "conversation_id" });
  }
}
export default (sequelize: Sequelize) => {
  messages.init(
    {
      content: DataTypes.TEXT,
      user_id: DataTypes.INTEGER,
      conversation_id: DataTypes.INTEGER,
      seen_at: DataTypes.DATE,
      status: DataTypes.INTEGER,
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
