import {useState} from "react"
import SwiperCore, {Autoplay, Navigation, Pagination} from "swiper"
import {Swiper, SwiperSlide} from "swiper/react"
import SingleSlideCourse from "./SingleSlideCourse"
const SlideCourse = () => {
  const SlideCourseData = [
    {id: 1, course: "ถ่ายรูปและแต่งรูป", img: "assets/img/intro/001.png", available: 236},
    {id: 2, course: "วิชาการ", img: "assets/img/intro/002.png", available: 236},
    {id: 3, course: "แต่งหน้า", img: "assets/img/intro/003.png", available: 236},
    {id: 4, course: "ทำอาหารและขนม", img: "assets/img/intro/004.png", available: 236},
    {id: 5, course: "Design", img: "assets/img/intro/005.png", available: 236},
  ]
  const [data, setData] = useState(SlideCourseData)
  return (
    <>
      <div className="container">
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
                  modules={[Navigation, Autoplay, Pagination]}
                  autoplay={{
                    delay: 4000,
                  }}
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
                      slidesPerView: 4,
                      spaceBetween: 20,
                    },
                    1440: {
                      slidesPerView: 5,
                      spaceBetween: 10,
                    },
                    1920: {
                      slidesPerView: 5,
                      spaceBetween: 10,
                    },
                  }}>
                  <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-1 px-5">
                    {data.map((SlideCourseData) => (
                      <SwiperSlide key={SlideCourseData.id}>
                        <SingleSlideCourse item={SlideCourseData} />
                      </SwiperSlide>
                    ))}
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
