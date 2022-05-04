import {query} from "../../../lib/db"
import valid from "../../../lib/valid"
import bcrypt from "bcrypt"
import {createAccessToken, createRefreshToken} from "../../../utils/generateToken"

export default async (req, res) => {
  switch (req.method) {
    case "POST":
      await login(req, res)
      break
  }
}

const login = async (req, res) => {
  try {

    const {email, password} = req.body
    const findEmail = await query(`SELECT * FROM users WHERE email = ?`, email)
    //    return res.json(findEmail[0].type)
    if (findEmail.length == 0) {
      return res.status(400).json({err: "Email หรือ Password ไม่ถูกต้อง"})
    } else {
      const hash = findEmail[0].password
      const isMatch = await bcrypt.compare(password, hash)
      if (!isMatch) {
        return res.status(400).json({err: "Email หรือ Password ไม่ถูกต้อง"})
      }

      const access_token = createAccessToken({id: findEmail[0].id})
      const refresh_token = createRefreshToken({id: findEmail[0].id})
      const {
        id,
        type,
        username,
        email,
        first_name,
        last_name,
        institute,
        tel,
        ช่องทางการสอน,
        ช่วงอายุของกลุ่มผู้เรียนที่ถนัดในการสอน,
        ฉีดวัคซีนป้องกัน,
        ประวัติการศึกษา,
        ประวัติการสอน,
        ประกาศนียบัตร,
        กรณีเรียนนอกสถานที่,
        รูปถ่ายอายุ,
        created_at,
        update_at,
      } = findEmail[0]
      if (type == "student" || type == "instructor") {
        return res.status(200).json({
          message: "เข้าสู่ระบบสำเร็จ",
          user: {
            id,
            type,
            username,
            email,
            first_name,
            last_name,
            tel,
            ช่องทางการสอน,
            ช่วงอายุของกลุ่มผู้เรียนที่ถนัดในการสอน,
            ฉีดวัคซีนป้องกัน,
            ประวัติการศึกษา,
            ประวัติการสอน,
            ประกาศนียบัตร,
            กรณีเรียนนอกสถานที่,
            รูปถ่ายอายุ,
            created_at,
            update_at,
          },
          access_token,
          refresh_token,
        })
      } else if (type == "institute") {
          
        return res.status(200).json({
          message: "เข้าสู่ระบบสำเร็จ",
          user: {
            id,
            type,
            username,
            email,
            institute,
            tel,
            ช่องทางการสอน,
            ช่วงอายุของกลุ่มผู้เรียนที่ถนัดในการสอน,
            ฉีดวัคซีนป้องกัน,
            ประวัติการศึกษา,
            ประวัติการสอน,
            ประกาศนียบัตร,
            กรณีเรียนนอกสถานที่,
            รูปถ่ายอายุ,
            created_at,
            update_at,
          },
          access_token,
          refresh_token,
        })
      }

    }
  } catch (err) {
    return res.status(400).json({err: "เกิดข้อผิดพลาด", err})
  }
}
