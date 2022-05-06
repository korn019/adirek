import {useState} from "react"
import BannerAds from "../components/BannerAds"
import AddInstructor2 from "../components/AddInstructor2"
import BreadcrumbPage from "../components/BreadcrumbPage"
const Add = () => {
  return (
    <>
      <BreadcrumbPage title="เพิ่มครูผู้สอน" breadActive="เพิ่มครูผู้สอน" hrefActive="/Add" />
      <AddInstructor2 />
    </>
  )
}

export default Add
