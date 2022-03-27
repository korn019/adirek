const Partner = () => {
  return (
    <>
      <section className="bg-black">
        <div className="h-32"></div>
        <div className="relative bg-gray-50 text-black-500 pt-8 pb-6">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{height: 80}}>
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0">
              <polygon
                className="text-gray-50 fill-current"
                points="2560 0 2560 100 0 100"></polygon>
            </svg>
          </div>

          <section className="pt-6 pb-4 md:pb-12 ">
            <div className="mx-auto px-4">
              <div className="flex flex-wrap justify-center text-center mb-12">
                <div className="w-full lg:w-6/12 px-4">
                  <h4 className="text-f3xl md:text-7xl text-black-500 font-title ">
                    ข้อดีของการเป็น Partner กับเรา
                  </h4>
                </div>
              </div>
              <div className="flex flex-wrap justify-center text-center ">
                <div className="w-full md:w-1/2 lg:w-1/3 lg:mb-0 mb-12 px-4">
                  <div className="px-6">
                    {" "}
                    <div className="single-intro-wrap-2  items-center max-w-full mx-auto">
                      <div className="justify-center items-center flex">
                        <img src="assets/img/intro/01.png" alt="img" />
                      </div>
                      <div className="wrap-details">
                        <h4 className="fs-4 text-black">
                          <a href="#">ข้อดีของการเป็น Partner กับเรา</a>
                        </h4>
                        <p className="text-black">
                          การันตีได้ผลจริงพร้อมช่วยสร้างความมั่นใจและความก้าวหน้าให้กับคุณได้ง่าย
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 lg:mb-0 mb-12 px-4">
                  <div className="px-6">
                    {" "}
                    <div className="single-intro-wrap-2  items-center max-w-full mx-auto">
                      <div className="justify-center items-center flex">
                        <img src="assets/img/intro/02.png" className="" alt="img" />
                      </div>
                      <div className="wrap-details">
                        <h4 className="fs-4 text-black">
                          <a href="#">การสร้างโอกาส</a>
                        </h4>
                        <p className="text-black">
                          ทุกเรื่องที่คุณสนใจ และช่องทางที่จะเปลี่ยนงานอดิเรกของคุณให้เป็นรายได้
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 lg:mb-0 mb-12 px-4">
                  <div className="px-6">
                    {" "}
                    <div className="single-intro-wrap-2  items-center max-w-full mx-auto">
                      <div className="justify-center items-center flex">
                        <img src="assets/img/intro/03.png" className="" alt="img" />
                      </div>
                      <div className="wrap-details">
                        <h4 className="fs-4 text-black">
                          <a href="#">การเป็นที่รู้จักเข้าถึงกลุ่มเป้าหมายและผลลัพธ์</a>
                        </h4>
                        <p className="text-black">
                          จุดเริ่มต้นของสังคมแห่งการเรียนรู้ไม่มีที่สิ้นสุด
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <hr className="my-6 border-gray-400" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-gray-600 font-semibold py-1">
                <a
                  href="https://github.com/ahampriyanshu"
                  className="text-gray-600 hover:text-gray-900 font-title text-flg">
                  <span className="title-word title-word-1">อ</span>
                  <span className="title-word title-word-2">ดิ</span>
                  <span className="title-word title-word-3">เ</span>
                  <span className="title-word title-word-4">ร</span>
                  <span className="title-word title-word-3">ก</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Partner
