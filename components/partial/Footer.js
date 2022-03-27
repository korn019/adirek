const Footer = () => {
  return (
    <>
      <footer className="footer-area">
        <div className="footer-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-4 col-sm-6">
                <div className="footer-widget widget widget_link">
                  <h4 className="widget-title">หลักสูตร</h4>
                  <div className="row">
                    <div className="col-lg-4">
                      <ul className="pe-5">
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
                    <div className="col-lg-4">
                      <ul className="pe-5">
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
                    <div className="col-lg-4">
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
              <div className="col-lg-2 col-md-4 col-sm-6">
                <div className="footer-widget widget widget_link">
                  <h4 className="widget-title">การเชื่อมโยง</h4>
                  <ul className="pe-4">
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
              <div className="col-lg-2 col-md-4 col-sm-6">
                <div className="footer-widget widget widget_link">
                  <h4 className="widget-title">ช่วยเหลือ</h4>
                  <ul className="pe-4">
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
        <div className="container">
          <div className="footer-bottom">
            <div className="row">
              <div className="col-xl-7 align-self-center">
                <div className="d-md-flex align-items-center mb-4 mb-xl-0">
                  <div className="logo d-inline-block">
                    <img src="/assets/img/logo.png" alt="img" />
                  </div>
                  <div className="copyright-area">
                    <p>© 2021 - อดิเรก. All Rights Reserved</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 align-self-center text-xl-end">
                <ul className="social-area d-inline-block">
                  <li>
                    <a className="active" href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-line"></i>
                    </a>
                  </li>
                </ul>
                <select className="single-select float-sm-end">
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
      <div className="back-to-top">
        <span className="back-top">
          <i className="fas fa-angle-double-up"></i>
        </span>
      </div>
      <script src="../../assets/js/jquery.3.6.min.js"></script>
      <script src="../../assets/js/bootstrap.min.js"></script>
      <script src="../../assets/js/imageloded.min.js"></script>
      <script src="../../assets/js/counterup.js"></script>
      <script src="../../assets/js/waypoint.js"></script>
      <script src="../../assets/js/magnific.min.js"></script>
      <script src="../../assets/js/isotope.pkgd.min.js"></script>
      <script src="../../assets/js/nice-select.min.js"></script>
      <script src="../../assets/js/fontawesome.min.js"></script>
      <script src="../../assets/js/ripple.js"></script>
      <script src="../../assets/js/owl.min.js"></script>
      <script src="../../assets/js/slick-slider.min.js"></script>
      <script src="../../assets/js/wow.min.js"></script>
      <script src="../../assets/js/main.js"></script>
      <script
        type="text/javascript"
        src="../../assets/jquery.Thailand.js/dependencies/JQL.min.js"></script>
      <script
        type="text/javascript"
        src="../../assets/jquery.Thailand.js/dependencies/typeahead.bundle.js"></script>
      <script
        type="text/javascript"
        src="../../assets/jquery.Thailand.js/dist/jquery.Thailand.min.js"></script>
    </>
  )
};

export default Footer;
