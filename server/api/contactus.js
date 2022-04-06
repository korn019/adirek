const express = require("express")
const router = express.Router({mergeParams: true})
const db = require("../db")
const app = express()
// All data

router.post("/", (req, res) => {
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
        // console.log(results)
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
module.exports = router
