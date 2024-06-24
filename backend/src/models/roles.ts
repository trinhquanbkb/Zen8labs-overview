"use strict";
import { Model, DataTypes, Optional, Sequelize } from "sequelize";

module.exports = (sequelize: Sequelize) => {
  class Roles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      Roles.hasMany(models.Users, {
        foreignKey: "role_id",
      });
    }
  }
  Roles.init(
    {
      role: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Roles",
    }
  );
  return Roles;
};
