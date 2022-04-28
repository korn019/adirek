import {Input} from "./Input"
import {useForm} from "react-hook-form"
import Toast from "./Toast"
import {toast} from "react-hot-toast"
import axios from "axios"
import {useState} from "react"
import Link from "next/link"
const LoginPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm()

  const [bgColor, setBgColor] = useState("")

  const onSubmit = (data, e) => {
    e.preventDefault()
    console.log(data)
    axios
      .post("http://localhost:3000/api/users/login", data)
      .then((res) => {
       
        localStorage.setItem("token", res.data.token)
        setBgColor("bg-success")
        toast("เข้าสู่ระบบสำเร็จ")
        
        window.location = "/"
      })
      .catch((err) => {
        console.log(err.response  .message)
        setBgColor("bg-danger")
        toast(err.response.data.message)
      })
  }

  return (
    <>
      <Toast t={toast.message} bgColor={bgColor} />
      <section className="h-full gradient-form bg-gray-200 ">
        <div className="container py-12 px-6 h-full">
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div className="xl:w-10/12">
              <div className="block bg-white shadow-lg rounded-lg">
                <div className="lg:flex lg:flex-wrap g-0 flex items-center justify-center">
                  <div className="lg:w-10/12 px-4 md:px-0 ">
                    <div className="md:p-12 md:mx-6">
                      <div className="text-center">
                        <img
                          className="mx-auto w-48"
                          src="/static/img/Knowledge-Logo-Vertical.png"
                          alt="logo"
                        />
                        <p className="text-black text-center  drop-shadow-xl  font-semibold font-Athiti
        text-f2xl md:text-f3xl lg:text-[3.5rem] drop-shadow-[2px_2px_3px_rgba(0, 0, 0, 0.3)]">
          เปิดประตู <strong
            className="!text-[#FF5959] drop-shadow-2xl  text-shade2 font-Athiti"
           >
             " สู่การเรียนรู้ "{" "}
          </strong>{" "}
          <br />
        </p>
                      </div>
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <p className="mb-4">Please login to your account</p>
                        <div className="mb-4">
                          <Input label="email" register={register} placeholder="Email Address" />
                        </div>
                        <div className="">
                          <Input
                            label="password"
                            register={register}
                            placeholder="Password"
                            type="password"
                          />
                        </div>
                        <div className="pt-1 mb-12 pb-1 items-center justify-center ">
                          <button
                            className=" bg-gradient-to-r from-pink-500 hover:to-yellow-5 inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                            type="submit"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                            s>
                            Log in
                          </button>
                          <div className="flex  justify-end">
                            <a className="text-red-500 text-right" href="#!">
                              Forgot password?
                            </a>
                          </div>
                        </div>
                        <div className="flex items-center justify-start pb-6">
                          <p className="mb-0 mr-2">Don't have an account?</p>
                          <Link href='/Register'>

                          <button
                            type="button"
                            className="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:!bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light">
                            Register
                          </button>
                              </Link>
                        </div>
                      </form>
                    </div>
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default LoginPage
