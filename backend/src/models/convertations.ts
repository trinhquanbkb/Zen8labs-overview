"use strict";
import { Model, DataTypes, Sequelize } from "sequelize";

export class convertations extends Model {
  public id!: number;
  public user_one!: number;
  public user_two!: number;
  public status!: number;
  public created_at!: Date;
  public updated_at!: Date;

  public static associate(models: any) {
    this.hasMany(models.messages, {
      foreignKey: "convertation_id",
    });
  }
}
export default (sequelize: Sequelize) => {
  convertations.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      user_one: DataTypes.NUMBER,
      user_two: DataTypes.NUMBER,
      status: DataTypes.NUMBER,
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
      modelName: "convertations",
      underscored: true,
    }
  );

  return convertations;
};
