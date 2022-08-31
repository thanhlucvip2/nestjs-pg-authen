import { DataSourceOptions } from 'typeorm';
export default {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '300420',
  database: 'test',
  synchronize: false,
  entities: ['./src/entity/**/*.ts'],
  logging: true,
} as DataSourceOptions;
