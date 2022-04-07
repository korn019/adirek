import {useState, useEffect} from "react"
import BlogCard from "./BlogCard"
import SwiperBlogCard from "./SwiperBlogCard"

const MainBlog = ({search, setSearch}) => {
  const [perfectionistView, setPerfectionistView] = useState(0)
  const [acceptanceView, setAcceptanceView] = useState(0)
  const [inspirationView, setInspirationView] = useState(0)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const perfection = localStorage.getItem("@PerfectionistCountView")
      const acceptance = localStorage.getItem("@AcceptanceCountView")
      const inspiration = localStorage.getItem("@inspirationViewCountView")
      setPerfectionistView(JSON.parse(perfection))
      setInspirationView(JSON.parse(inspiration))
      setAcceptanceView(JSON.parse(acceptance))
    }
  }, [])

  const Article = [
    {
      id: 1,
      url: "Perfectionist",
      title: "Perfectionist สาเหตุหนึ่งของซึมเศร้า",
      subtitle:
        "เมื่อพูดถึงการที่ใครสักคนหนึ่งรักในความสมบูรณ์แบบ แน่นอนว่าสิ่งที่ผู้ฟังจินตนาการถึงมักเป็นผลงานที่ยอดเยี่ยมไร้ที่ติใช่ไหมคะ",
      img: "/assets/img/blog/perfectionist.jpeg",
      view: perfectionistView,
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
      view: acceptanceView,
      comment: 3,
      date: "22 มีนาคม 2022",
    },
    {
      id: 3,
      url: "Inspiration",
      title: "การสร้างแรงบันดาลใจในที่ทำงาน",
      subtitle:
        "เราไม่อาจปฏิเสธได้ว่าในองค์กรหนึ่งนั้นต้องอาศัยความร่วมมือกันจากทีมงานอย่างมีประสิทธิภาพไม่ใช่เพียงตัวเราท่านั้น ที่ต้องการแรงบันดาลใจเพื่อที่จะดึงความสามารถที่มีอยู่ออกมาได้อย่างเต็มที่คนรอบข้างตัวเราเองก็ต้องการสิ่งนั้น เช่นเดียวกัน",

      img: "/assets/img/blog/inspiration.jpeg",
      view: inspirationView,
      comment: 3,
      date: "22 มีนาคม 2022",
    },
  ]
  return (
    <>
      <section className="pd-top-135 pd-bottom-120">
        <div className="container px-9">
          <div className="row">
            <div className="col-md-8">
              <div className="section-title">
                <h2>บทความ/ข่าวสาร</h2>
              </div>
            </div>
          </div>
          <div className="relative">
            <SwiperBlogCard
              Article={Article}
              search={search}
              setSearch={setSearch}
              setPerfectionistView={setPerfectionistView}
              perfectionistView={perfectionistView}
              setAcceptanceView={setAcceptanceView}
              acceptanceView={acceptanceView}
              setInspirationView={setInspirationView}
              inspirationView={inspirationView}
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default MainBlog

{
  /* <div className="blog-slider  owl-carousel ">
            <div className="item">
              <div className="single-course-wrap single-blog-post ">
                <div className="thumb">
                  <a href="javascript:;" onclick="PerfectionClick()">
                    <img src="assets/img/blog/perfectionist.jpg" alt="img" />
                  </a>
                </div>
                <div className="wrap-details wrap-details-details blog-post-content">
                  <h6>
                    <a href="javascript:;" onclick="PerfectionClick()" className="cursor-pointer">
                      Perfectionist สาเหตุหนึ่งของซึมเศร้า
                    </a>
                  </h6>
                  <p className="text-[#000000BF]">
                    เมื่อพูดถึงการที่ใครสักคนหนึ่งรักในความสมบูรณ์แบบ
                    แน่นอนว่าสิ่งที่ผู้ฟังจินตนาการถึงมักเป็นผลงานที่ยอดเยี่ยมไร้ที่ติใช่ไหมคะ
                  </p>
                  <div className="price-wrap">
                    <div className="row align-items-center">
                      <div className="col-6">
                        <a href="#">By Admin</a>
                      </div>
                      <div className="col-6 text-end">
                        <div className="date">22 มีนาคม 2022</div>
                      </div>
                      <div className="col-12 text-end ">
                        <div className="d-flex  justify-content-end align-items-center ">
                          <div>
                            {" "}
                            <i className="fas fa-eye text-[#808080] text-[16px]"></i>
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

            {/* <div className="item">
                <div className="single-course-wrap single-blog-post">
                  <div className="thumb">
                    <a href="javascript:;" onclick="SelfAcceptClick()">
                      <img src="assets/img/blog/self-acceptance.jpg" alt="img" />
                    </a>
                  </div>
                  <div className="wrap-details wrap-details-details blog-post-content">
                    <h6>
                      <a href="javascript:;" onclick="SelfAcceptClick()">
                        การยอมรับตนเอง self-acceptance{" "}
                      </a>
                    </h6>
                    <p className="" style="color:#000000BF;">
                      เราทราบกันดีว่ามนุษย์เป็นสิ่งมีชีวิตที่อยู่รวมกันเป็นสังคม
                      ดังนั้นความต้องการได้รับการยอมรับนั้นจึงเป็นสัญชาตญาณพื้นฐานของมนุษย์เพื่อให้สามารถดำรงชีพอยู่ได้{" "}
                    </p>
                    <div className="price-wrap">
                      <div className="row align-items-center">
                        <div className="col-6">
                          <a href="#">By Admin</a>
                        </div>
                        <div className="col-6 text-end">
                          <div className="date">22 มีนาคม 2022</div>
                        </div>
                        <div className="col-12 text-end ">
                          <div className="d-flex  justify-content-end align-items-center ">
                            <div>
                              {" "}
                              <i className="fas fa-eye" style="color:#808080;font-size:16px;"></i>
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
  /* <div className="item">
                <div className="single-course-wrap single-blog-post">
                  <div className="thumb">
                    <a href="javascript:;" onclick="InspirationClick()">
                      <img src="assets/img/blog/inspiration.jpg" alt="img" />
                    </a>
                  </div>
                  <div className="wrap-details wrap-details-details blog-post-content">
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
                    <div className="price-wrap">
                      <div className="row align-items-center">
                        <div className="col-6">
                          <a href="#">By Admin</a>
                        </div>
                        <div className="col-6 text-end">
                          <div className="date">22 มีนาคม 2022</div>
                        </div>
                        <div className="col-12 text-end ">
                          <div className="d-flex  justify-content-end align-items-center ">
                            <div>
                              {" "}
                              <i className="fas fa-eye" style="color:#808080;font-size:16px;"></i>
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
