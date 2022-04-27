const AdirekisInstructor = () => {
  return (
    <section className="text-gray-700 body-font my-20 ">
      <div className="py-8 items-center test-class flex-wrap grid grid-cols-1 lg:grid-cols-2 z-50">
        <div className="w-full xl:w-11/12 ml-auto mr-auto px-4">
          <iframe
            src="https://www.youtube.com/embed/I9TCLKlMzpc"
            frameBorder="0"
            allowFullScreen
            className="animate-none aspect-video  w-full h-full  rounded-lg "
            // className="animate-none xl:animate-[youtubeSlide_4s_infinite_alternate] aspect-video  w-full h-full  rounded-lg "
          ></iframe>
        </div>
        <div className="w-full  ml-auto mr-auto px-4">
          <div className="md:pr-12">
            <h2 className="mb-6  mt-8 !text-flg !md:text-flg !lg:text--flg subtext-Athiti !font-semibold !text-black">
              <span className="!text-f2xl !md:text-6xl !lg:text-f6xl !mb-8 text-Athiti  !font-semibold !text-title">
                {" "}
                อดิเรก
              </span>{" "}
              คืออะไร? **เอาออก
            </h2>
            <p className="mt-4 indent-5 !text-xl md:!text-2xl  text-Athiti !font-normal">
              <strong className="!text-3xl text-Athiti !font-semibold !text-title">
                {" "}
                อดิเรก{" "}
              </strong>
              เกิดขึ้นในฐานะแพลตฟอร์มการเรียนรู้รูปแบบใหม่ที่ทำหน้าที่ป็นพื้นที่อิสระเพื่อเชื่อมระหว่างผู้เรียนและผู้สอนเข้าไว้ด้วยกันที่คือ
              แพลตฟอร์มการเรียนรู้รูปแบบใหม่ที่ทำหน้าที่เป็นพื้นที่อิสระเพื่อเชื่อมระหว่างผู้เรียนและผู้สอน
              ไว้ด้วยกัน พร้อมสื่อสารกัน โดยตรง ไม่ผ่านคนกลาง สามารถกำหนดวัน
              เวลา สถานที่ได้อย่างอิสระ
            </p>
            <ul className="list-disc  mt-6 px-3">
              <ul>
                <p className="leading-relaxed  text-Athiti !font-semibold  !text-flg !md:text-6xl !lg:text-f6xl  text-Athiti   drop-shadow-2xl mb-4">
                  สิ่งที่คุณจะได้จากการสอนที่{" "}
                  <strong className="!text-title !font-semibold">
                    {" "}
                    อดิเรก{" "}
                  </strong>
                </p>
              </ul>
              <li className="">
                <p className="!text-xl md:!text-2xl  text-Athiti !font-normal">
                  ช่องทางรายได้ใหม่ๆ
                  เปลี่ยนความรู้และความสามารถของคุณให้เป็นรายได้โดยที่ไม่ต้องลงทุน
                  ไม่มีหักเปอร์เซ็นต์ หรือคอมมิชชั่นใดๆ{" "}
                  <strong className="font-black"> ฟรีทุกอย่าง! </strong>
                </p>
              </li>
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <p className=" !text-xl md:!text-2xl  text-Athiti !font-normal">
                      เพิ่มทักษะให้กับผู้อื่นได้แบ่งปันความรู้
                      ช่วยเพิ่มทักษะให้กับผู้เรียนที่มีความสนใจ
                      ช่วยผลักดันผู้เรียนไปสู่ประตูแห่งโอกาสใหม่ ๆ
                    </p>
                  </div>
                </div>
              </li>
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <p className="!text-xl md:!text-2xl  text-Athiti !font-normal">
                      เวลาการทำงานที่ยืดหยุ่น กำหนดรายละเอียดต่างๆ ได้ด้วยตนเอง
                      ไม่ว่าจะเป็นวัน เวลา รายละเอียด แม้กระทั่งราคาคอร์ส
                    </p>
                  </div>
                </div>
              </li>
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <p className=" !text-xl md:!text-2xl  text-Athiti !font-normal">
                      สร้างสังคมแห่งการเรียนรู้ เพียงคุณมีความรู้และความสามารถ
                      และมีใจที่อยากแบ่งปันความรู้ให้กับผู้อื่น
                      คุณก็เป็นส่วนหนึ่งในการสร้างสังคมแห่งการเรียนรู้ไปกับเราได้
                    </p>
                  </div>
                </div>
              </li>
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <p className=" !text-xl md:!text-2xl  text-Athiti !font-normal">
                      เพิ่มทักษะให้กับตัวคุณเอง สร้างคอร์สเรียนได้ง่าย ๆ
                      แม้ไม่มีประสบการณ์ในการสอนมาก่อน เพราะเรามีทีมงานคอยให้
                      คำปรึกษาและช่วยเหลือคุณตลอด 24 ชั่วโมง
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AdirekisInstructor