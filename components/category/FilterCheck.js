import {useEffect, useState} from "react"
import Checkbox from "./CheckBox"

const filterCheck = ({
  CourseCheck,
  isCheckAll,
  setIsCheckAll,
  isCheck,
  setIsCheck,
  list,
  setList,
  handleClick,
  handleSelectAll,
  valueCourse,
}) => {
  useEffect(() => {
    setList(CourseCheck)
  }, [])

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
        <div className="dmne-sidebar">
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
            <label className="form-check-label" htmlFor="flexCheckDefault2">
              {Course}
            </label>
          </div>
          {/* <!-- <div className="widget widget-select-inner">
                            <h4 className="widget-title">ระดับ</h4>
                            <ul>
                                <li>
                                    <div className="single-form-check form-check">
                                        <input className="form-check-input" type="checkbox" value="เริ่มต้น"
                                            id="flexCheckDefault25"/>
                                        <label className="form-check-label" htmlFor="flexCheckDefault25">
                                            เริ่มต้น
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div className="single-form-check form-check">
                                        <input className="form-check-input" type="checkbox" value="ระดับกลาง"
                                            id="flexCheckDefault26"/>
                                        <label className="form-check-label" htmlFor="flexCheckDefault26">
                                            ระดับกลาง
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div className="single-form-check form-check">
                                        <input className="form-check-input" type="checkbox" value="ระดับผู้เชี่ยวชาญ"
                                            id="flexCheckDefault27"/>
                                        <label className="form-check-label" htmlFor="flexCheckDefault27">
                                            ระดับผู้เชี่ยวชาญ
                                        </label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="widget widget-select-inner">
                            <h4 className="widget-title">Rating</h4>
                            <ul>
                                <li>
                                    <div className="single-form-check form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault27"/>
                                        <label className="form-check-label" htmlFor="flexCheckDefault27">
                                        <div className="user-rating">
                                            <span>
                                                <i className="fa fa-star"></i> 
                                                <i className="fa fa-star"></i> 
                                                <i className="fa fa-star"></i> 
                                                <i className="fa fa-star"></i> 
                                                <i className="fa fa-star"></i> 
                                          </span>
                                            5.0
                                        </div>
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div className="single-form-check form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault27"/>
                                        <label className="form-check-label" htmlFor="flexCheckDefault28">
                                        <div className="user-rating">
                                            <span>
                                                <i className="fa fa-star"></i> 
                                                <i className="fa fa-star"></i> 
                                                <i className="fa fa-star"></i> 
                                                <i className="fa fa-star"></i> 
                                          </span>
                                            4.0
                                        </div>
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div className="single-form-check form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault27"/>
                                        <label className="form-check-label" htmlFor="flexCheckDefault29">
                                        <div className="user-rating">
                                            <span>
                                                <i className="fa fa-star"></i> 
                                                <i className="fa fa-star"></i> 
                                                <i className="fa fa-star"></i> 
                                          </span>
                                            3.0
                                        </div>
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div className="single-form-check form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault27"/>
                                        <label className="form-check-label" htmlFor="flexCheckDefault30">
                                        <div className="user-rating">
                                            <span>
                                                <i className="fa fa-star"></i> 
                                                <i className="fa fa-star"></i> 
                                          </span>
                                            2.0
                                        </div>
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div className="single-form-check form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault27"/>
                                        <label className="form-check-label" htmlFor="flexCheckDefault31">
                                        <div className="user-rating">
                                            <span>
                                                <i className="fa fa-star"></i> 
                                          </span>
                                            1.0
                                        </div>
                                        </label>
                                    </div>
                                </li>
                            </ul>
                        </div> --> */}
          <div className="widget widget-select-inner">
            <h4 className="widget-title">ราคา</h4>
            <ul>
              <li>
                <div className="single-form-check form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="299-500"
                    id="flexCheckDefault33"
                  />
                  <label className="form-check-label" htmlFor="flexCheckDefault33">
                    299-500 บาท
                  </label>
                </div>
              </li>
              <li>
                <div className="single-form-check form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="501-1000"
                    id="flexCheckDefault34"
                  />
                  <label className="form-check-label" htmlFor="flexCheckDefault34">
                    501-1000 บาท
                  </label>
                </div>
                <div className="single-form-check form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="1001-3000"
                    id="flexCheckDefault35"
                  />
                  <label className="form-check-label" htmlFor="flexCheckDefault35">
                    1001-3000 บาท
                  </label>
                </div>
                <div className="single-form-check form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="3001-5000"
                    id="flexCheckDefault36"
                  />
                  <label className="form-check-label" htmlFor="flexCheckDefault36">
                    3001-5000 บาท
                  </label>
                </div>
              </li>
            </ul>
          </div>
          <div className="widget widget-select-inner">
            <h4 className="widget-title">สถานที่</h4>
            <div id="loader">
              <div className="uk-spinner"></div> รอสักครู่ กำลังโหลดฐานข้อมูล...
            </div>
            <form id="place" className="place" style={{display: "none"}} autoComplete="off">
              <div className="single-form-place">
                <label className="form-check-label">จังหวัด</label>
                <input name="province" className="uk-input uk-width-1-1" type="text" />
              </div>
              <div className="single-form-place">
                <label className="form-check-label">ตำบล / แขวง</label>
                <input name="district" className="uk-input uk-width-1-1" type="text" />
              </div>
              <div className="single-form-place">
                <label className="form-check-label">อำเภอ / เขต</label>
                <input name="amphoe" className="uk-input uk-width-1-1" type="text" />
              </div>
            </form>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 widget widget-select-inner">
            <section className="justify-content-start align-items-start">
              <div className=" d-flex justify-content-center align-items-center w-full md:w-[100%] xl:w-[70%] h-[200px] md:h-[400px] bg-[#bcbcbc]">
                <div className="">
                  <h2>Banner Ads</h2>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

export default filterCheck
