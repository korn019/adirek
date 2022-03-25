import {useState, useEffect} from "react"
import SwiperCore, {Autoplay, Navigation, Pagination} from "swiper"
import {Swiper, SwiperSlide} from "swiper/react"
import SingleCourse from "./SingleCourse"
import SwiperCourse from "./SwiperCourse"

SwiperCore.use([Navigation])

const Course = () => {
  const [data, setData] = useState([])

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
      })
  }
  const ID = data.forEach(function (e, i) {
    e["id"] = ++i
  })
  const Filter = data.filter((x) => {
    return x.filterCategory === "Web Design"
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

            <div className="relative px-4 md:px-6">
              <SwiperCourse Filter={Filter} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Course
