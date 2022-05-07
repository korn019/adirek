import Link from "next/link"
import {useEffect, useState, useContext, Fragment, useRef} from "react"
import {Disclosure, Menu, Transition, Dialog} from "@headlessui/react"
import {BellIcon, MenuIcon, XIcon} from "@heroicons/react/outline"
// import { SearchCourseContext } from "../pages/category";
import {GiArchiveResearch} from "react-icons/gi"
import {CourseCheck} from "./course/Courselabel"
import {useRouter} from "next/router"
import {DataContext} from "../store/GlobalState"
import {toast} from "react-toastify"
import {SearchBarLg, SearchBarMobile} from "./SearchBar"
import {dash} from "../utils/dash"
import Cookie from "js-cookie"
const navigation = [
  {name: "หน้าแรก", href: "/", current: true},
  {name: "คอร์สเรียนทั้งหมด", href: "/courses", current: false},
  {name: "บทความและข่าวสาร", href: "/blog", current: false},
  {name: "ติดต่อเรา", href: "/contact", current: false},
]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [course, setCourse] = useState(CourseCheck)
  const {searchCourse, setSearchCourse, state, dispatch} = useContext(DataContext)
  const {auth} = state
  const [navHead, setNavHead] = useState(false)
  const router = useRouter()

  const changeBg = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > 80) {
        setNavHead(true)
      } else if (window.scrollY < 30) {
        setNavHead(false)
      }
    }
  }
  const LogOut = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    localStorage.removeItem("firstLogin")
    Cookie.remove("refreshtoken", {path: '"api/auth/accessToken'})
    // Cookie.remove("refreshtoken", res.refresh_token, {
    //   path: "api/auth/accessToken",
    // })
    dispatch({type: "AUTH", payload: {}})
    dispatch({
      type: "NOTIFY",
      payload: {success: toast.success("ออกจากระบบเรียบร้อย")},
    })
    // router.push("/Login")
  }

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  const enterandgo = (event) => {
    if (event.keyCode === 13) {
      router.push(`/search/${searchCourse}`)
      setIsOpen(false)
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", changeBg)
  }, [])
  const [isOpenModal, setIsOpenModal] = useState(false)
  return (
    <Disclosure as="nav" className="bg-gray-800 sticky w-full z-[999] top-0 left-0">
      {({open}) => (
        <>
          <div className="  max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-28">
              <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <>
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    </>
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center lg:items-stretch lg:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <Link href="/">
                    <a>
                      <img
                        className="block lg:hidden h-8 w-auto"
                        src="/static/img/logo-white-knowledge.png"
                        alt="adirek"
                      />
                    </a>
                  </Link>
                  <Link href="/">
                    <a>
                      <img
                        className="hidden lg:block h-8 w-auto"
                        src="/static/img/logo-white-knowledge.png"
                        alt="adirek"
                      />
                    </a>
                  </Link>
                </div>
                <div className="hidden lg:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link href={item.href} key={item.name}>
                        <a
                          className={classNames(
                            router.pathname == item.href
                              ? "bg-gray-900 !text-white active:bg-blue-600"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white active:bg-blue-600 text-",
                            "px-2 py-2 rounded-md !text-xl !font-medium  !text-white text-Athiti"
                          )}
                          aria-current={item.current ? "page" : undefined}>
                          {item.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
                <SearchBarLg
                  searchCourse={searchCourse}
                  setSearchCourse={setSearchCourse}
                  onKeyDown={enterandgo}
                  onChange={(e) => setSearchCourse(e.target.value)}
                />
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                {Object.keys(auth).length == 0 ? (
                  <>
                    <Link href="/login">
                      <a>
                        {" "}
                        <p className="!text-white text-Athiti  !font-semibold !text-sm md:!text-lg">
                          เข้าสู่ระบบ
                        </p>
                      </a>
                    </Link>
                  </>
                ) : (
                  <>
                    <button
                      type="button"
                      className=" p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>

                    <Menu as="div" className="ml-3 relative">
                      <div className="flex justify-center items-center space-x-2">
                        <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                          <span className="sr-only">Open user menu</span>
                          <div className="h-8 w-8 rounded-full overflow-hidden bg-white justify-center items-center flex">
                            <span className="text-black text-Athiti !font-semibold !text-base">
                              {Object.keys(auth).length !== 0 ? (
                                auth.user?.type == "student" || auth.user?.type == "instructor" ? (
                                  auth.user?.first_name?.charAt(0) + auth.user?.last_name?.charAt(0)
                                ) : auth.user?.type == "institute" ? (
                                  auth.user?.institute?.charAt(0)
                                ) : null
                              ) : (
                                <img
                                  className="h-8 w-8 rounded-full"
                                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                  alt=""
                                />
                              )}
                            </span>
                          </div>
                        </Menu.Button>
                        <p className="text-Athiti !font-semibold !text-white !text-base hidden lg:block">
                          {auth.user?.email}
                        </p>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95">
                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Menu.Item>
                            {({active}) =>
                              auth.user?.type == "student" || auth.user?.type == "instructor" ? (
                                <>
                                  <Link
                                    href={`/user/profile/${dash(auth.user?.first_name)}-${dash(
                                      auth.user?.last_name
                                    )}`}
                                    as={`/user/profile/${dash(auth.user?.first_name)}-${dash(
                                      auth.user?.last_name
                                    )}`}>
                                    <a
                                      className={classNames(
                                        active ? "bg-gray-100" : "",
                                        "block px-4 py-2 text-sm text-gray-700"
                                      )}>
                                      โปรไฟล์ของคุณ
                                    </a>
                                  </Link>
                                </>
                              ) : (
                                <>
                                  {" "}
                                  <Link
                                    href={`/user/profile/${dash(auth.user?.institute)}`}
                                    as={`/user/profile/${dash(auth.user?.institute)}`}>
                                    <a
                                      className={classNames(
                                        active ? "bg-gray-100" : "",
                                        "block px-4 py-2 text-sm text-gray-700"
                                      )}>
                                      โปรไฟล์ของคุณ
                                    </a>
                                  </Link>
                                </>
                              )
                            }
                          </Menu.Item>
                          <Menu.Item>
                            {({active}) => (
                              <a
                                href="#"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}>
                                Settings
                              </a>
                            )}
                          </Menu.Item>

                          <Menu.Item>
                            {({active}) => (
                              <a
                                href="#"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                                onClick={LogOut}>
                              ออกจากระบบ
                              </a>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </>
                )}
              </div>
            </div>
          </div>
          <Disclosure.Panel className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}>
                  {item.name}
                </Disclosure.Button>
              ))}
              <SearchBarMobile
                searchCourse={searchCourse}
                setSearchCourse={setSearchCourse}
                onKeyDown={enterandgo}
                onChange={(e) => setSearchCourse(e.target.value)}
              />
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
