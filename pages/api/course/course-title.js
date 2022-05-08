import {query} from "../../../lib/db"
import jwt from "jsonwebtoken"
import {userWithToken} from "../../../utils/userWithToken"
export default async (req, res) => {
  switch (req.method) {
    case "POST":
      await addCourse_title(req, res)
      break
  }
}
const addCourse_title = async (req, res) => {
  try {
      const token = req.headers.authorization.split(" ")[1]
     const data = await userWithToken(token).then((res) => res)

     if (req.body.title_course == 0) {
      res.status(400).json({success: false, message: "กรุณากรอกหัวข้อคอร์ส"})
    } else if (data && data.type == "instructor" || data.type == "institute") {
      const course_title = await query(
        `INSERT INTO course_title (title_course) VALUES (?)`,
        req.body.title_course
      )
      res.status(200).json({
        success: true,
        title_id: course_title.insertId,
        message: "เพิ่มหัวข้อคอร์สเรียบร้อยแล้ว",
      })
    } else  {
      res.status(400).json({success: false, message: "ประเภทบัญชีผู้ใช้ไม่ถูกต้อง"})
    }
  } catch (error) {
    console.log(error)
    res.status(400).json({err: error, message: "คุณไม่มีสิทธิ์เข้าถึงข้อมูล"})
  }
}
