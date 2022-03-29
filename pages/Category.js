import BreadcrumbPage from "../components/BreadcrumbPage";
import MainCategory from "../components/category/MainCategory";
import Layout from "../components/Layout";

export default function Category() {
    return (
      <Layout>
        <BreadcrumbPage title="หลักสูตรทั้งหมด" breadActive="หลักสูตรทั้งหมด" hrefActive="/Category" />
        <MainCategory/>
      </Layout>
    )
}
