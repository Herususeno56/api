const { Sequelize } = require("sequelize");
const { MYSQLDATABASE, MYSQLHOST, MYSQLPASSWORD, MYSQLPORT, MYSQLUSER } =
  process.env;
const koneksi = new Sequelize(MYSQLDATABASE, MYSQLUSER, MYSQLPASSWORD, {
  host: MYSQLHOST,
  dialect: "mysql",
  port: MYSQLPORT,
});
module.exports = koneksi;
