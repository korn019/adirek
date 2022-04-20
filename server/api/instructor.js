const express = require("express")
const router = express.Router()
const db = require("../db")
const app = express()

// All data
router.get("/", (req, res) => {
     let sql = "SELECT * FROM instructor" // คำสั่ง sql
     let query = db.query(sql, (err, results) => {
       // สั่ง Query คำสั่ง sql
       if (err) throw err // ดัก error
       let message = ""
       if (results === undefined || results.length === 0) {
         message = "ไม่พบข้อมูล"
         return res.send(results)
       } else { 
         message = "พบข้อมูล"
         return res.send(results)
       }
       // ส่งค่ากลับไปให้ผู้ใช้
     })
})
module.exports = router