import Layout from "../../components/Layout"
import {useRouter} from "next/router"
import {useState, useEffect} from "react"
import {CourseCheck} from "../../components/course/Courselabel"
import CoursePage from "../../components/course/CoursePage"
import {SearchCourseProvider} from "../Category"
import BreadcrumbPage from "../../components/BreadcrumbPage"
import ReactPaginate from "react-paginate"
import SingleCourse from "../../components/course/SingleCourse"
import BannerAds from "../../components/BannerAds"
const CourseCategory = () => {
  const router = useRouter()
  const {Search} = router.query
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const [currentItems, setCurrentItems] = useState(null)
  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(0)
  const [checkItem, setCheckItem] = useState([])

  const handlePageClick = (event) => {
    const newOffset = (event.selected * 25) % items.length
    setItemOffset(newOffset)
  }

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
        setIsLoading(true)
      })
  }
  //   // สร้าง Id ใน JSON
  //   const Id = data.forEach(function (e, i) {
  //     e["id"] = i
  //   })

  //   const Filter = data.filter((x) => {
  //     return x.filterCategory === "Web Design"
  //   })

  useEffect(() => {
    getData()
    const endOffset = itemOffset + 25
    setCurrentItems(items.slice(itemOffset, endOffset))
    setPageCount(Math.ceil(items.length / 25))
  }, [data, itemOffset])

  const SearchCateCourse = data.filter((v) => {
    if (Search !== undefined) {
      if (Search.length > 0) {
        return (
          v.Category.toLowerCase().includes(Search.toLowerCase()) ||
          v.ชื่อจริง.toLowerCase().includes(Search.toLowerCase()) ||
          v.รายละเอียดคอร์สเรียน.toLowerCase().includes(Search.toLowerCase()) ||
          v.ราคาคอร์สเรียน.toLowerCase().includes(Search.toLowerCase())
        )
      }
    }
  })
  let courseCounter = []
  for (let i = 0; i < SearchCateCourse.length; i++) {
    courseCounter = SearchCateCourse.length
  }

  const items = SearchCateCourse.map((course) => {
    return <SingleCourse course={course} key={course.record} index={course.record} />
  })

  return (
    <SearchCourseProvider>
      <Layout>
        <BreadcrumbPage
          title={`ผลลัพธ์การค้นหาจำนวน ${courseCounter} คอร์สเรียน สำหรับคำค้นหา " ${Search} "`}
          breadActive="ผลลัพธ์การค้นหา"
          hrefActive="#"
          bread1="หลักสูตรทั้งหมด"
          href1="/Category"
          Search={Search}
        />
        {isLoading ? (
          SearchCateCourse.length > 0 ? (
            <>
              <div className="mt-5 container  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-5  md:space-x-2 lg:space-x-2">
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
            </>
          ) : (
            <div className="container p-8">
              <h1 className="font-title text-f3xl">ไม่พบข้อมูล โปรดลองใหม่อีกครั้ง....</h1>
            </div>
          )
        ) : (
          <div className="container p-20">
            <h1 className="font-title text-f3xl">กำลังโหลดข้อมูล....</h1>
          </div>
        )}
        <div className="py-24">
          <BannerAds />
        </div>
      </Layout>
    </SearchCourseProvider>
  )
}

export default CourseCategory
