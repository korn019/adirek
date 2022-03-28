import {useState, useEffect} from "react"
import ReactPaginate from "react-paginate"
import SingleCourse from "../course/SingleCourse"
import FilterCheck from "./FilterCheck"
import PaginatedItems from './PaginatedItems'

const MainCategory = ({pageCount}) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)

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
        setIsLoading(true)
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
 

  return (
    <section class="trending-courses-area pd-top-135 pd-bottom-130">
      <div class="container">
        <div class="row">
          <FilterCheck />
          <div class="col-lg-9">
            <div class="row">
              {isLoading ? (
                <PaginatedItems itemsPerPage={12} data={data} />
              ) : (
                <h1 className="font-title text-f3xl">กำลังโหลดข้อมูล....</h1>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MainCategory
