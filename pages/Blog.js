import MainBlog from "../components/blog/MainBlog"
import SearchCourse from "../components/blog/SearchCourse"
import Breadcrumb from "../components/Breadcrumb"
import BreadcrumbPage from "../components/BreadcrumbPage"
import Layout from "../components/Layout"
const Blog = () => {
  return (
    <Layout>
      <BreadcrumbPage title="เรียนรู้ไปกับบทความของเรา" breadActive='บทความ' hrefActive='Blog' />
      <SearchCourse />
      <MainBlog />
    </Layout>
  )
}

export default Blog
