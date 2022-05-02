import {useState, useEffect, useContext} from "react"
import ReactPaginate from "react-paginate"
import SingleCourse from "../course/SingleCourse"
import FilterCheck from "./FilterCheck"
import PaginatedItems from "./PaginatedItems"
import {CourseCheck2} from "./Check"
import {PriceData} from "./Price"
import {useRouter} from "next/router"
import {DataContext} from "../../store/GlobalState"
import SearchCourse from "../blog/SearchCourse"
import axios from "axios"
import ClipLoader from "react-spinners/ClipLoader"
const MainCategory = () => {
  //  console.log(`searchCourse: ${setSearchCourse}`)
  //Filter Course & Price
  const {searchCourse, setSearchCourse} = useContext(DataContext)

  const [data, setData] = useState([])
  const [dataJson, setDataJson] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  let [loading, setLoading] = useState(true)
  const [isCheckAll, setIsCheckAll] = useState(false)
  const [isCheck, setIsCheck] = useState([])
  const [isCheckAllPrice, setIsCheckAllPrice] = useState(false)
  const [isCheckPrice, setIsCheckPrice] = useState([])
  const [list, setList] = useState([])

  const [reset, setReset] = useState(false)

  // Filter Address
  const [subdistrict, setSubDistrict] = useState("")
  const [district, setDistrict] = useState("")
  const [province, setProvince] = useState("")
  const [fullAddress, setFullAddress] = useState({})
  const [error, setError] = useState({})

  function onSelect(fulladdress) {
    const {subdistrict, district, province} = fulladdress
    setSubDistrict(subdistrict)
    setDistrict(district)
    setProvince(province)
    // setZipcode(zipcode)
    setFullAddress([subdistrict, district, province])
    setError("")
  }

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
    setIsCheckPrice([name])
    // console.log(e.target.name)
    if (!checked) {
      setIsCheckPrice(isCheckPrice.filter((item) => item !== name))
    }
  }

  const resetButton = () => {
    setIsCheckAll(false)
    setIsCheck([])
    setIsCheckAllPrice(false)
    setIsCheckPrice([])
    setSubDistrict("")
    setDistrict("")
    setProvince("")
    setFullAddress({})
    setError("")
  }

  // const getData = () => {
  //   fetch("../../assets/json/user.json", {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //   })
  //     .then(function (response) {
  //       return response.json()
  //     })
  //     .then(function (myJson) {
  //       setDataJson(myJson)

  //       setIsLoading(true)
  //     })
  // }
  // console.log(data)
  const getData = async () => {
    axios
      .get("http://localhost:3000/api/instructor-course")
      .then((res) => {
        setData(res.data)
        setIsLoading(true)
      })
      .catch((err) => {
        console.error(err)
      })
  }
  const [mainCategory, setMainCategory] = useState([])
  useEffect(() => {
    setMainCategory(MainCategoryData.map((item) => item.value))
    getData()
    setData(dataJson.map((item, id) => Object.assign(item, {id})))
  }, [dataJson])

  const MainCategoryData = [
    {
      id: "1",
      value: "Design",
    },
    {
      id: "2",
      value: "วิชาการ",
    },
    {
      id: "3",
      value: "Life Style",
    },
    {
      id: "4",
      value: "บุคลิกภาพ",
    },
    {
      id: "5",
      value: "การลงทุน",
    },
  ]

  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <section className="trending-courses-area my-8 md:my-24">
      <div className="container">
        <div className="row">
          <FilterCheck
            handleSubmit={handleSubmit}
            data={data}
            mainCategory={mainCategory}
            CourseCheck={CourseCheck2}
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
            error={error}
            setError={setError}
            subdistrict={subdistrict}
            setSubDistrict={setSubDistrict}
            district={district}
            setDistrict={setDistrict}
            province={province}
            setProvince={setProvince}
            fullAddress={fullAddress}
            setFullAddress={setFullAddress}
            onSelect={onSelect}
            resetButton={resetButton}
          />
          <div className="col-lg-9">
            <div className="row">
              {(() => {
                if (isLoading) {
                  return (
                    <PaginatedItems
                      isLoading={isLoading}
                      itemsPerPage={18}
                      data={data}
                      isCheck={isCheck}
                      isCheckAll={isCheckAll}
                      isCheckPrice={isCheckPrice}
                      setIsCheckPrice={setIsCheckPrice}
                      error={error}
                      setError={setError}
                      subdistrict={subdistrict}
                      setSubDistrict={setSubDistrict}
                      district={district}
                      setDistrict={setDistrict}
                      province={province}
                      setProvince={setProvince}
                      fullAddress={fullAddress}
                      setFullAddress={setFullAddress}
                    />
                  )
                } else if (isCheckAll == false) {
                  return (
                    <div className="relative px-4 md:px-6">
                      <div className="sweet-loading text-center">
                        <ClipLoader color="blue" loading={loading} size={100} />
                      </div>
                    </div>
                  )
                }
              })()}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MainCategory
