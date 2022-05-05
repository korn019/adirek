import Link from "next/link"
import {useState, useContext} from "react"
import {DataContext} from "../../store/GlobalState"
import {CourseCheck} from "../course/Courselabel"
const SingleCourse = ({course, index, filterImg}) => {
  const [data, setData] = useState(CourseCheck)
  const {state, dispatch, userLogin} = useContext(DataContext)
  const {auth} = state
  let imgBanner = data.map((item) => item.value)
  // console.log(course.filterCategory)
  let filter = data.filter((num) => {
    if (num.value.includes(course.filterCategory)) {
      return num.imgBanner
    }
  })

  const IMG = () => {
    if (
      (course.filter_category_course == "UI UX" && course.รูปถ่าย == "") ||
      (course.filter_category_course == "Web Design" && course.รูปถ่าย == "") ||
      (course.filter_category_course == "Graphic Design & Illustration" && course.รูปถ่าย == "") ||
      (course.filter_category_course == "Design Tools" && course.รูปถ่าย == "") ||
      (course.filter_category_course == "Game Design" && course.รูปถ่าย == "") ||
      (course.filter_category_course == "3D & Animation" && course.รูปถ่าย == "") ||
      (course.filter_category_course == "Fashion Design" && course.รูปถ่าย == "") ||
      (course.filter_category_course == "Architectural Design" && course.รูปถ่าย == "") ||
      (course.filter_category_course == "Interior Design" && course.รูปถ่าย == "") ||
      (course.filter_category_course == "Other Design" && course.รูปถ่าย == "") ||
      (course.filter_category_course == "Design" && course.รูปถ่าย == "")
    ) {
      return (
        <Link href={`/course/${course.list_id}`} as={`/course/${course.list_id}`}>
          <img className="object-fill h-full " src="/static/img/icon/course/P1.jpg" alt="img" />
        </Link>
      )
    } else if (
      (course.filter_category_course == "คณิตศาสตร์" && course.รูปถ่าย == "") ||
      (course.filter_category_course == "วิทยาศาสตร์" && course.รูปถ่าย == "") ||
      (course.filter_category_course == "ภาษา" && course.รูปถ่าย == "")
    ) {
      return (
        <Link href={`/course/${course.list_id}`} as={`/course/${course.list_id}`}>
          <img className="object-fill h-full " src="/static/img/icon/course/P2.jpg" alt="img" />
        </Link>
      )
    } else if (course.filter_category_course == "ทำอาหารและขนม" && course.รูปถ่าย == "") {
      return (
        <Link href={`/course/${course.list_id}`} as={`/course/${course.list_id}`}>
          <img className="object-fill h-full " src="/static/img/icon/course/P10.jpg" alt="img" />
        </Link>
      )
    } else if (course.filter_category_course == "ร้องเพลงและการแสดง" && course.รูปถ่าย == "") {
      return (
        <Link href={`/course/${course.list_id}`} as={`/course/${course.list_id}`}>
          <img className="object-fill h-full " src="/static/img/icon/course/P7.jpg" alt="img" />
        </Link>
      )
    } else if (course.filter_category_course == "งานฝีมือ" && course.รูปถ่าย == "") {
      return (
        <Link href={`/course/${course.list_id}`} as={`/course/${course.list_id}`}>
          <img className="object-fill h-full " src="/static/img/icon/course/P3.jpg" alt="img" />
        </Link>
      )
    } else if (course.filter_category_course == "ถ่ายรูปและแต่งรูป" && course.รูปถ่าย == "") {
      return (
        <Link href={`/course/${course.list_id}`} as={`/course/${course.list_id}`}>
          <img className="object-fill h-full " src="/static/img/icon/course/P4.jpg" alt="img" />
        </Link>
      )
    } else if (course.filter_category_course == "แต่งหน้า" && course.รูปถ่าย == "") {
      return (
        <Link href={`/course/${course.list_id}`} as={`/course/${course.list_id}`}>
          <img className="object-fill h-full " src="/static/img/icon/course/P5.jpg" alt="img" />
        </Link>
      )
    } else if (course.filter_category_course == "บุคลิกภาพ" && course.รูปถ่าย == "") {
      return (
        <Link href={`/course/${course.list_id}`} as={`/course/${course.list_id}`}>
          <img className="object-fill h-full " src="/static/img/icon/course/P6.jpg" alt="img" />
        </Link>
      )
    } else if (course.filter_category_course == "การพูด" && course.รูปถ่าย == "") {
      return (
        <Link href={`/course/${course.list_id}`} as={`/course/${course.list_id}`}>
          <img className="object-fill h-full " src="/static/img/icon/course/P6.jpg" alt="img" />
        </Link>
      )
    } else if (course.filter_category_course == "ร้องเพลงและการแสดง" && course.รูปถ่าย == "") {
      return (
        <Link href={`/course/${course.list_id}`} as={`/course/${course.list_id}`}>
          <img className="object-fill h-full " src="/static/img/icon/course/P7.jpg" alt="img" />
        </Link>
      )
    } else if (course.filter_category_course == "กีฬา" && course.รูปถ่าย == "") {
      return (
        <Link href={`/course/${course.list_id}`} as={`/course/${course.list_id}`}>
          <img className="object-fill h-full " src="/static/img/icon/course/P8.jpg" alt="img" />
        </Link>
      )
    } else if (course.filter_category_course == "จัดดอกไม้และจัดสวนถาด" && course.รูปถ่าย == "") {
      return (
        <Link href={`/course/${course.list_id}`} as={`/course/${course.list_id}`}>
          <img className="object-fill h-full " src="/static/img/icon/course/P14.jpg" alt="img" />
        </Link>
      )
    } else if (course.filter_category_course == "วาดรูป" && course.รูปถ่าย == "") {
      return (
        <Link href={`/course/${course.list_id}`} as={`/course/${course.list_id}`}>
          <img className="object-fill h-full " src="/static/img/icon/course/P15.jpg" alt="img" />
        </Link>
      )
    } else if (course.filter_category_course == "ดนตรี" && course.รูปถ่าย == "") {
      return (
        <Link href={`/course/${course.list_id}`} as={`/course/${course.list_id}`}>
          <img className="object-fill h-full " src="/static/img/icon/course/P9.jpg" alt="img" />
        </Link>
      )
    } else if (course.filter_category_course == "ทำอาหารและขนม" && course.รูปถ่าย == "") {
      return (
        <Link href={`/course/${course.list_id}`} as={`/course/${course.list_id}`}>
          <img className="object-fill h-full " src="/static/img/icon/course/P10.jpg" alt="img" />
        </Link>
      )
    } else if (course.filter_category_course == "ดูดวง" && course.รูปถ่าย == "") {
      return (
        <Link href={`/course/${course.list_id}`} as={`/course/${course.list_id}`}>
          <img className="object-fill h-full " src="/static/img/icon/course/P11.jpg" alt="img" />
        </Link>
      )
    } else if (course.filter_category_course == "Cryptocurrency" && course.รูปถ่าย == "") {
      return (
        <Link href={`/course/${course.list_id}`} as={`/course/${course.list_id}`}>
          <img className="object-fill h-full " src="/static/img/icon/course/P12.jpg" alt="img" />
        </Link>
      )
    } else if (course.filter_category_course == "NFT" && course.รูปถ่าย == "") {
      return (
        <Link href={`/course/${course.list_id}`} as={`/course/${course.list_id}`}>
          <img className="object-fill h-full " src="/static/img/icon/course/P13.jpg" alt="img" />
        </Link>
      )
    } else {
      return (
        <Link href={`/course/${course.list_id}`} as={`/course/${course.list_id}`}>
          <img className="object-cover" src={`${course.รูปถ่าย}`} alt="img" />
        </Link>
      )
    }
  }
  function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
  }
  return (
    <div className="item h-[400px]">
      <div className="single-course-wrap  ">
        <div className="thumb w-full h-[190px] cursor-pointer">
          <Link href={`/course/${course.list_id}`} as={`/course/${course.list_id}`}>
            <IMG />
          </Link>
        </div>
        <div className="wrap-details">
          <h6 className="truncate ...">
            <Link href={`/course/${course.list_id}`} as={`/course/${course.list_id}`}>
              <a href="#" className="text-Athiti !font-medium text-flg">
                {course.detail}
              </a>
            </Link>
          </h6>
          <div className="user-area w-full">
            <div className="user-details truncate">
              <img
                className="w-[2.5rem] h-[2.5rem]"
                src={
                  course.รูปถ่าย == ""
                    ? "/static/img/Knowledge-Logo-Vertical.png"
                    : `${course.รูปถ่าย}`
                }
                alt="img"
              />
              <p className="truncate">
                <Link href={`/instructor/${course.id}`} as={`/instructor/id=${course.id}`}>
                  <a>
                    {course.type == "instructor" || course.type == ""
                      ? `${course.first_name}  ${course.last_name}`
                      : course.type == "institute"
                      ? course.institute
                      : null}
                  </a>
                </Link>
              </p>
            </div>
            {/* <div className="user-rating">
              <span>
                <i className="fa fa-star"></i>
                4.9
              </span>
              (76)
            </div> */}
          </div>
          <div className="price-wrap">
            <div className="row align-items-center">
              <div className="col-6">
                <p className="!text-xl !md:text-[20px] text-Athiti !font-medium truncate ...">
                  <Link
                    href={`/category/${course.filter_category_course}`}
                    as={`/category/${course.filter_category_course}`}>
                    <a className=" ">{course.filter_category_course}</a>
                  </Link>
                  {/* <Link
                    href={`/Course/${course.filterCategory}`}
                    as={`/Course/${course.filterCategory}`}>
                    <a href="">{course.Category}</a>
                  </Link> */}
                </p>
              </div>
              <div className="col-6 text-end">
                <div className="price text-Athiti ">
                  <p className="truncate ...  text-Athiti !font-semibold !text-[#0071dc]">
                    {" "}
                    {formatNumber(course.price_course)} บาท
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleCourse
