import CourseCard from "./CourseCard"
import {useRouter} from "next/router"
import {DataContext} from "../../store/GlobalState"
import {toast} from "react-toastify"
import {useEffect, useState, useContext, Fragment} from "react"
import Link from "next/link"
import LayoutProfile from "../LayoutProfile"
import {Tab} from "@headlessui/react"
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
      <Tab.Group>
        <Tab.List className="btn-group">
          <Tab className="btn"> 1</Tab>
          <Tab className="btn"> 2</Tab>
          <Tab className="btn"> 3</Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <div className="flex-1 p-3 md:py-[35]">
              <div className="space-y-2 md:space-y-6">
                {filterCourse.map((item) => {
                  return <CourseCard item={item} />
                })}
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel>Content 2</Tab.Panel>
          <Tab.Panel>Content 3</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </>
  )
}

export default Home
