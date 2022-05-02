import {useContext, useEffect} from "react"
import Index from "../../components/courseDetails/index"
import {DataContext} from "../../store/GlobalState"
import {getData} from "../../utils/fetchData"
import {useRouter} from "next/router"
import {dash} from "../../utils/dash"
const Course = () => {
  const {state, dispatch} = useContext(DataContext)
  const {auth, courseData} = state
  const router = useRouter()
  const {course} = router.query

  useEffect(() => {}, [])

  return (
    <>
      {courseData.map((item) => {
       console.log(course == item.list_id)
       if (course == item.list_id){
           return <p>{item.title_course}</p>
       } 
     
      })}
      <Index courseData={courseData} course={course} />
      {courseData.map((item) => {})}
    </>
  )
}

export default Course
