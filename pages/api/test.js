// import { sql_query } from "../../lib/db"

// const handler = async (req, res) => {
//   try {
//     const results = await sql_query(`SELECT * FROM instructor`) 
//     return res.json({results})
//   } catch (error) {
//     res.status(500).json({message: error.message})
//   }
// }

// export default handler
const mysql = require("mysql")

const connection = mysql.createConnection({
  // config ค่าการเชื่อมต่อฐานข้อมูล
    host: "localhost",
    user: "root",
    password: "",
    database: "adirek",
})

connection.connect(function (err) {
  if (err) {
    return console.error("error: " + err.message)
  }
  console.log("MySQL Connection Successful.")
})

export default function handler(req, res) {
  // Router เวลาเรียกใช้งาน
  console.log(res)
  let sql = "SELECT * FROM instructor" // คำสั่ง sql
  connection.query(sql, function (error, result, fields) {
  //  if (error) return res.status(500).json(error.message)
    return res.json({results: result})
  })

  // let query = db.query(sql, (err, results) => {
  //   // สั่ง Query คำสั่ง sql

  //   if (err) throw err // ดัก error
  //   let message = ""
  //   if (results === undefined || results.length === 0) {
  //     message = "ไม่พบข้อมูล"
  //     return res.send(results)
  //   } else {
  //     // console.log(results)
  //     message = "พบข้อมูล"
  //     return res.status(200).json(results)
  //   }
  //   // ส่งค่ากลับไปให้ผู้ใช้
  // })
}
