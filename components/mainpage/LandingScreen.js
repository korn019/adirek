const LandingScreen = () => {
  return (
    <>
      <div class="row-hero">
        <video class="video" autoplay playsinline muted loop>
          <source src="../../assets/video/video1.mp4" type="video/mp4" />
        </video>
        <div class="video-quote text-center">
          <p
            style={{
              color: white,
              fontSize: "clamp(3rem, 6vw, 5rem)",
              lineHeight: 0.9,
              fontWeight: 900,
              letterSpacing: "-0.025em",
              marginTop: "1em",
            }}>
            เปิดประตู "สู่การเรียนรู้" ให้ทุกวันคือการสร้างโอกาสใหม่
          </p>
          <a class="btn btn-base" href="category.html" style={{fontSize: "clamp(2rem, 8vw, 1.2rem)", marginTop: 20}}>
            ค้นหาคอร์สเรียนออนไลน์
          </a>
        </div>
      </div>
    </>
  );
};

export default LandingScreen;
