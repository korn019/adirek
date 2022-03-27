import Image from "next/image"
import {useEffect, useState} from "react"
import SwiperCore, {Autoplay, Navigation, Pagination} from "swiper"
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/swiper-bundle.min.css"
import "swiper/swiper.min.css"
function ClientArea() {
  const [client, setClient] = useState([])
  for (let i = 0; i < 6; i++) {
    client.push(i + 1)
  }
  const ImageSrc = [
    {
      id: 1,
      src: "/assets/img/client/1.png",
    },
    {
      id: 2,
      src: "/assets/img/client/2.png",
    },
    {
      id: 3,
      src: "/assets/img/client/3.png",
    },
    {
      id: 4,
      src: "/assets/img/client/3.png",
    },
    {
      id: 5,
      src: "/assets/img/client/3.png",
    },
    {
      id: 6,
      src: "/assets/img/client/3.png",
    },
  ]
  return (
    <section>
      <div className="client-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 relative ">
              <div className="client-slider">
                <Swiper
                  navigation={{
                    nextEl: ".swiper-next",
                    prevEl: ".swiper-prev",
                  }}
                  modules={[Navigation]}
                  autoplay={{
                    delay: 5000,
                  }}
                  loop={true}
                  slidesPerView={4}
                  loopedSlides={10}
                  breakpoints={{
                    320: {
                      slidesPerView: 2,
                      spaceBetween: 90,
                    },
                    580: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    640: {
                      slidesPerView: 4,
                      spaceBetween: 20,
                    },
                    1024: {
                      slidesPerView: 4,
                      spaceBetween: 20,
                    },
                    1200: {
                      slidesPerView: 6,
                      spaceBetween: 20,
                    },
                    1440: {
                      slidesPerView: 6,
                      spaceBetween: 20,
                    },
                    1920: {
                      slidesPerView: 6,
                      spaceBetween: 10,
                    },
                  }}>
                  <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-1 px-5">
                    {client.map((clientImg, index) => (
                      <SwiperSlide key={index}>
                        <div className="item text-center flex items-center justify-center">
                          <img
                            src={"assets/img/client/" + clientImg + ".png"}
                            alt="img"
                            className="w-[191px] h-[103px]"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </div>
                </Swiper>
              </div>
              {/* <div className="swiper-prev cursor-pointer">
                <div className="duration-500 w-[35px] bg-white/[.8] hover:bg-orange-400  shadow-xl flex justify-center items-center rounded-3xl  absolute z-50 top-[11rem] left-0 md:left-1">
                  <p style={{fontSize: 22}}> &#x276E; </p>
                </div>
              </div>

              <div className="swiper-next cursor-pointer">
                <div className="duration-500 bg-white/[.8] w-[35px] hover:bg-orange-400 shadow-md flex justify-center items-center rounded-3xl  absolute z-50 top-[11rem] right-0 md:right-1">
                  <p style={{fontSize: 22}}> &#x276F; </p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClientArea
