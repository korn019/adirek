// import connectDB from "../../../utils/connectDB"
// import filterCategory from "../../../models/filterCategoryModels"
// connectDB()
// export default async (req, res) => {
//   switch (req.method) {
//     case "GET":
//       await getCategory(req, res)
//       break
//     case "POST":
//       await createProduct(req, res)
//       break
//   }
// }

// const getCategory = async (req, res) => {
//   try {
//     const category = await filterCategory.find({}) /* find all the data in our database */

//     res.status(200).json({success: true, results: category.length, filterCategory: category})
//   } catch (error) {
//     res.status(400).json({success: false})
//   }
// }

// // export default async function handler(req, res) {
// //   const {method} = req
// //   await connectDB()

// //   switch (method) {
// //     case "GET":
// //       try {
// //         const category = await filterCategory.find({}) /* find all the data in our database */
// //         res.status(200).json({success: true, results: category.length, filterCategory: category})
// //       } catch (error) {
// //         res.status(400).json({success: false})
// //       }
// //       break
// //     case "POST":
// //       try {
// //         const category = await filterCategory.create(
// //           req.body
// //         ) /* create a new model in the database */
// //         res.status(201).json({success: true, filterCategory: category})
// //       } catch (error) {
// //         res.status(400).json({success: false})
// //       }
// //       break
// //     default:
// //       res.status(400).json({success: false})
// //       break
// //   }
// // }

import {query} from "../../../lib/db"
export default async (req, res) => {
  switch (req.method) {
    case "GET":
      await getCategory(req, res)
      break
  }
}
const getCategory = async (req, res) => {
  try {
    const category = await query(`SELECT * FROM filter_category`) /* find all the data in our database */

    res.status(200).json({success: true, results: category.length, filterCategory: category})
  } catch (error) {
    res.status(400).json({success: false})
  }
}