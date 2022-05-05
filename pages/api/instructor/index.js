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
      await getInstructor(req, res)
      break
  }
}
const getInstructor = async (req, res) => {
  try {
    const Instructor = await query(`SELECT users.id, users.type,users.email,users.institute,users.first_name,users.last_name,users.tel,users.ช่องทางการสอน,users.ช่วงอายุของกลุ่มผู้เรียนที่ถนัดในการสอน,users.ฉีดวัคซีนป้องกัน,users.ประวัติการศึกษา,users.ประวัติการสอน,users.ประกาศนียบัตร,users.กรณีเรียนนอกสถานที่,users.รูปถ่าย,users.อายุ,course_list.list_id, main_course_category.main_category , filter_category.filter_category_course , course_title.title_course, course_price.price_course, course_details.detail ,course_list.create_at FROM main_course_category INNER JOIN filter_category ON filter_category.filter_id=main_course_category.filter_category INNER JOIN course_list ON main_course_category.course_id=course_list.course_list_id INNER JOIN users ON users.id=course_list.id_users INNER JOIN course_title ON course_list.title_list_id=course_title.title_id INNER JOIN course_price ON course_list.price_list_id=course_price.price_id INNER JOIN course_details ON course_list.details_list_id=course_details.details_id
    ORDER BY id;` ) /* find all the data in our database */

    res.status(200).json({success: true, results: Instructor.length, Instructor: Instructor})
  } catch (error) {
    console.log(error)
    res.status(400).json({err:error})
  }
}