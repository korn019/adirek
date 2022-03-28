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
        // console.log(response);
        return response.json()
      })
      .then(function (myJson) {
        // console.log(myJson);
        setData(myJson)
      })
  }
  const Id = data.forEach(function (e, i) {
    return i
  })
  console.log(Id)
  const Filter = data.filter((x) => {
    return x.filterCategory === "Web Design"
  })

  useEffect(() => {
    getData()
  }, [])
  console.log(data)
  return (
    <Layout>
      <div class="instector-banner-area" style={{height: 400}}></div>
      {data.map((e, id) => {
        return Instructor == `id=${id}` ? (
          <>
            <div class="pd-bottom-115">
              <div class="container">
                <InstructorDetail e={e} key={id} />{" "}
              </div>
            </div>
          </>
        ) : null
      })}
    </Layout>
  )
}

export default Instructor
