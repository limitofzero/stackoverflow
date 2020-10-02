import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { resolve } from 'path';
import * as dotenv from 'dotenv';

dotenv.config();

const { env } = process;

const ENTITIES_PATH = './entity/**/*.ts';
const MIGRATIONS_PATH = './migrations/**/*.ts';

console.log(env.POSTGRES_PORT);

const resolvePathTo = (relPath: string) => resolve(__dirname, relPath);

export const typeOrmConfig: PostgresConnectionOptions = {
    type: 'postgres',
    host: env.POSTGRES_HOST,
    // tslint:disable-next-line:radix
    port: parseInt(env.POSTGRES_PORT as string),
    username: env.POSTGRES_USER,
    password: env.POSTGRES_PASSWORD,
    database: env.POSTGRES_DATABASE,
    synchronize: true,
    logging: false,
    entities: [
        // resolvePathTo(ENTITIES_PATH)
    ],
    migrations: [
        // resolvePathTo(MIGRATIONS_PATH)
    ],
    // migrationsRun: true
};
