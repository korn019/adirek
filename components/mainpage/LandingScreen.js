const LandingScreen = () => {
  return (
    <>
      <div class="row-hero">
        <video class="video" autoplay playsinline muted loop>
          <source src="../../assets/video/video1.mp4" type="video/mp4" />
        </video>
        <div class="video-quote text-center">
          <p
            style="
            color: white;
            font-size: clamp(3rem, 6vw, 5rem);
            line-height: 0.9;
            font-weight: 900;
            letter-spacing: -0.025em;
            margin-top: 1em;
          ">
            เปิดประตู "สู่การเรียนรู้" ให้ทุกวันคือการสร้างโอกาสใหม่
          </p>
          <a class="btn btn-base" href="category.html" style="font-size: clamp(2rem, 8vw, 1.2rem); margin-top: 20px">
            ค้นหาคอร์สเรียนออนไลน์
          </a>
        </div>
      </div>
    </>
  );
};

export default LandingScreen;
