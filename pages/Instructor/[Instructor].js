import Layout from "../../components/Layout"
import {useRouter} from "next/router"
import {useState, useEffect} from "react"
import InstructorDetail from "../../components/Instructor/InstructorDetail"
import { SearchCourseProvider } from "../Category"
const Instructor = () => {
  const router = useRouter()
  const {Instructor} = router.query
  const [data, setData] = useState([])

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
        setData(myJson)
      })
  }
  // สร้าง Id ใน JSON
  const Id = data.forEach(function (e, i) {
    e["id"] = i
  })

  const Filter = data.filter((x) => {
    return x.filterCategory === "Web Design"
  })

  useEffect(() => {
    getData()
  }, [])
  return (
    <SearchCourseProvider>
      <Layout>
        <div className="instector-banner-area" style={{height: 400}}></div>
        {data.map((e, id) => {
          return Instructor == `id=${e.record}` ? (
            <div className="pd-bottom-115" key={e.record}>
              <div className="container">
                <InstructorDetail e={e} />
              </div>
            </div>
          ) : null
        })}
      </Layout>
    </SearchCourseProvider>
  )
}

export default Instructor
