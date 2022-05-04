import mysql from "serverless-mysql"

export const db = mysql({
  config: {
     host: "localhost",
        user: "root",
        password: "",
        database: "adirek",
    // host: process.env.MYSQL_HOST,
    // database: process.env.MYSQL_DATABASE,
    // user: process.env.MYSQL_USERNAME,
    // password: process.env.MYSQL_PASSWORD,
  },
})

export async function query(query_string, values = []) {
  try {
    const results = await db.query(query_string, values)
    await db.end()
    console.log(results)
    return results
  } catch (err) {
    throw Error(err.message)
  }
}
