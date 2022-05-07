import Edit from "../../../components/profile/Edit"
import {useContext, useEffect} from "react"
import {DataContext} from "../../../store/GlobalState"
import {toast} from "react-toastify"
import {useRouter} from "next/router"
const EditProfile = (props) => {
  const {state, dispatch} = useContext(DataContext)
  const {auth} = state
  const router = useRouter()
  useEffect(() => {
    if (Object.keys(auth).length == 0) {
      router.push("/")
      dispatch({type: "NOTIFY", payload: {error: toast.error("คุณยังไม่ได้เข้าสู่ระบบ")}})
    }
  }, [auth])
  return <Edit />
}

export default EditProfile
