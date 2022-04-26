import {useState, Fragment} from "react"
import {Dialog, Transition} from "@headlessui/react"
import {css} from "@emotion/react"
import SyncLoader from "react-spinners/SyncLoader"
import axios from "axios"
import Layout from "../components/Layout"
const Add = () => {
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    ที่อยู่อีเมล: "",
    เบอร์โทร: "",
    ช่องทางการสอน: "",
    ช่วงอายุของกลุ่มผู้เรียนที่ถนัดในการสอน: "",
    ฉีดวัคซีนป้องกัน: "",
    ประวัติการศึกษา: "",
    ประวัติการสอน: "",
    ประกาศนียบัตร: "",
    กรณีเรียนนอกสถานที่: "",
    รูปถ่าย: "",
    อายุ: "",
    อีเมลผู้กรอกฟอร์ม: "",
  })
  const [course, setCourse] = useState({
    title_course: "",
    detail: "",
    price_course: "",
  })
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  let [loading, setLoading] = useState(false)
  const [warning, setWarning] = useState(false)
  const [warnText, setWarnText] = useState()
  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  const handleChange = (event) => {
    setContact({...contact, [event.target.name]: event.target.value})
    setCourse({...course, [event.target.name]: event.target.value})
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    axios
      .post("https://www.api-adirek.online/api/instructor/add", contact)
      .then(function (response) {
        axios
          .post("https://www.api-adirek.online/api/course_title", course)
          .then(function (res) {
            console.log(response)
            setWarnText(false)
            setIsOpen(true)
            if (response.status === 200) {
              setLoading(false)
            }
          })
          .catch(function (err) {
            console.log(err)
          })
        axios
          .post("https://www.api-adirek.online/api/course_price", course)
          .then(function (res) {
            console.log(response)
            setWarnText(false)
            setIsOpen(true)
            if (response.status === 200) {
              setLoading(false)
            }
          })
          .catch(function (err) {
            console.log(err)
          })
        axios
          .post("https://www.api-adirek.online/api/course_details", course)
          .then(function (res) {
            console.log(response)
            setWarnText(false)
            setIsOpen(true)
            if (response.status === 200) {
              setLoading(false)
            }
          })
          .catch(function (err) {
            console.log(err)
          })
      })
      .catch(function (error) {
        console.log(error)
        let err = error.response.data.error
        setWarning(true)
        setWarnText(`***${err}***`)
        if (error.response.status === 400) {
          setLoading(false)
        }
      })
  }
  return (
    <div className="flex justify-center items-center bg-white my-20 ">
      <div className="container mx-auto my-4 px-4 lg:px-20">
        <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
          <div className="flex">
            <h1 className="font-title uppercase !text-f3xl md:!text-f4xl  title-text ">
              เพิ่มครูผู้สอน
            </h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="ชื่อ*"
                value={contact.firstName}
                name="firstName"
                onChange={handleChange}
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="นามสกุล*"
                value={contact.lastName}
                name="lastName"
                onChange={handleChange}
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Email*"
                value={contact.ที่อยู่อีเมล}
                name="ที่อยู่อีเมล"
                onChange={handleChange}
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="เบอร์โทรศัพท์*"
                value={contact.เบอร์โทร}
                onChange={handleChange}
                name="เบอร์โทร"
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="ช่องทางการสอน*"
                value={contact.ช่องทางการสอน}
                onChange={handleChange}
                name="ช่องทางการสอน"
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="ช่วงอายุของกลุ่มผู้เรียนที่ถนัดในการสอน*"
                value={contact.ช่วงอายุของกลุ่มผู้เรียนที่ถนัดในการสอน}
                onChange={handleChange}
                name="ช่วงอายุของกลุ่มผู้เรียนที่ถนัดในการสอน"
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="ฉีดวัคซีนป้องกัน*"
                value={contact.ฉีดวัคซีนป้องกัน}
                onChange={handleChange}
                name="ฉีดวัคซีนป้องกัน"
              />

              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="ประวัติการศึกษา*"
                value={contact.tel}
                onChange={handleChange}
                name="ประวัติการศึกษา"
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="ประวัติการสอน*"
                value={contact.ประวัติการสอน}
                onChange={handleChange}
                name="ประวัติการสอน"
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="ประกาศนียบัตร*"
                value={contact.ประกาศนียบัตร}
                onChange={handleChange}
                name="ประกาศนียบัตร"
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="กรณีเรียนนอกสถานที่*"
                value={contact.กรณีเรียนนอกสถานที่}
                onChange={handleChange}
                name="กรณีเรียนนอกสถานที่"
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="รูปถ่าย*"
                value={contact.รูปถ่าย}
                onChange={handleChange}
                name="รูปถ่าย"
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="อายุ*"
                value={contact.อายุ}
                onChange={handleChange}
                name="อายุ"
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="อีเมลผู้กรอกฟอร์ม*"
                value={contact.อีเมลผู้กรอกฟอร์ม}
                onChange={handleChange}
                name="อีเมลผู้กรอกฟอร์ม"
              />
             
             
            </div>
            <div className="my-4">
              {/* <textarea
      placeholder="ข้อความ*"
      className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
      value={contact.message}
      onChange={handleChange}
      name="message">

      </textarea> */}
            </div>
            <div className="my-2 w-1/2 lg:w-1/3">
              {warning && loading !== true ? (
                <>
                  <div className="flex -mx-3 items-center justify-center text-center">
                    <div className="w-full ">
                      <p className="block w-full max-w-xs mx-auto  text-red-700 font-title text-fmd">
                        {warnText}
                      </p>
                    </div>
                  </div>
                </>
              ) : null}

              <div className="sweet-loading text-center">
                <SyncLoader color="blue" loading={loading} size={12} />
              </div>

              {loading ? null : (
                <button
                  className="cursor-pointer btn uppercase text-f2xl p-0 font-title bg-blue-900 text-gray-100 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline"
                  style={{cursor: "pointer", zIndex: 999}}
                  type="submit">
                  ยืนยัน
                </button>
              )}
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
                        <div className="flex justify-end items-center">
                          <Dialog.Title as="h3" className="text-right leading-6 text-gray-900">
                            <button className="font-black" onClick={closeModal}>
                              X
                            </button>
                          </Dialog.Title>
                        </div>
                        <div className="my-4 items-center justify-center flex">
                          <p className="text-sm text-gray-500">
                            <Dialog.Title
                              as="h3"
                              className="text-f3xl font-title my-4  leading-6 text-gray-900">
                              ลงทะเบียนสำเร็จ
                            </Dialog.Title>
                          </p>
                        </div>

                        <div className="mt-4  items-center justify-center flex">
                          <button
                            type="button"
                            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                            onClick={closeModal}>
                            ตกลง
                          </button>
                        </div>
                      </div>
                    </Transition.Child>
                  </div>
                </Dialog>
              </Transition>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Add
