import {query} from "../../../lib/db"
import valid from "../../../lib/valid"
import bcrypt from "bcrypt"

export default async (req, res) => {
  switch (req.method) {
    case "POST":
      await register(req, res)
      break
  }
}

const register = async (req, res) => {
  try {
    const {type, first_name, last_name, email, tel, password, confirm_password} = req.body
    const errMsg = valid(type, first_name, last_name, email, tel, password, confirm_password)
    if (errMsg) return res.status(400).json({message: errMsg})
    const passwordHash = await bcrypt.hash(password, 20)
console.log(req.body.email)
    const results = await query(
      "SELECT COUNT(*) AS cnt FROM users WHERE email = ? ",
      req.body.email,
      function (err, data) {
        if (err) {
          console.log('122')
          console.log(err)
        } else {
          if (data[0].cnt > 0) {
            res.status(400).json({status: "error", message: "อีเมลนี้มีผู้ใช้แล้ว"})
          } else {
            bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
              var register = {
                id: req.body.id,
                type: req.body.type,
                email: req.body.email,
                password: hash,
                //  institute: req.body.institute,
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                tel: req.body.tel,
              }
              query("INSERT INTO users SET ?", register, (err, results, fields) => {
                if (err) {
                  console.log(err)
                  res.json({status: "error", message: err})
                  return
                }
                console.log("2222")
                console.log(results)
                res.json({status: "ok", message: "ลงทะเบียนสำเร็จ"})
              })
            })
          }
        }
      }
    )
    res.json({msg: "สมัครสมาชิกสำเร็จ", })
  } catch (err) {
    return res.status(500).json({message: err.message})
  }
}
