const express = require("express")
const router = express.Router({mergeParams: true})
const db = require("../db")
const app = express()
// All data
router.put("/", (req, res) => {
  let id = req.params.id
  let CheckRecord = req.body.record
  var updateInstructors = {
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

  if (!updateInstructors) {
    return res.status(400).send({error: true, message: "โปรดกรอกข้อมูลให้ครบ"})
  } else {
    if (CheckRecord !== id) {
      return res.status(400).send({error: true, message: "ไอดีไม่ตรงกัน"})
    } else {
      db.query(`UPDATE instructor SET ? WHERE id = ${id}`, updateInstructors, (error, results) => {
        if (error) throw error
        let message = ""
        if (results.changedRow === 0) {
          message = "ไม่มีข้อมูลที่ต้องการแก้ไข"
        } else {
          message = "แก้ไขข้อมูลสำเร็จ"
        }
        return res.send({error: false, data: updateInstructors, message: message})
      })
    }
  }
})

module.exports = router
