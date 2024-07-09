"use strict";
import { Model, DataTypes, Sequelize } from "sequelize";

export class user_groups extends Model {
  public id!: number;
  public group_id!: number;
  public user_id!: number;
  public created_at!: Date;
  public updated_at!: Date;

  public static associate(models: any) {
    this.belongsTo(models.users, { foreignKey: "user_id" });
    this.belongsTo(models.groups, { foreignKey: "group_id" as "group" });
  }
}
export default (sequelize: Sequelize) => {
  user_groups.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id: DataTypes.NUMBER,
      group_id: DataTypes.NUMBER,
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
      modelName: "user_groups",
      underscored: true,
    }
  );

  return user_groups;
};
