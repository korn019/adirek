import {query} from "../../../lib/db"
import {userWithToken} from "../../../utils/userWithToken"
export default async (req, res) => {
  switch (req.method) {
    case "POST":
      await addCourse_detail(req, res)
      break
  }
}
const addCourse_detail = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1]
    const data = await userWithToken(token).then((res) => res)

    if (req.body.detail == 0) {
      res.status(400).json({success: false, message: "กรุณากรอกรายละเอียดคอร์ส"})
    } else if ((data && data.type == "instructor") || data.type == "institute") {
      const course_detail = await query(
        `INSERT INTO course_details (detail) VALUES (?)`,
        req.body.detail
      )
      res.status(200).json({
        success: true,
        detail_id: course_detail.insertId,
        message: "เพิ่มรายละเอียดคอร์สเรียบร้อยแล้ว",
      })
    } else {
      res.status(400).json({success: false, message: "ประเภทบัญชีผู้ใช้ไม่ถูกต้อง"})
    }
  } catch (error) {
    console.log(error)
    res.status(400).json({err: error})
  }
}
