import {useState, useEffect} from "react"
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
const Course = () => {
  const [data, setData] = useState([])
  const [dataJson, setDataJson] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  let [loading, setLoading] = useState(true)
  const getData = () => {
    axios
      .get("https://www.api-adirek.online/api/instructor")
      .then((res) => {
        //  console.log(res)
        setData(res.data)
        setLoading(false)
      })
      .catch((err) => {
        //  console.log(err)
      })
  }

  // const getData = () => {
  //   fetch("http://192.168.1.100:4000/instructor", {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //   })
  //     .then(function (response) {
  //       console.log(response)
  //       return response.json()
  //     })
  //     .then(function (myJson) {
  //       // console.log(myJson);
  //       setData(myJson)
  //       setIsLoading(true)
  //     })
  //   }

  //  const ID = data.forEach(function (e, i) {
  //    e["id"] = i
  //  })

  const Filter = data.map((x) => {
    return x
  })

  useEffect(() => {
    getData()
    // setData(dataJson.map((item, id) => Object.assign(item, {id})))
  }, [])
  return (
    <>
      <section className="trending-courses-area pd-top-100 pd-bottom-100 bg-background">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-border flex justify-between items-center ">
                <h2 className=" !font-DB  !text-[2.6rem] !font-semibold md:!text-f4xl text-Athiti !text-titleBlue !leading-border-from-title">
                  คอร์สขายดี
                </h2>
                <Link href="/Category">
                  <a className=" group flex items-center justify-center">
                    <h2 className="!font-medium text-Athiti !text-[.9rem] md:!text-xl  !leading-0 font-DB group-hover:bg-red-500 group-hover:duration-500  group-hover:rounded-lg  group-hover:text-white p-2">
                      ดูทั้งหมด <i className="fas fa-chevron-right"></i>
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
