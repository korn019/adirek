import Link from "next/link"
import {useState} from "react"
import {CourseCheck} from "../course/Courselabel"
const SingleCourse = ({course, index, filterImg}) => {
  const [data, setData] = useState(CourseCheck)

  let imgBanner = data.map((item) => item.value)
  // console.log(course.filterCategory)
  let filter = data.filter((num) => {
    if (num.value.includes(course.filterCategory)) {
      return num.imgBanner
    }
  })

  const IMG = () => {
    if (
      (course.filterCategory == "UI UX" && course.รูปถ่าย == "") ||
      (course.filterCategory == "Web Design" && course.รูปถ่าย == "") ||
      (course.filterCategory == "Graphic Design & Illustration" && course.รูปถ่าย == "") ||
      (course.filterCategory == "Design Tools" && course.รูปถ่าย == "") ||
      (course.filterCategory == "Game Design" && course.รูปถ่าย == "") ||
      (course.filterCategory == "3D & Animation" && course.รูปถ่าย == "") ||
      (course.filterCategory == "Fashion Design" && course.รูปถ่าย == "") ||
      (course.filterCategory == "Architectural Design" && course.รูปถ่าย == "") ||
      (course.filterCategory == "Interior Design" && course.รูปถ่าย == "") ||
      (course.filterCategory == "Other Design" && course.รูปถ่าย == "") ||
      (course.filterCategory == "Design" && course.รูปถ่าย == "")
    ) {
      return (
        <Link href={`/Instructor/${index}`} as={`/Instructor/id=${index}`}>
          <img className="object-fill h-full " src="/static/img/icon/course/P1.jpg" alt="img" />
        </Link>
      )
    } else if (
      (course.filterCategory == "คณิตศาสตร์" && course.รูปถ่าย == "") ||
      (course.filterCategory == "วิทยาศาสตร์" && course.รูปถ่าย == "") ||
      (course.filterCategory == "ภาษา" && course.รูปถ่าย == "")
    ) {
      return (
        <Link href={`/Instructor/${index}`} as={`/Instructor/id=${index}`}>
          <img className="object-fill h-full " src="/static/img/icon/course/P2.jpg" alt="img" />
        </Link>
      )
    } else if (course.filterCategory == "ทำอาหารและขนม" && course.รูปถ่าย == "") {
      return (
        <Link href={`/Instructor/${index}`} as={`/Instructor/id=${index}`}>
          <img className="object-fill h-full " src="/static/img/icon/course/P10.jpg" alt="img" />
        </Link>
      )
    } else if (course.filterCategory == "ร้องเพลงและการแสดง" && course.รูปถ่าย == "") {
      return (
        <Link href={`/Instructor/${index}`} as={`/Instructor/id=${index}`}>
          <img className="object-fill h-full " src="/static/img/icon/course/P7.jpg" alt="img" />
        </Link>
      )
    } else if (course.filterCategory == "งานฝีมือ" && course.รูปถ่าย == "") {
      return (
        <Link href={`/Instructor/${index}`} as={`/Instructor/id=${index}`}>
          <img className="object-fill h-full " src="/static/img/icon/course/P3.jpg" alt="img" />
        </Link>
      )
    } else if (course.filterCategory == "ถ่ายรูปและแต่งรูป" && course.รูปถ่าย == "") {
      return (
        <Link href={`/Instructor/${index}`} as={`/Instructor/id=${index}`}>
          <img className="object-fill h-full " src="/static/img/icon/course/P4.jpg" alt="img" />
        </Link>
      )
    } else if (course.filterCategory == "แต่งหน้า" && course.รูปถ่าย == "") {
      return (
        <Link href={`/Instructor/${index}`} as={`/Instructor/id=${index}`}>
          <img className="object-fill h-full " src="/static/img/icon/course/P5.jpg" alt="img" />
        </Link>
      )
    } else if (course.filterCategory == "บุคลิกภาพ" && course.รูปถ่าย == "") {
      return (
        <Link href={`/Instructor/${index}`} as={`/Instructor/id=${index}`}>
          <img className="object-fill h-full " src="/static/img/icon/course/P6.jpg" alt="img" />
        </Link>
      )
    } else if (course.filterCategory == "การพูด" && course.รูปถ่าย == "") {
      return (
        <Link href={`/Instructor/${index}`} as={`/Instructor/id=${index}`}>
          <img className="object-fill h-full " src="/static/img/icon/course/P6.jpg" alt="img" />
        </Link>
      )
    } else if (course.filterCategory == "ร้องเพลงและการแสดง" && course.รูปถ่าย == "") {
      return (
        <Link href={`/Instructor/${index}`} as={`/Instructor/id=${index}`}>
          <img className="object-fill h-full " src="/static/img/icon/course/P7.jpg" alt="img" />
        </Link>
      )
    } else if (course.filterCategory == "กีฬา" && course.รูปถ่าย == "") {
      return (
        <Link href={`/Instructor/${index}`} as={`/Instructor/id=${index}`}>
          <img className="object-fill h-full " src="/static/img/icon/course/P8.jpg" alt="img" />
        </Link>
      )
    } else if (course.filterCategory == "จัดดอกไม้และจัดสวนถาด" && course.รูปถ่าย == "") {
      return (
        <Link href={`/Instructor/${index}`} as={`/Instructor/id=${index}`}>
          <img className="object-fill h-full " src="/static/img/icon/course/P14.jpg" alt="img" />
        </Link>
      )
    } else if (course.filterCategory == "วาดรูป" && course.รูปถ่าย == "") {
      return (
        <Link href={`/Instructor/${index}`} as={`/Instructor/id=${index}`}>
          <img className="object-fill h-full " src="/static/img/icon/course/P15.jpg" alt="img" />
        </Link>
      )
    } else if (course.filterCategory == "ดนตรี" && course.รูปถ่าย == "") {
      return (
        <Link href={`/Instructor/${index}`} as={`/Instructor/id=${index}`}>
          <img className="object-fill h-full " src="/static/img/icon/course/P9.jpg" alt="img" />
        </Link>
      )
    } else if (course.filterCategory == "ทำอาหารและขนม" && course.รูปถ่าย == "") {
      return (
        <Link href={`/Instructor/${index}`} as={`/Instructor/id=${index}`}>
          <img className="object-fill h-full " src="/static/img/icon/course/P10.jpg" alt="img" />
        </Link>
      )
    } else if (course.filterCategory == "ดูดวง" && course.รูปถ่าย == "") {
      return (
        <Link href={`/Instructor/${index}`} as={`/Instructor/id=${index}`}>
          <img className="object-fill h-full " src="/static/img/icon/course/P11.jpg" alt="img" />
        </Link>
      )
    } else if (course.filterCategory == "Cryptocurrency" && course.รูปถ่าย == "") {
      return (
        <Link href={`/Instructor/${index}`} as={`/Instructor/id=${index}`}>
          <img className="object-fill h-full " src="/static/img/icon/course/P12.jpg" alt="img" />
        </Link>
      )
    } else if (course.filterCategory == "NFT" && course.รูปถ่าย == "") {
      return (
        <Link href={`/Instructor/${index}`} as={`/Instructor/id=${index}`}>
          <img className="object-fill h-full " src="/static/img/icon/course/P13.jpg" alt="img" />
        </Link>
      )
    } else {
      return (
        <Link href={`/Instructor/${index}`} as={`/Instructor/id=${index}`}>
          <img className="object-cover" src={`${course.รูปถ่าย}`} alt="img" />
        </Link>
      )
    }
  }
  function formatNumber (num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "1,")
}

  return (
    <div className="item h-[400px]">
      <div className="single-course-wrap  ">
        <div className="thumb w-full h-[190px] cursor-pointer">
          <Link href={`/Instructor/${index}`} as={`/Instructor/id=${index}`}>
            <IMG />
          </Link>
        </div>
        <div className="wrap-details">
          <h6 className="truncate ...">
            <Link href={`/Instructor/${index}`} as={`/Instructor/id=${index}`}>
              <a href="#" className="font-title text-flg">
                {course.รายละเอียดคอร์สเรียน}
              </a>
            </Link>
          </h6>
          <div className="user-area w-full">
            <div className="user-details truncate">
              <img
                className="w-[1.5rem] h-[1.5rem]"
                src={course.รูปถ่าย == "" ? "/static/img/user-review.png" : `${course.รูปถ่าย}`}
                alt="img"
              />
              <p className="truncate">
                <Link href={`/Instructor/${index}`} as={`/Instructor/id=${index}`}>
                  <a>
                    {course.ชื่อจริง} {course.นามสกุล}
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
                <p className="truncate ...">
                  <Link
                    href={`/Course/${
                      course.filterCategory
                    }`}
                    as={`/Course/${
                      course.filterCategory 
                    }`}>
                    <a>{course.Category}</a>
                  </Link>
                  {/* <Link
                    href={`/Course/${course.filterCategory}`}
                    as={`/Course/${course.filterCategory}`}>
                    <a href="">{course.Category}</a>
                  </Link> */}
                </p>
              </div>
              <div className="col-6 text-end">
                <div className="price">
                  <p className="truncate ... price"> {formatNumber(course.ราคาคอร์สเรียน)} บาท</p>
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
