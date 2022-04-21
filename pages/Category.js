import {useState, createContext, useContext} from "react"
import BreadcrumbPage from "../components/BreadcrumbPage"
import MainCategory from "../components/category/MainCategory"
import Layout from "../components/Layout"
import {useRouter} from "next/router"
import SearchSection from "../components/category/SearchSection"
import BannerAds from "../components/BannerAds"

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
  const [searchSection, setSearchSection] = useState("")
  return (
    <SearchCourseProvider>
      <Layout>
        <BreadcrumbPage
          title="คอร์สทั้งหมด"
          breadActive="คอร์สทั้งหมด"
          hrefActive="/Category"
        />
        {/* <SearchSection setSearchSection={setSearchSection} searchSection={searchSection} /> */}
        <MainCategory setSearchSection={setSearchSection} searchSection={searchSection} />
        <div className="pb-24">
          <BannerAds />
        </div>
      </Layout>
    </SearchCourseProvider>
  )
}
