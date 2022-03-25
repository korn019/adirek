const Footer = () => {
  return (
    <>
      <footer class="footer-area">
        <div class="footer-inner">
          <div class="container">
            <div class="row">
              <div class="col-lg-8 col-md-4 col-sm-6">
                <div class="footer-widget widget widget_link">
                  <h4 class="widget-title">หลักสูตร</h4>
                  <div class="row">
                    <div class="col-lg-4">
                      <ul class="pe-5">
                        <li>
                          <a href="category.html">UI &amp; UX</a>
                        </li>
                        <li>
                          <a href="category.html">Web Design</a>
                        </li>
                        <li>
                          <a href="category.html">Graphic Design & Illustration</a>
                        </li>
                        <li>
                          <a href="category.html">Design Tools</a>
                        </li>
                        <li>
                          <a href="category.html">Game Design</a>
                        </li>
                        <li>
                          <a href="category.html">3D & Animation</a>
                        </li>
                        <li>
                          <a href="category.html">Fashion Design</a>
                        </li>
                      </ul>
                    </div>
                    <div class="col-lg-4">
                      <ul class="pe-5">
                        <li>
                          <a href="category.html">Architectural Design</a>
                        </li>
                        <li>
                          <a href="category.html">Interior Design</a>
                        </li>
                        <li>
                          <a href="category.html">สุขภาพและความแข็งแรง</a>
                        </li>
                        <li>
                          <a href="category.html">คณิตศาสตร์</a>
                        </li>
                        <li>
                          <a href="category.html">ภาษา</a>
                        </li>
                        <li>
                          <a href="category.html">ทำอาหารและขนม</a>
                        </li>
                        <li>
                          <a href="category.html">แต่งหน้า</a>
                        </li>
                      </ul>
                    </div>
                    <div class="col-lg-4">
                      <ul>
                        <li>
                          <a href="category.html">ถ่ายรูปและแต่งรูป</a>
                        </li>
                        <li>
                          <a href="category.html">บุคลิกภาพ</a>
                        </li>
                        <li>
                          <a href="category.html">ร้องเพลงและการแสดง</a>
                        </li>
                        <li>
                          <a href="category.html">กีฬา</a>
                        </li>
                        <li>
                          <a href="category.html">ดนตรี</a>
                        </li>
                        <li>
                          <a href="category.html">จัดดอกไม้และจัดสวนถาด</a>
                        </li>
                        <li>
                          <a href="category.html">วาดรูป</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-6">
                <div class="footer-widget widget widget_link">
                  <h4 class="widget-title">การเชื่อมโยง</h4>
                  <ul class="pe-4">
                    <li>
                      <a href="blog.html">ข่าวสาร และ บทความ</a>
                    </li>

                    <li>
                      <a href="course.html">หลักสูตร</a>
                    </li>
                    <li>
                      <a href="instructor.html">สอนบน อดิเรก</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-6">
                <div class="footer-widget widget widget_link">
                  <h4 class="widget-title">ช่วยเหลือ</h4>
                  <ul class="pe-4">
                    <li>
                      <a href="home.html">เอกสาร</a>
                    </li>
                    <li>
                      <a href="faq.html">คำถามที่พบบ่อย</a>
                    </li>
                    <li>
                      <a href="dashboard.html">รายงาน</a>
                    </li>
                    <li>
                      <a href="contact.html">ติดต่อเรา</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!--Footer bottom--> */}
        <div class="container">
          <div class="footer-bottom">
            <div class="row">
              <div class="col-xl-7 align-self-center">
                <div class="d-md-flex align-items-center mb-4 mb-xl-0">
                  <div class="logo d-inline-block">
                    <img src="assets/img/logo.png" alt="img" />
                  </div>
                  <div class="copyright-area">
                    <p>© 2021 - อดิเรก. All Rights Reserved</p>
                  </div>
                </div>
              </div>
              <div class="col-xl-5 align-self-center text-xl-end">
                <ul class="social-area d-inline-block">
                  <li>
                    <a class="active" href="#">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fab fa-line"></i>
                    </a>
                  </li>
                </ul>
                <select class="single-select float-sm-end">
                  <option>ภาษาไทย</option>
                  <option value="asc">English</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        {/* <!--Footer bottom--> */}
      </footer>
      {/* <!-- footer area end --> */}

      {/* <!-- back-to-top end --> */}
      <div class="back-to-top">
        <span class="back-top">
          <i class="fas fa-angle-double-up"></i>
        </span>
      </div>
    </>
  );
};

export default Footer;
