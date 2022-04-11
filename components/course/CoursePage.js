import {useState, useEffect} from "react"
import ReactPaginate from "react-paginate"
import BannerAds from "../BannerAds"
import BreadcrumbPage from "../BreadcrumbPage"
import SingleCourse from "./SingleCourse"
import SwiperCourse from "./SwiperCourse"
import axios from "axios"
const CoursePage = ({e}) => {
  const [data, setData] = useState([])
  const [dataJson, setDataJson] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  // const getData = () => {
  //   fetch("../../assets/json/user.json", {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //   })
  //     .then(function (response) {
  //       // console.log(response);
  //       return response.json()
  //     })
  //     .then(function (myJson) {
  //       // console.log(myJson);
  //       setData(myJson)
  //       setIsLoading(true)
  //     })
  // }
  // const ID = data.forEach(function (e, i) {
  //   e["id"] = i
  // })
  const getData = async () => {
    axios
      .get("https://9823-184-22-117-182.ngrok.io/api/instructor")
      .then((res) => {
        setData(res.data)
        setIsLoading(true)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  const Filter = data.filter((x) => {
    return x.filterCategory == e.value
  })

  const [currentItems, setCurrentItems] = useState(null)
  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(0)
  const [checkItem, setCheckItem] = useState([])

  const items = Filter.map((course) => {
    return <SingleCourse course={course} key={course.record} index={course.record} />
  })

  useEffect(() => {
    getData()
    const endOffset = itemOffset + 25
    setCurrentItems(items.slice(itemOffset, endOffset))
    setPageCount(Math.ceil(items.length / 25))
    // setData(dataJson.map((item, id) => Object.assign(item, {id})))
  }, [data, itemOffset])

  const handlePageClick = (event) => {
    const newOffset = (event.selected * 25) % items.length
    setItemOffset(newOffset)
  }

  return (
    <>
      <BreadcrumbPage
        title={e.value}
        breadActive={e.value}
        hrefActive="#"
        bread1="หลักสูตรทั้งหมด"
        href1="/Category"
      />

      {isLoading ? (
        <>
          <div className="mt-5   grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-5  md:space-x-2 lg:space-x-2">
            {currentItems &&
              currentItems.map((item, index) => {
                return (
                  <div key={index}>
                    <h3>{item}</h3>
                  </div>
                )
              })}
          </div>
          <div className="flex justify-center items-center grid-cols-1 lg:grid-cols-3 w-full">
            <ReactPaginate
              nextLabel="ถัดไป"
              onPageChange={handlePageClick}
              pageRangeDisplayed={1}
              marginPagesDisplayed={1}
              pageCount={pageCount}
              previousLabel="ก่อนหน้า"
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
              breakLabel="..."
              breakClassName="page-item"
              breakLinkClassName="page-link"
              containerClassName="pagination"
              activeClassName="active"
              renderOnZeroPageCount={null}
            />
          </div>
          <div className="pt-5">
            <BannerAds />
          </div>
        </>
      ) : (
        <h1 className="font-title text-f3xl">กำลังโหลดข้อมูล....</h1>
      )}
    </>
  )
}

export default CoursePage
