"use strict";
import { Model, DataTypes, Sequelize } from "sequelize";

export class roles extends Model {
  public id!: number;
  public role!: string;
  public created_at!: Date;
  public updated_at!: Date;

  public static associate(models: any) {
    this.hasMany(models.users, {
      foreignKey: "role_id",
    });
  }
}

export default (sequelize: Sequelize) => {
  roles.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      role: DataTypes.STRING,
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
      modelName: "roles",
      underscored: true,
    }
  );

  return roles;
};
