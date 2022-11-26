const Sequelize = require("sequelize")
const koneksi = require("../config/database")

const identitasModels = koneksi.define('identitas', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nama: {
    type: Sequelize.STRING
  },
  about: {
    type: Sequelize.TEXT
  },
  phone: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  alamat: {
    type: Sequelize.TEXT
  },
}, {
    timestamps: false,
    freezeTableName: true
});

module.exports = identitasModels;