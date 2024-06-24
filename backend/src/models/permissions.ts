"use strict";
import { Model, DataTypes, Optional, Sequelize } from "sequelize";

module.exports = (sequelize: Sequelize) => {
  class Permissions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models:any) {
      // define association here
    }
  }
  Permissions.init(
    {
      action: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Permissions",
    }
  );
  return Permissions;
};
