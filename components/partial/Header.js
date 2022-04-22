// import Link from "next/link"
// import {useEffect, useState, useContext, Fragment} from "react"
// import {CourseCheck} from "../course/Courselabel"
// import {SearchCourseContext} from "../../pages/Category"
// import {useRouter} from "next/router"
// import {Dialog,Transition} from "@headlessui/react"
// const Header = () => {
//   const [course, setCourse] = useState(CourseCheck)
//   const router = useRouter()
//   const {searchCourse, setSearchCourse} = useContext(SearchCourseContext)
//   let [isOpen, setIsOpen] = useState(false)

//   function closeModal() {
//     setIsOpen(false)
//   }

//   function openModal() {
//     setIsOpen(true)
//   }
//   const enterandgo = (event) => {
//     if (event.keyCode === 13) {
//       router.push(`/Search/${searchCourse}`)
//        setIsOpen(false)
//     }
//   }
//  const [isOpenModal, setIsOpenModal] = useState(false)

//  return (
//     <>

//       {/* {showModal ? (
//         <div className=" overflow-y-auto overflow-x-hidden fixed top-20 bottom-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full">
//           <div className="relative p-4 w-full max-w-md h-full md:h-auto">
//             <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
//               <div className="flex justify-end p-2">
//                 <button2
//                   onClick={() => setShowModal(false)}
//                   type="button"
//                   className="text-gray-400 bg-transparent hover:bg-blue-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-red-500"
//                   data-modal-toggle="popup-modal">
//                   <svg
//                     className="w-5 h-5"
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                     xmlns="http://www.w3.org/2000/svg">
//                     <path
//                       fill-rule="evenodd"
//                       d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
//                       clip-rule="evenodd"></path>
//                   </svg>
//                 </button2>
//               </div>
//               <div className="p-6 pt-0 text-center">
//                 <div className="mb-5">
//                   <input
//                     className="form-control"
//                     type="text"
//                     placeholder="ค้นหาหลักสูตร..."
//                     onChange={(e) => setSearchCourse(e.target.value)}
//                     value={searchCourse}
//                     onKeyDown={(e) => enterandgo(e)}
//                   />
//                 </div>
//                 <Link href={`/Search/${searchCourse}`}>
//                   <button
//                     onClick={() => {
//                       setShowModal(false)
//                     }}
//                     onKeyDown={(e) => enterandgo(e)}
//                     data-modal-toggle="popup-modal"
//                     type="button"
//                     className="submit-btn text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
//                     ค้นหา
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       ) : null} */}

//       {/* <!-- //. search Popup -->

//   <!-- navbar start --> */}
//       <header className="navbar-area">
//         <nav className="navbar navbar-expand-lg">
//           <div className="container nav-container flex items-center justify-center">
//             <div className="responsive-mobile-menu">
//               <button
//                 className="menu toggle-btn d-block d-lg-none"
//                 data-target="#themefie_main_menu"
//                 aria-expanded="false"
//                 aria-label="Toggle navigation">
//                 <span className="icon-left"></span>
//                 <span className="icon-right"></span>
//               </button>
//             </div>
//             <div className="logo">
//               <Link href="/">
//                 <a className="main-logo">
//                   <img src="/static/img/logo.png" alt="img" />
//                 </a>
//               </Link>
//             </div>
//             <div className="nav-right-part nav-right-part-mobile ">
//               <ul>
//                 <li>
//                   <button onClick={openModal}>
//                     <i className="fa fa-search"></i>
//                   </button>
//                 </li>
//               </ul>
//               <Transition show={isOpen} as={Fragment}>
//                 <Dialog
//                   as="div"
//                   className="fixed inset-0 z-10 overflow-y-auto"
//                   onClose={closeModal}>
//                   <div className="min-h-screen px-4 text-center">
//                     <Transition.Child
//                       as={Fragment}
//                       enter="ease-out duration-300"
//                       enterFrom="opacity-0"
//                       enterTo="opacity-100"
//                       leave="ease-in duration-200"
//                       leaveFrom="opacity-100"
//                       leaveTo="opacity-0">
//                       <Dialog.Overlay className="fixed inset-0 bg-black/[.2]" />
//                     </Transition.Child>

