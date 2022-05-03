import Image from "next/image"
import Link from "next/link"
const CourseVideo = ({item}) => {
  
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
          <img className="object-fill h-full w-full rounded-md" src="/static/img/icon/course/P1.jpg" alt="img" />
        </Link>
      )
    } else if (
      (item.filter_category_course == "คณิตศาสตร์" && item.รูปถ่าย == "") ||
      (item.filter_category_course == "วิทยาศาสตร์" && item.รูปถ่าย == "") ||
      (item.filter_category_course == "ภาษา" && item.รูปถ่าย == "")
    ) {
      return (
        <Link href={`/course/${item.list_id}`} as={`/course/${item.list_id}`}>
          <img className="object-fill h-full w-full rounded-md" src="/static/img/icon/course/P2.jpg" alt="img" />
        </Link>
      )
    } else if (item.filter_category_course == "ทำอาหารและขนม" && item.รูปถ่าย == "") {
      return (
        <Link href={`/course/${item.list_id}`} as={`/course/${item.list_id}`}>
          <img className="object-fill h-full w-full rounded-md" src="/static/img/icon/course/P10.jpg" alt="img" />
        </Link>
      )
    } else if (item.filter_category_course == "ร้องเพลงและการแสดง" && item.รูปถ่าย == "") {
      return (
        <Link href={`/course/${item.list_id}`} as={`/course/${item.list_id}`}>
          <img className="object-fill h-full w-full rounded-md" src="/static/img/icon/course/P7.jpg" alt="img" />
        </Link>
      )
    } else if (item.filter_category_course == "งานฝีมือ" && item.รูปถ่าย == "") {
      return (
        <Link href={`/course/${item.list_id}`} as={`/course/${item.list_id}`}>
          <img className="object-fill h-full w-full rounded-mdw-full rounded-md" src="/static/img/icon/course/P3.jpg" alt="img" />
        </Link>
      )
    } else if (item.filter_category_course == "ถ่ายรูปและแต่งรูป" && item.รูปถ่าย == "") {
      return (
        <Link href={`/course/${item.list_id}`} as={`/course/${item.list_id}`}>
          <img className="object-fill h-full w-full rounded-md" src="/static/img/icon/course/P4.jpg" alt="img" />
        </Link>
      )
    } else if (item.filter_category_course == "แต่งหน้า" && item.รูปถ่าย == "") {
      return (
        <Link href={`/course/${item.list_id}`} as={`/course/${item.list_id}`}>
          <img className="object-fill h-full w-full rounded-md" src="/static/img/icon/course/P5.jpg" alt="img" />
        </Link>
      )
    } else if (item.filter_category_course == "บุคลิกภาพ" && item.รูปถ่าย == "") {
      return (
        <Link href={`/course/${item.list_id}`} as={`/course/${item.list_id}`}>
          <img className="object-fill h-full w-full rounded-md" src="/static/img/icon/course/P6.jpg" alt="img" />
        </Link>
      )
    } else if (item.filter_category_course == "การพูด" && item.รูปถ่าย == "") {
      return (
        <Link href={`/course/${item.list_id}`} as={`/course/${item.list_id}`}>
          <img className="object-fill h-full w-full rounded-md" src="/static/img/icon/course/P6.jpg" alt="img" />
        </Link>
      )
    } else if (item.filter_category_course == "ร้องเพลงและการแสดง" && item.รูปถ่าย == "") {
      return (
        <Link href={`/course/${item.list_id}`} as={`/course/${item.list_id}`}>
          <img className="object-fill h-full w-full rounded-md" src="/static/img/icon/course/P7.jpg" alt="img" />
        </Link>
      )
    } else if (item.filter_category_course == "กีฬา" && item.รูปถ่าย == "") {
      return (
        <Link href={`/course/${item.list_id}`} as={`/course/${item.list_id}`}>
          <img className="object-fill h-full w-full rounded-md" src="/static/img/icon/course/P8.jpg" alt="img" />
        </Link>
      )
    } else if (item.filter_category_course == "จัดดอกไม้และจัดสวนถาด" && item.รูปถ่าย == "") {
      return (
        <Link href={`/course/${item.list_id}`} as={`/course/${item.list_id}`}>
          <img className="object-fill h-full w-full rounded-md" src="/static/img/icon/course/P14.jpg" alt="img" />
        </Link>
      )
    } else if (item.filter_category_course == "วาดรูป" && item.รูปถ่าย == "") {
      return (
        <Link href={`/course/${item.list_id}`} as={`/course/${item.list_id}`}>
          <img className="object-fill h-full w-full rounded-md" src="/static/img/icon/course/P15.jpg" alt="img" />
        </Link>
      )
    } else if (item.filter_category_course == "ดนตรี" && item.รูปถ่าย == "") {
      return (
        <Link href={`/course/${item.list_id}`} as={`/course/${item.list_id}`}>
          <img className="object-fill h-full w-full rounded-md" src="/static/img/icon/course/P9.jpg" alt="img" />
        </Link>
      )
    } else if (item.filter_category_course == "ทำอาหารและขนม" && item.รูปถ่าย == "") {
      return (
        <Link href={`/course/${item.list_id}`} as={`/course/${item.list_id}`}>
          <img className="object-fill h-full w-full rounded-md" src="/static/img/icon/course/P10.jpg" alt="img" />
        </Link>
      )
    } else if (item.filter_category_course == "ดูดวง" && item.รูปถ่าย == "") {
      return (
        <Link href={`/course/${item.list_id}`} as={`/course/${item.list_id}`}>
          <img className="object-fill h-full w-full rounded-md" src="/static/img/icon/course/P11.jpg" alt="img" />
        </Link>
      )
    } else if (item.filter_category_course == "Cryptocurrency" && item.รูปถ่าย == "") {
      return (
        <Link href={`/course/${item.list_id}`} as={`/course/${item.list_id}`}>
          <img className="object-fill h-full w-full rounded-md" src="/static/img/icon/course/P12.jpg" alt="img" />
        </Link>
      )
    } else if (item.filter_category_course == "NFT" && item.รูปถ่าย == "") {
      return (
        <Link href={`/course/${item.list_id}`} as={`/course/${item.list_id}`}>
          <img className="object-fill h-full w-full rounded-md" src="/static/img/icon/course/P13.jpg" alt="img" />
        </Link>
      )
    } else {
      return (
        <Link href={`/course/${item.list_id}`} as={`/course/${item.list_id}`}>
          <img className="object-cover  h-full w-full rounded-md" src={`${item.รูปถ่าย}`} alt="img" />
        </Link>
      )
    }
  }
  return (
    <div className="thumb" style={{backgroundSize:'cover'}}>
    

      <IMG />
      {/* <Image src="/static/img/course/video.png" alt="img" width='850' height='480' /> */}
    </div>
  )
}

export default CourseVideo
