import {toast} from "react-toastify"
import {useForm} from "react-hook-form"
import {Input, SelectForm, SelectRangeAge, SelectTeach, SelectType, SelectVaccine} from "../Input"
import {DataContext} from "../../store/GlobalState"
import {useContext, useEffect, useState} from "react"
import {putData} from "../../utils/fetchData"
import EditInstitute from "./EditInstitute"
import EditProfile from "./EditStudent"
import EditInstructor from "./EditInstructor"
import EditStudent from "./EditStudent"
import Cookies from "js-cookie"

const EditCard = ({setValue,value}) => {
  const {state, dispatch} = useContext(DataContext)
  const {auth,edit} = state
  const [change, setChange] = useState(false)
  const [token, setToken] = useState("")
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: {errors},
  } = useForm()

  useEffect(() => {
    // const getToken = localStorage.getItem("token")
    const rfToken = Cookies.get("refreshtoken")
    if (rfToken) {
      setToken(rfToken)
    }
  }, [auth])

  const onSubmit = async (data, e) => {
    e.preventDefault()
    console.log(data)

   const res = await putData(`user-data/${auth.user?.id}`, data, token)
   dispatch({
     type: "NOTIFY",
     payload: {success: toast.success(res.msg)},
   })
   dispatch({
     type: "NOTIFY",
     payload: {success: toast.success(res.err)},
   })
  // setValue(true)
  // if (value) window.location.reload(false)
   
  }
  useEffect(() => {}, [auth])

  return (
    <section id="">
      <div className="min-w-screen min-h-screen  flex items-center justify-center px-2 py-12">
        <div
          className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden"
          style={{maxWidth: 1500}}>
          <div className="md:flex w-full items-center justify-center">
            {auth.user?.type == "student" ? (
              <EditStudent onSubmit={handleSubmit(onSubmit)} auth={auth} register={register} />
            ) : auth.user?.type == "instructor" ? (
              <EditInstructor onSubmit={handleSubmit(onSubmit)} auth={auth} register={register} control={control} />
            ) : auth.user?.type == "institute" ? (
              <EditInstitute onSubmit={handleSubmit(onSubmit)} auth={auth} register={register} />
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}

export default EditCard
