import {useState, useEffect, useContext} from "react"
import SwiperCore, {Autoplay, Navigation, Pagination} from "swiper"
import {Swiper, SwiperSlide} from "swiper/react"
import SingleSlideCourse from "./SingleSlideCourse"
import {CourseCheck} from "../course/Courselabel"
import {getData, getDataNoToken} from "../../utils/fetchData"
import axios from "axios"
import {DataContext} from "../../store/GlobalState"
const SlideCourse = () => {
  const [data, setData] = useState(CourseCheck)
  const [available, setAvailable] = useState([])
  const {state, dispatch} = useContext(DataContext)
  const {courseData} = state

  useEffect(() => {
    getData("category").then((res) => {
      setAvailable(res.filterCategory)
    })
  }, [])

  let availableCourse = courseData?.map((item) => item.filter_category_course)
  let availableCourseCategory = available?.map((item) => item.main_category)
  return (
    <>
      <div className="container ">
        <div className="intro-area-2">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="">
                <Swiper
                  className="mySwiper"
                  navigation={{
                    nextEl: ".swiper-next",
                    prevEl: ".swiper-prev",
                  }}
                  modules={[Navigation, Pagination]}
                  loop={true}
                  slidesPerView={4}
                  breakpoints={{
                    320: {
                      slidesPerView: 1,
                      spaceBetween: 90,
                    },
                    580: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 20,
                    },
                    1200: {
                      slidesPerView: 3,
                      spaceBetween: 20,
                    },
                    1440: {
                      slidesPerView: 3,
                      spaceBetween: 10,
                    },
                    1920: {
                      slidesPerView: 3,
                      spaceBetween: 10,
                    },
                  }}>
                  <div className="">
                    {available?.map((SlideCourseData) => {
                      return (
                        availableCourse.includes(SlideCourseData.filter_category_course) && (
                          <SwiperSlide key={SlideCourseData.filter_id}>
                            <SingleSlideCourse
                              courseData={courseData}
                              item={SlideCourseData}
                              available={available}
                              availableCourse={availableCourse}
                              availableCourseCategory={availableCourseCategory}
                            />
                          </SwiperSlide>
                        )
                      )
                    })}
                  </div>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SlideCourse
