"use strict";
import { Model, DataTypes, Sequelize } from "sequelize";

export class groups extends Model {
  public id!: number;
  public name!: string;
  public avatar!: string;
  public created_at!: Date;
  public updated_at!: Date;

  public static associate(models: any) {
    this.hasMany(models.user_groups, {
      foreignKey: "group_id",
    });
  }
}
export default (sequelize: Sequelize) => {
  groups.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: DataTypes.TEXT,
      avatar: DataTypes.TEXT,
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
      modelName: "groups",
      underscored: true,
    }
  );

  return groups;
};
