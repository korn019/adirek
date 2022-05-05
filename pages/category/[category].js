import {useRouter} from "next/router"
import {useState, useEffect, useContext} from "react"
import {CourseCheck} from "../../components/course/Courselabel"
import {FilterCategoryLabel} from "../../components/course/filterCategory"
import CoursePage from "../../components/course/CoursePage"
import axios from "axios"
import { DataContext } from "../../store/GlobalState"

const Instructor = () => {
  const router = useRouter()
  const {category} = router.query
  const [data, setData] = useState(FilterCategoryLabel)
  const [courseLabel, setCourseLabel] = useState(CourseCheck)
  const [dataJson, setDataJson] = useState([])
  const {state, dispatch} = useContext(DataContext)
  const {courseData} = state
  const getData =  () => {
    axios
      .get("https://www.api-adirek.online/api/instructor-course")
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
  
  // const FilterData = dataJson.map((x) => {
  //   return x.filter_category_course
  // })

  return (
 <>
        {/* <div className="instector-banner-area" style={{height: 400}}></div> */}
        {data.map((e, id) => {
          return category == e.value ? (
            <>
              <div className="pd-bottom-115" key={e.id}>
                <div className="container">
                  <CoursePage e={e} dataJson={courseData} />
                </div>
              </div>
            </>
          ) : null
        })}
    </>
  )
}

export default Instructor
