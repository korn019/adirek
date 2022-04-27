const PartnerInstructor = () => {
  return (
    <section className="">
      <div className="text-center  bg-background">
        <div className="container ">
          <div className="row justify-content-center ">
            <div className="col-lg-8  my-12">
              <div className="">
                <h2 className="text-Athiti !font-semibold !text-titleBlue  !text-[2.2rem] !leading-none md:!text-[4rem] my-5">
                  สร้างรายได้ด้วยความรู้ของคุณ
                </h2>
                {/* <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan
                    bibendum gravida maecenas augue elementum et neque. Suspendisse imperdiet .
                  </p> */}
              </div>
            </div>
          </div>
          <div className="row justify-center text-center ">
            <div className="col-lg-4 col-sm-6  ">
              <div className="single-intro-wrap-2 ">
                <div className="thumb  justify-center items-center flex">
                  <img
                    src="/static/img/intro/instructor-1.png"
                    className="w-[140px] h-[140px]"
                    alt="img"
                  />
                </div>
                <div className="wrap-details">
                  <h4 className="text-Athiti !font-semibold !text-black">
                    <a
                      href="#"
                      className="text-Athiti !font-semibold !text-black"
                    >
                      {" "}
                      รับรายได้จากลูกค้าทันที
                    </a>
                  </h4>
                  {/* <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Dui praesent nam fermentum, est neque, dignissim.
                      Phasellus feugiat elit vulputate convallis.
                    </p> */}
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single-intro-wrap-2">
                <div className="thumb  justify-center items-center flex">
                  <img
                    src="/static/img/intro/instructor-2.png"
                    className="w-[140px] h-[140px]"
                    alt="img"
                  />
                </div>
                <div className="wrap-details">
                  <h4 className="text-Athiti !font-semibold !text-black">
                    <a
                      href="#"
                      className="text-Athiti !font-semibold !text-black"
                    >
                      ไม่มีหักเปอร์เซ็นต์
                    </a>
                  </h4>
                  {/* <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Dui praesent nam fermentum, est neque, dignissim.
                      Phasellus feugiat elit vulputate convallis.
                    </p> */}
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single-intro-wrap-2">
                <div className="thumb  justify-center items-center flex">
                  <img
                    src="/static/img/intro/instructor-3.png"
                    className="w-[140px] h-[140px]"
                    alt="img"
                  />
                </div>
                <div className="wrap-details">
                  <h4>
                    <a
                      href="#"
                      className="text-Athiti !font-semibold !text-black"
                    >
                      มีลูกค้ามากกว่า 50,000 คน
                    </a>
                  </h4>
                  {/* <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Dui praesent nam fermentum, est neque, dignissim.
                      Phasellus feugiat elit vulputate convallis.
                    </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerInstructor;
