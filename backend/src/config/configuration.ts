import * as dotenv from 'dotenv';

dotenv.config();

export const configuration = () => ({
  NODE_ENV: process.env.NODE_ENV,
  BACKEND_PORT: process.env.BACKEND_PORT,
  CORS_ORIGIN_URLS: process.env.CORS_ORIGIN_URLS,
});
