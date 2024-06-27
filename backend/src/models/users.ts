import { Model, DataTypes, Sequelize } from "sequelize";

export class users extends Model {
  public id!: number;
  public first_name!: string;
  public last_name!: string;
  public nick_name!: string;
  public email!: string;
  public phone!: string;
  public address!: string;
  public password!: string;
  public avatar!: string;
  public role_id!: number;
  public deleted!: boolean;
  public blocked!: boolean;
  public facebook_auth!: string;
  public google_auth!: string;
  public created_at!: Date;
  public updated_at!: Date;

  public static associate(models: any) {
    this.belongsTo(models.roles, { foreignKey: "role_id" });
    this.hasMany(models.messages, {
      foreignKey: "user_id",
    });
  }
}

export default (sequelize: Sequelize) => {
  users.init(
    {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      nick_name: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      address: DataTypes.STRING,
      password: DataTypes.STRING,
      avatar: DataTypes.STRING,
      role_id: DataTypes.INTEGER,
      deleted: DataTypes.BOOLEAN,
      blocked: DataTypes.BOOLEAN,
      facebook_auth: DataTypes.STRING,
      google_auth: DataTypes.STRING,
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
      modelName: "users",
      underscored: true,
    }
  );

  return users;
};
