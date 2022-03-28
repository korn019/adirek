import {useState, useEffect} from "react"
import SwiperCore, {Autoplay, Navigation, Pagination} from "swiper"
import {Swiper, SwiperSlide} from "swiper/react"
import SingleCourse from "./SingleCourse"
import SwiperCourse from "./SwiperCourse"


const Course = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const getData = () => {
    fetch("../../assets/json/db.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        // console.log(response);
        return response.json()
      })
      .then(function (myJson) {
        // console.log(myJson);
        setData(myJson)
        setIsLoading(true)
      })
  }
  const ID = data.forEach(function (e, i) {
    e["id"] = ++i
  })
  const Filter = data.map((x) => {
    return x
  })

  useEffect(() => {
    getData()
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

            {isLoading ?
             (<div className="relative px-4 md:px-6">
              <SwiperCourse Filter={Filter} />
             </div>) : (<h1 className="font-title text-f3xl">กำลังโหลดข้อมูล....</h1>)}
          
          </div>
        </div>
      </section>
    </>
  )
}

export default Course
