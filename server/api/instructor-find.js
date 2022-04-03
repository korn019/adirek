const express = require("express")
const router = express.Router({mergeParams: true})
const db = require("../db")
const app = express()
// All data
router.get("/", (req, res) => {
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
module.exports = router
