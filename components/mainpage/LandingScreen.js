import Link from "next/link"

const LandingScreen = () => {
  return (
    <div className="row-hero">
      <div class="overlay"></div>
      <video
        className="video object-cover "
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

        <button className="btn shadow-2xl" style={{marginTop: 25}}>
          <Link href="/Category">
            <span className="drop-shadow-md font-Prompt text-flg md:text-f2xl ">
              {" "}
              ค้นหาคอร์สเรียนออนไลน์{" "}
            </span>
          </Link>
        </button>
      </div>
    </div>
  )
}

export default LandingScreen
