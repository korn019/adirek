import Main from "../components/mainpage/Main"
import {useEffect, useState} from "react"
import axios from "axios"
import Toast from "../components/Toast"
import {toast} from "react-hot-toast"
export default function Home() {
  const [bgColor, setBgColor] = useState("")
  useEffect(() => {
    const token = localStorage.getItem("token")
    const config = {
      headers: {
        Authorization: `Bearer {eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVlIiwiaWF0IjoxNjUxMDgyMDA1LCJleHAiOjE2NTM2NzQwMDV9.MO8nCs1gEMJPzcFz0-PdPAUg1qX0aezRdM_olVGooAA}
`,
      },
    }
    console.log(token)
    axios
      .get("http://localhost:3000/api/users/auth", {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + token,
        },
      })
      .then((res) => {
        // console.log(res.data.message)
        setBgColor("bg-success")
        toast(res.data.message)
      })
      .catch((err) => {
        console.log(err)
        setBgColor("bg-danger")
        toast(err)
        window.location = "/Login"
        localStorage.removeItem("token")
      })
  }),
    []
  return (
    <>
      <Toast t={toast.message} bgColor={bgColor} />
      <Main />
    </>
  )
}
