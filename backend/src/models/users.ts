"use strict";
import { Model, DataTypes, Optional, Sequelize } from "sequelize";

module.exports = (sequelize: Sequelize) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      this.belongsTo(models.Roles, { foreignKey: "role_id" });
    }
  }
  Users.init(
    {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      nick_name: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      address: DataTypes.STRING,
      password: DataTypes.STRING,
      role_id: DataTypes.INTEGER,
      deleted: DataTypes.BOOLEAN,
      blocked: DataTypes.BOOLEAN,
      facebook_auth: DataTypes.BOOLEAN,
      google_auth: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Users",
    }
  );
  return Users;
};
