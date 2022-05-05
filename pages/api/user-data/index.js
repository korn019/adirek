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
import {query} from "../../../lib/db"
export default async (req, res) => {
  switch (req.method) {
    case "GET":
      await getUserData(req, res)
      break
  }
}
const getUserData = async (req, res) => {
  try {
    const data = await query(`SELECT id,type,email,institute,first_name,last_name,tel,ช่องทางการสอน,ช่วงอายุของกลุ่มผู้เรียนที่ถนัดในการสอน,ฉีดวัคซีนป้องกัน,ประวัติการศึกษา,ประวัติการสอน,ประกาศนียบัตร,กรณีเรียนนอกสถานที่,รูปถ่าย,อายุ FROM users ` ) /* find all the data in our database */

    res.status(200).json({success: true, results: data.length, data: data})
  } catch (error) {
    console.log(error)
    res.status(400).json({err:error})
  }
}