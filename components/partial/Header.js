import Link from "next/link"
import {useEffect, useState, useContext, Fragment} from "react"
import {CourseCheck} from "../course/Courselabel"
import {SearchCourseContext} from "../../pages/Category"
import {useRouter} from "next/router"
import {Dialog,Transition} from "@headlessui/react"
const Header = () => {
  const [course, setCourse] = useState(CourseCheck)
  const router = useRouter()
  const {searchCourse, setSearchCourse} = useContext(SearchCourseContext)
  let [isOpen, setIsOpen] = useState(false)
 
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

  return (
    <>
      {/* {showModal ? (
        <div className=" overflow-y-auto overflow-x-hidden fixed top-20 bottom-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full">
          <div className="relative p-4 w-full max-w-md h-full md:h-auto">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex justify-end p-2">
                <button2
                  onClick={() => setShowModal(false)}
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-blue-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-red-500"
                  data-modal-toggle="popup-modal">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"></path>
                  </svg>
                </button2>
              </div>
              <div className="p-6 pt-0 text-center">
                <div className="mb-5">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="ค้นหาหลักสูตร..."
                    onChange={(e) => setSearchCourse(e.target.value)}
                    value={searchCourse}
                    onKeyDown={(e) => enterandgo(e)}
                  />
                </div>
                <Link href={`/Search/${searchCourse}`}>
                  <button
                    onClick={() => {
                      setShowModal(false)
                    }}
                    onKeyDown={(e) => enterandgo(e)}
                    data-modal-toggle="popup-modal"
                    type="button"
                    className="submit-btn text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                    ค้นหา
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : null} */}

      {/* <!-- //. search Popup -->

  <!-- navbar start --> */}
      <header className="navbar-area">
        <nav className="navbar navbar-expand-lg">
          <div className="container nav-container flex items-center justify-center">
            <div className="responsive-mobile-menu">
              <button
                className="menu toggle-btn d-block d-lg-none"
                data-target="#themefie_main_menu"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="icon-left"></span>
                <span className="icon-right"></span>
              </button>
            </div>
            <div className="logo">
              <Link href="/">
                <a className="main-logo">
                  <img src="/assets/img/logo.png" alt="img" />
                </a>
              </Link>
            </div>
            <div className="nav-right-part nav-right-part-mobile ">
              <ul>
                <li>
                  <button onClick={openModal}>
                    <i className="fa fa-search"></i>
                  </button>
                </li>
              </ul>
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
                        <div className="flex justify-between items-center">
                          <Dialog.Title
                            as="h3"
                            className="text-lg font-medium leading-6 text-gray-900">
                            ค้นหาคอร์สเรียน
                          </Dialog.Title>
                          <Dialog.Title as="h3" className="text-right leading-6 text-gray-900">
                            <button className="font-black" onClick={closeModal}>
                              X
                            </button>
                          </Dialog.Title>
                        </div>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                            <input
                              className="form-control"
                              type="text"
                              placeholder="ค้นหาคอร์สเรียน..."
                              onChange={(e) => setSearchCourse(e.target.value)}
                              value={searchCourse}
                              onKeyDown={(e) => enterandgo(e)}
                            />
                          </p>
                        </div>

                        <div className="mt-4">
                          <Link href={searchCourse ? `/Search/${searchCourse}` : `/Category`}>
                            <button
                              onKeyDown={(e) => enterandgo(e)}
                              type="button"
                              className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                              onClick={closeModal}>
                              ค้นหาเลย!
                            </button>
                          </Link>
                        </div>
                      </div>
                    </Transition.Child>
                  </div>
                </Dialog>
              </Transition>
            </div>

            <div className="collapse navbar-collapse" id="themefie_main_menu">
              <div className="single-input-wrap">
                <input
                  type="text"
                  placeholder="ค้นหาหลักสูตร..."
                  onChange={(e) => setSearchCourse(e.target.value)}
                  value={searchCourse}
                  onKeyDown={(e) => enterandgo(e)}
                  className="w-full"
                />
                <Link href={searchCourse ? `/Search/${searchCourse}` : `/Category`}>
                  <button onKeyDown={(e) => enterandgo(e)}>
                    <i className="fa fa-search"></i>
                  </button>
                </Link>
              </div>
              <ul className="navbar-nav menu-open text-end">
                <li className="menu-item">
                  <Link href="/Category">
                    <a>หลักสูตรคอร์สเรียนทั้งหมด</a>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="/Blog">
                    <a>บทความและข่าวสาร</a>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="/Instructor">
                    <a>มาร่วมสอนกับเรา</a>
                  </Link>
                </li>

                <li className="current-menu-item menu-item">
                  <Link href="/Contact">
                    <a>ติดต่อเรา</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <div className="category-responsive d-xl-none d-block">
        <div className="container">
          <div className="category-slider owl-carousel">
            {course.map((item, index) => {
              return (
                <div className="item" key={item.id}>
                  <Link href={`/Course/${item.value}`} as={`/Course/${item.value}`}>
                    <a>{item.value}</a>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* <!-- style="margin-top: 72px" --> */}
      <div className="category-navbar navbar-area d-xl-block d-none">
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
      </div>
    </>
  )
}

export default Header
