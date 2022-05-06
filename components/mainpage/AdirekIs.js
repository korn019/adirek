import {useState, useEffect} from "react"
import Link from "next/link"
const AdirekIs = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <section className="text-gray-700 body-font -mt-20 sm:-mt-36 bg-[#FFFFFF]">
        <div className="container mx-auto flex md:px-6 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-left  z-50">
            <h1 className=" !text-[5rem] !mb-8 text-Athiti  !font-semibold !text-title">อดิเรก</h1>
            <p className="mb-8 indent-5 text-Athiti">
              เกิดขึ้นจากความเชื่อที่ว่า "ชีวิตคือการค้นหาและเรียนรู้สิ่งใหม่ๆ
              ที่ไม่มีวันสิ้นสุด"เราจึงก่อตั้ง{" "}
              <strong className="text-3xl text-Athiti !font-semibold !text-title"> อดิเรก </strong>
              ขึ้นในฐานะแพลตฟอร์มการเรียนรู้รูปแบบใหม่ที่ทำหน้าที่ป็นพื้นที่อิสระเพื่อเชื่อมระหว่างผู้เรียนและผู้สอนเข้าไว้ด้วยกันที่
              <strong className="text-3xl text-Athiti !font-semibold !text-title"> อดิเรก </strong>
            </p>
            <div className="flex justify-center">
              <p className="mb-8 indent-5 text-Athiti">
                เรารวบรวมกลุ่มผู้สอนไว้มากที่สุดในประเทศไทย
                เลือกได้ตามหมวดหมู่และความสนใจของคุณเน้นสอนตามความต้องการของผู้เรียน
                ด้วยระบบที่เปิดโอกาสให้ผู้เรียนสามารถเลือกผู้สอนได้ด้วยตนเองมีระบบที่ประกันการสอนเพื่อสร้างความไว้วางใจให้กับผู้เรียน
              </p>
            </div>
            <div className="flex justify-center">
              <button className="btn font-body text-3xl shadow-2xl">
                <Link href="/contact">
                  <span className="drop-shadow-md font-Prompt  ">ติดต่อเรา</span>
                </Link>{" "}
              </button>
            </div>
          </div>
          <div className=" lg:max-w-lg lg:w-full md:w-1/2 w-5/6 img-hover-zoom ">
            <div className="body--container">
              <img
                className="text w-[400px] h-[400px] object-cover"
                alt="Adirek"
                src="static/img/Knowledge-Logo-Vertical.png"
              />
              {/* <div className="bubble--container  ">
                <div className="bubble bubble--large"></div>
                <div className="bubble bubble--one top-[200px] left-[-50px] sm:left-0 sm:top-[400px]"></div>
                <div className="bubble bubble--two top-50 left-0 sm:top-[400px] sm:right-0"></div>
                <div className="bubble bubble--three top-[300px] left-0 sm:top-[450px] sm:left-0"></div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      <section className="relative  py-24 bg-background">
        <div className="items-center  flex-wrap grid grid-cols-1  lg:grid-cols-2  ">
          <div className="w-full p-6 md:p-12">
            <iframe
              src="https://www.youtube.com/embed/I9TCLKlMzpc"
              frameBorder="0"
              allowFullScreen
              // className="animate-none xl:animate-[youtubeSlide_4s_infinite_alternate] aspect-video  w-full h-96  rounded-lg "
              className="aspect-video  w-full h-full  rounded-lg "></iframe>
          </div>
          <div className="w-full  ml-auto mr-auto px-8">
            <div className="md:pr-12">
              <h1 className="!text-[46px] text-center md:text-left md:!text-[54px]  !font-Athiti  !font-semibold !text-[#0c4159]">
                ติดอาวุธทางความรู้ไปกับอดิเรก
              </h1>
              <p className="mt-4 indent-5 text-Athiti leading-relaxed text-black !text-xl  lg:text-2xl ">
                หากคุณคือคนหนึ่งที่ต้องการเรียนรู้สิ่งใหม่ๆหรือเพิ่มทักษะที่น่าสนใจเราคือชุมชนที่รวบรวมผู้สอนที่มีความรู้ความสามารถและประสบการณ์ในสาขาต่างๆที่พร้อมจะถ่ายทอดองค์ความรู้และประสบการณ์ให้กับคุณ
              </p>
              <p className=" indent-5  mt-4 !text-xl lg:text-2xl  text-Athiti ">
                เปิดโอกาสให้คุณได้พบเจอกับผู้สอนที่ดีที่สุดและตรงใจที่สุด
                สามารถเลือกสไตล์การสอนให้เหมาะกับสไตล์การเรียนของคุณทุกเรื่องที่คุณสนใจ
                ทุกทักษะที่คุณตามหา พร้อมสื่อสารกันโดยตรง ไม่ผ่านคนกลาง สามารถกำหนดวัน เวลา สถานที่
                รวมทั้งสามารถเลือกรูปแบบผู้สอนที่ผู้เรียนต้องการได้อย่างอิสระ
              </p>
              <ul className="list-disc mt-6  ">
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <p className="lg:text-[1.25rem] text-Athiti">
                        ทุกการเรียนรู้ เริ่มต้นที่{" "}
                        <strong className="!text-2xl text-Athiti !font-semibold !text-[#FF5959]">
                          {" "}
                          อดิเรก{" "}
                        </strong>
                      </p>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <p className="lg:text-[1.25rem]  text-Athiti">
                        <strong className="!text-2xl text-Athiti !font-semibold !text-[#FF5959]">
                          {" "}
                          อดิเรก{" "}
                        </strong>{" "}
                        จุดเริ่มต้นของสังคมแห่งการเรียนรู้ไม่มีที่สิ้นสุด
                      </p>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <p className="lg:text-[1.25rem]  text-Athiti">
                        <strong className="!text-2xl text-Athiti !font-semibold !text-[#FF5959]">
                          {" "}
                          อดิเรก{" "}
                        </strong>{" "}
                        เราเปิดประตสู่ทุกการเรียนรู้ ให้ทุกวันคือการสร้างโอกาสใหม่สำหรับคณ
                      </p>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <p className="lg:text-[1.25rem]  text-Athiti">
                        <strong className="!text-2xl text-Athiti !font-semibold !text-[#FF5959]">
                          {" "}
                          อดิเรก{" "}
                        </strong>
                        ประตูสู่การเรียนรู้ทุกเรื่องที่คุณสนใจและช่องท่างที่จะเปลี่ยนงานอดิเรกของคุณให้เป็นรายได้
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AdirekIs