//                     {/* This element is to trick the browser into centering the modal contents. */}
//                     <span className="inline-block h-screen align-middle" aria-hidden="true">
//                       &#8203;
//                     </span>
//                     <Transition.Child
//                       as={Fragment}
//                       enter="ease-out duration-300"
//                       enterFrom="opacity-0 scale-95"
//                       enterTo="opacity-100 scale-100"
//                       leave="ease-in duration-200"
//                       leaveFrom="opacity-100 scale-100"
//                       leaveTo="opacity-0 scale-95">
//                       <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
//                         <div className="flex justify-between items-center">
//                           <Dialog.Title
//                             as="h3"
//                             className="text-lg font-medium leading-6 text-gray-900">
//                             ค้นหาคอร์สเรียน
//                           </Dialog.Title>
//                           <Dialog.Title as="h3" className="text-right leading-6 text-gray-900">
//                             <button className="font-black" onClick={closeModal}>
//                               X
//                             </button>
//                           </Dialog.Title>
//                         </div>
//                         <div className="mt-2">
//                           <p className="text-sm text-gray-500">
//                             <input
//                               className="form-control"
//                               type="text"
//                               placeholder="ค้นหาคอร์สเรียน..."
//                               onChange={(e) => setSearchCourse(e.target.value)}
//                               value={searchCourse}
//                               onKeyDown={(e) => enterandgo(e)}
//                             />
//                           </p>
//                         </div>

//                         <div className="mt-4">
//                           <Link href={searchCourse ? `/Search/${searchCourse}` : `/Category`}>
//                             <button
//                               onKeyDown={(e) => enterandgo(e)}
//                               type="button"
//                               className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
//                               onClick={closeModal}>
//                               ค้นหาเลย!
//                             </button>
//                           </Link>
//                         </div>
//                       </div>
//                     </Transition.Child>
//                   </div>
//                 </Dialog>
//               </Transition>
//             </div>

//             <div className="collapse navbar-collapse" id="themefie_main_menu">
//               <div className="single-input-wrap  hidden md:block">
//                 <input
//                   type="text"
//                   placeholder="ค้นหาหลักสูตร..."
//                   onChange={(e) => setSearchCourse(e.target.value)}
//                   value={searchCourse}
//                   onKeyDown={(e) => enterandgo(e)}
//                   className="w-full"
//                 />
//                 <Link href={searchCourse ? `/Search/${searchCourse}` : `/Category`}>
//                   <button onKeyDown={(e) => enterandgo(e)}>
//                     <i className="fa fa-search"></i>
//                   </button>
//                 </Link>
//               </div>
//               <ul className="navbar-nav menu-open text-end">
//                 <li className="menu-item">
//                   <Link href="/Category">
//                     <a>หลักสูตรคอร์สเรียนทั้งหมด</a>
//                   </Link>
//                 </li>
//                 <li className="menu-item">
//                   <Link href="/Blog">
//                     <a>บทความและข่าวสาร</a>
//                   </Link>
//                 </li>
//                 <li className="menu-item">
//                   <Link href="/Instructor">
//                     <a>มาร่วมสอนกับเรา</a>
//                   </Link>
//                 </li>

//                 <li className="current-menu-item menu-item">
//                   <Link href="/Contact">
//                     <a>ติดต่อเรา</a>
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav>
//       </header>

// <div className="category-responsive d-xl-none d-block">
//   <div className="container">
//     <div className="category-slider owl-carousel">
//       {course.map((item, index) => {
//         return (
//           <div className="item" key={item.id}>
//             <Link href={`/Course/${item.value}`} as={`/Course/${item.value}`}>
//               <a>{item.value}</a>
//             </Link>
//           </div>
//         )
//       })}
//     </div>
//   </div>
// </div>

