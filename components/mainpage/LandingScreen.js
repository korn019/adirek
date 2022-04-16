import Link from "next/link"

const LandingScreen = () => {
  return (
    <div className="row-hero">
       <div class="overlay"></div>
      <video className="video object-cover " autoPlay playsInline muted loop>
        <source src="/static/video/landing.mp4#t=86"  type="video/mp4" />
      </video>
     
      <div className="video-quote text-center px-3 ">
        <p
          className="
        text-f3xl md:text-f4xl"
          style={{
            color: "white",
            // fontSize: "clamp(3rem, 6vw, 5rem)",
            lineHeight: 0.9,
            fontWeight: 900,
            letterSpacing: "-0.025em",
            marginTop: "1em",
          }}>
          เปิดประตู "สู่การเรียนรู้" ให้ทุกวันคือการสร้างโอกาสใหม่
        </p>

        <button className="btn " style={{fontSize: "clamp(2rem, 8vw, 1.2rem)", marginTop: 30}}>
          <Link href="/Category">ค้นหาคอร์สเรียนออนไลน์</Link>
        </button>
      </div>
    </div>
  )
}

export default LandingScreen
