import {useState, useEffect} from "react"
import ReactPaginate from "react-paginate"
import SingleCourse from "../course/SingleCourse"
import FilterCheck from "./FilterCheck"
import PaginatedItems from "./PaginatedItems"
import {CourseCheck} from "./Check"

const MainCategory = () => {
  const [data, setData] = useState([])
  const [dataJson, setDataJson] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isCheckAll, setIsCheckAll] = useState(false)
  const [isCheck, setIsCheck] = useState([])
  const [list, setList] = useState([])

  const handleSelectAll = (e) => {
    setIsCheckAll(!isCheckAll)
    setIsCheck(list.map((li) => li.value))
    if (isCheckAll) {
      setIsCheck([])
    }
  }
  
  const handleClick = (e) => {
    const {id, checked, name} = e.target
    setIsCheck([...isCheck, name])
    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== name))
    }
  }

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
        setDataJson(myJson)

        setIsLoading(true)
      })
  }
  // console.log(data)
  useEffect(() => {
    getData()
    setData(dataJson.map((item, id) => Object.assign(item, {id})))
  }, [dataJson])
  
  return (
    <section className="trending-courses-area pd-top-135 pd-bottom-130">
      <div className="container">
        <div className="row">
          <FilterCheck
            CourseCheck={CourseCheck}
            isCheckAll={isCheckAll}
            setIsCheckAll={setIsCheckAll}
            isCheck={isCheck}
            setIsCheck={setIsCheck}
            list={list}
            setList={setList}
            handleSelectAll={handleSelectAll}
            handleClick={handleClick}
          />
          <div className="col-lg-9">
            <div className="row">
              {(() => {
                if (isLoading) {
                  return (
                    // <div className="   grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3  md:space-x-2 lg:space-x-2">
                    //   {data.map((course, index) => {
                    //     return <SingleCourse course={course} key={index} index={index} />
                    //   })}
                    // </div>
                    <PaginatedItems
                      isLoading={isLoading}
                      itemsPerPage={12}
                      data={data}
                      isCheck={isCheck}
                      isCheckAll={isCheckAll}
                    />
                  )
                } else if (isCheckAll == false) {
                  return <h1 className="font-title text-f3xl">กำลังโหลดข้อมูล....</h1>
                }
              })()}
              {/* {isLoading ? (
                <PaginatedItems
                  itemsPerPage={12}
                  data={data}
                  valueCourse={valueCourse}
                  isCheck={isCheck}
                  isCheckAll={isCheckAll}
                />
              ) : (
                <h1 className="font-title text-f3xl">กำลังโหลดข้อมูล....</h1>
              )} */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MainCategory
