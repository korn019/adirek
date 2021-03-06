import {useState, useEffect, useContext} from "react"
import SwiperCore, {Autoplay, Navigation, Pagination} from "swiper"
import {Swiper, SwiperSlide} from "swiper/react"
import SingleCourse from "./SingleCourse"
import SwiperCourse from "./SwiperCourse"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
import axios from "axios"
import Link from "next/link"
import {css} from "@emotion/react"
import ClipLoader from "react-spinners/ClipLoader"
import {MdKeyboardArrowRight} from "react-icons/md"
import {DataContext} from "../../store/GlobalState"
const Course = () => {
  const {state, dispatch} = useContext(DataContext)
  const {courseData} = state
  const [isLoading, setIsLoading] = useState(false)
  let [loading, setLoading] = useState(true)
 
  const Filter = courseData.map((x) => {
    return x
  })
  useEffect(() => {
    if (courseData.length > 0) {
      setLoading(false)
    } else if (courseData.length == 0) {
      setLoading(true)
    }
  }, [])
  return (
    <>
      <section className="trending-courses-area pd-top-100 pd-bottom-100 bg-background">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-border flex justify-between items-center ">
                <h2 className="  !text-[2.6rem] !font-semibold md:!text-f4xl text-Athiti !text-titleBlue !leading-border-from-title">
                  คอร์สขายดี
                </h2>
                <Link href="/courses">
                  <a className=" group flex items-center justify-center ">
                    <h2 className="flex items-center justify-center !font-medium text-Athiti p-2 !text-[.9rem] md:!text-xl  !leading-0 font-DB group-hover:bg-red-500 group-hover:duration-500  group-hover:rounded-lg  group-hover:text-white ">
                      ดูทั้งหมด
                      <MdKeyboardArrowRight className="!font-black !text-3xl" />
                      {/* <i className="fas fa-chevron-right"></i> */}
                    </h2>
                  </a>
                </Link>
              </div>
            </div>

            {!loading ? (
              <div className="relative px-4 md:px-6">
                <SwiperCourse Filter={Filter} isLoading={isLoading} />
              </div>
            ) : (
              <div className="relative px-4 md:px-6">
                <div className="sweet-loading text-center">
                  <ClipLoader color="blue" loading={loading} size={82} />
                </div>
              </div>
              // <h1 className="font-title text-f3xl">กำลังโหลดข้อมูล....</h1>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default Course
