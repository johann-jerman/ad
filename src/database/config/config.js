require('dotenv').config()
module.exports = 
{
  "development": {
    "username": process.env.DB_USERNAME || "liza_db_user",
    "password": process.env.DB_PASSWORD || "o8jwygzr2N6jIsWhV6lTDXnGxLz0yaFv",
    "database": process.env.DB_DATABASE || "liza_db",
    "host": process.env.DB_HOST || "postgres://liza_db_user:o8jwygzr2N6jIsWhV6lTDXnGxLz0yaFv@dpg-cietkrh5rnujc4p7icl0-a/liza_db",
    "dialect": process.env.DB_MOTOR || "postgres",
  },
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
