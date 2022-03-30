import ReactPaginate from "react-paginate"
import {useState, useEffect} from "react"
import SingleCourse from "../course/SingleCourse"
import CourseNoCheckBox from "./CourseNoCheckBox"

const PaginatedItems = ({
  itemsPerPage,
  data,
  valueCourse,
  isCheck,
  isCheckAll,
  isLoading,
  setIsCheckPrice,
  isCheckPrice,
  subdistrict,
  setSubDistrict,
  district,
  setDistrict,
  province,
  setProvince,
  zipcode,
  setZipcode,
  onSelect,
  setError,
  fullAddress,
  setFullAddress,
}) => {
  const [currentItems, setCurrentItems] = useState(null)
  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(0)
  const [checkItem, setCheckItem] = useState([])

  const [one, setOne] = useState(0)
  const [TWO, setTWO] = useState(0)
  const [Three, setThree] = useState(0)
  const [Four, setFour] = useState(0)
  const [Five, setFive] = useState(0)

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage
    setCurrentItems(items.slice(itemOffset, endOffset))
    setPageCount(Math.ceil(items.length / itemsPerPage))
  }, [itemOffset, itemsPerPage, data, isCheck, isCheckPrice])

  // เก็บค่า Course from CheckBox
  const checkFilter = isCheck.map((item) => {
    return item
  })

  //  console.log(isCheck)
  const checkPriceFilter = isCheckPrice.map((item) => {
    // return item.replace(/[^\d.-]/g, "")
    return item
  })
  // console.log(checkPriceFilter)
  // console.log(checkPriceFilter)
  // filter ข้อมูลจากค่าที่ได้จาก CheckBox

  let int2 = parseFloat(checkPriceFilter)
  let strInt = int2.toString()

  const Filter = data.filter((course) => {
    // let priceFromUser = parseFloat(course.ราคาคอร์สเรียน.replace(/,/g, ""))
    // เช็คค่าจาก CheckFilter ว่ามี filterCategory เหมือนกันกับในข้อมูล userมั้ย
    // console.log(checkFilter && checkPriceFilter)
    return course
  })

  var priceVal = ["0", "0"]
  var arrAmount = checkPriceFilter
  var arrCourse = checkFilter
  for (var i = 0; i < arrAmount.length; i++) {
    priceVal = arrAmount[i].split("-") // just split once
  }

  var placeTest = []
  var placeTest2 = province
  // console.log(placeTest2)
  for (var i = 0; i < 1; i++) {
    placeTest.push(placeTest2)
  }
  // console.log(typeof placeTest)

  let myArrayFilteredPlace = data.filter(function (v) {

  })

  let myArrayFiltered = data.filter(function (v) {
    let rt = "12,000++"
    // console.log(v.ราคาคอร์สเรียน.replace(/\W+/g, ""))
    console.log( parseFloat(v.ราคาคอร์สเรียน.replace(/\W+/g, "")))
    if (arrCourse.length === 0 && arrAmount.length === 0) {
      return v
    } else if (arrCourse.length > 0 && arrAmount.length === 0) {
      return arrCourse.includes(v.filterCategory)
    } else if (priceVal[1] && arrAmount.length == 1 && arrCourse.length == 0) {
      return (
        parseFloat(v.ราคาคอร์สเรียน.replace(/,/g, "")) >= parseFloat(priceVal[0]) &&
        parseFloat(v.ราคาคอร์สเรียน.replace(/,/g, "")) <= parseFloat(priceVal[1])
      )
    } else if (priceVal[1] && arrAmount.length == 1 && arrCourse.length > 0) {
      return (
        arrCourse.indexOf(v.filterCategory) != -1 &&
        parseFloat(v.ราคาคอร์สเรียน.replace(/,/g, "")) >= parseFloat(priceVal[0]) &&
        parseFloat(v.ราคาคอร์สเรียน.replace(/,/g, "")) <= parseFloat(priceVal[1])
      )
    } else if (priceVal[1] && arrAmount.length > 1) {
      return (
        arrCourse.indexOf(v.filterCategory) != -1 &&
        parseFloat(v.ราคาคอร์สเรียน.replace(/,/g, "")) >= parseFloat(priceVal[0]) &&
        parseFloat(v.ราคาคอร์สเรียน.replace(/,/g, "")) <= parseFloat(priceVal[1])
      )
    } else if (!priceVal[1]) {
      return checkFilter.indexOf(v.filterCategory) != -1
    }
  })
  // console.log(checkPriceFilter)
  const items = myArrayFiltered.map((course) => {
    // console.log(course)
    return <SingleCourse course={course} key={course.record} index={course.record} />
  })

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length
    setItemOffset(newOffset)
  }

  // console.log(Number("123-123"))
  return (
    <>
      {myArrayFiltered.length > 0 ? (
        <>
          <div className="   grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3  md:space-x-2 lg:space-x-2">
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
              nextLabel="next >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={1}
              marginPagesDisplayed={1}
              pageCount={pageCount}
              previousLabel="< previous"
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
        <h1 className="font-title text-f3xl">ไม่พบข้อมูล โปรดลองใหม่อีกครั้ง....</h1>
      )}
    </>
    // <>
    //   {/* เข้าหน้าเว็ปมาเจอหน้าคอร์ส โดยไม่ต้องกด checkbox */}
    //   {isCheck == false ? (
    //     <>

    //       <CourseNoCheckBox
    //         isLoading={isLoading}
    //         itemsPerPage={12}
    //         data={data}
    //         valueCourse={valueCourse}
    //         isCheck={isCheck}
    //         isCheckAll={isCheckAll}
    //       />
    //     </>
    //   ) : isCheckAll == true ? (
    //     <>
    //       <CourseNoCheckBox
    //         isLoading={isLoading}
    //         itemsPerPage={12}
    //         data={data}
    //         valueCourse={valueCourse}
    //         isCheck={isCheck}
    //         isCheckAll={isCheckAll}
    //       />
    //     </>
    //   ) : (
    //     <>
    //       <div className="   grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3  md:space-x-2 lg:space-x-2">
    //         {currentItems &&
    //           currentItems.map((item, index) => {
    //             return (
    //               <div key={index}>
    //                 <h3>{item}</h3>
    //               </div>
    //             )
    //           })}
    //       </div>
    //       <div className="flex justify-center items-center grid-cols-1 lg:grid-cols-3 w-full">
    //         <ReactPaginate
    //           nextLabel="next >"
    //           onPageChange={handlePageClick}
    //           pageRangeDisplayed={1}
    //           marginPagesDisplayed={1}
    //           pageCount={pageCount}
    //           previousLabel="< previous"
    //           pageClassName="page-item"
    //           pageLinkClassName="page-link"
    //           previousClassName="page-item"
    //           previousLinkClassName="page-link"
    //           nextClassName="page-item"
    //           nextLinkClassName="page-link"
    //           breakLabel="..."
    //           breakClassName="page-item"
    //           breakLinkClassName="page-link"
    //           containerClassName="pagination"
    //           activeClassName="active"
    //           renderOnZeroPageCount={null}
    //         />
    //       </div>
    //     </>
    //   )}
    // </>
  )
}
export default PaginatedItems
