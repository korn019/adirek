import mysql from "serverless-mysql"

const db = mysql({
  // config ค่าการเชื่อมต่อฐานข้อมูล
  config: {
    host: "localhost",
    user: "root",
    password: "",
    database: "adirek",
  },
})

export default function handler(req, res) {
    // Router เวลาเรียกใช้งาน
    console.log(req)
    let sql = "SELECT * FROM instructor" // คำสั่ง sql
    let query = db.query(sql, (err, results) => {
      // สั่ง Query คำสั่ง sql

      if (err) throw err // ดัก error
      let message = ""
      if (results === undefined || results.length === 0) {
        message = "ไม่พบข้อมูล"
        return res.send(results)
      } else {
        // console.log(results)
        message = "พบข้อมูล"
        return res.send(results)
      }
      // ส่งค่ากลับไปให้ผู้ใช้
    })
}
