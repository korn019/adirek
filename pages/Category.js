import {useState, createContext, useContext, useEffect} from "react"
import BreadcrumbPage from "../components/BreadcrumbPage"
import MainCategory from "../components/category/MainCategory"
import {useRouter} from "next/router"
import BannerAds from "../components/BannerAds"
import axios from "axios"

// export const SearchCourseContext = createContext()

// export const SearchCourseProvider = ({children}) => {
//   // const [searchCourse, setSearchCourse] = useState("")
//   // const [data, setData] = useState([])
//   // const [isLoading, setIsLoading] = useState(false)
//   // const getData = () => {
//   //   axios
//   //     .get("https://www.api-adirek.online/api/instructor-course")
//   //     .then((res) => {
//   //       setData(res.data)
//   //       setIsLoading(true)
//   //     })
//   //     .catch((err) => {
//   //       console.error(err)
//   //     })
//   // }
//   // useEffect(() => {
//   //   getData()
//   // }, [])
//   return (
//     <SearchCourseContext.Provider value={{searchCourse, setSearchCourse, data, isLoading}}>
//       {children}
//     </SearchCourseContext.Provider>
//   )
// }

export default function Category() {
  const router = useRouter()
  const query = router.query
  const [searchSection, setSearchSection] = useState("")
  return (
    <>
      <BreadcrumbPage title="คอร์สทั้งหมด" breadActive="คอร์สทั้งหมด" hrefActive="/Category" />
      {/* <SearchSection setSearchSection={setSearchSection} searchSection={searchSection} /> */}
      <MainCategory setSearchSection={setSearchSection} searchSection={searchSection} />
      <div className="pb-24">
        <BannerAds />
      </div>
    </>
  )
}
