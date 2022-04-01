import {useEffect, useState,useContext} from "react"
import Checkbox from "./CheckBox"
import FilterPlace from "./FilterPlace"
import {SearchCourseContext} from '../../pages/Category'
const filterCheck = ({
  CourseCheck,
  PriceData,
  isCheckAll,
  setIsCheckAll,
  isCheck,
  setIsCheck,
  list,
  setList,
  price,
  setPrice,
  handleClick,
  handleSelectAll,
  valueCourse,
  handleClickPrice,
  isCheckPrice,
  setIsCheckPrice,
  subdistrict,
  setSubDistrict,
  district,
  setDistrict,
  province,
  setProvince,
  fullAddress,
  setFullAddress,
  onSelect,
  error,
  setError,
  resetButton,
}) => {
  useEffect(() => {
    setList(CourseCheck)
    setPrice(PriceData)
  }, [])
       const {setSearchCourse, searchCourse} = useContext(SearchCourseContext)


  // console.log(PriceData)
  //   const handleSelectAll = (e) => {
  //     setIsCheckAll(!isCheckAll)
  //     setIsCheck(list.map((li) => li.id))
  //     if (isCheckAll) {
  //       setIsCheck([])
  //     }
  //   }

  //   const handleClick = (e) => {
  //     const {id, checked} = e.target
  //     setIsCheck([...isCheck, id])
  //     if (!checked) {
  //       setIsCheck(isCheck.filter((item) => item !== id))
  //     }
  //   }
  // console.log(district)

  const PriceCourse = price.map((item) => {
    return (
      <ul key={item.id}>
        <li>
          <div className="single-form-check form-check">
            <Checkbox
              type="checkbox"
              name={item.value}
              id={item.id}
              handleClick={handleClickPrice}
              isChecked={isCheckPrice.includes(item.value)}
            />
            <label className="form-check-label" htmlFor="flexCheckDefault2">
              {item.label} บาท
            </label>
          </div>
        </li>
      </ul>
    )
  })

  const Course = list.map((check) => {
    return (
      <ul key={check.id}>
        <li>
          <div className="single-form-check form-check">
            <Checkbox
              type="checkbox"
              name={check.value}
              id={check.id}
              handleClick={handleClick}
              isChecked={isCheck.includes(check.value)}
            />
            <label className="form-check-label" htmlFor="flexCheckDefault2">
              {check.value}
            </label>
          </div>
        </li>
      </ul>
    )
  })
  return (
    <>
      <div className="col-lg-3">
        <div className="dmne-sidebar grid grid-cols-2 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-1">
          <div className="widget widget-select-inner dropdown-filter">
            <h4 className="widget-title ">หลักสูตร</h4>
            <div className="single-form-check form-check">
              <Checkbox
                type="checkbox"
                name="selectAll"
                id="selectAll"
                handleClick={handleSelectAll}
                isChecked={isCheckAll}
              />
              ทั้งหมด
            </div>
            {/* <label className="form-check-label" htmlFor="flexCheckDefault2"> */}
            {Course}
            {/* </label> */}
          </div>
          <div className="widget widget-select-inner">
            <h4 className="widget-title">ราคา</h4>
            {PriceCourse}
          </div>
          <div className="widget widget-select-inner">
            <h4 className="widget-title">สถานที่</h4>
            <FilterPlace
              setError={setError}
              error={error}
              subdistrict={subdistrict}
              setSubDistrict={setSubDistrict}
              district={district}
              setDistrict={setDistrict}
              province={province}
              setProvince={setProvince}
              fullAddress={fullAddress}
              setFullAddress={setFullAddress}
              onSelect={onSelect}
            />
          </div>
        </div>
          <div className="widget widget-select-inner">
            <button
              onClick={resetButton}
              type="button"
              className="text-2xl text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg  px-2 py-1 text-center mr-2 mb-2">
              Reset
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 widget widget-select-inner">
            <section className="justify-content-start align-items-start my-14 lg:my-0">
              <div className=" d-flex justify-content-center align-items-center w-full SM:w-[100%] xl:w-[70%] h-[200px] md:h-[400px] bg-[#bcbcbc]">
                <div className="">
                  <h2>Banner Ads</h2>
                </div>
              </div>
            </section>
          </div>
      </div>
    </>
  )
}

export default filterCheck
