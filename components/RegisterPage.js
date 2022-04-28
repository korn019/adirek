import {Input, SelectType} from "./Input"
import {useForm} from "react-hook-form"
import Toast from "./Toast"
import {toast} from "react-toastify"
import axios from "axios"
import {useState} from "react"
import {useRouter} from "next/router"
const RegisterPage = () => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm()
  const [bgColor, setBgColor] = useState("")
  const onSubmit = (data, e) => {
    e.preventDefault()
    // console.log(data);
    axios
      .post("http://localhost:3000/api/users/register", data)
      .then((res) => {
        setBgColor("bg-success")
        toast("สมัครสมาชิกสำเร็จ")
        // console.log(res);
        router.push("/Login")
        // window.location = "/Login";
      })
      .catch((err) => {
        console.log(err.response.data)
        setBgColor("bg-danger")
        toast(err.response.data.message)
      })
  }
  return (
    <>
      <Toast t={toast.message} bgColor={bgColor} />

      <div className="w-full bg-grey-lightest">
        <div className="container mx-auto py-8">
          <div className="w-5/6 lg:w-1/2 mx-auto bg-white rounded shadow">
            <div className="py-4 px-8 text-black text-xl border-b border-grey-lighter">
              Register for a free account
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="py-4 px-8">
                <div className="w-full md:w-1/3  mb-6 md:mb-0">
                  <SelectType label="type" register={register} placeholder="ประเภทบัญชี" />
                </div>
                <div className="flex mb-4">
                  <div className="w-1/2 mr-1">
                    <Input
                      label="first_name"
                      register={register}
                      placeholder="ชื่อจริง"
                      type="text"
                    />
                  </div>
                  <div className="w-1/2 ml-1">
                    <Input
                      label="last_name"
                      register={register}
                      placeholder="นามสกุล"
                      type="text"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <Input label="tel" register={register} placeholder="เบอร์โทรศัพท์" />
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
                  <p className="text-grey text-xs mt-1">รหัสผ่านอย่างน้อย 8 ตัวอักษร</p>
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
                    className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded-full"
                    type="submit">
                    Sign Up
                  </button>
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
