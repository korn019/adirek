import {Swiper, SwiperSlide} from "swiper/react"
import SwiperCore, {Autoplay, Navigation, Pagination} from "swiper"

const InstructorPromote = () => {
  return (
    <>
      <section className="banner-area instructor-banner p-0 bg-[#11142d]">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-5 col-8">
              <div className="thumb  justify-center items-center flex">
                <img src="/assets/img/instructor.png" alt="img" />
              </div>
            </div>
            <div className="col-md-7 col-sm-10 align-self-center">
              <div className="banner-inner text-md-start text-center">
                <h1 className="text-white text-f4xl font-title">Make a global impact</h1>
                <div className=" me-0">
                  <p className="text-white !text-flg !font-title">
                    Create an online video course and earn money by teaching people around the
                    world.
                  </p>
                </div>
                <button
                  className="btn !font-title  text-fxl"
                  style={{fontSize: "clamp(2rem, 8vw, 1.2rem)", marginTop: 30}}>
                  <a href="#"></a> มาร่วมสอนกับเรา
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-black">
        <div className="h-32"></div>
        <div className="relative bg-gray-50 text-black-500">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{height: 80}}>
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0">
              <polygon
                className="text-gray-50 fill-current"
                points="2560 0 2560 100 0 100"></polygon>
            </svg>
          </div>
        </div>
        <div className="text-center  bg-gray-50">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="section-title">
                  <h2>ค้นหาศักยภาพของคุณ</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan
                    bibendum gravida maecenas augue elementum et neque. Suspendisse imperdiet .
                  </p>
                </div>
              </div>
            </div>
            <div className="row justify-center text-center ">
              <div className="col-lg-4 col-sm-6">
                <div className="single-intro-wrap-2 ">
                  <div className="thumb  justify-center items-center flex">
                    <img src="/assets/img/intro/01.png" alt="img" />
                  </div>
                  <div className="wrap-details">
                    <h4>
                      <a href="#">รับผลตอบแทน</a>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui praesent nam
                      fermentum, est neque, dignissim. Phasellus feugiat elit vulputate convallis.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="single-intro-wrap-2">
                  <div className="thumb  justify-center items-center flex">
                    <img src="/assets/img/intro/02.png" alt="img" />
                  </div>
                  <div className="wrap-details">
                    <h4>
                      <a href="#">เป็นแรงบันดาลใจ</a>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui praesent nam
                      fermentum, est neque, dignissim. Phasellus feugiat elit vulputate convallis.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="single-intro-wrap-2">
                  <div className="thumb  justify-center items-center flex">
                    <img src="/assets/img/intro/03.png" alt="img" />
                  </div>
                  <div className="wrap-details">
                    <h4>
                      <a href="#">เข้าร่วม Community ของเรา</a>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui praesent nam
                      fermentum, est neque, dignissim. Phasellus feugiat elit vulputate convallis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="text-center pd-top-135 bg-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title">
                <h2>โอกาสในการเติบโต</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan
                  bibendum gravida maecenas augue elementum et neque. Suspendisse imperdiet .
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-3 col-sm-6">
              <div className="single-fact-wrap">
                <div className="fact-count">
                  <h3>
                    <span className="counter">35</span>m
                  </h3>
                </div>
                <div className="wrap-details">
                  <p>ผู้เรียนทั่วโลก</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-fact-wrap">
                <div className="fact-count">
                  <h3>
                    <span className="counter">65</span>+
                  </h3>
                </div>
                <div className="wrap-details">
                  <p>หลากหลายภาษา</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-fact-wrap">
                <div className="fact-count">
                  <h3>
                    <span className="counter">400</span>m
                  </h3>
                </div>
                <div className="wrap-details">
                  <p>หลักสูตรที่มีการลงทะเบียน</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-fact-wrap">
                <div className="fact-count">
                  <h3>
                    <span className="counter">180</span>+
                  </h3>
                </div>
                <div className="wrap-details">
                  <p>ประเทศที่เข้าร่วม</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="potential-area pd-top-135 pd-bottom-115">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h2>Discover your potential</h2>
                <ul className="potential-nav nav nav-pills" id="pills-tab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="pills-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-home"
                      type="button"
                      role="tab"
                      aria-controls="pills-home"
                      aria-selected="true">
                      Plan your course
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-profile-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-profile"
                      type="button"
                      role="tab"
                      aria-controls="pills-profile"
                      aria-selected="false">
                      Record your video
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-contact-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-contact"
                      type="button"
                      role="tab"
                      aria-controls="pills-contact"
                      aria-selected="false">
                      Build your community
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab">
                  <div className="row">
                    <div className="col-lg-6 align-self-center">
                      <div className="potential-wrap">
                        <h3>Record your video</h3>
                        <p className="mb-4">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio velit elit,
                          mattis sit pellentesque. Eu blandit velit viverra ut. Bibendum in molestie
                          odio suspendisse neque, tortor sem vestibulum a. Varius mauris scelerisque
                          cursus et vel ut urna. Dignissim mi quis et sagittis, dolor fermentum non
                          scelerisque. Adipiscing proin eu orci vitae tristique magna nulla amet
                          sit.
                        </p>
                        <p>
                          In leo ut ut mauris scelerisque ullamcorper laoreet pharetra. Mattis
                          vestibulum lobortis tristique bibendum. Id turpis nibh nulla ac eget
                          convallis id fringilla volutpat. Pretium sed morbi blandit odio in. Arcu
                          pulvinar eget faucibus amet non in. Pulvinar orci, iaculis amet elit,
                          odio. Cursus amet, sed volutpat ridiculus ullamcorper pellentesque.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6 align-self-center">
                      <div className="thumb  justify-center items-center flex">
                        <img src="/assets/img/about/1.png" alt="img" />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-profile"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="potential-wrap">
                        <h3>Record your video</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio velit elit,
                          mattis sit pellentesque. Eu blandit velit viverra ut. Bibendum in molestie
                          odio suspendisse neque, tortor sem vestibulum a. Varius mauris scelerisque
                          cursus et vel ut urna. Dignissim mi quis et sagittis, dolor fermentum non
                          scelerisque. Adipiscing proin eu orci vitae tristique magna nulla amet
                          sit.
                        </p>
                        <p>
                          In leo ut ut mauris scelerisque ullamcorper laoreet pharetra. Mattis
                          vestibulum lobortis tristique bibendum. Id turpis nibh nulla ac eget
                          convallis id fringilla volutpat. Pretium sed morbi blandit odio in. Arcu
                          pulvinar eget faucibus amet non in. Pulvinar orci, iaculis amet elit,
                          odio. Cursus amet, sed volutpat ridiculus ullamcorper pellentesque.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="thumb  justify-center items-center flex">
                        <img src="/assets/img/about/1.png" alt="img" />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-contact"
                  role="tabpanel"
                  aria-labelledby="pills-contact-tab">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="potential-wrap">
                        <h3>Record your video</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio velit elit,
                          mattis sit pellentesque. Eu blandit velit viverra ut. Bibendum in molestie
                          odio suspendisse neque, tortor sem vestibulum a. Varius mauris scelerisque
                          cursus et vel ut urna. Dignissim mi quis et sagittis, dolor fermentum non
                          scelerisque. Adipiscing proin eu orci vitae tristique magna nulla amet
                          sit.
                        </p>
                        <p>
                          In leo ut ut mauris scelerisque ullamcorper laoreet pharetra. Mattis
                          vestibulum lobortis tristique bibendum. Id turpis nibh nulla ac eget
                          convallis id fringilla volutpat. Pretium sed morbi blandit odio in. Arcu
                          pulvinar eget faucibus amet non in. Pulvinar orci, iaculis amet elit,
                          odio. Cursus amet, sed volutpat ridiculus ullamcorper pellentesque.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="thumb  justify-center items-center flex">
                        <img src="/assets/img/about/1.png" alt="img" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="testimonial-courses-area pd-bottom-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>
                  วิทยากร <i style={{color: "var(--main-color)"}} className="fa fa-heart"></i>{" "}
                  อดิเรก
                </h2>
              </div>
            </div>
            <div className="col-lg-12">
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
                <SwiperSlide>
                  {" "}
                  <div className="item">
                    <div className="single-testimonial-wrap">
                      <div className="thumb  justify-center items-center flex">
                        <img src="/assets/img/quote.png" alt="img" />
                      </div>
                      <div className="wrap-details">
                        <h5>
                          <a href="#">Super fast WordPress themes</a>
                        </h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit placerat
                          sit feugiat ornare tortor arcu, euismod pellentesque porta. Lacus, semper
                          congue consequat, potenti suspendisse luctus cras vel.
                        </p>
                        <span>- Jessica Jessy</span>
                        <a className="play-btn" href="#">
                          <i className="fa fa-play"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item">
                    <div className="single-testimonial-wrap">
                      <div className="thumb  justify-center items-center flex">
                        <img src="/assets/img/quote.png" alt="img" />
                      </div>
                      <div className="wrap-details">
                        <h5>
                          <a href="#">Super fast WordPress themes</a>
                        </h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit placerat
                          sit feugiat ornare tortor arcu, euismod pellentesque porta. Lacus, semper
                          congue consequat, potenti suspendisse luctus cras vel.
                        </p>
                        <span>- Jessica Jessy</span>
                        <a className="play-btn" href="#">
                          <i className="fa fa-play"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="item">
                    <div className="single-testimonial-wrap">
                      <div className="thumb  justify-center items-center flex">
                        <img src="/assets/img/quote.png" alt="img" />
                      </div>
                      <div className="wrap-details">
                        <h5>
                          <a href="#">Super fast WordPress themes</a>
                        </h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit placerat
                          sit feugiat ornare tortor arcu, euismod pellentesque porta. Lacus, semper
                          congue consequat, potenti suspendisse luctus cras vel.
                        </p>
                        <span>- Jessica Jessy</span>
                        <a className="play-btn" href="#">
                          <i className="fa fa-play"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="item">
                    <div className="single-testimonial-wrap">
                      <div className="thumb  justify-center items-center flex">
                        <img src="/assets/img/quote.png" alt="img" />
                      </div>
                      <div className="wrap-details">
                        <h5>
                          <a href="#">Super fast WordPress themes</a>
                        </h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit placerat
                          sit feugiat ornare tortor arcu, euismod pellentesque porta. Lacus, semper
                          congue consequat, potenti suspendisse luctus cras vel.
                        </p>
                        <span>- Jessica Jessy</span>
                        <a className="play-btn" href="#">
                          <i className="fa fa-play"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default InstructorPromote
