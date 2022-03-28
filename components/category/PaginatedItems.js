import ReactPaginate from "react-paginate"
import {useState, useEffect} from "react"
import SingleCourse from "../course/SingleCourse"

const PaginatedItems = ({itemsPerPage, data}) => {
  const [currentItems, setCurrentItems] = useState(null)
  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(0)
  //   const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const items = data.map((course, index) => {
    return (
      <>
        <SingleCourse course={course} key={index} index={index} />
      </>
    )
  })

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage
    setCurrentItems(items.slice(itemOffset, endOffset))
    setPageCount(Math.ceil(items.length / itemsPerPage))
  }, [itemOffset, itemsPerPage, data])

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length
    setItemOffset(newOffset)
  }
  return (
    <>
      <div className="   grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3  md:space-x-2 lg:space-x-2">
        {currentItems &&
          currentItems.map((item) => (
            <div key={item}>
              <h3>{item}</h3>
            </div>
          ))}
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
  )
}
export default PaginatedItems
