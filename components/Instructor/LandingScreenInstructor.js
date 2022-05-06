import Link from "next/link"

const LandingScreenInstructor = () => {
  return (
    <section className="banner-area instructor-banner p-0  bg-[#11142d] bg-[url(/static/img/instructor-banner.png)] relative">
      <div className="container">
        <div className="row justify-content-center ">
          <div className="col-md-5 col-8">
            <div className="thumb  justify-center items-center flex">
              <img src="/static/img/instruc.png" alt="img" className="object-cover" />
            </div>
          </div>
          <div className="col-md-7 col-sm-10 align-self-center ">
            <div className="banner-inner text-md-start text-center relative">
              <h1 className="md:!text-[#0b132a] text-white text-f4xl font-Prompt drop-shadow-2xl font-bold">
                สมัครเลย !
              </h1>
              <div className=" me-0">
                <p className="md:!text-[#0b132a] text-white !text-[1.2rem] lg:!text-[2rem] drop-shadow-2xl !font-Mitr">
                  รับรายได้จากทักษะของคุณ <br />
                  ไม่หักเปอร์เซ็นต์ หรือคอมมิชชั่นใดๆ
                </p>
              </div>
              <Link href="/Add" className="group ">
                <button
                  className="bg-orange-500 self-center flflex-initialex group-hover:bg-black relative px-3 py2- md:px-10 md:py-2  rounded-xl text-slate-200 text-shade2   !font-Prompt font-black  !text-fxl"
                  style={{
                    fontSize: "clamp(2rem, 8vw, 1.2rem)",
                    marginTop: 30,
                    display:'initial'
                  }}>
                  <a className="drop-shadow-md font-Prompt text-flg md:text-f2xl group-hover:text-black ">
                    มาร่วมสอนกับเรา
                  </a>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LandingScreenInstructor
