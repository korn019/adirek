import {query} from "../../../lib/db"
import {userWithToken} from "../../../utils/userWithToken"
export default async (req, res) => {
  switch (req.method) {
    case "POST":
      await addCourse_price(req, res)
      break
  }
}
const addCourse_price = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1]
    const data = await userWithToken(token).then((res) => res)

    if (req.body.price_course == 0) {
      res.status(400).json({success: false, message: "กรุณากรอกราคาคอร์ส"})
    } else if ((data && data.type == "instructor") || data.type == "institute") {
      const course_price = await query(
        `INSERT INTO course_price (price_course) VALUES (?)`,
        req.body.price_course
      )
      res.status(200).json({
        success: true,
        priceId: course_price.insertId,
        message: "เพิ่มราคาคอร์สเรียบร้อยแล้ว",
      })
    } else {
      res.status(400).json({success: false, message: "ประเภทบัญชีผู้ใช้ไม่ถูกต้อง"})
    }
  } catch (error) {
    console.log(error)
    res.status(400).json({err: error, message: "คุณไม่มีสิทธิ์เข้าถึงข้อมูล"})
  }
}
