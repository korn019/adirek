import Link from "next/link";
import { useState } from "react";
import { CourseCheck2 } from "../category/Check";
const SingleSlideCourse = ({
  item,
  availableCourse,
  availableCourseCategory,
}) => {
  const [course, setCourse] = useState(CourseCheck2);

  let filter = availableCourse.filter((num) => item.value.includes(num));

  let CourseLength = availableCourseCategory.filter((num) => {
    if (item.value.includes("Design")) {
      return num.includes("Design");
    } else if (item.value.includes("วิชาการ")) {
      return num.includes("วิชาการ");
    } else if (item.value.includes("Life Style")) {
      return num.includes("Life Style");
    }
  });

  return (
    <>
      <div className="item z-50 group">
        <div
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
        >
          <div className="thumb">
            <Link href={`/Course/${item.value}`} as={`/Course/${item.value}`}>
              <a>
                <img
                  src={item.img}
                  alt={item.value}
                  className="group-hover:scale-125 group-hover:duration-1000"
                />
              </a>
            </Link>
          </div>
          <div className="wrap-details bg">
            <h6 className="text-center">
              <Link href={`/Course/${item.value}`} as={`/Course/${item.value}`}>
                <a
                  style={{ fontSize: 22 }}
                  className="font-Prompt font-bold text-slate-50 group-hover:text-blue-900  leading-relaxed tracking-wide  drop-shadow-2xl"
                >
                  {item.value}
                </a>
              </Link>
            </h6>

            <p className=" text-slate-50 group-hover:text-blue-900 !text-lg font-Mitr font-light drop-shadow-2xl">
              {" "}
              ทั้งหมด{" "}
              <strong className="text-xl group-hover:text-red-600">
                &nbsp;
                {item.value == "Design"
                  ? CourseLength.length
                  : item.value == "วิชาการ"
                  ? CourseLength.length
                  : item.value == "Life Style"
                  ? CourseLength.length
                  : filter.length}
                &nbsp;
              </strong>{" "}
              คอร์ส
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleSlideCourse;
