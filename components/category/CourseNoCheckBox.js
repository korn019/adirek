import {useState, useEffect} from "react"
import SingleCourse from "../course/SingleCourse"
import ReactPaginate from "react-paginate"

const CourseNoCheckBox = ({itemsPerPage, data, valueCourse, isCheck, isCheckAll, isLoading}) => {
  const [currentItems2, setCurrentItems2] = useState(null)
  const [pageCount2, setPageCount2] = useState(0)
  const [itemOffset2, setItemOffset2] = useState(0)

  const items2 = data.map((course2) => {
    return (
      <>
        <SingleCourse course={course2} key={course2.id} index={course2.id} />
      </>
    )
  })

  useEffect(() => {
    const endOffset2 = itemOffset2 + itemsPerPage
    setCurrentItems2(items2.slice(itemOffset2, endOffset2))
    setPageCount2(Math.ceil(items2.length / itemsPerPage))
  }, [itemsPerPage, itemOffset2, data])
  
  const handlePageClick2 = (event) => {
    const newOffset = (event.selected * 12) % items2.length
    setItemOffset2(newOffset)
  }
  return (
    <>
      {/* เข้าหน้าเว็ปมาเจอหน้าคอร์ส โดยไม่ต้องกด checkbox */}
      {isCheck == false ? (
        <>
          <div className="   grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3  md:space-x-2 lg:space-x-2">
            {currentItems2 &&
              currentItems2.map((item, index) => (
                <div key={index}>
                  <h3>{item}</h3>
                </div>
              ))}
          </div>
          <div className="flex justify-center items-center grid-cols-1 lg:grid-cols-3 w-full">
            <ReactPaginate
              nextLabel="next >"
              onPageChange={handlePageClick2}
              pageRangeDisplayed={1}
              marginPagesDisplayed={1}
              pageCount={pageCount2}
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
      ) : isCheckAll == true ? (
        <>
          <div className="   grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3  md:space-x-2 lg:space-x-2">
            {currentItems2 &&
              currentItems2.map((item, index) => (
                <div key={index}>
                  <h3>{item}</h3>
                </div>
              ))}
          </div>
          <div className="flex justify-center items-center grid-cols-1 lg:grid-cols-3 w-full">
            <ReactPaginate
              nextLabel="next >"
              onPageChange={handlePageClick2}
              pageRangeDisplayed={1}
              marginPagesDisplayed={1}
              pageCount={pageCount2}
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
      ) : null}
    </>
  )
}

export default CourseNoCheckBox
