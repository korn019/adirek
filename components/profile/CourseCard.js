import {useRouter} from "next/router"
import {DataContext} from "../../store/GlobalState"
import {toast} from "react-toastify"
import {useEffect, useState, useContext, Fragment} from "react"
import Link from "next/link"
import { dash } from "../../utils/dash"
const CourseCard = ({item}) => {
  const {searchCourse, setSearchCourse, state, dispatch} = useContext(DataContext)
  const {auth} = state
  const router = useRouter()
  useEffect(() => {
    const token = localStorage.getItem("token")

    if (!auth) {
      dispatch({type: "NOTIFY", payload: {error: toast.error("You are not already logged in")}})
      router.push("/")
    }
  }, [])
  console.log(item)
  const IMG = () => {
    if (
      (item.filter_category_course == "UI UX" && item.รูปถ่าย == "") ||
      (item.filter_category_course == "Web Design" && item.รูปถ่าย == "") ||
      (item.filter_category_course == "Graphic Design & Illustration" && item.รูปถ่าย == "") ||
      (item.filter_category_course == "Design Tools" && item.รูปถ่าย == "") ||
      (item.filter_category_course == "Game Design" && item.รูปถ่าย == "") ||
      (item.filter_category_course == "3D & Animation" && item.รูปถ่าย == "") ||
      (item.filter_category_course == "Fashion Design" && item.รูปถ่าย == "") ||
      (item.filter_category_course == "Architectural Design" && item.รูปถ่าย == "") ||
      (item.filter_category_course == "Interior Design" && item.รูปถ่าย == "") ||
      (item.filter_category_course == "Other Design" && item.รูปถ่าย == "") ||
      (item.filter_category_course == "Design" && item.รูปถ่าย == "")
    ) {
      return (
        <Link href={`/course/${item.list_id}`} as={`/course/${item.list_id}`}>
          <img className="object-cover shadow-lg rounded-lg group-hover:opacity-75" src="/static/img/icon/course/P1.jpg"  alt={`${item.title_course}`} />
        </Link>
      )
    } else if (
      (item.filter_category_course == "คณิตศาสตร์" && item.รูปถ่าย == "") ||
      (item.filter_category_course == "วิทยาศาสตร์" && item.รูปถ่าย == "") ||
      (item.filter_category_course == "ภาษา" && item.รูปถ่าย == "")
    ) {
      return (
        <Link href={`/course/${item.list_id}`} as={`/course/${item.list_id}`}>
          <img className="object-cover shadow-lg rounded-lg group-hover:opacity-75" src="/static/img/icon/course/P2.jpg"  alt={`${item.title_course}`} />
        </Link>
      )
    } else if (item.filter_category_course == "ทำอาหารและขนม" && item.รูปถ่าย == "") {
      return (
        <Link href={`/course/${item.list_id}`} as={`/course/${item.list_id}`}>
          <img className="object-cover shadow-lg rounded-lg group-hover:opacity-75" src="/static/img/icon/course/P10.jpg"  alt={`${item.title_course}`} />
        </Link>
      )
    } else if (item.filter_category_course == "ร้องเพลงและการแสดง" && item.รูปถ่าย == "") {
      return (
        <Link href={`/course/${item.list_id}`} as={`/course/${item.list_id}`}>
          <img className="object-cover shadow-lg rounded-lg group-hover:opacity-75" src="/static/img/icon/course/P7.jpg"  alt={`${item.title_course}`} />
        </Link>
      )
    } else if (item.filter_category_course == "งานฝีมือ" && item.รูปถ่าย == "") {
      return (
        <Link href={`/course/${item.list_id}`} as={`/course/${item.list_id}`}>
          <img className="object-cover shadow-lg rounded-lg group-hover:opacity-75" src="/static/img/icon/course/P3.jpg"  alt={`${item.title_course}`} />
        </Link>
      )
    } else if (item.filter_category_course == "ถ่ายรูปและแต่งรูป" && item.รูปถ่าย == "") {
      return (
        <Link href={`/course/${item.list_id}`} as={`/course/${item.list_id}`}>
          <img className="object-cover shadow-lg rounded-lg group-hover:opacity-75" src="/static/img/icon/course/P4.jpg"  alt={`${item.title_course}`} />
        </Link>
      )
    } else if (item.filter_category_course == "แต่งหน้า" && item.รูปถ่าย == "") {
      return (
        <Link href={`/course/${item.list_id}`} as={`/course/${item.list_id}`}>
          <img className="object-cover shadow-lg rounded-lg group-hover:opacity-75" src="/static/img/icon/course/P5.jpg"  alt={`${item.title_course}`} />
        </Link>
      )
    } else if (item.filter_category_course == "บุคลิกภาพ" && item.รูปถ่าย == "") {
      return (
        <Link href={`/course/${item.list_id}`} as={`/course/${item.list_id}`}>
          <img className="object-cover shadow-lg rounded-lg group-hover:opacity-75" src="/static/img/icon/course/P6.jpg"  alt={`${item.title_course}`} />
        </Link>
      )
    } else if (item.filter_category_course == "การพูด" && item.รูปถ่าย == "") {
      return (
        <Link href={`/course/${item.list_id}`} as={`/course/${item.list_id}`}>
          <img className="object-cover shadow-lg rounded-lg group-hover:opacity-75" src="/static/img/icon/course/P6.jpg"  alt={`${item.title_course}`} />
        </Link>
      )
    } else if (item.filter_category_course == "ร้องเพลงและการแสดง" && item.รูปถ่าย == "") {
      return (
        <Link href={`/course/${item.list_id}`} as={`/course/${item.list_id}`}>
          <img className="object-cover shadow-lg rounded-lg group-hover:opacity-75" src="/static/img/icon/course/P7.jpg"  alt={`${item.title_course}`} />
        </Link>
      )
    } else if (item.filter_category_course == "กีฬา" && item.รูปถ่าย == "") {
      return (
        <Link href={`/course/${item.list_id}`} as={`/course/${item.list_id}`}>
          <img className="object-cover shadow-lg rounded-lg group-hover:opacity-75" src="/static/img/icon/course/P8.jpg"  alt={`${item.title_course}`} />
        </Link>
      )
    } else if (item.filter_category_course == "จัดดอกไม้และจัดสวนถาด" && item.รูปถ่าย == "") {
      return (
        <Link href={`/course/${item.list_id}`} as={`/course/${item.list_id}`}>
          <img className="object-cover shadow-lg rounded-lg group-hover:opacity-75" src="/static/img/icon/course/P14.jpg"  alt={`${item.title_course}`} />
        </Link>
      )
    } else if (item.filter_category_course == "วาดรูป" && item.รูปถ่าย == "") {
      return (
        <Link href={`/course/${item.list_id}`} as={`/course/${item.list_id}`}>
          <img className="object-cover shadow-lg rounded-lg group-hover:opacity-75" src="/static/img/icon/course/P15.jpg"  alt={`${item.title_course}`} />
        </Link>
      )
    } else if (item.filter_category_course == "ดนตรี" && item.รูปถ่าย == "") {
      return (
        <Link href={`/course/${item.list_id}`} as={`/course/${item.list_id}`}>
          <img className="object-cover shadow-lg rounded-lg group-hover:opacity-75" src="/static/img/icon/course/P9.jpg"  alt={`${item.title_course}`} />
        </Link>
      )
    } else if (item.filter_category_course == "ทำอาหารและขนม" && item.รูปถ่าย == "") {
      return (
        <Link href={`/course/${item.list_id}`} as={`/course/${item.list_id}`}>
          <img className="object-cover shadow-lg rounded-lg group-hover:opacity-75" src="/static/img/icon/course/P10.jpg"  alt={`${item.title_course}`} />
        </Link>
      )
    } else if (item.filter_category_course == "ดูดวง" && item.รูปถ่าย == "") {
      return (
        <Link href={`/course/${item.list_id}`} as={`/course/${item.list_id}`}>
          <img className="object-cover shadow-lg rounded-lg group-hover:opacity-75" src="/static/img/icon/course/P11.jpg"  alt={`${item.title_course}`} />
        </Link>
      )
    } else if (item.filter_category_course == "Cryptocurrency" && item.รูปถ่าย == "") {
      return (
        <Link href={`/course/${item.list_id}`} as={`/course/${item.list_id}`}>
          <img className="object-cover shadow-lg rounded-lg group-hover:opacity-75" src="/static/img/icon/course/P12.jpg"  alt={`${item.title_course}`} />
        </Link>
      )
    } else if (item.filter_category_course == "NFT" && item.รูปถ่าย == "") {
      return (
        <Link href={`/course/${item.list_id}`} as={`/course/${item.list_id}`}>
          <img className="object-cover shadow-lg rounded-lg group-hover:opacity-75" src="/static/img/icon/course/P13.jpg"  alt={`${item.title_course}`} />
        </Link>
      )
    } else {
      return (
        <Link href={`/course/${item.list_id}`} as={`/course/${item.list_id}`}>
          <img className="object-cover" src={`${item.รูปถ่าย}`}  alt={`${item.title_course}`} />
        </Link>
      )
    }
  }
  function ConvertUTCTimeToLocalTime(UTCDateString)
  {
      var convertdLocalTime = new Date(UTCDateString);

      var hourOffset = convertdLocalTime.getTimezoneOffset() / 60;

      convertdLocalTime.setHours( convertdLocalTime.getHours() + hourOffset ); 

      return convertdLocalTime;
  }
  let someDate = new Date(item.create_at);
  let getDate = someDate.toLocaleDateString("th-TH", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  })
  let getTime = someDate.toLocaleTimeString('th-TH')

  console.log(getTime);
  // console.log(someDate.toLocaleString('uk', { timeZone: 'UTC' }));
  
  return (
    <>
      <div className="container mx-auto py-12 px-6 card card-side !bg-[rgb(245 245 245)]">
        <div className="">
          <div className="space-y-4 lg:grid lg:grid-cols-3 lg:items-start lg:gap-6 lg:space-y-0">
            <div className="w-full">
              <IMG />
              {/* <img
                className="object-cover shadow-lg rounded-lg group-hover:opacity-75"
                src={`${item.รูปถ่าย == ''}`}
                alt={`${item.title_course}`}
              /> */}
              {/* <img
                className="object-cover shadow-lg rounded-lg group-hover:opacity-75"
                src="https://stackdiary.com/140x100.png"
                alt="Featured Photo"
              /> */}
            </div>

            <div className="sm:col-span-2">
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  <button className="btn btn-xs btn-error text-Athiti !leading-none !text-base">{item.filter_category_course}</button>
                  {/* <button className="btn btn-xs btn-success">Author</button> */}
                  {/* <span className="inline-flex items-center leading-none px-2.5 py-1.5 text-sm font-medium text-skin-inverted rounded-full border border-skin-input">
                    <svg
                      className="mr-1.5 h-2 w-2 brand-react"
                      fill="currentColor"
                      viewBox="0 0 8 8">
                      <circle cx="4" cy="4" r="3"></circle>
                    </svg>
                    Tag #1
                  </span>

                  <span className="inline-flex items-center leading-none px-2.5 py-1.5 text-sm font-medium text-skin-inverted rounded-full border border-skin-input">
                    <svg
                      className="mr-1.5 h-2 w-2 brand-packages"
                      fill="currentColor"
                      viewBox="0 0 8 8">
                      <circle cx="4" cy="4" r="3"></circle>
                    </svg>
                    Tag #2
                  </span>

                  <span className="inline-flex items-center leading-none px-2.5 py-1.5 text-sm font-medium text-skin-inverted rounded-full border border-skin-input">
                    <svg
                      className="mr-1.5 h-2 w-2 brand-tutoriel"
                      fill="currentColor"
                      viewBox="0 0 8 8">
                      <circle cx="4" cy="4" r="3"></circle>
                    </svg>
                    Tag #3
                  </span> */}
                </div>
              </div>

              <div className="mt-2">
                <Link
                  href={`/course/${dash(item.title_course)}`}
                  as={`/course/${item.list_id}`}>
                {/* <Link href={{pathname: "/course/[course]", query: {course: `${dash(item.title_course)}`}}}> */}
                  <a className="group">
                    <h4 className="text-xl leading-6 font-semibold  text-skin-inverted group-hover:text-skin-primary font-Athiti ">
                      {item.title_course}
                    </h4>
                  </a>
                </Link>
                <p className="mt-1 text-sm font-normal text-skin-base leading-5 line-clamp-4">
                  {item.detail}
                </p>

                <div className="mt-3 flex items-center font-sans">
                  <div className="shrink-0">
                    <a href="">
                      <span className="sr-only">{auth.user?.first_name}</span>

                      <div className="h-8 w-8 rounded-full overflow-hidden bg-gray-400 justify-center items-center flex">
                        <span className="text-black text-Athiti !font-semibold !text-base">
                          {Object.keys(auth).length !== 0 ? (
                            auth.user?.type == "student" || auth.user?.type == "instructor" ? (
                              auth.user?.first_name.charAt(0) + auth.user?.last_name.charAt(0)
                            ) : auth.user?.type == "institute" ? (
                              auth.user?.institute?.charAt(0)
                            ) : null
                          ) : (
                            <img
                              className="h-10 w-10 rounded-full"
                              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                              alt=""
                            />
                          )}
                        </span>
                      </div>
                    </a>
                  </div>

                  <div className="ml-3">
                    <p className="text-sm font-medium text-skin-inverted">
                      <a href="" className="hover:underline uppercase">
                        {auth.user?.type == "student" || auth.user?.type == "instructor"
                          ? auth.user?.first_name
                          : auth.user?.type == "institute"
                          ? auth.user?.institute
                          : null}
                        {/* {auth.user?.first_name} */}
                      </a>
                    </p>

                    <div className="flex space-x-1 text-sm text-skin-muted">
                      <span className="subtext-Athiti ">{`${getDate} เวลา ${getTime} `}</span>
                      {/* <span aria-hidden="true">·</span>
                      <span>3 min read time</span> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CourseCard
