import { Sequelize, DataTypes } from "sequelize";
import { readdirSync } from "fs";
import { join, basename as base } from "path";
import configJson from "../config/config.json";

const basename = base(__filename);
const env = process.env.NODE_ENV || "development";
const config = configJson as any;
const dbConfig = config[env as keyof any] as any;

interface DbInterface {
  [key: string]: any;
  sequelize?: Sequelize;
  Sequelize?: typeof Sequelize;
}

const db: DbInterface = {};

let sequelize: Sequelize;
if (dbConfig.use_env_variable) {
  sequelize = new Sequelize(process.env[dbConfig.use_env_variable] as string, dbConfig);
} else {
  sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, dbConfig);
}

const modelsPath = __dirname;
const modelFiles = readdirSync(modelsPath).filter((file) => {
  return (
    file.indexOf('.') !== 0 &&
    file !== basename &&
    file.slice(-3) === '.ts' &&
    file.indexOf('.test.ts') === -1
  );
});

(async () => {
  for (const file of modelFiles) {
    const modelModule = await import(join(modelsPath, file));
    const model = modelModule.default(sequelize, DataTypes);
    db[model.name] = model;
  }

  Object.keys(db).forEach((modelName: string) => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });

  db.sequelize = sequelize;
  db.Sequelize = Sequelize;
})();

export default db;
