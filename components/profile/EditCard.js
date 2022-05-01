import {toast} from "react-toastify"
import {useForm} from "react-hook-form"
import {Input, SelectForm, SelectRangeAge, SelectTeach, SelectType, SelectVaccine} from "../Input"
import {DataContext} from "../../store/GlobalState"
import {useContext, useEffect} from "react"
import {putData} from "../../utils/fetchData"

const EditCard = () => {
  const {state, dispatch} = useContext(DataContext)
  const {auth, editprofile} = state
  console.log(auth)
  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm()

  const onSubmit = (data, e) => {
    e.preventDefault()
    putData(`users/edit/${auth.user?.id}`, data, auth.token)
      .then((response) => {
        console.log(response.data.message)
        dispatch({
          type: "NOTIFY",
          payload: {success: toast.success(response.data.message)},
        })
        dispatch({
          type: "AUTH",
          payload: {
            user: auth.user,
            editprofile: response.data.updateInstructors,
            token: auth.token,
          },
        })
        // if (response.status == 200) {
        //     router.push("/")
        // }
      })
      .catch((err) => {
        console.log(err)
        dispatch({
          type: "NOTIFY",
          payload: {error: toast.error(err.response?.data.message)},
        })
      })
  }
  useEffect(() => {}, [auth])
  const StudentCard = () => {
    return (
      <div className="w-full py-10 px-12 sm:px-4 md:px-10 ">
        <div className="text-center mb-10">
          <h2 className="text-Athiti !font-semibold !text-titleBlue  !text-[3rem] !leading-none md:!text-[4rem] ">
            ลงทะเบียนผู้สอน
          </h2>
          {/* <h1 className="font-title text-f4xl text-gray-900">
                    ลงทะเบียน
                  </h1> */}
          <p className="subtext-Athiti !font-medium">กรอกข้อมูลลงทะเบียนเพื่อให้เราติดต่อกลับ</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3 mt-5 ">
            <Input
              label="first_name"
              defaultValue={auth.user?.first_name}
              inputName={auth.user?.first_name}
              register={register}
              placeholder="ชื่อจริง"
            />

            <Input
              label="last_name"
              register={register}
              placeholder="นามสกุล"
              defaultValue={auth.user?.last_name}
            />
            {/* 
                  <Input
                    label="email"
                    register={register}
                    placeholder="Email"
                    defaultValue={auth.user?.email}
                  /> */}
            <Input
              label="tel"
              register={register}
              placeholder="เบอร์โทร"
              defaultValue={auth.user?.tel}
            />
            <Input
              label="ช่องทางการสอน"
              register={register}
              placeholder="ช่องทางการสอน"
              defaultValue={auth.user?.ช่องทางการสอน}
            />
            <Input
              label="ช่วงอายุของกลุ่มผู้เรียนที่ถนัดในการสอน"
              register={register}
              placeholder="ช่วงอายุของกลุ่มผู้เรียนที่ถนัดในการสอน"
              defaultValue={auth.user?.ช่วงอายุของกลุ่มผู้เรียนที่ถนัดในการสอน}
            />
            <Input
              label="ฉีดวัคซีนป้องกัน"
              register={register}
              placeholder="ฉีดวัคซีนป้องกัน"
              defaultValue={auth.user?.ฉีดวัคซีนป้องกัน}
            />
            <Input
              label="ประวัติการศึกษา"
              register={register}
              placeholder="ประวัติการศึกษา"
              defaultValue={auth.user?.ประวัติการศึกษา}
            />
            <Input
              label="ประวัติการสอน"
              register={register}
              placeholder="ประวัติการสอน"
              defaultValue={auth.user?.ประวัติการสอน}
            />
            <Input
              label="ประกาศนียบัตร"
              register={register}
              placeholder="ประกาศนียบัตร"
              defaultValue={auth.user?.ประกาศนียบัตร}
            />
            <Input
              label="กรณีเรียนนอกสถานที่"
              register={register}
              placeholder="กรณีเรียนนอกสถานที่"
              defaultValue={auth.user?.กรณีเรียนนอกสถานที่}
            />
            <Input
              label="รูปถ่าย"
              register={register}
              placeholder="รูปถ่าย"
              defaultValue={auth.user?.รูปถ่าย}
            />
            <Input
              label="อายุ"
              register={register}
              placeholder="อายุ"
              defaultValue={auth.user?.อายุ}
            />
          </div>

          <button
            className=" subtext-Athiti !font-semibold  !text-3xl bg-gradient-to-r from-pink-500 hover:to-yellow-5 inline-block px-8 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
            type="submit"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            s>
            ลงทะเบียน
          </button>
        </form>
      </div>
    )
  }

  const InstructorCard = () => {
    return (
      <div className="w-full py-10 px-12 sm:px-4 md:px-10 ">
        <div className="text-center mb-10">
          <h2 className="text-Athiti !font-semibold !text-titleBlue  !text-[2rem] !leading-none md:!text-[4rem] ">
            เพิ่มข้อมูลส่วนตัวของคุณ
          </h2>
          {/* <h1 className="font-title text-f4xl text-gray-900">
                    ลงทะเบียน
                  </h1> */}
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 mt-5 ">
            <Input
              label="first_name"
              defaultValue={auth.user?.first_name}
              inputName={auth.user?.first_name}
              register={register}
              placeholder="ชื่อจริง"
            />
            <Input
              label="last_name"
              register={register}
              placeholder="นามสกุล"
              defaultValue={auth.user?.last_name}
            />
            {/* 
                  <Input
                    label="email"
                    register={register}
                    placeholder="Email"
                    defaultValue={auth.user?.email}
                  /> */}
            <Input
              label="tel"
              register={register}
              placeholder="เบอร์โทร"
              defaultValue={auth.user?.tel}
            />
            <Input
              label="อายุ"
              register={register}
              placeholder="อายุ"
              defaultValue={auth.user?.อายุ}
            />
            <SelectVaccine
              label="ฉีดวัคซีนป้องกัน"
              register={register}
              placeholder="ฉีดวัคซีนป้องกัน"
              defaultValue={auth.user?.ฉีดวัคซีนป้องกัน}
            />
            <SelectTeach
              label="ช่องทางการสอน"
              register={register}
              placeholder="ช่องทางการสอน"
              defaultValue={auth.user?.ฉีดวัคซีนป้องกัน}
            />
            {/* <Input
                        label="ช่องทางการสอน"
                        register={register}
                        placeholder="ช่องทางการสอน"
                        defaultValue={auth.user?.ช่องทางการสอน}
                      />
                       */}
            <SelectRangeAge
              label="ช่วงอายุของกลุ่มผู้เรียนที่ถนัดในการสอน"
              register={register}
              placeholder="ช่วงอายุของกลุ่มผู้เรียนที่ถนัดในการสอน"
              defaultValue={auth.user?.ช่วงอายุของกลุ่มผู้เรียนที่ถนัดในการสอน}
            />
            <Input
              label="ประวัติการศึกษา"
              register={register}
              placeholder="ประวัติการศึกษา"
              defaultValue={auth.user?.ประวัติการศึกษา}
            />
            {/* <Input
                        label="ช่วงอายุของกลุ่มผู้เรียนที่ถนัดในการสอน"
                        register={register}
                        placeholder="ช่วงอายุของกลุ่มผู้เรียนที่ถนัดในการสอน"
                        defaultValue={auth.user?.ช่วงอายุของกลุ่มผู้เรียนที่ถนัดในการสอน}
                      /> */}
            {/* <Input
                        label="ฉีดวัคซีนป้องกัน"
                        register={register}
                        placeholder="ฉีดวัคซีนป้องกัน"
                        defaultValue={auth.user?.ฉีดวัคซีนป้องกัน}
                      /> */}

            <Input
              label="ประวัติการสอน"
              register={register}
              placeholder="ประวัติการสอน"
              defaultValue={auth.user?.ประวัติการสอน}
            />
            <Input
              label="ประกาศนียบัตร"
              register={register}
              placeholder="ประกาศนียบัตร"
              defaultValue={auth.user?.ประกาศนียบัตร}
            />
            <Input
              label="กรณีเรียนนอกสถานที่"
              register={register}
              placeholder="กรณีเรียนนอกสถานที่"
              defaultValue={auth.user?.กรณีเรียนนอกสถานที่}
            />
            <Input
              label="รูปถ่าย"
              register={register}
              placeholder="รูปถ่าย"
              defaultValue={auth.user?.รูปถ่าย}
            />
          </div>

          <button
            className=" subtext-Athiti !font-semibold  !text-3xl bg-gradient-to-r from-pink-500 hover:to-yellow-5 inline-block px-8 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
            type="submit"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            s>
            ลงทะเบียน
          </button>
        </form>
      </div>
    )
  }
  const InstituteCard = () => {
    return (
      <div className="w-full py-10 px-12 sm:px-4 md:px-10 ">
        <div className="text-center mb-10">
          <h2 className="text-Athiti !font-semibold !text-titleBlue  !text-[2rem] !leading-none md:!text-[4rem] ">
            เพิ่มข้อมูลส่วนตัวของคุณ
          </h2>
          {/* <h1 className="font-title text-f4xl text-gray-900">
                    ลงทะเบียน
                  </h1> */}
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 mt-5 ">
            <Input
              label="institute"
              defaultValue={auth.user?.institute}
              inputName={auth.user?.institute}
              register={register}
              placeholder="ชื่อสถาบัน"
            />

            {/* 
                  <Input
                    label="email"
                    register={register}
                    placeholder="Email"
                    defaultValue={auth.user?.email}
                  /> */}
            <Input
              label="tel"
              register={register}
              placeholder="เบอร์โทร"
              defaultValue={auth.user?.tel}
            />
            <Input
              label="อายุ"
              register={register}
              placeholder="อายุ"
              defaultValue={auth.user?.อายุ}
            />
            <SelectVaccine
              label="ฉีดวัคซีนป้องกัน"
              register={register}
              placeholder="ฉีดวัคซีนป้องกัน"
              defaultValue={auth.user?.ฉีดวัคซีนป้องกัน}
            />
            <SelectTeach
              label="ช่องทางการสอน"
              register={register}
              placeholder="ช่องทางการสอน"
              defaultValue={auth.user?.ฉีดวัคซีนป้องกัน}
            />
            {/* <Input
                        label="ช่องทางการสอน"
                        register={register}
                        placeholder="ช่องทางการสอน"
                        defaultValue={auth.user?.ช่องทางการสอน}
                      />
                       */}
            <SelectRangeAge
              label="ช่วงอายุของกลุ่มผู้เรียนที่ถนัดในการสอน"
              register={register}
              placeholder="ช่วงอายุของกลุ่มผู้เรียนที่ถนัดในการสอน"
              defaultValue={auth.user?.ช่วงอายุของกลุ่มผู้เรียนที่ถนัดในการสอน}
            />
            <Input
              label="ประวัติการศึกษา"
              register={register}
              placeholder="ประวัติการศึกษา"
              defaultValue={auth.user?.ประวัติการศึกษา}
            />
            {/* <Input
                        label="ช่วงอายุของกลุ่มผู้เรียนที่ถนัดในการสอน"
                        register={register}
                        placeholder="ช่วงอายุของกลุ่มผู้เรียนที่ถนัดในการสอน"
                        defaultValue={auth.user?.ช่วงอายุของกลุ่มผู้เรียนที่ถนัดในการสอน}
                      /> */}
            {/* <Input
                        label="ฉีดวัคซีนป้องกัน"
                        register={register}
                        placeholder="ฉีดวัคซีนป้องกัน"
                        defaultValue={auth.user?.ฉีดวัคซีนป้องกัน}
                      /> */}

            <Input
              label="ประวัติการสอน"
              register={register}
              placeholder="ประวัติการสอน"
              defaultValue={auth.user?.ประวัติการสอน}
            />
            <Input
              label="ประกาศนียบัตร"
              register={register}
              placeholder="ประกาศนียบัตร"
              defaultValue={auth.user?.ประกาศนียบัตร}
            />
            <Input
              label="กรณีเรียนนอกสถานที่"
              register={register}
              placeholder="กรณีเรียนนอกสถานที่"
              defaultValue={auth.user?.กรณีเรียนนอกสถานที่}
            />
            <Input
              label="รูปถ่าย"
              register={register}
              placeholder="รูปถ่าย"
              defaultValue={auth.user?.รูปถ่าย}
            />
          </div>

          <button
            className=" subtext-Athiti !font-semibold  !text-3xl bg-gradient-to-r from-pink-500 hover:to-yellow-5 inline-block px-8 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
            type="submit"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            s>
            ลงทะเบียน
          </button>
        </form>
      </div>
    )
  }
  return (
    <section id="register">
      <div className="min-w-screen min-h-screen bg-svg flex items-center justify-center px-2 py-12">
        <div
          className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden"
          style={{maxWidth: 1500}}>
          <div className="md:flex w-full items-center justify-center">
            {auth.user?.type == "student" ? (
              <StudentCard />
            ) : auth.user?.type == "instructor" ? (
              <InstructorCard />
            ) : auth.user?.type == "institute" ? (
              <InstituteCard />
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}

export default EditCard
