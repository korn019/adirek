// const valid = (type, first_name, last_name, email, tel, password, confirm_password) => {
//   if (!first_name || !last_name || !email || !tel || !password || !type) {
//     return "กรุณากรอกข้อมูลให้ครบถ้วน"
//   } else if (!type) {
//     return "กรุณาเลือกประเภทบัญชี"
//   } else if (validateEmail(email)) {
//     return "กรุณากรอกอีเมลให้ถูกต้อง"
//   } else if (password.length < 6) {
//     return "กรุณากรอกรหัสผ่านอย่างน้อย 6 ตัวอักษร"
//   } else if (password !== confirm_password) {
//     return "กรุณากรอกรหัสผ่านให้ตรงกัน"
//   }

//   function validateEmail(email) {
//     return email.match(
//       /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//     )
//   }
// }

// export default valid

const valid = (
  type,
  username,
  first_name,
  last_name,
  email,
  password,
  institute,
  tel,
  confirm_password
) => {
  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email)
  }
  if (type == "institute") {
    if (!username || !email || !tel || !password || !type || !institute)
      return "กรุณากรอกข้อมูลให้ครบถ้วน"
    if (!type) return "กรุณาเลือกประเภทบัญชี"
    if (!validateEmail(email)) return "กรุณากรอกอีเมลให้ถูกต้อง"
    if (password.length < 6) return "กรุณากรอกรหัสผ่านอย่างน้อย 6 ตัวอักษร"
    if (password !== confirm_password) return "กรุณากรอกรหัสผ่านให้ตรงกัน"
  } else if (type == "student" || type == "instructor") {
    if (!username || !first_name || !last_name || !email || !tel || !password)
      return "กรุณากรอกข้อมูลให้ครบถ้วน"
    if (!type) return "กรุณาเลือกประเภทบัญชี"
    if (!validateEmail(email)) return "กรุณากรอกอีเมลให้ถูกต้อง"
    if (password.length < 6) return "กรุณากรอกรหัสผ่านอย่างน้อย 6 ตัวอักษร"
    if (password !== confirm_password) return "กรุณากรอกรหัสผ่านให้ตรงกัน"
  }
}

export default valid
