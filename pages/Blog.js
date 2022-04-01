import { useState } from "react"
import BannerAds from "../components/BannerAds"
import MainBlog from "../components/blog/MainBlog"
import SearchCourse from "../components/blog/SearchCourse"
import Breadcrumb from "../components/Breadcrumb"
import BreadcrumbPage from "../components/BreadcrumbPage"
import Layout from "../components/Layout"
import {SearchCourseProvider} from "./Category"
const Blog = () => {
  const [search, setSearch] = useState("")
  return (
    <SearchCourseProvider>
    <Layout>
      <BreadcrumbPage title="เรียนรู้ไปกับบทความของเรา" breadActive="บทความ" hrefActive="/Blog" />
      <SearchCourse search={search} setSearch={setSearch} />
      <MainBlog search={search} setSearch={setSearch} />
      <div className="pb-12">
        <BannerAds />
      </div>
    </Layout>
      </SearchCourseProvider>
  )
}

export default Blog
