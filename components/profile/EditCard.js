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

const EditCard = () => {
  const {state, dispatch} = useContext(DataContext)
  const {auth} = state
  const [change, setChange] = useState(false)
  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm()

  const onSubmit = (data, e) => {
    e.preventDefault()
putData(`users-data/${auth.user?.id}`, data, auth.token)
.then((res) => {
  console.log(res)
}).catch((err) => {
  console.log(err)
}) 

console.log(auth.token)
 
    // putData2(`users/edit/${auth.user?.id}`, data, auth.token)
    //   .then((response) => {
    //     // dispatch({
    //     //   type: "NOTIFY",
    //     //   payload: {success: toast.success(response.data.message)},
    //     // })
    //     // dispatch({
    //     //   type: "AUTH",
    //     //   payload: {
    //     //     user: auth.user,
    //     //     token: auth.token,
    //     //   },
    //     // })
    //     // dispatch({
    //     //   type: "EDITPROFILE",
    //     //   payload: response.data.updateInstitute || response.data.updateInstructors,
    //     // })
    //     // if (response.status == 200) {
    //     //   window.location.reload(false)
    //     // }
    //     console.log(response)
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //     // dispatch({
    //     //   type: "NOTIFY",
    //     //   payload: {error: toast.error(err.response?.data.message)},
    //     // })
    //   })
  }
useEffect(() => {

}, [auth])

  
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
              <EditInstructor onSubmit={handleSubmit(onSubmit)} auth={auth} register={register} />
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
