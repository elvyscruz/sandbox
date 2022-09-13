import { DataSource } from 'typeorm';

const dsOptions = {
  synchronize: false,
  migrationRun: false,
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/**/migrations/*.js'],
};

switch (process.env.NODE_ENV) {
  case 'development':
    Object.assign(dsOptions, {
      type: 'sqlite',
      database: 'devDB.sqlite',
      synchronize: true,
    });
    break;

  case 'test':
    Object.assign(dsOptions, {
      type: 'sqlite',
      database: 'testDB.sqlite',
    });
    break;
  case 'production':
    Object.assign(dsOptions, {
      type: 'sqlite',
      database: 'prodDB.sqlite',
    });
    break;
  default:
    throw new Error('No env specified!');
}
//@ts-ignore
export const AppDataSource = new DataSource(dsOptions);
