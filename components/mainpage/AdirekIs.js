import {useState, useEffect} from "react"
import Link from "next/link"
const AdirekIs = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <section className="text-gray-700 body-font -mt-20 sm:-mt-36 ">
        <div className="container mx-auto flex md:px-6 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-left  z-50">
            <h1
              className="title-font text-f4xl sm:text-f4xl  mb-4 font-title  text-gray-900 text-shade shade-text"
              style={{textShadow: "2px_2px_3px_rgba(0, 0, 0, 1)"}}>
              <span className="title-word title-word-1 drop-shadow-md ">อ</span>
              <span className="title-word title-word-2 drop-shadow-md ">ดิ</span>
              <span className="title-word title-word-3 drop-shadow-md ">เ</span>
              <span className="title-word title-word-4 drop-shadow-md ">ร</span>
              <span className="title-word title-word-5 drop-shadow-md ">ก</span>
            </h1>
            <p className="mb-8 text-subtext  lg:text-[1.5rem] !font-k2d font-light   indent-4">
              เกิดขึ้นจากความเชื่อที่ว่า "ชีวิตคือการค้นหาและเรียนรู้สิ่งใหม่ๆ
              ที่ไม่มีวันสิ้นสุด"เราจึงก่อตั้ง{" "}
              <strong className="text-3xl font-Prompt font-black text-[#FF5959]"> อดิเรก </strong>
              ขึ้นในฐานะแพลตฟอร์มการเรียนรู้รูปแบบใหม่ที่ทำหน้าที่ป็นพื้นที่อิสระเพื่อเชื่อมระหว่างผู้เรียนและผู้สอนเข้าไว้ด้วยกันที่
              <strong className="text-3xl font-Prompt font-black text-[#FF5959]"> อดิเรก </strong>
            </p>
            <div className="flex justify-center">
              <p className="mb-8 text-subtext lg:text-[1.5rem]  !font-k2d font-light indent-4">
                เรารวบรวมกลุ่มผู้สอนไว้มากที่สุดในประเทศไทย
                เลือกได้ตามหมวดหมู่และความสนใจของคุณเน้นสอนตามความต้องการของผู้เรียน
                ด้วยระบบที่เปิดโอกาสให้ผู้เรียนสามารถเลือกผู้สอนได้ด้วยตนเองมีระบบที่ประกันการสอนเพื่อสร้างความไว้วางใจให้กับผู้เรียน
              </p>
            </div>
            <div className="flex justify-center">
              <button className="btn font-body text-3xl shadow-2xl">
                <Link href="/Contact">
                  <span className="drop-shadow-md font-Prompt  ">ติดต่อเรา</span>
                </Link>{" "}
              </button>
            </div>
          </div>
          <div className=" lg:max-w-lg lg:w-full md:w-1/2 w-5/6 img-hover-zoom">
            <div className="body--container">
              <img
                className="text w-[400px] h-[400px] object-cover"
                alt="Adirek"
                src="static/img/Logo-Adirek.png"
              />
              <div className="bubble--container">
                <div className="bubble bubble--large"></div>
                <div className="bubble bubble--one top-[200px] left-[-50px] sm:left-0 sm:top-[400px]"></div>
                <div className="bubble bubble--two top-50 left-0 sm:top-[400px] sm:right-0"></div>
                <div className="bubble bubble--three top-[300px] left-0 sm:top-[450px] sm:left-0"></div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="relative  bg-blueGray-50 ">
        <div className="items-center  flex-wrap grid grid-cols-1  lg:grid-cols-2">
          <div className="w-full  md:w-11/12">
            <iframe
              src="https://www.youtube.com/embed/I9TCLKlMzpc"
              frameBorder="0"
              allowFullScreen
              className="animate-none xl:animate-[youtubeSlide_4s_infinite_alternate] aspect-video  w-full h-96  rounded-lg "></iframe>
          </div>
          <div className="w-full  ml-auto mr-auto px-4">
            <div className="md:pr-12">
              <h3 className="drop-shadow-xl mb-6  mt-8 text-3xl font-title text-f2xl md:text-fxl lg:text-f3xl title-word-3 title-word-2 animate-[color-animation_3s_linear_infinite]">
                ติดอาวุธทางความรู้ไปกับอดิเรก
              </h3>
              <p className="mt-4 indent-5 text-lg leading-relaxed text-grey-500  text-subtext lg:text-[1.2rem]  !font-k2d font-light">
                หากคุณคือคนหนึ่งที่ต้องการเรียนรู้สิ่งใหม่ๆหรือเพิ่มทักษะที่น่าสนใจเราคือชุมชนที่รวบรวมผู้สอนที่มีความรู้ความสามารถและประสบการณ์ในสาขาต่างๆที่พร้อมจะถ่ายทอดองค์ความรู้และประสบการณ์ให้กับคุณ
              </p>
              <p className=" indent-5  mt-4 text-lg leading-relaxed !text-grey-500  text-subtext lg:text-[1.2rem]  !font-k2d font-light">
                เปิดโอกาสให้คุณได้พบเจอกับผู้สอนที่ดีที่สุดและตรงใจที่สุด
                สามารถเลือกสไตล์การสอนให้เหมาะกับสไตล์การเรียนของคุณทุกเรื่องที่คุณสนใจ
                ทุกทักษะที่คุณตามหา พร้อมสื่อสารกันโดยตรง ไม่ผ่านคนกลาง สามารถกำหนดวัน เวลา สถานที่
                รวมทั้งสามารถเลือกรูปแบบผู้สอนที่ผู้เรียนต้องการได้อย่างอิสระ
              </p>
              <ul className="list-none mt-6 ">
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                        {/* <i className="fas fa-fingerprint"></i> */}
                      </span>
                    </div>
                    <div>
                      <p className="text-subtext    lg:text-[1.25rem]  !font-k2d font-light">
                        ทุกการเรียนรู้ เริ่มต้นที่ อดิเรก
                      </p>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                        {/* <i className="fab fa-html5"></i> */}
                      </span>
                    </div>
                    <div>
                      <p className="text-subtext   lg:text-[1.25rem]  !font-k2d font-light">
                        อดิเรก จุดเริ่มต้นของสังคมแห่งการเรียนรู้ไม่มีที่สิ้นสุด
                      </p>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                        {/* <i className="far fa-paper-plane"></i> */}
                      </span>
                    </div>
                    <div>
                      <p className="text-subtext   lg:text-[1.25rem]  !font-k2d font-light">
                        อดิเรก เราเปิดประตสู่ทุกการเรียนรู้ ให้ทุกวันคือการสร้างโอกาสใหม่สำหรับคณ
                      </p>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                        {/* <i className="far fa-paper-plane"></i> */}
                      </span>
                    </div>
                    <div>
                      <p className="text-subtext  lg:text-[1.25rem]  !font-k2d font-light">
                        อดิเรกประตูสู่การเรียนรู้ทุกเรื่องที่คุณสนใจและช่องท่างที่จะเปลี่ยนงานอดิเรกของคุณให้เป็นรายได้
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <footer className="relative  pt-8 pb-6 mt-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center md:justify-between justify-center">
              <div className="w-full md:w-6/12 px-4 mx-auto text-center">
                {/* <div className="text-sm text-blueGray-500 font-semibold py-1">
                  Made with{" "}
                  <a
                    href="https://www.creative-tim.com/product/notus-js"
                    className="text-blueGray-500 hover:text-gray-800"
                    target="_blank">
                    Notus JS
                  </a>{" "}
                  by{" "}
                  <a
                    href="https://www.creative-tim.com"
                    className="text-blueGray-500 hover:text-blueGray-800"
                    target="_blank">
                    {" "}
                    Creative Tim
                  </a>
                  .
                </div> */}
              </div>
            </div>
          </div>
        </footer>
      </section>
    </>
  )
}

export default AdirekIs
