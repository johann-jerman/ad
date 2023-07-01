require('dotenv').config()
module.exports = 
{
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST_CONFIG,
    dialect: 'postgres',
    migrationStorage: 'sequelize',
    migrationStorageTableName: 'sequelize_meta',
    seederStorage: 'sequelize',
    seederStorageTableName: 'sequelize_data',
    migrationStoragePath: 'src/database/migrations',
    seederStoragePath: 'src/database/seeders',
  },
  // "development": {
  //   "username":  "liza_db_user",
  //   "password":  "o8jwygzr2N6jIsWhV6lTDXnGxLz0yaFv",
  //   "database":  "liza_db",
  //   "host":  "postgres://liza_db_user:o8jwygzr2N6jIsWhV6lTDXnGxLz0yaFv@dpg-cietkrh5rnujc4p7icl0-a/liza_db",
  //   "dialect":  "postgres",
  // },
  // "development": {
  //   "username": process.env.DB_USERNAME || "liza_db_user",
  //   "password": process.env.DB_PASSWORD || "o8jwygzr2N6jIsWhV6lTDXnGxLz0yaFv",
  //   "database": process.env.DB_DATABASE || "liza_db",
  //   "host": process.env.DB_HOST || "postgres://liza_db_user:o8jwygzr2N6jIsWhV6lTDXnGxLz0yaFv@dpg-cietkrh5rnujc4p7icl0-a/liza_db",
  //   "dialect": process.env.DB_MOTOR || "postgres",
  // },
  // "test": {
  //   "username": "root",
  //   "password": null,
  //   "database": "database_test",
  //   "host": "127.0.0.1",
  //   "dialect": "mysql"
  // },
  // "production": {
  //   "username": "root",
  //   "password": null,
  //   "database": "database_production",
  //   "host": "127.0.0.1",
  //   "dialect": "mysql"
  // }
}
