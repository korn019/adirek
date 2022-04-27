import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import SingleTestimonialInstructor from "./SingleTestimonialInstructor";
const TestimonialInstructor = () => {
  return (
    <section className="testimonial-courses-area bg-gray-100 py-24">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="">
              <h2 className="text-center text-Athiti !font-semibold !text-titleBlue  !text-[2.2rem] !leading-none md:!text-[3.5rem] ">
                ความประทับใจของ ผู้สอน
              </h2>
            </div>
          </div>
          <div className="col-lg-12 ">
            <Swiper
              navigation={{
                nextEl: ".swiper-next",
                prevEl: ".swiper-prev",
              }}
              modules={[Navigation, Autoplay, Pagination]}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                dynamicBullets: true,
              }}
              loop={true}
              slidesPerView={4}
              loopedSlides={10}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 1,
                },
                580: {
                  slidesPerView: 1,
                  spaceBetween: 1,
                },
                640: {
                  slidesPerView: 1,
                  spaceBetween: 1,
                },
                1024: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                1200: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                1440: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                1920: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
              }}
            >
              <SwiperSlide>
                <SingleTestimonialInstructor />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialInstructor;
