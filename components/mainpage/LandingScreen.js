import Link from "next/link"

const LandingScreen = () => {
  return (
    <div className="row-hero">
      <div className="overlay"></div>
      <video
        className="video object-cover z-0"
        poster="/static/video/poster.png"
        autoPlay
        playsInline
        muted
        loop>
        <source src="/static/video/landing.mp4#t=86" type="video/mp4" />
      </video>

      <div className="video-quote text-center px-[0.5rem] lg:px-4 mt-8 md:mt-0">
        <p
          className="text-white text-center  drop-shadow-xl  font-semibold font-Athiti
        text-f2xl md:text-f3xl lg:text-[3.5rem] drop-shadow-[2px_2px_3px_rgba(0, 0, 0, 0.3)]">
          เปิดประตู <br />
          <strong
            className="!text-[#FF5959] drop-shadow-2xl  text-shade2 font-Athiti"
            style={{textShadow: "2px_2px_3px_rgba(0, 0, 0, 1)"}}>
            " สู่การเรียนรู้ "{" "}
          </strong>{" "}
          <br />
          <span className="text-fxl md:text-f4xl">ให้ทุกวันคือการสร้างโอกาสใหม่</span>
        </p>
        {/* <Link href="/courses" className="group  text-center items-center justify-center flex">
          <button
            className="bg-orange-500 group-hover:bg-black  px-10 py-2 rounded-xl text-slate-200  !font-Prompt font-black  "
            style={{
              marginTop: 25,
            }}>
            <a className="drop-shadow-md font-Prompt text-flg md:text-f2xl group-hover:text-black ">
              ค้นหาคอร์สเรียนออนไลน์
            </a>
          </button>
        </Link> */}
        <button
          className="bg-orange-500 btn p-3 group-hover:bg-black  px-10   rounded-xl text-slate-200    !font-Prompt font-black "
          style={{marginTop: 25}}>
          <Link href="/courses">
            <span className="drop-shadow-md font-Prompt text-flg md:text-fxl">
              {" "}
              ค้นหาคอร์สเรียน
            </span>
          </Link>
        </button>
      </div>
    </div>
  )
}

export default LandingScreen
