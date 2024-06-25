export interface DbConfig {
  username: string;
  password: string | null;
  database: string;
  host: string;
  dialect: string;
  use_env_variable?: string;
}

export interface Config {
  development: DbConfig;
  test: DbConfig;
  production: DbConfig;
}
