import Link from "next/link"
import {useEffect, useState, useContext, Fragment} from "react"
import {Disclosure, Menu, Transition, Dialog} from "@headlessui/react"
import {BellIcon, MenuIcon, XIcon} from "@heroicons/react/outline"
import {SearchCourseContext} from "../pages/Category"
import {GiArchiveResearch} from "react-icons/gi"
import {CourseCheck} from "./course/Courselabel"
import {useRouter} from "next/router"
const navigation = [
  {name: "หน้าแรก", href: "/", current: true},
  {name: "คอร์สเรียนทั้งหมด", href: "/Category", current: false},
  {name: "บทความและข่าวสาร", href: "/Blog", current: false},
  {name: "ติดต่อเรา", href: "/Contact", current: false},
]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [course, setCourse] = useState(CourseCheck)
  const {searchCourse, setSearchCourse} = useContext(SearchCourseContext)
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
    router.push("/Login")
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
    <Disclosure as="nav" className="bg-gray-800 sticky w-full z-[999] top-0 left-0">
      {({open}) => (
        <>
          <div className="  max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-28">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src="/static/img/logo-white-knowledge.png"
                    alt="adirek"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="/static/img/logo-white-knowledge.png"
                    alt="adirek"
                  />
                </div>

                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link href={item.href} key={item.name}>
                        <a
                          className={classNames(
                            router.pathname == item.href
                              ? "bg-gray-900 !text-white active:bg-blue-600 "
                              : "text-gray-300 hover:bg-gray-700 hover:text-white active:bg-blue-600 ",
                            "px-3 py-2 rounded-md !text-sm !font-medium  !text-white text-Athiti"
                          )}
                          aria-current={item.current ? "page" : undefined}>
                          {item.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="flex-shrink-0 flex items-center hidden md:block">
                  <div className="flex justify-center items-center md:space-x-5 relative">
                    <input
                      type="text"
                      placeholder="ค้นหาคอร์สที่สนใจ..."
                      onChange={(e) => setSearchCourse(e.target.value)}
                      value={searchCourse}
                      onKeyDown={(e) => enterandgo(e)}
                      className="bg-gray-50 border border-gray-300 text-gray-900  text-Athiti !font-medium  !text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    <Link href={searchCourse ? `/Search/${searchCourse}` : `/Category`}>
                      <button onKeyDown={(e) => enterandgo(e)}>
                        <GiArchiveResearch
                          color="white"
                          className="text-3xl  hover:!text-bg hover:duration-700"
                        />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className=" p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative">
                  <div className="flex justify-center items-center space-x-2">
                    <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                      <p className="text-Athiti !font-semibold !text-white !text-base">User</p>
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
                        {({active}) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}>
                            Your Profile
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
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
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
              <div className="flex-shrink-0 block md:hidden">
                <div className="flex justify-center items-center space-x-2 md:space-x-5 relative">
                  <input
                    type="text"
                    placeholder="ค้นหาคอร์สที่สนใจ..."
                    onChange={(e) => setSearchCourse(e.target.value)}
                    value={searchCourse}
                    onKeyDown={(e) => enterandgo(e)}
                    className="bg-gray-50 border border-gray-300 text-gray-900  text-Athiti !font-semibold  !text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  <Link href={searchCourse ? `/Search/${searchCourse}` : `/Category`}>
                    <button onKeyDown={(e) => enterandgo(e)}>
                      <GiArchiveResearch className="text-3xl hover:text-bg hover:duration-700" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
