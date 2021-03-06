import {
  Input,
  Inputtextarea,
  SelectRangeAge,
  SelectTeach,
  SelectVaccine,
  SelectForm,
} from "../Input"
import {toast} from "react-toastify"
import {useForm} from "react-hook-form"
import {DataContext} from "../../store/GlobalState"
import {useContext, useEffect, useState} from "react"
import {getData, postData, putData} from "../../utils/fetchData"
import Cookie from "js-cookie"
const AddCourse = () => {
  const {state, dispatch} = useContext(DataContext)
  const {auth} = state
  const [getCategory, setGetCategory] = useState([])
  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm()

  const [titleId, setTitleId] = useState("")
  const [priceId, setPriceId] = useState("")
  const [detailId, setDetailId] = useState("")
  const [rfToken, setRfToken] = useState("")
  useEffect(() => {
    const rf_token = Cookie.get("refreshtoken")
    if (rf_token) {
      setRfToken(rf_token)
    }
  }, [])
  const onSubmit = async (dataForm, e) => {
    e.preventDefault()

    if (rfToken) {
      await postData("course/course-title", dataForm, rfToken).then((res) => {
        setTitleId(res.title_id.toString())
      })
      await postData("course/course-detail", dataForm, rfToken).then((res) => {
        setDetailId(res.detail_id.toString())
      })
      await postData("course/course-price", dataForm, rfToken).then((res) => {
        setPriceId(res.priceId.toString())
      })
    }
    const list = {
      id_users: auth.user?.id.toString(),
      course_list_id: dataForm.course_list_id,
      title_list_id: titleId,
      price_list_id: priceId,
      details_list_id: detailId,
    }
    console.log(list)
    if(titleId && priceId && detailId){
    await putData(`course/${auth.user.id}`, list, rfToken)
      .then((res) => {
        toast.success("เพิ่มคอร์สสำเร็จ")
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }
  const categoryName = () => {
    getData("category").then((res) => {
      setGetCategory(res.filterCategory)
    })
  }

  useEffect(() => {
    categoryName()
  }, [titleId, priceId, detailId])
  
  return (
    <section id="register">
      <div className="min-w-screen min-h-screen bg-svg flex items-center justify-center px-2 py-12">
        <div
          className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden"
          style={{maxWidth: 1500}}>
          <div className="md:flex w-full items-center justify-center">
            <div className="w-full py-10 px-12 sm:px-4 md:px-10 ">
              <div className="text-center mb-4">
                <h2 className="text-Athiti !font-semibold !text-titleBlue  !text-[3rem] !leading-none md:!text-[4rem] ">
                  เพิ่มคอร์สของคุณ
                </h2>
                {/* <h1 className="font-title text-f4xl text-gray-900">
                    ลงทะเบียน
                  </h1> */}
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-3 "></div>

                <div className="">
                  <div className="my-3">
                    <SelectForm
                      placeholder="ประเภท"
                      label="course_list_id"
                      register={register}
                      getCategory={getCategory}
                      defaultValue={getCategory[0]?.filter_id}
                    />
                  </div>
                  <Input label="title_course" register={register} placeholder="ชื่อคอร์ส" />
                  <Input label="detail" register={register} placeholder="รายละเอียดคอร์ส" />
                  <Input
                    label="price_course"
                    register={register}
                    placeholder="ราคาคอร์ส"
                    type="number"
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
          </div>
        </div>
      </div>
    </section>
  )
}

export default AddCourse
