import LayoutProfile from "../../../components/LayoutProfile"
import Home from "../../../components/profile/Home"
import About from "../../../components/profile/Edit"
import {useRouter} from "next/router"

import {DataContext} from "../../../store/GlobalState"
import {toast} from "react-toastify"
import {useEffect, useState, useContext, Fragment} from "react"
const profile = () => {
  const {searchCourse, setSearchCourse, state, dispatch} = useContext(DataContext)
  const {auth} = state
  const router = useRouter()
  useEffect(() => {
    const token = localStorage.getItem("token")

    if (!token) {
      dispatch({type: "NOTIFY", payload: {error: toast.error("You are not already logged in")}})
      router.push("/")
    }
  }, [auth])
  return (
    <LayoutProfile>
      <Home />
    </LayoutProfile>
  )
}

export default profile
