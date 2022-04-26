import {useState} from "react"
import BannerAds from "../components/BannerAds"
import AddInstructor from "../components/AddInstructor"
import BreadcrumbPage from "../components/BreadcrumbPage"
const Add = () => {
  return (
    <>
      <BreadcrumbPage title="เพิ่มครูผู้สอน" breadActive="เพิ่มครูผู้สอน" hrefActive="/Add" />
      <AddInstructor />
    </>
  )
}

export default Add
