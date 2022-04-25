import {useState} from "react"
import BannerAds from "../components/BannerAds"
import SearchCourse from "../components/blog/SearchCourse"
import AddInstructor from "../components/AddInstructor"
import Breadcrumb from "../components/Breadcrumb"
import BreadcrumbPage from "../components/BreadcrumbPage"
import Layout from "../components/Layout"
import {SearchCourseProvider} from "./Category"
const Add = () => {
  const [search, setSearch] = useState("")
  return (
    <SearchCourseProvider>
      <Layout>
        <BreadcrumbPage title="เพิ่มครูผู้สอน" breadActive="เพิ่มครูผู้สอน" hrefActive="/Add" />
        <SearchCourse search={search} setSearch={setSearch} />
        <AddInstructor search={search} setSearch={setSearch} />
        <div className="pb-12">
          <BannerAds />
        </div>
      </Layout>
    </SearchCourseProvider>
  )
}

export default Add
