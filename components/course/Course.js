import {useState, useEffect} from "react"
import SwiperCore, {Autoplay, Navigation, Pagination} from "swiper"
import {Swiper, SwiperSlide} from "swiper/react"
import SingleCourse from "./SingleCourse"
import SwiperCourse from "./SwiperCourse"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
import axios from "axios"
const Course = () => {
  const [data, setData] = useState([])
  const [dataJson, setDataJson] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const getData =  () => {
     axios
       .get("https://www.api-adirek.online/api/instructor")
       .then((res) => {
        //  console.log(res)
         setData(res.data)
         setIsLoading(true)
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
      <section className="trending-courses-area pd-top-100 pd-bottom-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>คอร์สขายดี</h2>
              </div>
            </div>

            {isLoading ? (
              <div className="relative px-4 md:px-6">
                <SwiperCourse Filter={Filter} isLoading={isLoading} />
              </div>
            ) : (
              <div className="relative px-4 md:px-6">
                <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-1 px-5">
                  <Skeleton count={6} />
                  <Skeleton count={6} />
                  <Skeleton count={6} />
                  <Skeleton count={6} />
                  <Skeleton count={6} />
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
