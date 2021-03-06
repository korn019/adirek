import {useEffect, useState, useContext} from "react"
import Checkbox from "./CheckBox"
import FilterPlace from "./FilterPlace"
import {DataContext} from "../../store/GlobalState"
import {contextSourcesMap} from "tailwindcss/lib/lib/sharedState"
const filterCheck = ({
  handleSubmit,
  data,
  mainCategory,
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
  const {setSearchCourse, searchCourse} = useContext(DataContext)

  const PriceCourse = price.map((item) => {
    return (
      <ul key={item.id}>
        <li>
          <div className="form-control flex  space-x-2">
            <label class="label cursor-pointer">
              <span class="label-text form-check-label text-black subtext-Athiti !font-semibold !text-lg">
                {item.label} บาท
              </span>
              <Checkbox
                type="checkbox"
                name={item.value}
                id={item.id}
                handleClick={handleClickPrice}
                isChecked={isCheckPrice.includes(item.value)}
              />
            </label>
          </div>
 
        </li>
      </ul>
    )
  })
  var aa = mainCategory.map((main) => {
    return main
  })

  let filter = list.filter((item) => item.filterValue == "Design").map((value) => value)
  let filter2 = list.filter((item) => item.filterValue == "วิชาการ").map((value) => value)
  let filter3 = list.filter((item) => item.filterValue == "Life Style").map((value) => value)
  let filter4 = list.filter((item) => item.filterValue == "บุคลิกภาพ").map((value) => value)
  let filter5 = list.filter((item) => item.filterValue == "การลงทุน").map((value) => value)
  return (
    <>
      <div className="col-lg-3 bg-gray-200">
        <div className="dmne-sidebar grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-1">
          <div className="widget widget-select-inner dropdown-filter">
            {/* <h4 className=" text-Athiti  !font-semibold !text-f2xl my-4">หมวดหมู่</h4> */}
            {/* <div className="single-form-check form-check flex space-x-2 items-center ">
              <Checkbox
                type="checkbox"
                name="selectAll"
                id="selectAll"
                handleClick={handleSelectAll}
                isChecked={isCheckAll}
              />
              <p className="subtext-Athiti text-black !font-semibold">

              ทั้งหมด
              </p>
            </div> */}
            {/* <label className="form-check-label " htmlFor="flexCheckDefault2"> */}
            {mainCategory.map((item) => {
              return (
                <>
                  <h4 className="text-Athiti  !font-semibold !text-f2xl my-4" >{item}</h4>
                  {(() => {
                    if (item == "Design") {
                      return filter.map((check) => {
                        return (
                          <ul key={check.id}>
                            <li>
                              <div className="form-control flex  space-x-2">
                                <label class="label cursor-pointer">
                                  <span class="label-text form-check-label text-black subtext-Athiti !font-semibold !text-lg">
                                    {check.value}
                                  </span>
                                  <Checkbox
                                    type="checkbox"
                                    name={check.value}
                                    id={check.id}
                                    handleClick={handleClick}
                                    isChecked={isCheck.includes(check.value)}
                                  />
                                </label>
                              </div>
                            </li>
                          </ul>
                        )
                      })
                    } else if (item == "วิชาการ") {
                      return filter2.map((check) => {
                        return (
                          <ul key={check.id}>
                            <li>
                              <div className=" form-control flex  space-x-2">
                                <label class="label cursor-pointer">
                                  <span class="label-text form-check-label text-black subtext-Athiti !font-semibold !text-lg">
                                    {check.value}
                                  </span>
                                  <Checkbox
                                    type="checkbox"
                                    name={check.value}
                                    id={check.id}
                                    handleClick={handleClick}
                                    isChecked={isCheck.includes(check.value)}
                                  />
                                </label>
                              </div>
                            </li>
                          </ul>
                        )
                      })
                    } else if (item == "Life Style") {
                      return filter3.map((check) => {
                        return (
                          <ul key={check.id}>
                            <li>
                              <div className=" form-control flex  space-x-2">
                                <label class="label cursor-pointer">
                                  <span class="label-text form-check-label text-black subtext-Athiti !font-semibold !text-lg">
                                    {check.value}
                                  </span>
                                  <Checkbox
                                    type="checkbox"
                                    name={check.value}
                                    id={check.id}
                                    handleClick={handleClick}
                                    isChecked={isCheck.includes(check.value)}
                                  />
                                </label>
                              </div>
                            </li>
                          </ul>
                        )
                      })
                    } else if (item == "บุคลิกภาพ") {
                      return filter4.map((check) => {
                        return (
                          <ul key={check.id}>
                            <li>
                              <div className=" form-control flex  space-x-2">
                                <label class="label cursor-pointer">
                                  <span class="label-text form-check-label text-black subtext-Athiti !font-semibold !text-lg">
                                    {check.value}
                                  </span>
                                  <Checkbox
                                    type="checkbox"
                                    name={check.value}
                                    id={check.id}
                                    handleClick={handleClick}
                                    isChecked={isCheck.includes(check.value)}
                                  />
                                </label>
                              </div>
                            </li>
                          </ul>
                        )
                      })
                    } else if (item == "การลงทุน") {
                      return filter5.map((check) => {
                        return (
                          <ul key={check.id}>
                            <li>
                              <div className=" form-control flex  space-x-2">
                                <label class="label cursor-pointer">
                                  <span class="label-text form-check-label text-black subtext-Athiti !font-semibold !text-lg">
                                    {check.value}
                                  </span>
                                  <Checkbox
                                    type="checkbox"
                                    name={check.value}
                                    id={check.id}
                                    handleClick={handleClick}
                                    isChecked={isCheck.includes(check.value)}
                                  />
                                </label>
                              </div>
                            </li>
                          </ul>
                        )
                      })
                    }
                  })()}
                </>
              )
            })}
            {/* </label> */}
          </div>
          <div className="widget widget-select-inner">
            <h4 className="text-Athiti  !font-semibold !text-f2xl mb-7">ราคา</h4>
            {PriceCourse}
          </div>
          <div className="widget widget-select-inner">
            <h4 className="text-Athiti  !font-semibold !text-f2xl  mb-7 ">สถานที่</h4>
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
        <div className="widget widget-select-inner relative flex">
        <button
            onClick={handleSubmit}
            className="bg-red-500 subtext-Athiti !font-bold  !text-2xl text-gray-700 !border-2 !border-blue-400  focus:ring-1 focus:outline-none focus:!border-[#ff013c]  focus:text-[#ff013c]  rounded-lg  px-2 py-1 text-center mr-2 mb-2">
            ค้นหา
          </button>
          <button
            onClick={resetButton}
            type="button"
            // className="font-Prompt text-2xl text-white bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700  rounded-lg  px-2 py-1 text-center mr-2 mb-2">
            className="bg-red-500 subtext-Athiti !font-bold  !text-2xl text-gray-700 border-2 border-blue-400  focus:ring-1 focus:outline-none focus:border-[#ff013c]  focus:text-[#ff013c]  rounded-lg  px-2 py-1 text-center mr-2 mb-2">
            แก้ไข
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
