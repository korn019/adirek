import {useState, useEffect} from "react"
import ReactPaginate from "react-paginate"
import SingleCourse from "../course/SingleCourse"
import FilterCheck from "./FilterCheck"
import PaginatedItems from "./PaginatedItems"
import {CourseCheck} from "./Check"
import {PriceData} from "./Price"

const MainCategory = () => {
  const [data, setData] = useState([])
  const [dataJson, setDataJson] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isCheckAll, setIsCheckAll] = useState(false)
  const [isCheck, setIsCheck] = useState([])
  const [isCheckAllPrice, setIsCheckAllPrice] = useState(false)
  const [isCheckPrice, setIsCheckPrice] = useState([])
  const [list, setList] = useState([])

  const [price, setPrice] = useState([])
  const [checkPrice, setCheckPrice] = useState([])

  const handleSelectAll = (e) => {
    setIsCheckAll(!isCheckAll)
    setIsCheck(list.map((li) => li.value))
    if (isCheckAll) {
      setIsCheck([])
    }
  }
  
  const handleClick = (e) => {
    const {checked, name} = e.target
    setIsCheck([...isCheck, name])
      // setIsCheckPrice([...isCheckPrice, name])
    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== name))
      //  setIsCheckPrice(isCheckPrice.filter((item) => item !== name))
    }
  }
  
  const handleClickPrice = (e) => {
    const {checked, name} = e.target
    setIsCheckPrice([...isCheckPrice, name])
    // console.log(e.target.name)
    if (!checked) {
      setIsCheckPrice(isCheckPrice.filter((item) => item !== name))
    }
  }
    // const handleClick = (e) => {
    //   if (e.target.checked) {
    //     setIsCheck([...isCheck, e.target.name])
    //   } else {
    //     setIsCheck(isCheck.filter((id) => id !== e.target.value))
    //   }
    // }


  

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
            PriceData={PriceData}
            isCheckAll={isCheckAll}
            setIsCheckAll={setIsCheckAll}
            isCheck={isCheck}
            setIsCheck={setIsCheck}
            isCheckPrice={isCheckPrice}
            setIsCheckPrice={setIsCheckPrice}
            list={list}
            setList={setList}
            price={price}
            setPrice={setPrice}
            handleSelectAll={handleSelectAll}
            handleClick={handleClick}
            handleClickPrice={handleClickPrice}
          />
          <div className="col-lg-9">
            <div className="row">
              {(() => {
                if (isLoading) {
                  return (
                    <PaginatedItems
                      isLoading={isLoading}
                      itemsPerPage={12}
                      data={data}
                      isCheck={isCheck}
                      isCheckAll={isCheckAll}
                      isCheckPrice={isCheckPrice}
                      setIsCheckPrice={setIsCheckPrice}
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
