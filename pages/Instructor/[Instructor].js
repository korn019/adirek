import Layout from "../../components/Layout"
import {useRouter} from "next/router"
import {useState, useEffect} from "react"
import InstructorDetail from "../../components/Instructor/InstructorDetail"
const Instructor = () => {
  const router = useRouter()
  const {Instructor} = router.query
  const [data, setData] = useState([])

  const getData = () => {
    fetch("../../assets/json/db.json", {
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
    <Layout>
      <div className="instector-banner-area" style={{height: 400}}></div>
      {data.map((e, id) => {
        return Instructor == `id=${e.id}` ? (
            <div className="pd-bottom-115" key={e.id}>
              {console.log(e)}
              <div className="container">
                <InstructorDetail e={e} />
              </div>
            </div>
        ) : null
      })}
    </Layout>
  )
}

export default Instructor
