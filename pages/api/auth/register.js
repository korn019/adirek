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
    const {
      type,
      username,
      first_name,
      last_name,
      email,
      password,
      institute,
      tel,
      confirm_password,
    } = req.body

    const errMsg = valid(
      type,
      username,
      first_name,
      last_name,
      email,
      password,
      institute,
      tel,
      confirm_password
    )
    if (errMsg) {
      return res.status(400).json({err: errMsg})
    }
    if (type == "student" || type == "instructor") {
      const find = await query(`SELECT COUNT(*) AS cnt FROM users WHERE email = ?`, email)
      if (find[0].cnt > 0) {
        return res.status(400).json({err: "Email นี้มีผู้ใช้งานแล้ว"})
      } else {
        if (password !== confirm_password) {
          return res.status(400).json({err: "รหัสผ่านไม่ตรงกัน"})
        } else {
          const hash = await bcrypt.hash(password, 10)
          const insert = await query(
            `INSERT INTO users (type, username, first_name, last_name, email, password,  tel) VALUES ( ?, ?, ?, ?, ?, ?, ?)`,
            [type, username, first_name, last_name, email, hash, tel]
          )
          return res.status(200).json({message: "สมัครสมาชิกสำเร็จ"})
        }
      }
    } else if (type == "institute") {
      const find = await query(`SELECT COUNT(*) AS cnt FROM users WHERE email = ?`, email)
      if (find[0].cnt > 0) {
        return res.status(400).json({err: "Email นี้มีผู้ใช้งานแล้ว"})
      } else {
        if (password !== confirm_password) {
          return res.status(400).json({err: "รหัสผ่านไม่ตรงกัน"})
        } else {
          const hash = await bcrypt.hash(password, 10)
          const insert = await query(
            `INSERT INTO users (type, username, institute, email, password,  tel) VALUES (  ?, ?, ?, ?, ?, ?)`,
            [type, username, institute, email, hash, tel]
          )
          return res.status(200).json({message: "สมัครสมาชิกสำเร็จ"})
        }
      }
    }
  } catch (err) {
    return res.status(500).json({message: err.message})
  }
}
