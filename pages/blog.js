import {useState} from "react"
import BannerAds from "../components/BannerAds"
import MainBlog from "../components/blog/MainBlog"
import SearchCourse from "../components/blog/SearchCourse"
import BreadcrumbPage from "../components/BreadcrumbPage"
const Blog = () => {
  const [search, setSearch] = useState("")
  return (
    <>
      <BreadcrumbPage title="เรียนรู้ไปกับบทความของเรา" breadActive="บทความ" hrefActive="/Blog" />
      <SearchCourse search={search} setSearch={setSearch} />
      <MainBlog search={search} setSearch={setSearch} />
      <div className="pb-12">
        <BannerAds />
      </div>
    </>
  )
}

export default Blog
