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
  console.log(auth)
  const router = useRouter()
  useEffect(() => {
    const token = localStorage.getItem("token")
    if (Object.keys(auth).length !== 0) router.prefetch("/")
  }, [auth])
  return (
    <LayoutProfile>
      <Home />
    </LayoutProfile>
  )
}

export default profile
