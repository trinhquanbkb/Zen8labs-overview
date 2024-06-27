"use strict";
import { Model, DataTypes, Optional, Sequelize } from "sequelize";

module.exports = (sequelize: Sequelize) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      this.belongsTo(models.roles, { foreignKey: "role_id" });
    }
  }
  users.init(
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
      facebook_auth: DataTypes.STRING,
      google_auth: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "users",
    }
  );
  return users;
};
