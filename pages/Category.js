import {useState, createContext, useContext} from "react"
import BreadcrumbPage from "../components/BreadcrumbPage"
import MainCategory from "../components/category/MainCategory"
import Layout from "../components/Layout"
import {useRouter} from "next/router"

export const SearchCourseContext = createContext()

export const SearchCourseProvider = ({children}) => {
  const [searchCourse, setSearchCourse] = useState("")

  return (
    <SearchCourseContext.Provider value={{searchCourse, setSearchCourse}}>
      {children}
    </SearchCourseContext.Provider>
  )
}

export default function Category() {
  const router = useRouter()
  const query = router.query
  console.log(query)
  return (
    <SearchCourseProvider>
      <Layout>
        <BreadcrumbPage
          title="หลักสูตรทั้งหมด"
          breadActive="หลักสูตรทั้งหมด"
          hrefActive="/Category"
        />
        <MainCategory />
      </Layout>
    </SearchCourseProvider>
  )
}
