"use strict";
import { Model, DataTypes, Sequelize } from "sequelize";

export class transactions extends Model {
  public id!: number;
  public transaction_type!: number;
  public customer_note!: string;
  public transaction_money!: number;
  public balance!: number;
  public status!: number;
  public bank_account!: string;
  public user_id!: number;
  public created_at!: Date;
  public updated_at!: Date;

  public static associate(models: any) {
    this.hasMany(models.users, {
      foreignKey: "role_id",
    });
  }
}

export default (sequelize: Sequelize) => {
  transactions.init(
    {
      transaction_type: DataTypes.INTEGER,
      customer_note: DataTypes.STRING,
      transaction_money: DataTypes.INTEGER,
      balance: DataTypes.INTEGER,
      status: DataTypes.INTEGER,
      bank_account: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "transactions",
      underscored: true,
    }
  );

  return transactions;
};
