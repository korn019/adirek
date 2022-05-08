import CourseCard from "./profile/CourseCard"
import {useRouter} from "next/router"
import {DataContext} from "../store/GlobalState"
import {toast} from "react-toastify"
import {useEffect, useState, useContext, Fragment} from "react"
import Link from "next/link"
import {dash} from "../utils/dash"
import {Tab} from "@headlessui/react"
import EditCard from "./profile/EditCard"
import AddCourse from "./profile/AddCourse"
import Home from "./profile/Home"
const LayoutProfile = ({children}) => {
  const {searchCourse, setSearchCourse, state, dispatch} = useContext(DataContext)
  const {auth} = state
  const [value, setValue] = useState(false)

  const router = useRouter()
  useEffect(() => {
    setTimeout(() => {
      if (Object.keys(auth).length == 0) router.push("/")
    }, 10000)
  }, [auth])
  return (
    <>
      <Tab.Group>
        <Tab.List>
          <div className="drawer drawer-mobile bg-[#2a303c] ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            {/* <div className="drawer-content flex justify-center "> */}
            <div className="drawer-content flex justify-center ">
              <div className="lg:w-[60vw] max-w-screen-lg !bg-base-100  lg:pt-4 lg:p-4">
                <div className="navbar lg:hidden sticky top-0 w-full z-50 bg-base-100">
                  <div className="flex-none">
                    <label for="my-drawer-2" className="btn btn-square btn-ghost lg:hidden">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block w-5 h-5 stroke-current text-white">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M4 6h16M4 12h16M4 18h16"></path>
                      </svg>
                    </label>
                  </div>
                  <div className="flex-1 ">
                    <a
                      className="btn btn-ghost normal-case text-xl bg-base-100 text-white gap-1"
                      href="">
                      {(() => {
                        if (auth.user?.type == "student" || auth.user?.type == "instructor") {
                          return (
                            <>
                              <h1 className="text-2xl p-2 pl-4 text-white text-center">
                                {auth.user?.first_name}
                              </h1>
                              <h1 className="text-2xl p-2 pl-4 text-white text-center">
                                {auth.user?.last_name}
                              </h1>
                            </>
                          )
                        } else if (auth.user?.type == "institute") {
                          return `${auth.user?.institute} `
                        }
                      })()}
                    </a>
                  </div>
                </div>

                <Tab.Panels>
                  <Tab.Panel>
                    <Home />
                  </Tab.Panel>
                  <Tab.Panel>
                    <EditCard setValue={setValue} value={value} />
                  </Tab.Panel>
                  <Tab.Panel>
                    <AddCourse />
                  </Tab.Panel>
                </Tab.Panels>
                {/* {children} */}
              </div>
            </div>
            <div className="drawer-side !bg-base-100 ">
              <label for="my-drawer-2 " className="drawer-overlay "></label>
              <div className="overflow-y-auto flex lg:justify-end w-fit lg:w-[30vw] !bg-base-100">
                {/* <!-- Sidebar content here --> */}
                <div className="w-fit p-3 lg:m-6 rounded-md  !bg-base-100 lg:border-2">
                  {/* <!-- avatar start --> */}
                  <div className="  ">
                    {Object.keys(auth).length !== 0 ? (
                      auth.user?.รูปถ่าย !== "" ? (
                        <div class=" items-center flex text-center justify-center">
                          <div class="avatar online bg-[rgb(245,245,255)] rounded-full w-28 h-28 items-center flex text-center justify-center">
                            <div class="w-24 rounded-full">
                              <img src="/static/img/Knowledge-Logo-Vertical.png" />
                            </div>
                          </div>
                        </div>
                      ) : // <div className=" bg-[rgb(245,245,255)] rounded-full mx-auto text-center flex items-center justify-center ">
                      //   <div class="avatar online">
                      //     <div class="w-24 rounded-full">
                      //       <img src="/static/img/Knowledge-Logo-Vertical.png" />
                      //     </div>
                      //   </div>
                      // </div>
                      auth.user?.รูปถ่าย == "" ? (
                        <div className="text-center flex justify-center">
                          <div className=" w-40 h-40 bg-[rgb(245,245,255)]  rounded-full  text-center flex items-center justify-center ">
                            <span className="text-black text-Athiti !text-f3xl !font-semibold">
                              {auth.user?.type == "student" || auth.user?.type == "instructor"
                                ? auth.user?.first_name?.charAt(0) + auth.user?.last_name?.charAt(0)
                                : auth.user?.type == "institute"
                                ? auth.user?.institute?.charAt(0)
                                : null}
                            </span>
                          </div>
                        </div>
                      ) : null
                    ) : null}

                    <div className=" rounded-box menu mt-2 ">
                      {/* <!-- avatar end --> */}
                      <h1 className="text-2xl p-2 text-white text-center">
                        {(() => {
                          if (auth.user?.type == "student" || auth.user?.type == "instructor") {
                            return (
                              <>
                                <h1 className="text-2xl p-2 pl-4  text-center">
                                  {auth.user?.first_name}
                                </h1>
                                <h1 className="text-2xl p-2 pl-4  text-center">
                                  {auth.user?.last_name}
                                </h1>
                              </>
                            )
                          } else if (auth.user?.type == "institute") {
                            return `${auth.user?.institute}`
                          }
                        })()}
                      </h1>

                      <div className="text-center ">
                        {auth.user?.type == "student" ? (
                          <button className="btn-sm btn btn-active btn-accent font-Athiti font-semibold text-base">
                            {" "}
                            {auth.user?.type == "student" ? "ผู้เรียน" : null}
                          </button>
                        ) : auth.user?.type == "instructor" ? (
                          <button className="btn btn-sn  btn-warning font-Athiti font-semibold text-base">
                            {auth.user?.type == "instructor" ? "ผู้สอน" : null}
                          </button>
                        ) : auth.user?.type == "institute" ? (
                          <button className="btn-sm btn btn-primary font-Athiti font-semibold text-base">
                            {" "}
                            {auth.user?.type == "institute" ? "สถาบัน" : null}
                          </button>
                        ) : null}
                      </div>
                      <div className="flex gap-1 justify-center  bg-gray-600 rounded-sm">
                        <a className="btn btn-sm btn-ghost btn-square ">
                          <svg
                            className="inline-block w-4 h-4 fill-current text-white"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round">
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                          </svg>
                        </a>
                        <a className="btn btn-sm btn-ghost btn-square text-white">
                          <svg
                            className="inline-block w-4 h-4 fill-current"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round">
                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                          </svg>
                        </a>
                        <a className="btn btn-sm btn-ghost btn-square text-white">
                          <svg
                            className="inline-block w-4 h-4 fill-current"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                            <rect x="2" y="9" width="4" height="12" />
                            <circle cx="4" cy="4" r="2" />
                          </svg>
                        </a>
                        <a className="btn btn-sm btn-ghost btn-square text-white">
                          <svg
                            className="inline-block w-4 h-4 fill-current"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round">
                            {" "}
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="divider "></div>
                  {/* <!-- menu start --> */}
                  <div className="pt-4 ">
                    <ul className="menu  rounded-box ">
                      <li c>
                        <Link
                          href={`/instructor/id=${auth.user?.id}`}
                          as={`/instructor/id=${auth.user?.id}`}>
                          {/* {console.log(auth.user?.id)} */}
                          <a className="text-Athiti !font-semibold text-white">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="2">
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                              />
                            </svg>
                            โปรไฟล์ของคุณ
                          </a>
                        </Link>
                      </li>

                      <Tab>
                        <li>
                          {/* <Link
                          href={`/user/profile/${
                            auth.user?.type == "student" || auth.user?.type == "instructor"
                              ? dash(auth.user?.first_name)
                              : auth.user?.type == "institute"
                              ? dash(auth.user?.institute)
                              : null
                          }`}> */}
                          <a className="text-Athiti !font-semibold text-white">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor">
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                              />
                            </svg>
                            คอร์สของคุณ
                          </a>
                          {/* </Link> */}
                        </li>
                      </Tab>
                      <Tab>
                        {" "}
                        <li>
                          {/* <Link href={`/user/profile/edit-profile`}> */}
                          <a className="text-Athiti !font-semibold text-white">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="2">
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                              />
                            </svg>
                            แก้ไขข้อมูลส่วนตัว
                          </a>
                          {/* </Link> */}
                        </li>
                      </Tab>
                      <Tab>
                        {auth.user?.type == "student" ? null : (
                          <>
                            <li>
                              {/* <Link href="/user/profile/course"> */}
                              <a className="text-Athiti !font-semibold text-white">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  stroke-width="2">
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                                  />
                                </svg>
                                เพิ่มคอร์ส
                              </a>
                              {/* </Link> */}
                            </li>
                          </>
                        )}
                      </Tab>
                      {/* <Tab>Tab 3</Tab> */}
                      {/* <li>
                        <Link href={`/user/profile/edit-profile`}>
                        <a className="text-Athiti !font-semibold ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2">
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                          </svg>
                          แก้ไขข้อมูลส่วนตัว
                        </a>
                      </Link>
                      </li> */}

                      {/* <li>
                    <a href="./search.html">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                      Search
                    </a>
                  </li>
                  <li>
                    <a href="./archive.html">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                        />
                      </svg>
                      Archive
                    </a>
                  </li> */}
                      <div className="divider"></div>
                    </ul>
                  </div>
                  {/* <!-- menu end --> */}
                </div>
              </div>
            </div>
          </div>
        </Tab.List>
      </Tab.Group>
    </>
  )
}

export default LayoutProfile
