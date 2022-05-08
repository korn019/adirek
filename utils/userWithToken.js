import {query} from "../lib/db"
import jwt from "jsonwebtoken"

export const userWithToken = async (token) => {
  const decoded = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET)
  const data = await query(`SELECT * FROM users  WHERE id = ?`, decoded.id)
  return data[0]
}
