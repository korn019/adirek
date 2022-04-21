import Layout from "../../components/Layout"
import {useRouter} from "next/router"
import {useState, useEffect} from "react"
import {CourseCheck} from "../../components/course/Courselabel"
import {CourseCheck2} from "../../components/category/Check"
import {FilterCategoryLabel} from "../../components/course/filterCategory"
import CoursePage from "../../components/course/CoursePage"
import { SearchCourseProvider } from "../Category"
import BannerAds from "../../components/BannerAds"
import axios from "axios"

const Instructor = () => {
  const router = useRouter()
  const {Course} = router.query
  const [data, setData] = useState(FilterCategoryLabel)
  const [courseLabel, setCourseLabel] = useState(CourseCheck)
  const [dataJson, setDataJson] = useState([])

  
  const getData = async () => {
    axios
      .get("https://www.api-adirek.online/api/instructor")
      .then((res) => {
        setDataJson(res.data)
      })
      .catch((err) => {
        console.error(err)
      })
  }
  useEffect(() => {
    getData()
  }, [])
  
  const FilterData = dataJson.map((x) => {
    return x.filterCategory
  })

  return (
    <SearchCourseProvider>
      <Layout>
        {/* <div className="instector-banner-area" style={{height: 400}}></div> */}
        {data.map((e, id) => {
          return Course == e.value    ? (
            <>
              <div className="pd-bottom-115" key={e.id}>
                <div className="container">
                  <CoursePage e={e} FilterData={FilterData}/>
                </div>
              </div>
            </>
          ) : null
        })}
      </Layout>
    </SearchCourseProvider>
  )
}

export default Instructor
