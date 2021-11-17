import dotenv from 'dotenv';
import { existsSync } from 'fs';
import { resolve } from 'path';

const getEnv = () => process.env.NODE_ENV || 'development';

dotenv.config({
  path:
    process.env.NODE_ENV === 'production'
      ? '.env'
      : existsSync(resolve(process.cwd(), `.env.${getEnv()}.local`))
      ? `.env.${getEnv()}.local`
      : `.env.${getEnv()}`,
});
