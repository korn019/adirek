import {Input, SelectType} from "./Input"
import {useForm} from "react-hook-form"
import Toast from "./Toast"
import {toast} from "react-toastify"
import axios from "axios"
import {useState, useContext, useEffect} from "react"
import {useRouter} from "next/router"
import {DataContext} from "../store/GlobalState"
import Link from "next/link"
import {postData} from "../utils/fetchData"
import valid from "../lib/valid"

const RegisterPage = () => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm()
  const [bgColor, setBgColor] = useState("")
  const [type, setType] = useState("student")
  const {state, dispatch, userLogin} = useContext(DataContext)
  const {auth, notify} = state
  useEffect(() => {
    if (Object.keys(auth).length !== 0) router.push("/")
  }, [])
  const onSubmit = async (data, e) => {
    e.preventDefault()
    setType(data.type)
    const res = await postData("auth/register", data)
    if (res.err) return dispatch({type: "NOTIFY", payload: toast.error(res.err)})
    dispatch({type: "NOTIFY", payload: toast.success(res.message)})
    router.push("/login")
  }
    console.log(notify)

  const onChange = (e) => {
    setType(e.target.value)
  }
  return (
    <>
      <div className="w-full bg-grey-lightest">
        <div className="container mx-auto py-8">
          <div className="w-full lg:w-2/3 mx-auto bg-white rounded shadow">
            <div className="py-4 px-8 text-black text-2xl border-b border-grey-lighter font-Athiti font-medium">
              สมัครบัญชี Adirek
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="py-4 px-8 ">
                <div className="w-full md:w-1/3  mb-6 md:mb-0">
                  <SelectType
                    label="type"
                    onChange={onChange}
                    register={register}
                    placeholder="ประเภทบัญชี"
                  />
                </div>
                <div className="md:flex  mb-4 space-x-2">
                  {type == "student" || type == "instructor" ? (
                    <>
                      <div className="md:w-1/2 ">
                        <Input
                          label="first_name"
                          register={register}
                          placeholder="ชื่อจริง"
                          type="text"
                        />
                      </div>
                      <div className="md:w-1/2">
                        <Input
                          label="last_name"
                          register={register}
                          placeholder="นามสกุล"
                          type="text"
                        />
                      </div>
                    </>
                  ) : type == "institute" ? (
                    <>
                      <div className="md:w-1/2">
                        <Input
                          label="institute"
                          register={register}
                          placeholder="สถาบัน"
                          type="text"
                        />
                      </div>
                    </>
                  ) : null}
                </div>
                <div className="mb-4">
                  <Input label="tel" register={register} placeholder="เบอร์โทรศัพท์" />
                </div>
                <div className="mb-4">
                  <Input label="username" register={register} placeholder="Username" />
                </div>
                <div className="mb-4">
                  <Input
                    label="email"
                    register={register}
                    placeholder="Email Address"
                    type="email"
                  />
                </div>
                <div className="">
                  <Input
                    label="password"
                    register={register}
                    placeholder="Password"
                    type="password"
                  />
                  {notify && <p className="text-grey text-red-400 text-sm  mt-1">รหัสผ่านอย่างน้อย 6 ตัวอักษร</p>}
                </div>
                <div className="">
                  <Input
                    label="confirm_password"
                    register={register}
                    placeholder="Confirm password"
                    type="password"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <button
                    className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded-full relative"
                    type="submit">
                    Sign Up
                  </button>
                </div>
                <div className="flex items-center justify-start my-6">
                  <p className="mb-0 mr-2">Already have an account?</p>
                  <Link href="/login">
                    <a className="text-red-400">Login Now</a>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
export default RegisterPage
