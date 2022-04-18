import SwiperCore, {Autoplay, Navigation, Pagination} from "swiper"
import {Swiper, SwiperSlide} from "swiper/react"

import SingleTestimonial from "./SingleTestimonial"
const Testimonial = () => {
  const data = [
    {
      id: 1,
      name: "สุภเวช",
      text: "Website เหมาะกับคนทุกวัย ใช้งานง่าย",
    },
    {
      id: 2,
      name: "ปรมินทร์",
      text: "Website เหมาะกับคนทุกวัย ใช้งานง่าย",
    },
    {
      id: 3,
      name: "สุวรรณา",
      text: "Website เหมาะกับคนทุกวัย ใช้งานง่าย",
    },
    {
      id: 4,
      name: "อดิเรก",
      text: "Website เหมาะกับคนทุกวัย ใช้งานง่าย",
    },
    {
      id: 5,
      name: "blob",
      text: "Website เหมาะกับคนทุกวัย ใช้งานง่าย",
    },
  ]  

  return (
    <>
      <div className=" py-12  bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between">
          <div className="text-center">
            <h3 className="text-f3xl sm:text-f4xl leading-normal font-title tracking-tight ">
              <span className="title-word title-word-3"> ผู้เรียน </span>
              <span className="title-word title-word-2">
                <i
                  className="fa fa-heart  title-word title-word-1
                "></i>
              </span>
              <span className="title-word title-word-3"> อดิเรก</span>
            </h3>
          </div>{" "}
          <div className="mt-12 relative">
            <Swiper
              navigation={{
                nextEl: ".swiper-next",
                prevEl: ".swiper-prev",
              }}
              pagination={{
                dynamicBullets: true,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Navigation, Autoplay]}
              loop={true}
              slidesPerView={4}
              loopedSlides={10}
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
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1440: {
                  slidesPerView: 4,
                  spaceBetween: 45,
                },
                1920: {
                  slidesPerView: 4,
                  spaceBetween: 45,
                },
              }}>
              {" "}
              {data.map((d, id) => (
                <SwiperSlide key={id}>
                  <SingleTestimonial people={d} />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-prev cursor-pointer z-50">
              <div className="duration-500 w-[35px] bg-white/[.8] hover:bg-orange-400  shadow-xl flex justify-center items-center rounded-3xl  absolute z-50 top-[11rem] left-0 md:-left-5">
                <p style={{fontSize: 22}}> &#x276E; </p>
              </div>
            </div>
            <div className="swiper-next cursor-pointer z-50">
              <div className="duration-500 bg-white/[.8] w-[35px] hover:bg-orange-400 shadow-md flex justify-center items-center rounded-3xl  absolute z-50 top-[11rem] right-0 md:-right-5">
                <p style={{fontSize: 22}}> &#x276F; </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Testimonial
