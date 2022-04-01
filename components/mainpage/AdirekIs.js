import {useState, useEffect} from "react"
import Link from "next/link"
const AdirekIs = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <section className="text-gray-700 body-font -mt-36">
        <div className="container mx-auto flex px-6 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center z-50">
            <h1 className="title-font text-f5xl sm:text-f4xl  mb-4 font-title  text-gray-900">
              <span className="title-word title-word-1">อ</span>
              <span className="title-word title-word-2">ดิ</span>
              <span className="title-word title-word-3">เ</span>
              <span className="title-word title-word-4">ร</span>
              <span className="title-word title-word-3">ก</span>
            </h1>
            <p className="mb-8 leading-relaxed  text-fbase">
              เกิดขึ้นจากความเชื่อที่ว่า "ชีวิตคือการค้นหาและเรียนรู้สิ่งใหม่ๆ
              ที่ไม่มีวันสิ้นสุด"เราจึงก่อตั้ง <strong className="text-xl"> อดิเรก </strong>
              ขึ้นในฐานะแพลตฟอร์มการเรียนรู้รูปแบบใหม่ที่ทำหน้าที่ป็นพื้นที่อิสระเพื่อเชื่อมระหว่างผู้เรียนและผู้สอนเข้าไว้ด้วยกันที่
              <strong className="text-xl"> อดิเรก </strong>
            </p>
            <div className="flex justify-center">
              <p className="mb-8 leading-relaxed  text-fbase">
                เรารวบรวมกลุ่มผู้สอนไว้มากที่สุดในประเทศไทย
                เลือกได้ตามหมวดหมู่และความสนใจของคุณเน้นสอนตามความต้องการของผู้เรียน
                ด้วยระบบที่เปิดโอกาสให้ผู้เรียนสามารถเลือกผู้สอนได้ด้วยตนเองมีระบบที่ประกันการสอนเพื่อสร้างความไว้วางใจให้กับผู้เรียน
              </p>
            </div>
            <div className="flex justify-center">
              <button className="btn font-body text-3xl">
                <Link href="/Contact">ติดต่อเรา</Link>{" "}
              </button>
            </div>
          </div>
          <div className=" lg:max-w-lg lg:w-full md:w-1/2 w-5/6 img-hover-zoom">
            <div className="body--container">
              <img
                className="text w-[400px] h-[400px] object-cover"
                alt="Adirek"
                src="assets/img/Logo-Adirek.png"
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

      {/* <section className="juice3 bg-gray-100 bg-opacity-90 py-10">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row">
          {/* <!-- left --> 
          <div className="juice relative lg:w-2/3 rounded-xl bg-secondary-lite bg-cover p-8 md:p-16">
            <p className="max-w-sm text-secondary text-3xl md:text-4xl font-semibold">
              Active Summer With Juice Milk 300ml
            </p>
            <p className="max-w-xs pr-10 text-secondary font-semibold mt-8">
              New arrivals with naturre fruits, juice milks, essential for summer
            </p>
            <button className="mt-20 bg-white font-semibold px-8 py-2 rounded">Shop Now</button>
            <div className="absolute bottom-8 right-8 md:bottom-5 md:right-5 flex">
              <a href className="h-6 w-6 flex items-center justify-center rounded-md bg-white">
                <svg
                  className="h-3 text-gray-700"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="far"
                  data-icon="chevron-left"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 512"
                  className="svg-inline--fa fa-chevron-left fa-w-8 fa-3x">
                  <path
                    fill="currentColor"
                    d="M231.293 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L70.393 256 251.092 74.87c4.686-4.686 4.686-12.284 0-16.971L231.293 38.1c-4.686-4.686-12.284-4.686-16.971 0L4.908 247.515c-4.686 4.686-4.686 12.284 0 16.971L214.322 473.9c4.687 4.686 12.285 4.686 16.971-.001z"></path>
                </svg>
              </a>
              <a
                href
                className="ml-1.5 h-6 w-6 flex items-center justify-center rounded-md bg-yellow-400">
                <svg
                  className="h-3 text-gray-700"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="far"
                  data-icon="chevron-right"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 512"
                  ="svg-inline--fa fa-chevron-right fa-w-8 fa-3x">
                  <path
                    fill="currentColor"
                    d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z"></path>
                </svg>
              </a>
            </div>
          </div>
          {/* <!-- right --> 
          <div className="juice2 mt-6 lg:mt-0 lg:ml-6 lg:w-1/3 rounded-xl bg-primary-lite bg-cover p-8 md:p-16">
            <div className="max-w-sm">
              <p className="text-3xl md:text-4xl font-semibold uppercase">20% sale off</p>
              <p className="mt-8 font-semibold">
                Syncthetic seeds
                <br />
                2.0 OZ
              </p>
              <button className="mt-20 bg-white font-semibold px-8 py-2 rounded">Shop Now</button>
            </div>
          </div>
        </div>
      </section> */}

      <section className="relative  bg-blueGray-50 ">
        <div className="items-center  flex-wrap grid grid-cols-1 lg:grid-cols-2">
          <div className="w-full xl:w-9/12 ml-auto mr-auto px-4">
            <iframe
              src="https://www.youtube.com/embed/I9TCLKlMzpc"
              frameBorder="0"
              allowFullScreen
              className="animate-none xl:animate-[youtubeSlide_4s_infinite_alternate] aspect-video  w-full h-full  rounded-lg "></iframe>
          </div>
          <div className="w-full  ml-auto mr-auto px-4">
            <div className="md:pr-12">
              <h3 className="mb-6  mt-8 text-3xl font-title text-f2xl md:text-fxl lg:text-f3xl title-word-3 title-word-2 animate-[color-animation_3s_linear_infinite]">
                ติดอาวุธทางความรู้ไปกับอดิเรก
              </h3>
              <p className="mt-4 indent-5 text-lg leading-relaxed text-grey-500">
                หากคุณคือคนหนึ่งที่ต้องการเรียนรู้สิ่งใหม่ๆหรือเพิ่มทักษะที่น่าสนใจเราคือชุมชนที่รวบรวมผู้สอนที่มีความรู้ความสามารถและประสบการณ์ในสาขาต่างๆที่พร้อมจะถ่ายทอดองค์ความรู้และประสบการณ์ให้กับคุณ
              </p>
              <p className=" indent-5  mt-4 text-lg leading-relaxed !text-grey-500">
                เปิดโอกาสให้คุณได้พบเจอกับผู้สอนที่ดีที่สุดและตรงใจที่สุด
                สามารถเลือกสไตล์การสอนให้เหมาะกับสไตล์การเรียนของคุณทุกเรื่องที่คุณสนใจ
                ทุกทักษะที่คุณตามหา พร้อมสื่อสารกันโดยตรง ไม่ผ่านคนกลาง สามารถกำหนดวัน เวลา สถานที่
                รวมทั้งสามารถเลือกรูปแบบผู้สอนที่ผู้เรียนต้องการได้อย่างอิสระ
              </p>
              <p className=" indent-5  mt-4 text-lg leading-relaxed !text-grey-500">
                หากคุณคือคนหนึ่งที่ต้องการเรียนรู้สิ่งใหม่ๆหรือเพิ่มทักษะที่น่าสนใจเราคือชุมชนที่รวบรวมผู้สอนที่มีความรู้ความสามารถและประสบการณ์ในสาขาต่างๆที่พร้อมจะถ่ายทอดองค์ความรู้และประสบการณ์ให้กับคุณ
              </p>
              <ul className="list-none mt-6">
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                        {/* <i className="fas fa-fingerprint"></i> */}
                      </span>
                    </div>
                    <div>
                      <p className="leading-relaxed">ทุกการเรียนรู้ เริ่มต้นที่ อดิเรก</p>
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
                      <p className="leading-relaxed">
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
                      <p className="leading-relaxed">
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
                      <p className="leading-relaxed">
                        อดิเรก
                        ประตูสู่การเรียนรู้ทุกเรื่องที่คุณสนใจและช่องท่างที่จะเปลี่ยนงานอดิเรกของคุณให้เป็นรายได้
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
