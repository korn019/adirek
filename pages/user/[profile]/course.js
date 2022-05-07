import {useContext, useEffect} from "react"
import LayoutProfile from "../../../components/LayoutProfile"
import AddCourse from "../../../components/profile/AddCourse"
import { DataContext } from "../../../store/GlobalState"
import { toast } from "react-toastify"
import {useRouter} from "next/router"
const course = () => {
    const {searchCourse, setSearchCourse, state, dispatch} = useContext(DataContext)
    const {auth} = state
    const router = useRouter()
    useEffect(() => {
       if (Object.keys(auth).length == 0) {
         router.push("/")
         dispatch({type: "NOTIFY", payload: {error: toast.error("คุณยังไม่ได้เข้าสู่ระบบ")}})
       }
    }, [auth])
  return <LayoutProfile><AddCourse/></LayoutProfile>
}

export default course
