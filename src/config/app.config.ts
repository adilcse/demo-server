import { config } from 'dotenv';
config();

const getEnvProps = (propName: string, defaultVal = null, func = null) => {
  if (process.env[propName]) {
    if (func) {
      return func(process.env[propName]);
    }
    return process.env[propName];
  }
  if (defaultVal) {
    return defaultVal;
  }
  return null;
};

const appConfig = {
  APP_NAME: 'Demo app',
  PORT: process.env.PORT ? parseInt(process.env.PORT) : 3000,
  DB_HOST: process.env.DB_HOST,
  DB_PORT: process.env.DB_PORT,
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_NAME: process.env.DB_NAME,
};

export default appConfig;
