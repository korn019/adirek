import CourseCard from "./CourseCard"
import {useRouter} from "next/router"
import {DataContext} from "../../store/GlobalState"
import {toast} from "react-toastify"
import {useEffect, useState, useContext, Fragment} from "react"
import Link from "next/link"
import LayoutProfile from "../LayoutProfile"
import AddInstructor2 from "../AddInstructor2"
import EditCard from "./EditCard"
const Edit = () => {
  const {searchCourse, setSearchCourse, state, dispatch} = useContext(DataContext)
  const {auth} = state
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem("token")

    if (Object.keys(auth).length !== 0) router.push("/")
  }, [auth])
  return (
    <>
      <LayoutProfile>
        <EditCard />
      </LayoutProfile>
    </>
  )
}

export default Edit
