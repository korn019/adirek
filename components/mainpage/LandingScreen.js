import Link from "next/link"

const LandingScreen = () => {
  return (
    <div className="row-hero">
      <div class="overlay"></div>
      <video className="video object-cover " autoPlay playsInline muted loop>
        <source src="/static/video/landing.mp4#t=86" type="video/mp4" />
      </video>

      <div className="video-quote text-center lg:px-4 ">
        <p
          className="text-white text-center  drop-shadow-xl
        text-f2xl md:text-f3xl lg:text-[3.5rem] drop-shadow-[2px_2px_3px_rgba(0, 0, 0, 0.3)]"
          style={{
            // fontSize: "clamp(3rem, 2vw,4rem)",
            fontFamily: "Prompt-Black",
          }}>
          เปิดประตู{" "}
          <strong
            className="!text-[#FF5959] drop-shadow-2xl"
            style={{textShadow: "2px_2px_3px_rgba(0, 0, 0, 1)"}}>
            " สู่การเรียนรู้ "{" "}
          </strong>{" "}
          ให้ทุกวันคือการสร้างโอกาสใหม่
        </p>

        <button
          className="btn shadow-2xl"
          style={{fontSize: "clamp(2rem, 8vw, 1.2rem)", marginTop: 30}}>
          <Link href="/Category">
            <span className="drop-shadow-md font-Prompt"> ค้นหาคอร์สเรียนออนไลน์ </span>
          </Link>
        </button>
      </div>
    </div>
  )
}

export default LandingScreen
