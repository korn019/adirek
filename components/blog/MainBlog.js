import BlogCard from "./BlogCard"
import SwiperBlogCard from "./SwiperBlogCard"

const MainBlog = () => {
  


  const Article = [
    {
      id: 1,
      url: "Perfectionist",
      title: "Perfectionist สาเหตุหนึ่งของซึมเศร้า",
      subtitle:
        "เมื่อพูดถึงการที่ใครสักคนหนึ่งรักในความสมบูรณ์แบบ แน่นอนว่าสิ่งที่ผู้ฟังจินตนาการถึงมักเป็นผลงานที่ยอดเยี่ยมไร้ที่ติใช่ไหมคะ",
      img: "/assets/img/blog/perfectionist.jpg",
      view: 5,
      comment: 3,
      date: "22 มีนาคม 2022",
    },
    {
      id: 2,
      url: "Self-acceptance",
      title: "การยอมรับตนเอง self-acceptance",
      subtitle:
        "เราทราบกันดีว่ามนุษย์เป็นสิ่งมีชีวิตที่อยู่รวมกันเป็นสังคม ดังนั้นความต้องการได้รับการยอมรับนั้นจึงเป็นสัญชาตญาณพื้นฐานของมนุษย์เพื่อให้สามารถดำรงชีพอยู่ได้",
      img: "/assets/img/blog/self-acceptance.jpg",
      view: 5,
      comment: 3,
      date: "22 มีนาคม 2022",
    },
    {
      id: 3,
      url: "Inspiration",
      title: "การสร้างแรงบันดาลใจในที่ทำงาน",
      subtitle:
        "เราไม่อาจปฏิเสธได้ว่าในองค์กรหนึ่งนั้นต้องอาศัยความร่วมมือกันจากทีมงานอย่างมีประสิทธิภาพไม่ใช่เพียงตัวเราท่านั้น ที่ต้องการแรงบันดาลใจเพื่อที่จะดึงความสามารถที่มีอยู่ออกมาได้อย่างเต็มที่คนรอบข้างตัวเราเองก็ต้องการสิ่งนั้น เช่นเดียวกัน",

      img: "/assets/img/blog/inspiration.jpg",
      view: 5,
      comment: 3,
      date: "22 มีนาคม 2022",
    },
  ]
  return (
    <>
      <section class="pd-top-135 pd-bottom-120">
        <div class="container px-9">
          <div class="row">
            <div class="col-md-8">
              <div class="section-title">
                <h2>บทความ/ข่าวสาร</h2>
              </div>
            </div>
          </div>

          <div className="relative">
            <SwiperBlogCard Article={Article} />
          </div>
        </div>
      </section>
    </>
  )
}

export default MainBlog

{
  /* <div class="blog-slider  owl-carousel ">
            <div class="item">
              <div class="single-course-wrap single-blog-post ">
                <div class="thumb">
                  <a href="javascript:;" onclick="PerfectionClick()">
                    <img src="assets/img/blog/perfectionist.jpg" alt="img" />
                  </a>
                </div>
                <div class="wrap-details wrap-details-details blog-post-content">
                  <h6>
                    <a href="javascript:;" onclick="PerfectionClick()" class="cursor-pointer">
                      Perfectionist สาเหตุหนึ่งของซึมเศร้า
                    </a>
                  </h6>
                  <p class="text-[#000000BF]">
                    เมื่อพูดถึงการที่ใครสักคนหนึ่งรักในความสมบูรณ์แบบ
                    แน่นอนว่าสิ่งที่ผู้ฟังจินตนาการถึงมักเป็นผลงานที่ยอดเยี่ยมไร้ที่ติใช่ไหมคะ
                  </p>
                  <div class="price-wrap">
                    <div class="row align-items-center">
                      <div class="col-6">
                        <a href="#">By Admin</a>
                      </div>
                      <div class="col-6 text-end">
                        <div class="date">22 มีนาคม 2022</div>
                      </div>
                      <div class="col-12 text-end ">
                        <div class="d-flex  justify-content-end align-items-center ">
                          <div>
                            {" "}
                            <i class="fas fa-eye text-[#808080] text-[16px]"></i>
                          </div>
                          <div className="ml-1">
                            <span id="Pefection"></span> View
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div class="item">
                <div class="single-course-wrap single-blog-post">
                  <div class="thumb">
                    <a href="javascript:;" onclick="SelfAcceptClick()">
                      <img src="assets/img/blog/self-acceptance.jpg" alt="img" />
                    </a>
                  </div>
                  <div class="wrap-details wrap-details-details blog-post-content">
                    <h6>
                      <a href="javascript:;" onclick="SelfAcceptClick()">
                        การยอมรับตนเอง self-acceptance{" "}
                      </a>
                    </h6>
                    <p class="" style="color:#000000BF;">
                      เราทราบกันดีว่ามนุษย์เป็นสิ่งมีชีวิตที่อยู่รวมกันเป็นสังคม
                      ดังนั้นความต้องการได้รับการยอมรับนั้นจึงเป็นสัญชาตญาณพื้นฐานของมนุษย์เพื่อให้สามารถดำรงชีพอยู่ได้{" "}
                    </p>
                    <div class="price-wrap">
                      <div class="row align-items-center">
                        <div class="col-6">
                          <a href="#">By Admin</a>
                        </div>
                        <div class="col-6 text-end">
                          <div class="date">22 มีนาคม 2022</div>
                        </div>
                        <div class="col-12 text-end ">
                          <div class="d-flex  justify-content-end align-items-center ">
                            <div>
                              {" "}
                              <i class="fas fa-eye" style="color:#808080;font-size:16px;"></i>
                            </div>
                            <div style="margin-left:5px;">
                              {" "}
                              <span id="SelfAccept"></span> View
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */
}

{
  /* <div class="item">
                <div class="single-course-wrap single-blog-post">
                  <div class="thumb">
                    <a href="javascript:;" onclick="InspirationClick()">
                      <img src="assets/img/blog/inspiration.jpg" alt="img" />
                    </a>
                  </div>
                  <div class="wrap-details wrap-details-details blog-post-content">
                    <h6>
                      <a href="javascript:;" onclick="InspirationClick()">
                        การสร้างแรงบันดาลใจในที่ทำงาน
                      </a>
                    </h6>
                    <p>
                      เราไม่อาจปฏิเสธได้ว่าในองค์กรหนึ่งนั้นต้องอาศัยความร่วมมือกันจากทีมงานอย่างมีประสิทธิภาพ
                      ไม่ใช่เพียงตัวเราท่านั้น
                      ที่ต้องการแรงบันดาลใจเพื่อที่จะดึงความสามารถที่มีอยู่ออกมาได้อย่างเต็มที่คนรอบข้าง
                      ตัวเราเองก็ต้องการสิ่งนั้น เช่นเดียวกัน
                    </p>
                    <div class="price-wrap">
                      <div class="row align-items-center">
                        <div class="col-6">
                          <a href="#">By Admin</a>
                        </div>
                        <div class="col-6 text-end">
                          <div class="date">22 มีนาคม 2022</div>
                        </div>
                        <div class="col-12 text-end ">
                          <div class="d-flex  justify-content-end align-items-center ">
                            <div>
                              {" "}
                              <i class="fas fa-eye" style="color:#808080;font-size:16px;"></i>
                            </div>
                            <div style="margin-left:5px;">
                              {" "}
                              <span id="Inspiration"></span> View
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> 
          </div> */
}