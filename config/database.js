// const mysql = require('mysql');
// const koneksi = mysql.createConnection({
//     host: 'localhost',
//     user:'root',
//     password:'',
//     database:'api_nodejs',
//     multipleStatements: true
// });

// koneksi.connect((err) =>{
//     if(err) throw err;
//     console.log('MySQL Connected');
// })
//  

const { Sequelize } = require('sequelize');
 const koneksi = new Sequelize('api_nodejs', 'root', '', {
    host: 'localhost',
    dialect:  'mysql'
  });
  module.exports = koneksi;