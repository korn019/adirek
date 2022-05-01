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

    if (!token) {
      dispatch({type: "NOTIFY", payload: {error: toast.error("You are not already logged in")}})
      router.push("/")
    }
  }, [auth])
  return (
    <>
      <LayoutProfile>
        <EditCard />
      </LayoutProfile>
      <div className="flex-1 p-3 md:py-[35]">
        <div className="space-y-2 md:space-y-6">
          <div className="flex justify-center">
            <div className="btn-group">
              <button className="btn">1</button>
              <button className="btn">2</button>
              <button className="btn btn-disabled">...</button>
              <button className="btn">99</button>
              <button className="btn">100</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Edit
