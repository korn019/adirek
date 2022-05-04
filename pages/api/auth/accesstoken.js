import {query} from "../../../lib/db"
// import Users from "../../../models/userModels"
import {createAccessToken, createRefreshToken} from "../../../utils/generateToken"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export default async (req, res) => {
  try {
    const rf_token = req.cookies.refreshtoken
    if (!rf_token) return res.status(400).json({err: "กรุณาเข้าสู่ระบบก่อน"})

    const result = jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET)
    if (!result) return res.status(400).json({err: "เข้าสู่ระบบใหม่อีกครั้ง"})

    const user = await query(`SELECT * FROM users WHERE id = ?`, result.id)
    if (!user) return res.status(400).json({err: "ไม่พบข้อมูลผู้ใช้งาน"})

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
    } = user[0]
    const access_token = createAccessToken({id: user.id})

    res.json({
      access_token,
      user: {
        id,
        type,
        username,
        first_name,
        last_name,
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
    })
  } catch {
    return res.status(500).json({err: err.message})
  }
}
