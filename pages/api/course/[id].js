import {query} from "../../../lib/db"
import jwt from "jsonwebtoken"
export default async (req, res) => {
  switch (req.method) {
    case "PUT":
      await addCourse_list(req, res)
      break
  }
}
const addCourse_list = async (req, res) => {
  try {

        const {id} = req.query
         const data = await query(`SELECT * FROM users  WHERE id = ?`, id)
         const token = req.headers.authorization.split(" ")[1]
       const decoded = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET)
       const {id_users, course_list_id, title_list_id, price_list_id, details_list_id} =
       req.body
       const list = {
         id_users, course_list_id, title_list_id, price_list_id, details_list_id
       }
       if (id == data[0].id && decoded.id == id && id == id_users) {
         if (data[0].type == "instructor" || data[0].type == "institute") {
          const course_list = await query(`INSERT INTO course_list SET ?; `, list)
          res.status(200).json({success: true, course_list})
          } else {
            res.status(400).json({success: false, msg: "ประเภทบัญชีผู้ใช้ไม่ถูกต้อง"})
          }
        }else {
          res.status(400).json({success: false, msg: "คุณไม่มีสิทธิ์เข้าถึงข้อมูล"})
        }
  } catch (error) {
    console.log(error)
    res.status(400).json({err: error,errMsg:'เกิดข้อผิดพลาด'})
  }
}
