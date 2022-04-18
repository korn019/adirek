import Link from "next/link"
const SingleSlideCourse = ({item, availableCourse}) => {
  let filter = availableCourse.filter((num) => item.value.includes(num))
  console.log(item.value == "วิชาการ")
  // const Color = availableCourse.filter((course) => {
  //   if(item.value.includes(course)){
  //     return `{!bg-red-500}`
  //   }
  // })
  // console.log(availableCourse)
  return (
    <>
      <div className="item z-50 ">
        <div
          className={`single-intro-wrap ${
            item.value === "Design"
              ? "!bg-red-300"
              : item.value === "วิชาการ"
              ? "!bg-blue-500"
              : item.value === "งานฝีมือ"
              ? "!bg-blue-100"
              : item.value === "ถ่ายรูปและแต่งรูป"
              ? "!bg-blue-200"
              : item.value === "แต่งหน้า"
              ? "!bg-blue-300"
              : item.value === "บุคลิกภาพ"
              ? "!bg-blue-400"
              : item.value === "ร้องเพลงและการแสดง"
              ? "!bg-blue-500"
              : item.value === "กีฬา"
              ? "!bg-blue-600"
              : item.value === "ดนตรี"
              ? "!bg-blue-700"
              : item.value === "ทำอาหารและขนม"
              ? "!bg-blue-800"
              : item.value === "ดูดวง"
              ? "!bg-red-100"
              : item.value === "Cryptocurrency"
              ? "!bg-red-200"
              : item.value === "NFT"
              ? "!bg-red-300"
              : null
          }`}>
          <div className="thumb">
            <img src={item.img} alt="img" />
          </div>
          <div className="wrap-details bg">
            <h6 className="text-center">
              <Link href={`/Course/${item.value}`} as={`/Course/${item.value}`}>
                <a style={{fontFamily: "Prompt-Black", fontSize: 24}}>{item.value}</a>
              </Link>
            </h6>
            <p>มี {filter.length} หลักสูตรให้เลือก</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleSlideCourse
