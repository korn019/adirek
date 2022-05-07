import {useContext, useEffect, useState} from "react"
import Index from "../../components/courseDetails/index"
import {DataContext} from "../../store/GlobalState"
import {getData} from "../../utils/fetchData"
import {useRouter} from "next/router"
import {dash} from "../../utils/dash"
const Course = () => {
  const {state, dispatch} = useContext(DataContext)
  const {auth, courseData} = state
  const router = useRouter()
  const {Course} = router.query
  const [url, setUrl] = useState("")
  const shareUrl = `${url}`
  useEffect(() => {
    if (typeof window !== "undefined") {
      setUrl(window.location.href)
    }
  }, [])
  return (
    <>
      {courseData.map((item) => {
        if (Course == item.list_id && item.type !== "student") {
          return <Index courseData={courseData} course={Course} item={item} shareUrl={shareUrl} />
        }
      })}
    </>
  )
}
export default Course
