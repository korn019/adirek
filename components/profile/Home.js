import CourseCard from "./CourseCard"
import {useRouter} from "next/router"
import {DataContext} from "../../store/GlobalState"
import {toast} from "react-toastify"
import {useEffect, useState, useContext, Fragment} from "react"
import Link from "next/link"
import LayoutProfile from "../LayoutProfile"
const Home = () => {
  const {searchCourse, setSearchCourse, state, dispatch} = useContext(DataContext)
  const {auth, courseData} = state
  const router = useRouter()
  useEffect(() => {
    const token = localStorage.getItem("token")

  if (!auth) router.push("/")
     
      //  dispatch({type: "NOTIFY", payload: {error: toast.error("คุณยังไม่ได้เข้าสู่ระบบ")}})
  }, [auth])

  let filterCourse = courseData.filter((item) => {
    return item.id == auth.user?.id
  })
  // console.log(filterCourse)

  return (
    <>
      <div className="flex-1 p-3 md:py-[35]">
        <div className="space-y-2 md:space-y-6">
          {filterCourse.map((item) => {
            return   <CourseCard item={item}/>
          })}

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

export default Home
