import { CourseCheck } from "../course/Courselabel";
import { useState } from "react";
import { RiFacebookCircleFill } from "react-icons/ri";
import { AiFillYoutube } from "react-icons/ai";
import { FaLine } from "react-icons/fa";
import { FaAngleDoubleUp } from "react-icons/fa";
const Footer = () => {
  const [course, setCourse] = useState(CourseCheck);
  return (
    <>
      <footer className="footer-area bg-[#0c4159]">
        <div className="footer-inner">
          <div className="container">
            <div className="row">
              {/* <div className="col-lg-8 col-md-4 col-sm-6">
                <div className="footer-widget widget widget_link ">
                  <h4 className="!font-semibold text-Athiti mb-4 text-white">
                    คอร์ส
                  </h4>
                  <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
                    {course.map((e, id) => {
                      return (
                        <ul className="py-2 md:p-0 ">
                          <li className="pe-4 !font-Athiti font-medium text-white" key={e.id}>
                            <Link
                              href={`/Course/${e.value}`}
                              as={`/Course/${e.value}`}
                            >
                              <a
                                href="#"
                                className=""
                              >
                                {e.value}
                              </a>
                            </Link>
                          </li>
                        </ul>
                      );
                    })}
                  </div>
                </div>
              </div> */}
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="footer-widget widget widget_link">
                  <h4 className="!font-semibold text-Athiti mb-4 text-white">
                    การเชื่อมโยง
                  </h4>
                  <ul className="pe-4 text-Athiti font-medium text-white ">
                    <li>
                      <a href="/courses" className="!text-lg">
                        ค้นหาคอร์ส
                      </a>
                    </li>
                    <li>
                      <a href="#" className="!text-lg">
                        มาร่วมสอนกับเรา
                      </a>
                    </li>
                    <li>
                      <a href="/blog" className="!text-lg">
                        Blog
                      </a>
                    </li>

                    <li>
                      <a href="#" className="!text-lg">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="#" className="!text-lg">
                        Sitemap
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="footer-widget widget widget_link">
                  <h4 className="!font-semibold text-Athiti mb-4 text-white">
                    ช่วยเหลือ
                  </h4>
                  <ul className="pe-4 !font-Athiti font-medium !text-base !text-white">
                    {/* <li>
                      <a href="home.html">เอกสาร</a>
                    </li>
                    <li>
                      <a href="faq.html">คำถามที่พบบ่อย</a>
                    </li> */}
                    {/* <li>
                      <a href="dashboard.html">รายงาน</a>
                    </li> */}
                    <li>
                      <a href="/contact" className="!text-lg">
                        ติดต่อเรา
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="footer-widget widget widget_link">
                  <h4 className="!font-semibold text-Athiti text-white">
                    Follow Us
                  </h4>
                  <div className="flex my-4 w-2/3 lg:w-1/2 ">
                    <a
                      href="#"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-white h-8 w-8 mx-1 text-center  flex justify-center items-center"
                    >
                      {/* <i className="fab fa-facebook-f text-blue-900" /> */}
                      <RiFacebookCircleFill
                        className="!text-[#4267B2]"
                        size="1.7rem"
                      />
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-white h-8 w-8 mx-1 text-center  flex justify-center items-center"
                    >
                      <AiFillYoutube
                        className="!text-[#FF0000]"
                        size="1.7rem"
                      />
                      {/* <i className="fab fa-youtube-in text-blue-900" /> */}
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-white h-8 w-8 mx-1 text-center  flex justify-center items-center"
                    >
                      <FaLine className="!text-[#00B900]" size="1.6rem" />
                      {/* <i className="fab fa-youtube-in text-blue-900" /> */}
                    </a>
                  </div>
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
                    <img
                      src="/static/img/logo-white-knowledge.png"
                      alt="Adirek"
                    />
                  </div>
                  <div className="copyright-area">
                    <p className=" !font-Athiti font-medium !text-xl text-white">
                      © 2022 - อดิเรก. All Rights Reserved
                    </p>
                  </div>
                </div>
              </div>
             
            </div>
          </div>
        </div>
        {/* <!--Footer bottom--> */}
      </footer>
      {/* <!-- footer area end --> */}

      {/* <!-- back-to-top end --> */}
      <div className="back-to-top">
        <span className="back-top flex items-center justify-center">
          <FaAngleDoubleUp />
          {/* <i className="fas fa-angle-double-up"></i> */}
        </span>
      </div>

      <script src="../../static/js/jquery.3.6.min.js"></script>
      <script src="../../static/js/bootstrap.min.js"></script>
      <script src="../../static/js/imageloded.min.js"></script>
      <script src="../../static/js/counterup.js"></script>
      <script src="../../static/js/waypoint.js"></script>
      <script src="../../static/js/magnific.min.js"></script>
      <script src="../../static/js/isotope.pkgd.min.js"></script>
      <script src="../../static/js/nice-select.min.js"></script>
      <script src="../../static/js/fontawesome.min.js"></script>
      <script src="../../static/js/ripple.js"></script>
      <script src="../../static/js/owl.min.js"></script>
      <script src="../../static/js/slick-slider.min.js"></script>
      <script src="../../static/js/wow.min.js"></script>
      <script src="../../static/js/main.js"></script>
      <script src="https://unpkg.com/flowbite@1.4.5/dist/datepicker.js"></script>
      <script
        type="text/javascript"
        src="../../static/jquery.Thailand.js/dependencies/JQL.min.js"
      ></script>
      <script
        type="text/javascript"
        src="../../static/jquery.Thailand.js/dependencies/typeahead.bundle.js"
      ></script>
      <script
        type="text/javascript"
        src="../../static/jquery.Thailand.js/dist/jquery.Thailand.min.js"
      ></script>
    </>
  );
};

export default Footer;
