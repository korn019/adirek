import React, {seState, useEffect} from "react"
import {Swiper, SwiperSlide} from "swiper/react"
import SwiperCore, {Autoplay, Navigation, Pagination} from "swiper"
import BlogCard from "./BlogCard"


const SwiperBlogCard = (
  {
    Article,
    setPerfectionistView,
    perfectionistView,
    setAcceptanceView,
    acceptanceView,
    setInspirationView,
    inspirationView,
    search,
    setSearch,
    test,
    setTest
  }
) => {
  const searchArticle = Article.filter((article) => {
    if (search == "") {
      return article
    } else if (
      article.title.toLowerCase().includes(search.toLowerCase()) ||
      article.subtitle.toLowerCase().includes(search.toLowerCase()) ||
      article.date.toLowerCase().includes(search.toLowerCase())
    ) {
      return article
    }
  })
  return (
    <>
      <Swiper
        navigation={{
          nextEl: ".swiper-next",
          prevEl: ".swiper-prev",
        }}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
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
            spaceBetween: 20,
          },
          1920: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-1 px-5">
          {searchArticle.map((d, id) => {
            return (
              <SwiperSlide key={id}>
                <BlogCard
                  article={d}
                  setPerfectionistView={setPerfectionistView}
                  perfectionistView={perfectionistView}
                  setAcceptanceView={setAcceptanceView}
                  acceptanceView={acceptanceView}
                  setInspirationView={setInspirationView}
                  inspirationView={inspirationView}
                />
              </SwiperSlide>
            )
          })}
        </div>
      </Swiper>
      <div className="swiper-prev cursor-pointer">
        <div className="duration-500 w-[35px] bg-white/[.8] hover:bg-orange-400  shadow-xl flex justify-center items-center rounded-3xl  absolute z-50 top-[11rem] left-0 md:-left-5">
          <p style={{fontSize: 22}}> &#x276E; </p>
        </div>
      </div>

      <div className="swiper-next cursor-pointer">
        <div className="duration-500 bg-white/[.8] w-[35px] hover:bg-orange-400 shadow-md flex justify-center items-center rounded-3xl  absolute z-50 top-[11rem] right-0 md:-right-5">
          <p style={{fontSize: 22}}> &#x276F; </p>
        </div>
      </div>
    </>
  )
}

export default SwiperBlogCard
