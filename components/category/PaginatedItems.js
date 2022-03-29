import ReactPaginate from "react-paginate"
import {useState, useEffect} from "react"
import SingleCourse from "../course/SingleCourse"
import CourseNoCheckBox from "./CourseNoCheckBox"

const PaginatedItems = ({itemsPerPage, data, valueCourse, isCheck, isCheckAll, isLoading}) => {
  const [currentItems, setCurrentItems] = useState(null)
  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(0)

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage
    setCurrentItems(items.slice(itemOffset, endOffset))
    setPageCount(Math.ceil(items.length / itemsPerPage))
  }, [itemOffset, itemsPerPage, data])
  
  const checkFilter = isCheck.map((item) => {
    return item
  })
  const Filter = data.filter((course) => {
    return course.filterCategory == checkFilter
  })
  const items = Filter.map((course) => {
    if (checkFilter == course.filterCategory) {
      return <SingleCourse course={course} key={course.id} index={course.id} />
    } else {
      return <p>ไม่มีข้อมูล</p>
    }
  })

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length
    setItemOffset(newOffset)
  }

  return (
    <>
      {/* เข้าหน้าเว็ปมาเจอหน้าคอร์ส โดยไม่ต้องกด checkbox */}
      {isCheck == false ? (
        <>
          <CourseNoCheckBox
            isLoading={isLoading}
            itemsPerPage={12}
            data={data}
            valueCourse={valueCourse}
            isCheck={isCheck}
            isCheckAll={isCheckAll}
          />
        </>
      ) : isCheckAll == true ? (
        <>
          <CourseNoCheckBox
            isLoading={isLoading}
            itemsPerPage={12}
            data={data}
            valueCourse={valueCourse}
            isCheck={isCheck}
            isCheckAll={isCheckAll}
          />
        </>
      ) : (
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
      )}
    </>
  )
}
export default PaginatedItems
