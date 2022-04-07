
import Link from "next/link"
const SingleSlideCourse = ({item, availableCourse}) => {
  let filter = availableCourse.filter((num) => item.value.includes(num))
  return (
    <>
      <div className="item z-50">
        <div className="single-intro-wrap">
          <div className="thumb">
            <img src={item.img} alt="img" />
          </div>
          <div className="wrap-details">
            <h6 className="text-center">
              <Link href={`/Course/${item.value}`} as={`/Course/${item.value}`}>
                <a>{item.value}</a>
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
