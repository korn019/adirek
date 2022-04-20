import Link from "next/link";
import { useState } from "react";
import { CourseCheck2 } from "../category/Check";
const SingleSlideCourse = ({ item, availableCourse }) => {
  const [course, setCourse] = useState(CourseCheck2);

  let filter = availableCourse.filter((num) => item.value.includes(num));

  var design = [];
  var academic = [];

  let designNum = availableCourse.filter((num) => {
    if (
      num.includes("UI UX") ||
      num.includes("Web Design") ||
      num.includes("Graphic Design & Illustration") ||
      num.includes("Design Tools") ||
      num.includes("Game Design") ||
      num.includes("3D & Animation") ||
      num.includes("Fashion Design") ||
      num.includes("Architectural Design") ||
      num.includes("Interior Design") ||
      num.includes("Other Design")
    ) {
      return num;
    }
  });
  for (let i = 0; i < designNum.length; i++) {
    design.push(designNum[i]);
  }

  let academicNum = availableCourse.filter((num) => {
    if (
      num.includes("คณิตศาสตร์") ||
      num.includes("วิทยาศาสตร์") ||
      num.includes("ภาษา")
    ) {
      return num;
    }
  });
  for (let i = 0; i < academicNum.length; i++) {
    academic.push(academicNum[i]);
  }

  return (
    <>
      <div className="item z-50 group">
        <div
          className={`single-intro-wrap group-hover:scale-[1.02] group-hover:duration-200  ${
            item.value === "Design"
              ? "!bg-[#0D4C92]  group-hover:!bg-slate-50 group-hover:border-2 group-hover:border-blue-500 group-hover:duration-400"
              : item.value === "วิชาการ"
              ? "!bg-[#1F2A54] group-hover:!bg-slate-50 group-hover:border-2 group-hover:border-blue-500 group-hover:duration-400 "
              : item.value === "Life Style"
              ? "!bg-[#22356C]  group-hover:!bg-slate-50 group-hover:border-2 group-hover:border-blue-500 group-hover:duration-400"
              : item.value === "ถ่ายรูปและแต่งรูป"
              ? "!bg-[#B9CF32] group-hover:!bg-slate-50 group-hover:border-2 group-hover:border-blue-500 group-hover:duration-400 "
              : item.value === "แต่งหน้า"
              ? "!bg-[#96C23D] group-hover:!bg-slate-50 group-hover:border-2 group-hover:border-blue-500 group-hover:duration-400 "
              : item.value === "บุคลิกภาพ"
              ? "!bg-[#96C23D] group-hover:!bg-slate-50 group-hover:border-2 group-hover:border-blue-500 group-hover:duration-400 "
              : item.value === "ร้องเพลงและการแสดง"
              ? "!bg-[#F9BA14] group-hover:!bg-slate-50 group-hover:border-2 group-hover:border-blue-500 group-hover:duration-400 "
              : item.value === "กีฬา"
              ? "!bg-[#F6A21D]  group-hover:!bg-slate-50 group-hover:border-2 group-hover:border-blue-500 group-hover:duration-400"
              : item.value === "ดนตรี"
              ? "!bg-[#EE6724] group-hover:!bg-slate-50 group-hover:border-2 group-hover:border-blue-500 group-hover:duration-400 "
              : item.value === "ทำอาหารและขนม"
              ? "!bg-[#E8258C] group-hover:!bg-slate-50 group-hover:border-2 group-hover:border-blue-500 group-hover:duration-400 "
              : item.value === "ดูดวง"
              ? "!bg-[#D1157B] group-hover:!bg-slate-50 group-hover:border-2 group-hover:border-blue-500 group-hover:duration-400 "
              : item.value === "Cryptocurrency"
              ? "!bg-[#821A4A] group-hover:!bg-slate-50 group-hover:border-2 group-hover:border-blue-500 group-hover:duration-400 "
              : item.value === "NFT"
              ? "!bg-[#2097D4] group-hover:!bg-slate-50 group-hover:border-2 group-hover:border-blue-500 group-hover:duration-400 "
              : null
          }`}
        >
          <div className="thumb">
            <img
              src={item.img}
              alt="img"
              className="group-hover:scale-125 group-hover:duration-1000"
            />
          </div>
          <div className="wrap-details bg">
            <h6 className="text-center">
              <Link href={`/Course/${item.value}`} as={`/Course/${item.value}`}>
                <a
                  style={{ fontSize: 22 }}
                  className="font-Prompt font-bold text-slate-50 group-hover:text-blue-900  leading-relaxed tracking-wide shade-text2 "
                >
                  {item.value}
                </a>
              </Link>
            </h6>

            <p className="shade-text2  text-slate-50 group-hover:text-blue-900 text-f3xl">
              {" "}
              มี{" "}
              <strong className="shade-text2 text-xl group-hover:text-red-600">
                &nbsp;
                {item.value == "Design"
                  ? design.length
                  : item.value == "วิชาการ"
                  ? academic.length
                  : filter.length}
                &nbsp;
              </strong>{" "}
              หลักสูตรให้เลือก
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleSlideCourse;
