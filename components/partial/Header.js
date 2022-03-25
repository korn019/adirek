const Header = () => {
  return (
    <div>
      {" "}
      <div className="search-popup" id="search-popup">
        <form action="home.html" className="search-form">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Search....." />
          </div>
          <button type="submit" className="submit-btn">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
      {/* <!-- //. search Popup --> */}
      {/* <!-- navbar start --> */}
      <header className="navbar-area">
        <nav className="navbar navbar-expand-lg">
          <div className="container nav-container">
            <div className="responsive-mobile-menu">
              <button
                className="menu toggle-btn d-block d-lg-none"
                data-target="#themefie_main_menu"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="icon-left"></span>
                <span className="icon-right"></span>
              </button>
            </div>
            <div className="logo">
              <a className="main-logo" href="index.html">
                <img src="assets/img/logo.png" alt="img" />
              </a>
            </div>
            <div className="nav-right-part nav-right-part-mobile">
              <ul>
                <li>
                  <a className="search header-search" href="#">
                    <i className="fa fa-search"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="collapse navbar-collapse" id="themefie_main_menu">
              <div className="single-input-wrap">
                <input type="text" placeholder="ค้นหาหลักสูตร..." />
                <button>
                  <i className="fa fa-search"></i>
                </button>
              </div>
              <ul className="navbar-nav menu-open text-end">
                <li className="menu-item-has-children">
                  <a href="#">บทความและข่าวสาร</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="blog.html">บทความและข่าวสาร</a>
                    </li>
                    <li>
                      <a href="blog-cat.html">หมวดหมู่บทความ</a>
                    </li>
                    <li>
                      <a href="blog-details.html">รายละเอียดบทความ</a>
                    </li>
                  </ul>
                </li>

                <li className="menu-item-has-children">
                  <a href="#">หลักสูตร</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="course.html">หลักสูตร</a>
                    </li>
                    <li>
                      <a href="category.html">หลักสูตรคอร์สเรียนทั้งหมด</a>
                    </li>
                    <li>
                      <a href="course-details.html">รายละเอียดคอร์สเรียน</a>
                    </li>
                  </ul>
                </li>

                <li className="menu-item-has-children">
                  <a href="#">มาร่วมสอนกับเรา</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="instructor.html">สอนกับเรา</a>
                    </li>
                    <li>
                      <a href="instructor-details.html">รายละเอียดผู้สอน</a>
                    </li>
                  </ul>
                </li>
                <li className="current-menu-item menu-item-has-children">
                  <a href="#">อื่นๆ</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="contact.html">ติดต่อเรา</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <div className="category-responsive d-xl-none d-block">
        <div className="container">
          <div className="category-slider owl-carousel">
            <div className="item">
              <a href="category.html">การพัฒนา</a>
            </div>
            <div className="item">
              <a href="category.html">การออกแบบ</a>
            </div>
            <div className="item">
              <a href="category.html">การตลาด</a>
            </div>
            <div className="item">
              <a href="category.html">ธุรกิจ</a>
            </div>
            <div className="item">
              <a href="category.html">การทำงานในสำนักงาน</a>
            </div>
            <div className="item">
              <a href="category.html">การถ่ายภาพและวิดีโอ</a>
            </div>

            <div className="item">
              <a href="category.html">สุขภาพและความแข็งแรง</a>
            </div>

            <div className="item">
              <a href="category.html">ดนตรี</a>
            </div>
            <div className="item">
              <a href="category.html">ไอทีและซอฟต์แวร์</a>
            </div>
          </div>
        </div>
      </div>
      <div className="category-navbar navbar-area d-xl-block d-none">
        <nav className="navbar navbar-expand-lg">
          <div className="container nav-container">
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav menu-open">
                <li>
                  <a href="category.html">Design</a>
                </li>
                <li>
                  <a href="category.html">วิชาการ</a>
                </li>
                <li>
                  <a href="category.html">แต่งหน้า</a>
                </li>
                <li>
                  <a href="category.html">ดนตรี</a>
                </li>
                <li>
                  <a href="category.html">ถ่ายรูปและแต่งรูป</a>
                </li>
                <li>
                  <a href="category.html">กีฬา</a>
                </li>
                <li>
                  <a href="category.html">บุคลิกภาพ</a>
                </li>
                <li>
                  <a href="category.html">ทำอาหารและขนม</a>
                </li>
                <li>
                  <a href="category.html">จัดดอกไม้และจัดสวนถาด</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
