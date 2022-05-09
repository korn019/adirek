// // import {query} from "../../../utils/db"

// // const handler = async (req, res) => {
// //   try {
// //     const results = await query(`SELECT * FROM users`)
// //     return res.json(results)
// //   } catch (error) {
// //     res.status(500).json({message: error.message})
// //   }
// // }

// // export default handler
// import connectDB from "../../../utils/connectDB"
// import instructor from "../../../models/instructorModels"
// export default async function handler(req, res) {
//   const {method} = req

//   await connectDB()

//   switch (method) {
//     case "GET":
//       try {
//         const teacher = await instructor.find({}) /* find all the data in our database */
//         res.status(200).json({success: true, results: teacher.length, instructor: teacher,})
//       } catch (error) {
//         res.status(400).json({success: false})
//       }
//       break
//     case "POST":
//       try {
//         const teacher = await instructor.create(req.body) /* create a new model in the database */
//         res.status(201).json({success: true, instructor: teacher})
//       } catch (error) {
//         res.status(400).json({success: false})
//       }
//       break
//     default:
//       res.status(400).json({success: false})
//       break
//   }
// }
import bcrypt from "bcrypt"
import {createAccessToken, createRefreshToken} from "../../../utils/generateToken"
import {query} from "../../../lib/db"
import jwt from "jsonwebtoken"

export default async (req, res) => {
  switch (req.method) {
    case "PUT":
      await editUserProfile(req, res)
      break
  }
}
const editUserProfile = async (req, res) => {
  try {
    function calculate_age(dob) { 
      var diff_ms = Date.now() - dob.getTime();
      var age_dt = new Date(diff_ms); 
    
      return Math.abs(age_dt.getUTCFullYear() - 1970);
  }
    const {id} = req.query
    const {
      first_name,
      last_name,
      institute,
      birthday,
      tel,
      address,
      ช่องทางการสอน,
      ช่วงอายุของกลุ่มผู้เรียนที่ถนัดในการสอน,
      ฉีดวัคซีนป้องกัน,
      ประวัติการศึกษา,
      ประวัติการสอน,
      ประกาศนียบัตร,
      กรณีเรียนนอกสถานที่,
      รูปถ่าย,
      อายุ,
    } = req.body

    const data = await query(
      `SELECT * FROM users  WHERE id = ?`,
      id
    ) /* find all the data in our database */
    const token = req.headers.authorization.split(" ")[1]
    const decoded = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET)
    if (id == data[0].id && decoded.id == data[0].id) {
      if (data[0].type == "student") {
        const studentData = {
          id,
          first_name,
          last_name,
          tel,
          birthday,
          address,
          ฉีดวัคซีนป้องกัน,
          ประวัติการศึกษา,
          รูปถ่าย,
          อายุ,
        }
        const Editstudent = await query("UPDATE users SET ? WHERE id = ?", [studentData, id])
        res.status(200).json({
          success: true,
          results: data.length,
          studentData,
          dataChange: Editstudent,
          msg: "แก้ไขข้อมูลสำเร็จ",
        })
      } else if (data[0].type == "instructor") {
        const instructorData = {
          id,
          first_name,
          last_name,
          tel,
          birthday,
          address,
          ช่องทางการสอน,
          ช่วงอายุของกลุ่มผู้เรียนที่ถนัดในการสอน,
          ฉีดวัคซีนป้องกัน,
          ประวัติการศึกษา,
          ประวัติการสอน,
          ประกาศนียบัตร,
          กรณีเรียนนอกสถานที่,
          รูปถ่าย,
          อายุ,
        }
        const Editinstructor = await query("UPDATE users SET ? WHERE id = ?", [instructorData, id])
        res.status(200).json({
          success: true,
          results: data.length,
          instructorData,
          dataChange: Editinstructor,
          msg: "แก้ไขข้อมูลสำเร็จ",
        })
      } else if (data[0].type == "institute") {
        const InstituteData = {
          id,
          institute,
          tel,
          ช่องทางการสอน,
          ช่วงอายุของกลุ่มผู้เรียนที่ถนัดในการสอน,
          ฉีดวัคซีนป้องกัน,
          ประวัติการสอน,
          กรณีเรียนนอกสถานที่,
          รูปถ่าย,
          อายุ,
        }
        const EditInstitute = await query("UPDATE users SET ? WHERE id = ?", [InstituteData, id])

        res.status(200).json({
          success: true,
          results: data.length,
          InstituteData,
          msg: "แก้ไขข้อมูลสำเร็จ",
        })
      }
    } else {
      res.status(400).json({err: "ไม่สามารถแก้ไข้ข้อมูลได้ เข้าสู่ระบบใหม่อีกครั้ง"})
    }
  } catch (error) {
    console.log(error)
    res
      .status(400)
      .json({err: `${error}`, msgErr: "ไม่สามารถแก้ไข้ข้อมูลได้ เข้าสู่ระบบใหม่อีกครั้ง"})
  }
}
