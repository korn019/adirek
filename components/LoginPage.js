import {Input} from "./Input"
import {useForm} from "react-hook-form"
import Toast from "./Toast"
// import {toast} from "react-hot-toast"
import axios from "axios"
import {useState, useContext, useEffect} from "react"
import Link from "next/link"
import {useRouter} from "next/router"
import {toast} from "react-toastify"
import {DataContext} from "../store/GlobalState"
import {getData, postData} from "../utils/fetchData"
import Cookie from "js-cookie"
const LoginPage = () => {
  const {state, dispatch} = useContext(DataContext)
  const {auth} = state
  const router = useRouter()
  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm()
  const [bgColor, setBgColor] = useState("")
  useEffect(() => {
    if (Object.keys(auth).length !== 0) router.push("/")
    router.prefetch("/")
  }, [auth, router.pathname])

  const onSubmit = async (data, e) => {
    e.preventDefault()

    const res = await postData("auth/login", data)
    // console.log(res)
    if (res.err) {
      return dispatch({type: "NOTIFY", payload: {error: toast.error(res.err)}})
    }
    dispatch({type: "NOTIFY", payload: {success: toast.success(res.message)}})

    dispatch({
      type: "AUTH",
      payload: {
        token: res.access_token,
        user: res.user,
      },
    })
    Cookie.set("refreshtoken", res.refresh_token, {
      path: "api/auth/accessToken",
      expires: 7,
    })
    localStorage.setItem("firstLogin", true)
    // console.log(res)
    // postData("auth/login", data)
    //   .then((response) => {
    //     localStorage.setItem("token", response.data.token)
    //     localStorage.setItem("firstLogin", true)
    //     console.log(response.data.users)
    //     // console.log( JSON.stringify(response.data));
    //     // dispatch({type: 'AUTH', payload: {
    //     //   user: response.data.users,
    //     //   token: response.data.token
    //     // } });
    //     dispatch({
    //       type: "NOTIFY",
    //       payload: {success: toast.success(response.data.message)},
    //     })
    //     // getData("users/auth", response.data.token)
    //     // .then((res) => {
    //     //   localStorage.setItem("user",  JSON.stringify(res.data.user));
    //     //   console.log( res.data.user);
    //     // }).catch((err) => {
    //     //   console.log(err.response)
    //     // })
    //     if (response.status == 200) {
    //         const firstLogin = localStorage.getItem("firstLogin")
    //       if (firstLogin) {
    //         router.push("/")
    //       }
    //     }
    //   })
    //   .catch((err) => {
    //     dispatch({
    //       type: "NOTIFY",
    //       payload: {error: toast.error(err.response.data.message)},
    //     })
    //   })
    // axios
    //   .post("https://www.api-adirek.online/api/users/login", data)
    //   .then((res) => {
    //     localStorage.setItem("token", res.data.token);
    //     setBgColor("bg-success");
    //     dispatch({
    //       type: "NOTIFY",
    //       payload: { success: toast.success("เข้าสู่ระบบสำเร็จ") },
    //     });
    //     setTimeout(() => {
    //       router.push("/");
    //     }, 1000);
    //   })
    //   .catch((err) => {
    //     console.log(err.response.message);
    //     setBgColor("bg-danger");
    //     dispatch({
    //       type: "NOTIFY",
    //       payload: { error: toast.error(err.response.data.message) },
    //     });
    //   });
  }

  return (
    <>
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
                        <p
                          className="text-black text-center    font-semibold font-Athiti
        text-f2xl md:text-f3xl lg:text-[3rem]">
                          เปิดประตู{" "}
                          <strong className="!text-[#FF5959]  font-Athiti">
                            "สู่การเรียนรู้"{" "}
                          </strong>{" "}
                          <br />
                        </p>
                      </div>
                      <form onSubmit={handleSubmit(onSubmit)}>
                        {/* <p className="mb-4">Please login to your account</p> */}
                        <div className="mb-4 mt-4">
                          <Input label="email" register={register} placeholder="Email Address" />
                        </div>
                          <Input
                            label="password"
                            register={register}
                            placeholder="Password"
                            type="password"
                          />
                        <div className="pt-1 mb-12 pb-1 items-center justify-center ">
                          <div className="">

                          <button
                            className=" bg-gradient-to-r  relative from-pink-500 hover:to-yellow-5 inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out lg:w-full mb-3"
                            type="submit"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                            s>
                            Log in
                          </button>
                              </div>
                          <div className="flex  justify-end">
                            <a className="text-red-500 text-right" href="#!">
                              Forgot password?
                            </a>
                          </div>
                        </div>
                        <div className="flex items-center justify-start pb-6 ">
                          <p className="mb-0 mr-2">Don't have an account?</p>
                          <Link href="/register">
                            <button
                              type="button"
                              className="inline-block  relative px-6 py-2 border-2 border-red-600 text-white font-medium text-xs leading-tight uppercase rounded !bg-black hover:!bg-slate-800 hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                              data-mdb-ripple="true">
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
