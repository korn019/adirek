import {useState, Fragment} from "react"
import {Dialog, Transition} from "@headlessui/react"
import {css} from "@emotion/react"
import SyncLoader from "react-spinners/SyncLoader"
import axios from "axios"
import {FiMapPin} from "react-icons/fi"
import {BsTelephone} from "react-icons/bs"
import {RiFacebookCircleFill} from "react-icons/ri"
import {AiFillYoutube} from "react-icons/ai"
import {FaLine} from "react-icons/fa"
import Toast from "./Toast"
import {toast} from "react-hot-toast"

const ContactUs = () => {
  const [bgColor, setBgColor] = useState("")
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    email: "",
    tel: "",
    message: "",
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
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    axios
      .post("http://localhost:3000/api/contactus", contact)
      .then(function (response) {
        setWarnText(false)
        // setIsOpen(true)
        if (response.status === 200) {
          setLoading(false)
          console.log(response)
          toast(`ส่งข้อความเรียบร้อยแล้ว`)
          setBgColor("bg-success")
        }
      })
      .catch(function (error) {
        let err = error.response.data.error
        // setWarning(true)
        // setWarnText(`***${err}***`)
        toast(`${err}`)
        setBgColor("bg-danger")
        if (error.response.status === 400) {
          setLoading(false)
        }
      })
  }
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `
  return (
    <>
      <div className="flex justify-center items-center bg-white my-20 ">
        <div className="container mx-auto my-4 px-4 lg:px-20">
          <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
            <div className="flex">
              <h1 className="text-Athiti !leading-none !font-semibold   !text-titleBlue !text-f3xl md:!text-f4xl ">
                ส่งข้อความ
                <br className="hidden md:block" /> หาเรา
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
                  value={contact.email}
                  name="email"
                  onChange={handleChange}
                />
                <input
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="เบอร์โทรศัพท์*"
                  value={contact.tel}
                  onChange={handleChange}
                  name="tel"
                />
              </div>
              <div className="my-4">
                <textarea
                  placeholder="ข้อความ*"
                  className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  value={contact.message}
                  onChange={handleChange}
                  name="message"></textarea>
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
                  <SyncLoader color="blue" loading={loading} css={override} size={12} />
                </div>

                {loading ? null : (
                  <button
                    className="text-Athiti !leading-none p-2 font-semibold cursor-pointer btn uppercase !text-f2xl   bg-blue-900 !text-gray-100 hover:!text-bg  hover:border-8 hover:border-bg rounded-lg w-full 
                      focus:outline-none focus:shadow-outline"
                    type="submit">
                    ยืนยัน
                  </button>
                )}
                <Toast t={toast} bgColor={bgColor} closeModal={closeModal} />
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

          <div className="w-full lg:-mt-[40rem] lg:w-2/6 px-8 py-12 ml-auto bg-blue-900  rounded-2xl">
            <div className="flex flex-col text-white">
              <h1 className="text-Athiti !font-semibold uppercase !text-f3xl  my-4 !text-white c">
                Contact US
              </h1>
              {/* <p className="text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt arcu
                diam, eu feugiat felis fermentum id. Curabitur vitae nibh viverra, auctor turpis
                sed, scelerisque ex.
              </p> */}

              <div className="flex my-4 w-full">
                <div className="flex flex-col">
                  {/* <i className="fas fa-map-marker-alt pt-2 pr-2" /> */}
                  <FiMapPin className="pt-2 pr-2" />
                </div>
                <div className="flex flex-col">
                  <h2 className="!text-2xl !text-white text-Athiti  ">สำนักงานใหญ่</h2>
                  <p className="!text-gray-400 subtext-Athiti ">
                    เลขที่ 349 ชั้นที่ 20 ถนนวิภาวดีรังสิต แขวงจอมพล เขตจตุจักร กรุงเทพมหานคร
                  </p>
                </div>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1882.108583262637!2d100.55945460932257!3d13.807957796293016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29c446dd1c7ed%3A0x864a385c38bb4efe!2sRegus%20-%20Bangkok%2C%20SJ%20Infinite%20I%20Business%20Complex!5e0!3m2!1sth!2sth!4v1650989851731!5m2!1sth!2sth"
                width="100%"
                height="250"
                style={{border: 0}}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
              <div className="flex my-4 w-2/3 lg:w-1/2">
                <div className="flex flex-col">
                  <BsTelephone className="pt-2 pr-2" />
                  {/* <i className="fas fa-phone-alt pt-2 pr-2" /> */}
                </div>
                <div className="flex flex-col">
                  <h2 className="!text-2xl !text-white text-Athiti  ">โทรหาเรา</h2>
                  <p className="!text-gray-400 subtext-Athiti">Tel: xxx-xxx-xxx</p>
                  <p className="!text-gray-400 subtext-Athiti">Fax: xxx-xxx-xxx</p>
                </div>
              </div>

              <div className="flex my-4 w-2/3 lg:w-1/2 ">
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-white h-8 w-8 mx-1 text-center  flex justify-center items-center">
                  {/* <i className="fab fa-facebook-f text-blue-900" /> */}
                  <RiFacebookCircleFill className="!text-[#4267B2]" size="1.7rem" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-white h-8 w-8 mx-1 text-center  flex justify-center items-center">
                  <AiFillYoutube className="!text-[#FF0000]" size="1.7rem" />
                  {/* <i className="fab fa-youtube-in text-blue-900" /> */}
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-white h-8 w-8 mx-1 text-center  flex justify-center items-center">
                  <FaLine className="!text-[#00B900]" size="1.6rem" />
                  {/* <i className="fab fa-youtube-in text-blue-900" /> */}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
        <div>
          <a
            title="Buy me a pizza"
            href="https://www.buymeacoffee.com/Dekartmc"
            target="_blank"
            className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
            <img
              className="object-cover object-center w-full h-full rounded-full"
              src="https://img.icons8.com/emoji/48/000000/pizza-emoji.png"
            />
          </a>
        </div>
      </div> */}
    </>
  )
}

export default ContactUs
