import {useState, Fragment} from "react"
import {Dialog, Transition} from "@headlessui/react"
import axios from "axios"
const ContactUs = () => {
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    email: "",
    tel: "",
    message: "",
  })
  const [isOpen, setIsOpen] = useState(false)
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
    // if (
    //   instructor.firstName.length &&
    //   instructor.lastName.length &&
    //   instructor.email.length &&
    //   instructor.tel.length == 0
    // ) {
    //   setWarning(true)
    // }
    axios
      .post("http://localhost:4000/contactus", contact)
      .then(function (response) {
        console.log(response.data.message)
        console.log("1")
        setWarnText(false)
        setIsOpen(true)
      })
      .catch(function (error) {
        console.log("2")
        console.log(error.response.data.error)
        let err = error.response.data.error
        setWarning(true)
        setWarnText(`***${err}***`)
      })
  }
  return (
    <>
      <div className="flex justify-center items-center bg-white mt-12">
        <div className="container mx-auto my-4 px-4 lg:px-20">
          <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
            <div className="flex">
              <h1 className="font-title uppercase text-f4xl">
                ส่งขอความ
                <br className="hidden md:block" /> หาเรา
              </h1>
            </div>
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
                type="number"
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
            <div className="my-2 w-1/2 lg:w-1/4">
              {warning ? (
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
              <button
                onClick={handleSubmit}
                className="cursor-pointer btn uppercase text-f2xl p-0 font-title bg-blue-900 text-gray-100 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline">
                ยืนยัน
              </button>
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
          </div>

          <div className="w-full lg:-mt-[40rem] lg:w-2/6 px-8 py-12 ml-auto bg-blue-900  rounded-2xl">
            <div className="flex flex-col text-white">
              <h1 className="font-title uppercase text-f3xl my-4 !text-white">Contact US</h1>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt arcu
                diam, eu feugiat felis fermentum id. Curabitur vitae nibh viverra, auctor turpis
                sed, scelerisque ex.
              </p>

              <div className="flex my-4 w-2/3 lg:w-1/2">
                <div className="flex flex-col">
                  <i className="fas fa-map-marker-alt pt-2 pr-2" />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-2xl !text-white">สำนักงานใหญ่</h2>
                  <p className="text-gray-400">555/205 Nirvana Park</p>
                </div>
              </div>

              <div className="flex my-4 w-2/3 lg:w-1/2">
                <div className="flex flex-col">
                  <i className="fas fa-phone-alt pt-2 pr-2" />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-2xl !text-white">โทรหาเรา</h2>
                  <p className="text-gray-400">Tel: xxx-xxx-xxx</p>
                  <p className="text-gray-400">Fax: xxx-xxx-xxx</p>
                </div>
              </div>

              <div className="flex my-4 w-2/3 lg:w-1/2">
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1">
                  <i className="fab fa-facebook-f text-blue-900" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1">
                  <i className="fab fa-linkedin-in text-blue-900" />
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
