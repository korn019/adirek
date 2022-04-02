const express = require("express") // เรียกใช้ Express
const mysql = require("mysql") // เรียกใช้ mysql
const cors = require("cors")
const db = mysql.createConnection({
  // config ค่าการเชื่อมต่อฐานข้อมูล
  host: "localhost",
  user: "root",
  password: "",
  database: "adirek",
})

db.connect() // เชื่อมต่อฐานข้อมูล
const app = express() // สร้าง Object เก็บไว้ในตัวแปร app เพื่อนำไปใช้งาน
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())

// All data
app.get("/instructor", (req, res) => {
  // Router เวลาเรียกใช้งาน
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

// Find data
app.get("/instructor/:id", (req, res) => {
  let id = req.params.id

  if (!id) {
    return res.status(400).send({error: true, message: "กรุณาระบุ id"})
  } else {
    db.query(`SELECT * FROM instructor WHERE id = ?`, id, (err, results) => {
      if (err) throw err
      let message = ""
      if (results.length === 0 || results === undefined) {
        message = "ไม่พบข้อมูล"
      } else {
        message = "พบข้อมูล"
      }
      return res.send({error: false, data: results[0], message: message})
    })
  }
})
// add new instructor
app.post("/instructors/add", (req, res) => {
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

// update data
app.put("/instructors/update/:id", (req, res) => {
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

app.post("/instructors/contact", (req, res) => {
  var instructorsContact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    tel: req.body.tel,
  }
  if (
    req.body.firstName.length &&
    req.body.lastName.length &&
    req.body.email.length &&
    req.body.tel.length > 0
  ) {
    db.query("INSERT INTO instructorcontact SET ?", instructorsContact, (err, results, fields) => {
      if (!err) {
        res.send({error: false, message: "เพิ่มข้อมูลเรียบร้อย"})
      } else {
        console.log(results)
      }
    })
  } else if (
    req.body.firstName.length ||
    req.body.lastName.length ||
    req.body.email.length ||
    req.body.tel.length == 0
  ) {
    return res.status(400).send({error: "โปรดกรอกข้อมูลให้ครบถ้วน"})
  }
})

app.post("/contactus", (req, res) => {
  var contactUs = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    tel: req.body.tel,
    message: req.body.message,
  }
  if (
    req.body.firstName.length &&
    req.body.lastName.length &&
    req.body.email.length &&
    req.body.tel.length &&
    req.body.message.length > 0
  ) {
    db.query("INSERT INTO contactus SET ?", contactUs, (err, results, fields) => {
      if (!err) {
        res.send({error: false, message: "เพิ่มข้อมูลเรียบร้อย"})
      } else {
        console.log(results)
      }
    })
  } else if (
    req.body.firstName.length ||
    req.body.lastName.length ||
    req.body.email.length ||
    req.body.tel.length ||
     req.body.message.length == 0
  ) {
    return res.status(400).send({error: "โปรดกรอกข้อมูลให้ครบถ้วน"})
  }
})

app.listen("4000", () => {
  //
  console.log("start port 4000")
})


// CREATE TABLE contactus (
// 	id int(1000) NOT NULL PRIMARY KEY AUTO_INCREMENT,
//     firstName varchar(1000) NOT NULL,
//     lastName varchar(1000) NOT NULL,
//     email varchar(1000) NOT NULL,
//     tel varchar(1000) NOT NULL,
//     message  text NOT NULL,
//     created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
//     update_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
// ) ENGINE=InnoDB DEFAULT CHARSET=utf8;