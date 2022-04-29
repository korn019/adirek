import {useState, Fragment, useEffect} from "react"
import {Dialog, Listbox, Transition} from "@headlessui/react"
import ReactStars from "react-stars"
import axios from "axios"
import Select from "../Select"
import Toast from "../Toast"
import {Toaster, toast, resolveValue} from "react-hot-toast"
import ClipLoader from "react-spinners/ClipLoader"
import {BsTelephoneOutbound} from "react-icons/bs"
const InstructorDetail = ({e, data, Instructor, instructor, id}) => {
  const [showModal, setShowModal] = useState(false)
  const [detail, setDetail] = useState([])
  const [price, setPrice] = useState([])
  const [category, setCategory] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenAddCourse, setIsOpenAddCourse] = useState(false)
  let [loading, setLoading] = useState(false)
  const [bgColor, setBgColor] = useState("")
  const [value, setValue] = useState("")
  const [getCategory, setGetCategory] = useState([])

  const handleChangeSelect = (e) => {
    setValue(e.target.value)
  }

  const temp = getCategory.map((ext) => ext.filter_id)
  const [currentExtension, setCurrentExtension] = useState(temp)

  const categoryName = () => {
    axios
      .get("https://www.api-adirek.online/api/filterCategory")
      .then((res) => {
        setGetCategory(res.data)
      })
      .catch((err) => {
        // console.log(err);
      })
  }

  const [course, setCourse] = useState({
    title_course: "",
    detail: "",
    price_course: "",
  })

  const handleChange = (event) => {
    setCourse({...course, [event.target.name]: event.target.value})
  }

  let instructorId = Instructor.match(/\d/g)
  let InstructorId = instructorId.join("")

  console.log(InstructorId)
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    if (
      course.title_course.length !== 0 &&
      course.detail.length !== 0 &&
      course.price_course.length !== 0
    ) {
      axios
        .post("http://www.localhost:3000/api/course_title", course)
        .then(function (response) {
          if (response.status === 200) {
            console.log(response.data)
            let TitleId = response.data.title_id.toString()
            axios
              .post("http://www.localhost:3000/api/course_price", course)
              .then(function (response) {
                if (response.status === 200) {
                  console.log(response.data)
                  let PriceId = response.data.price_id.toString()
                  axios
                    .post("http://www.localhost:3000/api/course_details", course)
                    .then(function (response) {
                      if (response.status === 200) {
                        console.log(response.data)
                        let DetailId = response.data.detail_id.toString()
                        const data = {
                          instructor_list_id: InstructorId,
                          course_list_id: value,
                          title_list_id: TitleId,
                          price_list_id: PriceId,
                          details_list_id: DetailId,
                        }
                        const config = {
                          headers: {"Content-Type": "application/x-www-form-urlencoded"},
                        }
                        axios
                          .put(`http://www.localhost:3000/api/course_list/${InstructorId}`, data)
                          .then(function (response) {
                            console.log(response.data)
                            toast("เพิ่มคอร์สเรียบร้อยแล้ว")  
                            setBgColor("bg-success")
                            setLoading(false)
                          })
                          .catch((error) => {
                            console.log(error.message)
                            toast("เกิดข้อผิดพลาด ลองใหม่อีกครั้ง")
                            setLoading(false)
                            setBgColor("bg-danger")
                          })
                      }
                    })
                    .catch(function (err) {
                      toast(err.message)
                      setLoading(false)
                      setBgColor("bg-danger")
                    })
                }
              })
              .catch(function (err) {
                toast(err.message)
                setLoading(false)
                setBgColor("bg-danger")
              })
          }
        })
        .catch(function (err) {
          toast(err.message)
          setLoading(false)
          setBgColor("bg-danger")
        })
    }
  }

  useEffect(() => {
    categoryName()
  }, [])

  function closeModal() {
    setIsOpen(false)
    setIsOpenAddCourse(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  let getCourseAmount = data.filter(
    (item) => item.firstName === e.firstName && item.lastName === e.lastName
  )
  // let amountCourse = ""
  // for (let i = 0; i < getCourseAmount.length; i++) {
  //   amountCourse = `${[i]} `
  // }

  const [start, setStart] = useState()
  const ratingChanged = (newRating) => {
    setStart(newRating)
  }
  function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
  }
  let filterCourse = data.filter((item) => {
    return item.instructor_id === e.instructor_id
  })

  let filterDetailsCourse = data.filter((item) => {
    return item.instructor_id === e.instructor_id
  })
  return (
    <>
      <Toast />
      <div
        className="row d-flex justify-content-center justify-content-md-between "
        style={{marginTop: -160}}>
        <div className="col-12 col-md-4 col-lg-6 d-flex justify-content-center justify-content-lg-start align-items-md-center">
          <div className="blog-post-content single-blog-post">
            <div className="card bg-light text-dark shadow">
              <div className="card-body">
                <div className="">
                  <img
                    src={
                      e.รูปถ่าย == "" ? "/static/img/Knowledge-Logo-Vertical.png" : `${e.รูปถ่าย}`
                    }
                    alt="img"
                    className="object-scale-down w-[370px] h-[240px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-8 col-lg-6 mt-5 mt-md-0 ">
          <div
            className="d-lg-flex align-items-center "
            style={{
              backgroundColor: "#242424",
              overflow: "hidden",
              padding: "1.4rem",
              borderRadius: 10,
            }}>
            <div className="col-12 col-md-12 col-lg-7 text-center text-md-center text-lg-center ">
              <div className="">
                <h3
                  className="text-Athiti !font-semibold leading-none my-3"
                  style={{color: "white", fontSize: 42}}>
                  {e.firstName}
                </h3>
                <h3
                  className="text-Athiti !font-semibold leading-none my-3"
                  style={{color: "white", fontSize: 42}}>
                  {e.lastName}
                </h3>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-5  border-md-left">
              <div className="text-center  text-md-center mt-3 space-y-1">
                <p className=" subtext-Athiti  !font-semibold !text-[#f8f8f8] !text-[24px] leading-relaxed">
                  {" "}
                  <i className="fa fa-check-circle text-[aquamarine]" aria-hidden="true"></i>
                  &nbsp; Verified
                </p>
                <p className="s subtext-Athiti  !font-semibold !text-[#f8f8f8] !text-[24px] leading-relaxed">
                  {" "}
                  <i className="fa fa-check-circle text-[aquamarine]" aria-hidden="true"></i>
                  &nbsp; {e.ฉีดวัคซีนป้องกัน}
                </p>
                <ul className="social-area d-inline-block">
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-youtube "></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 mt-5 ">
          <div className="mt-6 md:mt-0 lg:px-5">
            {" "}
            <div className="space-y-1">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:space-x-3">
                <h1 className="!font-Prompt font-bold drop-shadow-2xl text-f2xl text-[#F6A21C]">
                  คอร์สเรียน
                </h1>
                <div className="bg-slate-700 rounded-lg  px-2 lg:col-span-2">
                  <a href={`tel:${e.เบอร์โทร}`} className="flex items-center justify-between ">
                    <h1 className="font-DB font-black text-f3xl text-white">โทรหาผู้สอน</h1>
                    {/* <i className="fa fa-phone text-[#F6A21C] text-3xl"></i> */}
                    <BsTelephoneOutbound color="#F6A21C" className="text-3xl" />
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 md:space-x-3 mt-4">
                <div className="align-items-center justify-content-center  md:col-span-3   px-3">
                  <div className="title text-black text-[32px] relative">
                    <ul className="list-decimal divide-y">
                      {filterCourse.map((item) => {
                        return (
                          <>
                            <li key={item.instructor_id}>
                              <p className="line-clamp-3  font-body  subtext-Athiti !font-semibold !text-xl">
                                {item.title_course}
                              </p>
                              <div className="align-items-center justify-content-center ">
                                <div className="title text-black flex justify-between items-center">
                                  <p
                                    className="subtext-Athiti  uppercase !text-base py-1  hover:text-blue-500 cursor-pointer text-left   ease-linear transition-all duration-150"
                                    onClick={() => {
                                      setIsOpen(true),
                                        setDetail(item.detail),
                                        setPrice(item.price_course),
                                        setCategory(item.filter_category_course)
                                    }}>
                                    {/* {console.log(formatNumber(item.price_course))} */}
                                    อ่านเพิ่มเติม
                                  </p>
                                  <h5 className=" text-right font-body text-flg ">
                                    {formatNumber(item.price_course)} บาท
                                  </h5>
                                </div>
                              </div>
                            </li>
                          </>
                        )
                      })}
                    </ul>
                    <div className="text-right">
                      <button
                        className=" relative  subtext-Athiti !font-bold  !text-2xl text-gray-700 border-2 border-blue-400  focus:ring-1 focus:outline-none focus:border-[#ff013c]  focus:text-[#ff013c]  rounded-lg  px-2 py-1  mr-2 mb-2"
                        onClick={() => setIsOpenAddCourse(true)}>
                        เพิ่มคอร์ส
                      </button>
                    </div>

                    {/* {e.title_course} */}
                  </div>
                </div>

                <Transition show={isOpenAddCourse} as={Fragment}>
                  <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto items-center justify-center mt-4 "
                    onClose={closeModal}>
                    <div className="min-h-screen px-8 py-12 text-center">
                      <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0">
                        <Dialog.Overlay className="fixed inset-0 bg-black/[.2]" />
                      </Transition.Child>

                      {/* This element is to trick the browser into centering the modal contents. */}
                      <span className="inline-block h-screen align-middle" aria-hidden="true">
                        &#8203;
                      </span>
                      <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95">
                        <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                          <div className="flex justify-between items-center">
                            <Dialog.Title
                              as="h3"
                              className="text-lg font-medium leading-6 text-gray-900">
                              <h3 className="text-fxl font-title">{category}</h3>
                            </Dialog.Title>
                            <Dialog.Title as="h3" className="text-right leading-6 text-gray-900">
                              <button className="font-black" onClick={closeModal}>
                                X
                              </button>
                            </Dialog.Title>
                          </div>
                          <form className="mx-auto my-4 " onSubmit={handleSubmit}>
                            <label
                              htmlFor="exampleFormControlTextarea1"
                              className="subtext-Athiti !font-semibold">
                              หมวดหมู่
                            </label>
                            <div className="flex items-center justify-center ">
                              <div className="w-full ">
                                {/* <select
                                  value={value}
                                  onChange={handleChangeSelect}
                                >
                                  {getCategory.map((e, i) => {
                                    return (
                                      <option value={e.filter_id}>
                                        {e.filter_category_course}
                                      </option>
                                    );
                                  })}
                                </select> */}
                                <Select
                                  //className="flex-1"
                                  category={category}
                                  options={getCategory}
                                  selectedOption={currentExtension}
                                  handelChange={(event) => {
                                    // console.log("parent", event)
                                    setCurrentExtension(event)
                                    setValue(event.filter_id.toString())
                                  }}
                                />
                              </div>
                            </div>
                            <div className="form-group my-2">
                              <label
                                htmlFor="exampleFormControlTextarea1"
                                className="subtext-Athiti !font-semibold">
                                ชื่อคอร์ส
                              </label>
                              <input
                                className="form-control w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                id="exampleFormControlTextarea1"
                                type="text"
                                placeholder="ชื่อคอร์สเรียน"
                                value={course.title_course}
                                onChange={handleChange}
                                name="title_course"
                                required
                              />
                            </div>
                            <div className="form-group my-2">
                              <label
                                htmlFor="exampleFormControlTextarea1"
                                className="subtext-Athiti !font-semibold">
                                รายละเอียด
                              </label>
                              <textarea
                                className="form-control w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                id="exampleFormControlTextarea1"
                                type="textarea"
                                placeholder="รายละเอียดคอร์ส"
                                value={course.detail}
                                onChange={handleChange}
                                name="detail"
                                required
                              />
                            </div>
                            <div className="form-group my-2">
                              <label
                                htmlFor="exampleFormControlTextarea1"
                                className="subtext-Athiti !font-semibold">
                                ราคา
                              </label>
                              <input
                                className="form-control w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                id="exampleFormControlTextarea1"
                                type="number"
                                required
                                step="any"
                                placeholder="ราคา"
                                value={course.price_course}
                                onChange={handleChange}
                                name="price_course"
                              />
                            </div>

                            <div className="sweet-loading text-center">
                              <ClipLoader color="blue" loading={loading} size={82} />
                            </div>

                            {loading ? null : (
                              <div className="relative">
                                <button
                                  type="submit"
                                  className="py-2 bg-black text-Athiti !font-semibold  text-white w-100 mt-2 rounded-md hover:duration-500 hover:!bg-white hover:!text-black hover:border-2 hover:border-black">
                                  เพิ่ม
                                </button>
                              </div>
                            )}
                          </form>

                          {/* <div className="mt-4">
                            <div className="flex justify-between items-center">
                              <p>{formatNumber(price)} บาท</p>
                              <a href={`tel:${e.เบอร์โทร}`}>
                                <button
                                  type="button"
                                  className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                  onClick={closeModal}
                                >
                                  โทรเลย!
                                </button>
                              </a>
                            </div>
                          </div> */}
                        </div>
                      </Transition.Child>
                    </div>
                  </Dialog>
                </Transition>

                <Transition show={isOpen} as={Fragment}>
                  <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto"
                    onClose={closeModal}>
                    <div className="min-h-screen px-4 text-center">
                      <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0">
                        <Dialog.Overlay className="fixed inset-0 bg-black/[.2]" />
                      </Transition.Child>

                      {/* This element is to trick the browser into centering the modal contents. */}
                      <span className="inline-block h-screen align-middle" aria-hidden="true">
                        &#8203;
                      </span>
                      <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95">
                        <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                          <div className="flex justify-between items-center">
                            <Dialog.Title
                              as="h3"
                              className="text-lg font-medium leading-6 text-gray-900">
                              <h3 className="text-fxl font-title">{category}</h3>
                            </Dialog.Title>
                            <Dialog.Title as="h3" className="text-right leading-6 text-gray-900">
                              <button className="font-black" onClick={closeModal}>
                                X
                              </button>
                            </Dialog.Title>
                          </div>
                          <div className="mt-2">
                            <p className="text-sm md:text-lg text-gray-500">{detail}</p>
                          </div>

                          <div className="mt-4">
                            <div className="flex justify-between items-center">
                              <p>{formatNumber(price)} บาท</p>
                              <a href={`tel:${e.เบอร์โทร}`}>
                                <button
                                  type="button"
                                  className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                  onClick={closeModal}>
                                  โทรเลย!
                                </button>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Transition.Child>
                    </div>
                  </Dialog>
                </Transition>
              </div>
            </div>
          </div>

          <div className="mt-6 md:mt-0 lg:px-5">
            {" "}
            <div className="space-y-1">
              <h1 className="font-Prompt font-bold text-f3xl text-[#F6A21C]">หมวดหมู่:</h1>
              <div className="align-items-center justify-content-center bg-[#eaf0f6] border-b-2 border-gray-200 rounded-lg p-2">
                <div className="ml-1 title text-black text-[32px]">
                  {e.ช่องทางการสอน == "" ? "ไม่พบข้อมูล" : e.ช่องทางการสอน}{" "}
                </div>
              </div>
              <div className="align-items-center justify-content-center bg-[#eaf0f6] border-b-2 border-gray-200 rounded-lg p-2">
                <div className="ml-1 title text-black text-[32px]">
                  {e.filter_category_course == "" ? "ไม่พบข้อมูล" : e.filter_category_course}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 items-center justify-between mt-5">
              <div>
                <h1 className="title font-Prompt font-bold text-f2xl text-[#F6A21C]">Rating</h1>
              </div>
              <div className="text-right flex items-center justify-end">
                <span className="mx-2">{start}</span>
                <ReactStars
                  count={5}
                  half={true}
                  value={start}
                  onChange={ratingChanged}
                  size={22}
                  color2={"rgb(253 186 116)"}
                />
              </div>
              <div>
                <h1 className="font-title text-fxl">คอร์สทั้งหมด</h1>
              </div>
              <div className="text-right">
                <h1 className="font-title text-fxl">{getCourseAmount.length}</h1>
              </div>
              <div>
                <h1 className="font-title text-fxl">ผู้เข้าชม</h1>
              </div>
              <div className="text-right">
                <h1 className="font-title text-fxl">200 ครั้ง</h1>
              </div>
            </div>
          </div>
          <div className="lg:px-5 mt-6">
            {" "}
            <h1 className="title font-Prompt font-bold text-f2xl  text-[#F6A21C]">แนะนำผู้สอน</h1>
            <p className=" subtext ">{e.ประวัติการสอน == "" ? "ไม่พบข้อมูล" : e.ประวัติการสอน}</p>
          </div>
          <div className="lg:px-5 mt-6">
            {" "}
            <h1 className="title  font-Prompt font-bold text-f2xl text-[#F6A21C]">
              ประวัติการศึกษา
            </h1>
            <p className=" subtext">
              {e.ประวัติการศึกษา == "" ? "ไม่พบข้อมูล" : e.ประวัติการศึกษา}
            </p>
          </div>
          <div className="lg:px-5 mt-6">
            {" "}
            <h1 className="title font-Prompt font-bold text-f2xl text-[#F6A21C]">ติดต่อผู้สอน</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <p className="lead font-bold">Phone:</p>
              <p className="line-clamp-3 col-span-1 text-left !indent-0 subtext">
                <a href={`tel:${e.เบอร์โทร}`}> {e.เบอร์โทร == "" ? "ไม่พบข้อมูล" : e.เบอร์โทร}</a>
              </p>

              <p className="lead font-bold">Email:</p>
              <p className="line-clamp-3 col-span-1 text-left !indent-0 subtext">
                {e.ที่อยู่อีเมล == "" ? "ไม่พบข้อมูล" : e.ที่อยู่อีเมล}
              </p>
              <p className="lead font-bold">Line:</p>
              <p className="line-clamp-3 col-span-1 text-left !indent-0 subtext">
                {e.line == null ? "ไม่พบข้อมูล" : e.line}
              </p>
              <p className="lead font-bold">Address:</p>
              <p className="line-clamp-3 col-span-1 text-left !indent-0 subtext">
                {e.กรณีเรียนนอกสถานที่ == "" ? "ไม่พบข้อมูล" : e.กรณีเรียนนอกสถานที่}
              </p>
            </div>
          </div>
          <div className="lg:px-5 mt-6">
            {" "}
            <h1 className="title font-Prompt font-bold text-f2xl text-[#F6A21C]">Review</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <ol className="list-decimal" style={{color: "#808191"}}>
                <li className="subtext">สอนเข้าใจง่าย</li>
                <li className="subtext">เนื้อหากระชับ ชัดเจน</li>
                <li className="subtext">คุณครูน่ารัก</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div className="m-8">
        <Toast t={toast} bgColor={bgColor} />
      </div>
      {/* <div className="row d-flex mt-5">
        <div className="col-md-12 col-lg-6">
          <div className="align-items-center justify-content-center ">
            <div className=" shadow-sm d-flex align-items-center justify-content-between ">
              <h5 className="line-clamp-3 w-60 ">{e.รายละเอียดคอร์สเรียน}</h5>
              <p className="lead">{e.ราคาคอร์สเรียน}</p>
            </div>
          </div>
        </div>

        <div className="col-md-12  col-lg-6 mt-md-5 mt-lg-0">
          <div className="col-12  col-md-12 col-lg-12 mt-2 mt-md-0">
            <div className=" align-items-center ">
              <div className="">
                <h1 className="ml-1 title text-[#F6A21C] text-[42px]">หมวดหมู่: </h1>
                <div
                  className="align-items-center justify-content-center "
                  style={{padding: 5, background: "#eaf0f6", borderRadius: 10, margin: 2}}>
                  <div
                    className="ml-1 title"
                    style={{color: "black", fontWeight: 500, fontSize: 32}}>
                    {" "}
                    {typeof e.ช่องทางการสอน == "undefined" ? "ไม่พบข้อมูล" : e.ช่องทางการสอน}{" "}
                  </div>
                </div>
                <div
                  className="align-items-center justify-content-center "
                  style={{padding: 5, backgroundColor: "#eaf0f6", borderRadius: 10, margin: 2}}>
                  <div
                    className="ml-1 title"
                    style={{color: "black", fontWeight: 500, fontSize: 32}}>
                    {" "}
                    {typeof e.Category == "undefined" ? "ไม่พบข้อมูล" : e.Category}
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between my-8 mx-0">
                <h2 className="title" style={{color: "black"}}>
                  Rating
                </h2>
                <div className="">
                  <span>
                    <i className="fa fa-star text-[#f2994a] mr-1"></i>
                  </span>
                  <span>
                    <i className="fa fa-star text-[#f2994a] mr-1"></i>
                  </span>
                  <span>
                    <i className="fa fa-star text-[#f2994a] mr-1"></i>
                  </span>
                  <span>
                    <i className="fa fa-star text-[#f2994a] mr-1"></i>
                  </span>
                  <span>
                    <i className="fa fa-star text-[#f2994a] mr-1"></i>
                  </span>
                </div>
              </div>
              <div className="">
                <div className="d-flex align-items-center justify-content-between">
                  <h4
                    className="line-watch title"
                    style={{color: "black", fontWeight: 400, fontSize: 32}}>
                    นักเรียนทั้งหมด
                  </h4>
                  <h4 className="title" style={{color: "black", fontWeight: 400, fontSize: 32}}>
                    2000 ครั้ง
                  </h4>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <h4
                    className="line title"
                    style={{color: "black", fontWeight: 400, fontSize: 32}}>
                    ขายได้{" "}
                  </h4>
                  <h4 className="title" style={{color: "black", fontWeight: 200, fontSize: 32}}>
                    1 ครั้ง
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-6">
          <div className="col-11">
            <h1 className="title text-[#F6A21C]">แนะนำผู้สอน</h1>
            <p className="lead ">
              {typeof e.ประวัติการสอน == "undefined" ? "ไม่พบข้อมูล" : e.ประวัติการสอน}
            </p>
          </div>
        </div>
        <div className="col-md-6 mt-5 mt-md-0">
          <div className="col-12">
            <h1 className="title text-[#F6A21C]">การศึกษา</h1>
            <ul style={{color: "#808191"}}>
              <li>
                <p className=" lead">
                  {typeof e.ประวัติการศึกษา == "undefined" ? "ไม่พบข้อมูล" : e.ประวัติการศึกษา}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-6">
          <div className="col-11">
            <h1 className="title text-[#cf9b3b]">ติดต่อผู้สอน</h1>
            <div className="d-xl-flex justify-content-between">
              <p className="lead" style={{fontWeight: 600}}>
                phone:
              </p>
              <p className="lead">
                {typeof e.เบอร์โทร == "undefined" ? "ไม่พบข้อมูล" : e.เบอร์โทร}
              </p>
            </div>
            <div className="d-xl-flex justify-content-between">
              <p className="lead" style={{fontWeight: 600}}>
                Address:
              </p>
              <p className="lead">555/205 Nirvana Park,Bangkok</p>
            </div>
            <div className="d-xl-flex justify-content-between">
              <p className=" lead" style={{fontWeight: 600}}>
                Email:
              </p>
              <p className="lead">adirek@hotmail.com</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mt-md-0 mt-5">
          <div className="col-12">
            <h1 className="title text-[#cf9b3b]">Review</h1>
            <ul style={{color: "#808191"}}>
              <li className="sub-title-teacher">
                <p className="lead">สอนเข้าใจง่าย</p>
              </li>
              <li className="sub-title-teacher">
                <p className="lead">เนื้อหากระชับ ชัดเจน</p>
              </li>
              <li className="sub-title-teacher">
                <p className="lead">คุณครูน่ารัก</p>
              </li>
            </ul>
          </div>
        </div>
      </div> */}
    </>
  )
}

export default InstructorDetail
