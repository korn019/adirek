import Main from "../components/mainpage/Main"
import {useEffect, useState, useContext} from "react"
import axios from "axios"
import Toast from "../components/Toast"
import {toast} from "react-toastify"
import {getData} from "../utils/fetchData"
import {DataContext} from "../store/GlobalState"
export default function Home() {
  const [bgColor, setBgColor] = useState("")
  const {state, dispatch} = useContext(DataContext)
  useEffect(() => {
    const token = localStorage.getItem("token")

    // getData("users/auth", token)
    //   .then((res) => {
    //     dispatch({
    //       type: "NOTIFY",
    //       payload: {success: toast.success(res.data.message)},
    //     })
    //   })
    //   .catch((error) => {
    //     console.log(error.response)
    //     dispatch({
    //       type: "NOTIFY",
    //       payload: {error: toast.error(error)},
    //     })
    //     localStorage.removeItem("token")
    //     // window.location = "/Login"
    //   })
  }, [])

  return (
    <>
      {/* <Toast t={toast.message} bgColor={bgColor} /> */}
      <Main />
    </>
  )
}