// {/* <!-- style="margin-top: 72px" --> */}
// <div className="category-navbar navbar-area d-xl-block d-none">
//   <nav className="navbar navbar-expand-lg">
//     <div className="container nav-container">
//       <div className="collapse navbar-collapse">
//         <ul className="navbar-nav menu-open">
//           {course.map((item, index) => {
//             return (
//               <li key={item.id}>
//                 <Link href={`/Course/${item.value}`} as={`/Course/${item.value}`}>
//                   <a>{item.value}</a>
//                 </Link>
//               </li>
//             )
//           })}
//         </ul>
//       </div>
//     </div>
//   </nav>
// </div>
//     </>
//   )
// }

// export default Header
import {Swiper, SwiperSlide} from "swiper/react"
import SwiperCore, {Autoplay, Navigation, Pagination} from "swiper"

import Link from "next/link"
import {useEffect, useState, useContext, Fragment} from "react"
import {CourseCheck} from "../course/Courselabel"
import {CourseCheck2} from "../category/Check"
import {SearchCourseContext} from "../../pages/Category"
import {useRouter} from "next/router"
import {Dialog, Transition} from "@headlessui/react"
function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [course, setCourse] = useState(CourseCheck)
  const router = useRouter()
  const {searchCourse, setSearchCourse} = useContext(SearchCourseContext)
  const [navHead, setNavHead] = useState(false)
  const changeBg = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > 80) {
        setNavHead(true)
      } else if (window.scrollY < 30) {
        setNavHead(false)
      }
    }
  }

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  const enterandgo = (event) => {
    if (event.keyCode === 13) {
      router.push(`/Search/${searchCourse}`)
      setIsOpen(false)
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", changeBg)
  }, [])
  const [isOpenModal, setIsOpenModal] = useState(false)

  return (
    <nav className=" shadow-sm sticky  w-full z-[999] top-0 left-0      bg-white duration-500  ">
      <div className="relative w-full container-fluid md:container ">
        <div
          className={
            navHead
              ? "relative  flex items-center h-32 duration-700 w-full"
              : "relative  flex items-center h-36 duration-700 w-full"
          }>
          <div className="flex item items-center justify-between w-full">
            <div className="flex flex-row justify-center items-center flex-shrink-0 space-x-2">
              <div className="logo">
                <Link href="/">
                  <a className="main-logo">
                    <img src="/static/img/logo.png" alt="img" />
                  </a>
                </Link>
              </div>
              <div className=" navbar-collapse hidden md:block">
                <div className="">
                  <div className="flex justify-center items-center space-x-5 relative">
                    <input
                      type="text"
                      placeholder="ค้นหาหลักสูตร..."
                      onChange={(e) => setSearchCourse(e.target.value)}
                      value={searchCourse}
                      onKeyDown={(e) => enterandgo(e)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    {/* <input
                      type="text"
                      placeholder="ค้นหาหลักสูตร..."
                      onChange={(e) => setSearchCourse(e.target.value)}
                      value={searchCourse}
                      onKeyDown={(e) => enterandgo(e)}
                      className="w-60"
                    /> */}
                    <Link href={searchCourse ? `/Search/${searchCourse}` : `/Category`}>
                      <button onKeyDown={(e) => enterandgo(e)}>
                        <i className="fa fa-search"></i>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className=" flex items-baseline ">
                <Link
                  href="/Category"
                  activeClass="Home"
                  to="about"
                  smooth={true}
                  offset={50}
                  duration={500}>
                  <a>
                    <h4 className="cursor-pointer duration-200 hover:bg-blue-600/[.8]  hover:text-white  p-2 rounded-md text-md font-medium !font-Prompt">
                      หลักสูตรคอร์สเรียนทั้งหมด
                    </h4>
                  </a>
                </Link>

                <Link href="/Blog" smooth={true} offset={50} duration={500}>
                  <a>
                    <h4 className="cursor-pointer duration-200 hover:bg-blue-600/[.8]  hover:text-white  p-2 rounded-md text-md font-medium !font-Prompt">
                      {" "}
                      บทความและข่าวสาร
                    </h4>
                  </a>
                </Link>

                <Link
                  href="/Instructor"
                  activeClass="Home"
                  to="about"
                  smooth={true}
                  offset={50}
                  duration={500}>
                  <a>
                    <h4 className="cursor-pointer duration-200 hover:bg-blue-600/[.8]  hover:text-white  p-2 rounded-md text-md font-medium !font-Prompt">
                      {" "}
                      มาร่วมสอนกับเรา
                    </h4>
                  </a>
                </Link>
                <Link
                  href="/Contact"
                  activeClass="Home"
                  to="about"
                  smooth={true}
                  offset={50}
                  duration={500}>
                  <a>
                    <h4 className="cursor-pointer duration-200 hover:bg-blue-600/[.8]  hover:text-white  p-2 rounded-md text-md font-medium !font-Prompt">
                      ติดต่อเรา
                    </h4>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          {/* Moblie */}
          <div className=" flex lg:hidden relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-primary inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-primary focus: outline-none  focus: ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false">
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http:www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http:www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div
          className={
            navHead
              ? "border-t border-[#e5f1fb]  mt-0  hidden duration-1000"
              : "border-t border-[#e5f1fb] mt-0 block duration-1000"
          }>
          <div className="text-center p-1">
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
              loop={true}
              // loopedSlides={10}
              slidesPerView={8}
              breakpoints={{
                320: {
                  slidesPerView: 2,
                  spaceBetween: 0,
                },
                580: {
                  slidesPerView: 2,
                  spaceBetween: 0,
                },
                640: {
                  slidesPerView: 4,
                  spaceBetween: 2,
                },
                1024: {
                  slidesPerView: 6,
                  spaceBetween: 2,
                },
                1440: {
                  slidesPerView: 8,
                  spaceBetween: 1,
                },
                1920: {
                  slidesPerView: 8,
                  spaceBetween: 1,
                },
              }}>
              {course.map((item, index) => {
                return (
                  <SwiperSlide>
                    <div className="p-2 animate-pulse  duration-700">
                      <Link href={`/Course/${item.value}`} as={`/Course/${item.value}`}>
                        <a>{item.value}</a>
                      </Link>
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
        </div>

        {/* <!-- style="margin-top: 72px" --> */}
        {/* <div
          className={
            navHead
              ? "category-navbar navbar-area block  mt-0 duration-1000"
              : "category-navbar navbar-area hidden  mt-0 duration-1000"
          }>
          <nav className="navbar navbar-expand-lg">
            <div className="container nav-container">
              <div className="collapse navbar-collapse">
                <ul className="navbar-nav menu-open">
                  {course.map((item, index) => {
                    return (
                      <li key={item.id}>
                        <Link href={`/Course/${item.value}`} as={`/Course/${item.value}`}>
                          <a>{item.value}</a>
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </nav>
        </div> */}
      </div>

      {/* start Dropdown */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95">
        {(ref) => (
          <div className="lg:hidden" id="mobile-menu">
            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="/Category"
                className="hover:bg-gray-700 hover:!text-white  text-black block px-3 py-2 rounded-md text-base font-medium !font-Prompt">
                หลักสูตรคอร์สเรียนทั้งหมด
              </a>

              <a
                href="/Blog"
                className="hover:bg-gray-700 hover:!text-white  text-black block px-3 py-2 rounded-md text-base font-medium !font-Prompt">
                บทความและข่าวสาร
              </a>

              <a
                href="/Instructor"
                className="hover:bg-gray-700 hover:!text-white  text-black block px-3 py-2 rounded-md text-base font-medium !font-Prompt">
                มาร่วมสอนกับเรา
              </a>

              <a
                href="/Contact"
                className="hover:bg-gray-700 hover:!text-white  text-black block px-3 py-2 rounded-md text-base font-medium !font-Prompt">
                ติดต่อเรา
              </a>
              <div className="">
                <div className="flex justify-start items-center space-x-5 relative">
                  <input
                    type="text"
                    placeholder="ค้นหาหลักสูตร..."
                    onChange={(e) => setSearchCourse(e.target.value)}
                    value={searchCourse}
                    onKeyDown={(e) => enterandgo(e)}
                    className="bg-[#f7f8fc] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#f7f8fc] dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  <Link href={searchCourse ? `/Search/${searchCourse}` : `/Category`}>
                    <button onKeyDown={(e) => enterandgo(e)}>
                      <i className="fa fa-search"></i>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  )
}

export default Header
