import {Swiper, SwiperSlide} from "swiper/react"
import SwiperCore, {Autoplay, Navigation, Pagination} from "swiper"
import Link from "next/link"
import BannerAds from "../BannerAds"
import {useState, Fragment} from "react"
import axios from "axios"
import {Dialog, Transition} from "@headlessui/react"
const InstructorPromote = () => {
  const [instructor, setInstructor] = useState({
    firstName: "",
    lastName: "",
    email: "",
    tel: "",
  })
  const [isOpen, setIsOpen] = useState(false)
  const [warning, setWarning] = useState(false)
  const [warnText, setWarnText] = useState()
  const handleChange = (event) => {
    setInstructor({...instructor, [event.target.name]: event.target.value})
  }
  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (
      instructor.firstName.length &&
      instructor.lastName.length &&
      instructor.email.length &&
      instructor.tel.length == 0
    ) {
      setWarning(true)
    }
    axios
      .post("http://localhost:4000/instructors/contact", instructor)
      .then(function (response) {
        console.log(response.data.message)
        setWarnText(false)
        setIsOpen(true)
      })
      .catch(function (error) {
        console.log(error.response.data.error)
        let err = error.response.data.error
        setWarnText(err)
      })
  }
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
                <Link href="#register">
                  <button
                    className="btn !font-title  text-fxl"
                    style={{fontSize: "clamp(2rem, 8vw, 1.2rem)", marginTop: 30}}>
                    <a></a> มาร่วมสอนกับเรา
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-700 body-font my-20 ">
        <div className=" justify-center items-center test-class ">
          <div className="grid  grid-cols-1 lg:grid-cols-2 ">
            <div className="body--container">
              <img
                className="text w-[400px] h-[400px] object-cover"
                alt="Adirek"
                src="assets/img/Logo-Adirek.png"
              />
              <div className="bubble--container">
                <div className="bubble bubble--large"></div>
                <div className="bubble bubble--one top-[200px] left-[-50px] sm:left-0 sm:top-[400px]"></div>
                <div className="bubble bubble--two top-50 left-0 sm:top-[400px] sm:right-0"></div>
                <div className="bubble bubble--three top-[300px] left-0 sm:top-[450px] sm:left-0"></div>
              </div>
            </div>

            <div className=" text-center">
              <h1 className="title-font text-f5xl sm:text-f4xl  mb-4 font-title  text-gray-900">
                <span className="title-word title-word-1">อ</span>
                <span className="title-word title-word-2">ดิ</span>
                <span className="title-word title-word-3">เ</span>
                <span className="title-word title-word-4">ร</span>
                <span className="title-word title-word-3">ก</span>
                <span className="title-word title-word-3"> ร่วมสอนกับเรา</span>
              </h1>
              <div className="">
                <p className="mb-8 leading-relaxed text-md md:text-fbase">
                  เปลี่ยน “ความรู้” ให้เป็น “รายได้” ที่ อดิเรก
                </p>
                <p className="mb-8 leading-relaxed text-md md:text-fbase">
                  เปลี่ยน “ความรู้” ให้เป็น “รายได้” โดยไม่ต้องลงทุนไปกับ อดิเรก
                </p>
                <p className="mb-8 leading-relaxed text-md md:text-fbase">
                  เปลี่ยน “ความรู้” ให้เป็น “รายได้” เริ่มง่ายๆด้วยตัวคุณเองที่ อดิเรก
                </p>
                <p className="mb-8 leading-relaxed text-md md:text-fbase">
                  เปลี่ยน “ความชอบ” ให้เป็น “รายได้” ใช้ชีวิตแบบชิลล์ๆ เริ่มต้นที่ อดิเรก
                </p>
                <p className="mb-8 leading-relaxed text-md md:text-fbase">
                  ใช้“ความรู้” ของคุณเพื่อสร้าง “รายได้” และพัฒนาทักษะให้กับผู้เรียนที่ อดิเรก{" "}
                </p>
                <p className="mb-8 leading-relaxed text-md md:text-fbase">
                  อย่าให้ Skill ของคุณต้องสูญเปล่า เปลี่ยน Skill ให้เป็นรายได้ที่ อดิเรก{" "}
                </p>
                <div className="flex justify-center">
                  <button className="btn font-body text-3xl">
                    <Link href="/Contact">ติดต่อเรา</Link>{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="h-32"></div>
        <div className="relative bg-gray-50 text-black-500 ">
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
                className="text-gray-50  test-class fill-current"
                points="2560 0 2560 100 0 100"></polygon>
            </svg>
          </div>
        </div> */}

        <div className="bg-red-400 h-10 mt-24"></div>
        <div className="py-24 items-center test-class flex-wrap grid grid-cols-1 lg:grid-cols-2 z-50">
          <div className="w-full xl:w-9/12 ml-auto mr-auto px-4">
            <iframe
              src="https://www.youtube.com/embed/I9TCLKlMzpc"
              frameBorder="0"
              allowFullScreen
              className="animate-none xl:animate-[youtubeSlide_4s_infinite_alternate] aspect-video  w-full h-full  rounded-lg "></iframe>
          </div>
          <div className="w-full  ml-auto mr-auto px-4">
            <div className="md:pr-12">
              <h2 className="mb-6  mt-8 text-3xl font-title text-f2xl md:text-fxl lg:text-f3xl ">
                <span className="text-f4xl title-word-3 title-word-2 animate-[color-animation_3s_linear_infinite]">
                  อดิเรก &nbsp;
                </span>
                คืออะไร?
              </h2>
              <p className="mt-4 indent-5 text-lg leading-relaxed text-grey-500  text-md">
                อดิเรก คือ
                แพลตฟอร์มการเรียนรู้รูปแบบใหม่ที่ทำหน้าที่เป็นพื้นที่อิสระเพื่อเชื่อมระหว่างผู้เรียนและผู้สอน
                ไว้ด้วยกัน พร้อมสื่อสารกัน โดยตรง ไม่ผ่านคนกลาง สามารถกำหนดวัน เวลา
                สถานที่ได้อย่างอิสระ
              </p>
              <ul className="list-none mt-6">
                <ul>
                  <p className="leading-relaxed font-body text-3xl">
                    <strong>สิ่งที่คุณจะได้จากการสอนที่ อดิเรก</strong>{" "}
                  </p>
                </ul>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                        {/* <i className="fas fa-fingerprint"></i> */}
                      </span>
                    </div>
                    <div>
                      <p className="leading-relaxed  text-lg">
                        ช่องทางรายได้ใหม่ๆ
                        เปลี่ยนความรู้และความสามารถของคุณให้เป็นรายได้โดยที่ไม่ต้องลงทุน
                        ไม่มีหักเปอร์เซ็นต์ หรือคอมมิชชั่นใดๆ{" "}
                        <strong className="font-black"> ฟรีทุกอย่าง! </strong>
                      </p>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                        {/* <i className="fab fa-html5"></i> */}
                      </span>
                    </div>
                    <div>
                      <p className="leading-relaxed  text-lg">
                        เพิ่มทักษะให้กับผู้อื่นได้แบ่งปันความรู้
                        ช่วยเพิ่มทักษะให้กับผู้เรียนที่มีความสนใจ
                        ช่วยผลักดันผู้เรียนไปสู่ประตูแห่งโอกาสใหม่ ๆ
                      </p>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                        {/* <i className="far fa-paper-plane"></i> */}
                      </span>
                    </div>
                    <div>
                      <p className="leading-relaxed  text-lg">
                        เวลาการทำงานที่ยืดหยุ่น กำหนดรายละเอียดต่างๆ ได้ด้วยตนเอง ไม่ว่าจะเป็นวัน
                        เวลา รายละเอียด แม้กระทั่งราคาคอร์ส
                      </p>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                        {/* <i className="far fa-paper-plane"></i> */}
                      </span>
                    </div>
                    <div>
                      <p className="leading-relaxed text-lg">
                        สร้างสังคมแห่งการเรียนรู้ เพียงคุณมีความรู้และความสามารถ
                        และมีใจที่อยากแบ่งปันความรู้ให้กับผู้อื่น
                        คุณก็เป็นส่วนหนึ่งในการสร้างสังคมแห่งการเรียนรู้ไปกับเราได้
                      </p>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                        {/* <i className="far fa-paper-plane"></i> */}
                      </span>
                    </div>
                    <div>
                      <p className="leading-relaxed  text-lg">
                        เพิ่มทักษะให้กับตัวคุณเอง สร้างคอร์สเรียนได้ง่าย ๆ
                        แม้ไม่มีประสบการณ์ในการสอนมาก่อน เพราะเรามีทีมงานคอยให้
                        คำปรึกษาและช่วยเหลือคุณตลอด 24 ชั่วโมง
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="register">
        <div class="min-w-screen min-h-screen bg-svg flex items-center justify-center px-5 py-5">
          <div
            className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden"
            style={{maxWidth: 1000}}>
            <div className="md:flex w-full ">
              <div className="hidden md:block w-1/2 bg-indigo-500 py-10 px-5 md:px-10">
                <div className="text-center  items-center justify-center">
                  <h1 className="font-title text-f3xl text-white">ขั้นตอนการสอนกับเรา</h1>
                  <div className=" text-white text-f3xl font-body text-left">
                    <ol>
                      <li>ลงทะเบียนสมัครเป็นผู้สอน</li>
                      <li>รอการติดต่อกลับ</li>
                      <li>เริ่มสอนได้ทันที</li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
                <div className="text-center mb-10">
                  <h1 className="font-title text-f4xl text-gray-900">ลงทะเบียน</h1>
                  <p>กรอกข้อมูลลงทะเบียนเพื่อให้เราติดต่อกับ</p>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="flex -mx-3">
                    <div className="w-1/2 px-3 mb-5">
                      <label for="" className="text-xs font-semibold px-1">
                        ชื่อจริง
                      </label>
                      <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                        </div>
                        <input
                          type="text"
                          className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                          placeholder="ชื่อจริง"
                          onChange={handleChange}
                          name="firstName"
                          value={instructor.firstName}
                        />
                      </div>
                      {warning ? null : warnText}
                    </div>
                    <div className="w-1/2 px-3 mb-5">
                      <label for="" className="text-xs font-semibold px-1">
                        นามสกุล
                      </label>
                      <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                        </div>
                        <input
                          type="text"
                          className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                          placeholder="นามสกุล"
                          onChange={handleChange}
                          name="lastName"
                          value={instructor.lastName}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex -mx-3">
                    <div className="w-full px-3 mb-5">
                      <label for="" className="text-xs font-semibold px-1">
                        Email
                      </label>
                      <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                        </div>
                        <input
                          type="email"
                          className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                          placeholder="adirek@hotmail.com"
                          onChange={handleChange}
                          name="email"
                          value={instructor.email}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex -mx-3">
                    <div className="w-full px-3 mb-12">
                      <label for="" className="text-xs font-semibold px-1">
                        เบอร์โทรศัพท์
                      </label>
                      <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                        </div>
                        <input
                          className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                          placeholder="เบอร์โทรศัพท์"
                          onChange={handleChange}
                          name="tel"
                          value={instructor.tel}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex -mx-3">
                    <div className="w-full px-3 mb-5">
                      <button
                        type="submit"
                        className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-0 font-title text-f3xl">
                        ยืนยัน
                      </button>
                      <Transition show={isOpen} as={Fragment}>
                        <Dialog
                          as="div"
                          className="fixed inset-0 z-10 overflow-y-auto"
                          onClose={closeModal}>
                          <div className="min-h-screen px-4 text-center">
                            <Transition.Child
                              as={Fragment}
                              enter="ease-out duration-300"
                              enterFrom="opacity-0"
                              enterTo="opacity-100"
                              leave="ease-in duration-200"
                              leaveFrom="opacity-100"
                              leaveTo="opacity-0">
                              <Dialog.Overlay className="fixed inset-0 bg-black/[.2]" />
                            </Transition.Child>

                            {/* This element is to trick the browser into centering the modal contents. */}
                            <span className="inline-block h-screen align-middle" aria-hidden="true">
                              &#8203;
                            </span>
                            <Transition.Child
                              as={Fragment}
                              enter="ease-out duration-300"
                              enterFrom="opacity-0 scale-95"
                              enterTo="opacity-100 scale-100"
                              leave="ease-in duration-200"
                              leaveFrom="opacity-100 scale-100"
                              leaveTo="opacity-0 scale-95">
                              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                <div className="flex justify-end items-center">
                                  <Dialog.Title
                                    as="h3"
                                    className="text-right leading-6 text-gray-900">
                                    <button className="font-black" onClick={closeModal}>
                                      X
                                    </button>
                                  </Dialog.Title>
                                </div>
                                <div className="my-4 items-center justify-center flex">
                                  
                                  <p className="text-sm text-gray-500">
                                    
                                    <Dialog.Title
                                      as="h3"
                                      className="text-f3xl font-title my-4  leading-6 text-gray-900">
                                      ลงทะเบียนสำเร็จ
                                    </Dialog.Title>
                                  </p>
                                </div>

                                <div className="mt-4  items-center justify-center flex">
                                  <button
                                    type="button"
                                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                    onClick={closeModal}>
                                    ค้นหาเลย!
                                  </button>
                                </div>
                              </div>
                            </Transition.Child>
                          </div>
                        </Dialog>
                      </Transition>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-red-400">
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

      <div className="pt-16">
        <BannerAds />
      </div>

      <div className="text-center pd-top-110 bg-white">
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
