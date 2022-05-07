import Link from "next/link"
import {useState} from "react"
import {CourseCheck2} from "../category/Check"
const SingleSlideCourse = ({
  item,
  availableCourse,
  availableCourseCategory,
  available,
  courseData,
}) => {
  const [course, setCourse] = useState(CourseCheck2)

  const CourseLength = availableCourse.filter((num) => num.includes(item.filter_category_course))
                          console.log(availableCourse)

  return (
    <>
      <div className="item z-50  drop-shadow-xl">
        {/* <div
          className={`single-intro-wrap group-hover:scale-[1.02] group-hover:duration-200  ${
            item.value === "Design"
              ? "!bg-[#EECF6D]  group-hover:!bg-slate-50  group-hover:duration-400"
              : item.value === "วิชาการ"
              ? "!bg-[#1F2A54] group-hover:!bg-slate-50  group-hover:duration-400 "
              : item.value === "Life Style"
              ? "!bg-[#22356C]  group-hover:!bg-slate-50  group-hover:duration-400"
              : item.value === "ถ่ายรูปและแต่งรูป"
              ? "!bg-[#B9CF32] group-hover:!bg-slate-50  group-hover:duration-400 "
              : item.value === "แต่งหน้า"
              ? "!bg-[#96C23D] group-hover:!bg-slate-50  group-hover:duration-400 "
              : item.value === "บุคลิกภาพ"
              ? "!bg-[#96C23D] group-hover:!bg-slate-50  group-hover:duration-400 "
              : item.value === "ร้องเพลงและการแสดง"
              ? "!bg-[#F9BA14] group-hover:!bg-slate-50  group-hover:duration-400 "
              : item.value === "กีฬา"
              ? "!bg-[#F6A21D]  group-hover:!bg-slate-50  group-hover:duration-400"
              : item.value === "ดนตรี"
              ? "!bg-[#EE6724] group-hover:!bg-slate-50  group-hover:duration-400 "
              : item.value === "ทำอาหารและขนม"
              ? "!bg-[#E8258C] group-hover:!bg-slate-50  group-hover:duration-400 "
              : item.value === "ดูดวง"
              ? "!bg-[#D1157B] group-hover:!bg-slate-50  group-hover:duration-400 "
              : item.value === "Cryptocurrency"
              ? "!bg-[#821A4A] group-hover:!bg-slate-50  group-hover:duration-400 "
              : item.value === "NFT"
              ? "!bg-[#2097D4] group-hover:!bg-slate-50  group-hover:duration-400 "
              : null
          }`}
        > */}
        <div
          className={`single-intro-wrap    ${
            item.filter_id % 2 == 1
              ? "!bg-[#EE6724]  group-hover:!bg-slate-50  "
              : "!bg-[#22356C] group-hover:!bg-slate-50  "
          }`}>
          <div className="wrap-details ">
            <h6 className="text-center">
              <Link
                href={`/category/${item.filter_category_course}`}
                as={`/category/${item.filter_category_course}`}>
                <a
                  style={{fontSize: 22}}
                  className="text-Athiti !font-semibold !text-slate-50  group-hover:!text-black   leading-relaxed tracking-wide">
                  {item.filter_category_course}
                </a>
              </Link>
            </h6>

            <p className=" text-Athiti !text-slate-50  !text-lg font-Mitr font-light drop-shadow-2xl group-hover:!text-black">
              {" "}
              ทั้งหมด{" "}
              <strong className="text-xl   font-normal ">
                {/* {filter.map((num) => {
                  return num
                })} */}
                &nbsp;
                {CourseLength.length}
                {/* {item.value == "Design"
                  ? CourseLength.length
                  : item.value == "วิชาการ"
                  ? CourseLength.length
                  : item.value == "Life Style"
                  ? CourseLength.length
                  : filter.length} */}
                &nbsp;
              </strong>{" "}
              คอร์ส
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleSlideCourse
