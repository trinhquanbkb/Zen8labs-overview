"use strict";
import { Model, DataTypes, Sequelize } from "sequelize";

export class permissions extends Model {
  public id!: number;
  public action!: string;
  public description!: string;
  public created_at!: Date;
  public updated_at!: Date;

  public static associate() {}
}
export default (sequelize: Sequelize) => {
  permissions.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      action: DataTypes.STRING,
      description: DataTypes.STRING,
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
      modelName: "permissions",
      underscored: true,
    }
  );

  return permissions;
};
