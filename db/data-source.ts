import "reflect-metadata";
import { DataSource } from "typeorm";

export default new DataSource({
  type: "postgres",
  host: process.env.TYPEORM_HOST,
  port: parseInt(process.env.TYPEORM_PORT),
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  synchronize: false,
  logging: true,
  entities: [process.env.TYPEORM_ENTITIES],
  migrations: [process.env.TYPEORM_MIGRATIONS],
  subscribers: [process.env.TYPEORM_SUBSCRIBERS_DIR],
  migrationsTableName: process.env.TYPEORM_TABLE_NAME,
});
