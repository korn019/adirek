import Layout from "../../components/Layout"
import {useRouter} from "next/router"
import {useState, useEffect} from "react"
import {CourseCheck} from "../../components/course/Courselabel"
import CoursePage from "../../components/course/CoursePage"
import { SearchCourseProvider } from "../Category"
import BannerAds from "../../components/BannerAds"
const Instructor = () => {
  const router = useRouter()
  const {Course} = router.query
  const [data, setData] = useState(CourseCheck)
  const [dataJson, setDataJson] = useState([])

  const getData = () => {
    fetch("../../assets/json/user.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json()
      })
      .then(function (myJson) {
        setDataJson(myJson)
      })
  }
  // สร้าง Id ใน JSON
  const Id = data.forEach(function (e, i) {
    e["id"] = i
  })

  const Filter = dataJson.filter((x) => {
    return Course.includes(x.filterCategory) || Course.includes(x.Category)
  })

  useEffect(() => {
    getData()
  }, [])
  return (
    <SearchCourseProvider>
      <Layout>
        {/* <div className="instector-banner-area" style={{height: 400}}></div> */}
        {data.map((e, id) => {
          return Course == e.value ? (
            <>
              <div className="pd-bottom-115" key={e.id}>
                <div className="container">
                  <CoursePage e={e} />
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
