const mysql = require("mysql")
const connection = mysql.createConnection({
  // config ค่าการเชื่อมต่อฐานข้อมูล
  host: "localhost",
  user: "root",
  password: "",
  database: "adirek",
})
connection.connect(function (err) {
  if (err) throw err
})

module.exports = connection;
// db.connect() 