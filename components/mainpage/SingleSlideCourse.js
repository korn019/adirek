
import Link from "next/link"
const SingleSlideCourse = ({item, availableCourse}) => {
  let filter = availableCourse.filter((num) => item.value.includes(num))
  console.log(item)
  const Color = availableCourse.filter((course) => {
    if(item.value.includes(course)){
      return `{!bg-red-500}`
    }
  })
  console.log(availableCourse)
  return (
    <>
      <div className="item z-50 ">
        <div className={`single-intro-wrap  ${Color}`} >
          <div className="thumb">
            <img src={item.img} alt="img" />
          </div>
          <div className="wrap-details bg">
            <h6 className="text-center">
              <Link href={`/Course/${item.value}`} as={`/Course/${item.value}`}>
                <a style={{fontFamily:'Prompt-Black',fontSize:24}}>{item.value}</a>
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
