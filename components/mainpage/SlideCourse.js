import { useState, useEffect } from "react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SingleSlideCourse from "./SingleSlideCourse";
import { CourseCheck } from "../course/Courselabel";
import axios from "axios";
const SlideCourse = () => {
  const [data, setData] = useState(CourseCheck);
  const [available, setAvailable] = useState([]);
  const getData = () => {
    axios
      .get("https://www.api-adirek.online/api/instructor")
      .then((res) => {
        // console.log(res)
        setAvailable(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  let availableCourse = available.map((item) => item.filterCategory);
  let availableCourseCategory = available.map((item) => item.MainCategory);
  return (
    <>
      <div className="container ">
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
                      slidesPerView: 4,
                      spaceBetween: 10,
                    },
                    1920: {
                      slidesPerView: 4,
                      spaceBetween: 10,
                    },
                  }}
                >
                  <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-1 px-5">
                    {data.map((SlideCourseData) => (
                      <SwiperSlide key={SlideCourseData.id}>
                        <SingleSlideCourse
                          item={SlideCourseData}
                          availableCourse={availableCourse}
                          availableCourseCategory={availableCourseCategory}
                        />
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
  );
};

export default SlideCourse;
