const express = require("express")
const router = express.Router({mergeParams: true})
const db = require("../db")
const app = express()
// All data
router.post("/", (req, res) => {
  var createInstructors = {
    record: req.body.record,
    ประทับเวลา: req.body.ประทับเวลา,
    ที่อยู่อีเมล: req.body.ที่อยู่อีเมล,
    คะแนน: req.body.คะแนน,
    Category: req.body.Category,
    filterCategory: req.body.filterCategory,
    ชื่อจริง: req.body.ชื่อจริง,
    นามสกุล: req.body.นามสกุล,
    เบอร์โทร: req.body.เบอร์โทร,
    ช่องทางการสอน: req.body.ช่องทางการสอน,
    ช่วงอายุของกลุ่มผู้เรียนที่ถนัดในการสอน: req.body.ช่วงอายุของกลุ่มผู้เรียนที่ถนัดในการสอน,
    ราคาคอร์สเรียน: req.body.ราคาคอร์สเรียน,
    รายละเอียดคอร์สเรียน: req.body.รายละเอียดคอร์สเรียน,
    ฉีดวัคซีนป้องกัน: req.body.ฉีดวัคซีนป้องกัน,
    ประวัติการศึกษา: req.body.ประวัติการศึกษา,
    ประวัติการสอน: req.body.ประวัติการสอน,
    ประกาศนียบัตร: req.body.ประกาศนียบัตร,
    กรณีเรียนนอกสถานที่: req.body.กรณีเรียนนอกสถานที่,
    รูปถ่าย: req.body.รูปถ่าย,
    อายุ: req.body.อายุ,
    อีเมลผู้กรอกฟอร์ม: req.body.อีเมลผู้กรอกฟอร์ม,
  }

  if (!createInstructors) {
    return res.status(400).send({error: true, message: "โปรดกรอกข้อมูลให้ครบถ้วน"})
  } else {
    db.query("INSERT INTO instructor SET ?", createInstructors, (err, results, fields) => {
      if (!err) res.send({error: false, message: "เพิ่มข้อมูลเรียบร้อย"})
      else console.log(results)
    })
  }
})

module.exports = router
