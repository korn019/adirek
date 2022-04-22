import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import SingleTestimonial from "./SingleTestimonial";
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
  ];

  return (
    <>
      <div className=" py-12  bg-gray-100">
        <div className="container">
          <div className="text-center">
            <h3 className="!text-[46px] text-center md:text-left md:!text-[54px]  !font-Athiti  !font-semibold !text-[#0c4159]">
              <span className="">
                {" "}
                ผู้เรียน{" "}
                <i
                  className="fa fa-heart  title-word title-word-1
                "></i>{" "}
                อดิเรก
              </span>
            </h3>
          </div>{" "}
          <div className="mt-12 relative">
            <Swiper
              navigation={{
                nextEl: ".swiper-next",
                prevEl: ".swiper-prev",
              }}
              autoplay={{
                delay: 9000,
                disableOnInteraction: false,
              }}
              modules={[Navigation, Autoplay]}
              loop={true}
              slidesPerView={4}
              loopedSlides={10}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                580: {
                  slidesPerView: 1,
                },
                640: {
                  slidesPerView: 1,
                },
                1024: {
                  slidesPerView: 1,
                },
                1200: {
                  slidesPerView: 1,
                },
                1440: {
                  slidesPerView: 1,
                },
                1920: {
                  slidesPerView: 1,
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
};

export default Testimonial;
