const Header = () => {
  return (
    <>
      <div className="search-popup" id="search-popup">
        <form action="index.html" className="search-form">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Search....." />
          </div>
          <button type="submit" className="submit-btn">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
      {/* <!-- //. search Popup -->

  <!-- navbar start --> */}
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
            s
            <div className="collapse navbar-collapse" id="themefie_main_menu">
              <div className="single-input-wrap">
                <input type="text" placeholder="ค้นหาหลักสูตร..." />
                <button>
                  <i className="fa fa-search"></i>
                </button>
              </div>
              <ul className="navbar-nav menu-open text-end">
                <li className="menu-item">
                  <a href="category.html">หลักสูตรคอร์สเรียนทั้งหมด</a>
                </li>
                <li className="menu-item">
                  <a href="blog.html">บทความและข่าวสาร</a>
                </li>
                <li className="menu-item">
                  <a href="instructor.html">มาร่วมสอนกับเรา</a>
                </li>

                <li className="current-menu-item menu-item">
                  <a href="contact.html">ติดต่อเรา</a>
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
              <a href="category.html">Design</a>
            </div>
            <div className="item">
              <a href="category.html">วิชาการ</a>
            </div>
            <div className="item">
              <a href="category.html">แต่งหน้า</a>
            </div>
            <div className="item">
              <a href="category.html">ดนตรี</a>
            </div>
            <div className="item">
              <a href="category.html">ถ่ายรูปและแต่งรูป</a>
            </div>
            <div className="item">
              <a href="category.html">กีฬา</a>
            </div>

            <div className="item">
              <a href="category.html">บุคลิกภาพ</a>
            </div>

            <div className="item">
              <a href="category.html">ทำอาหารและขนม</a>
            </div>
            <div className="item">
              <a href="category.html">จัดดอกไม้และจัดสวนถาด</a>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- style="margin-top: 72px" --> */}
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
    </>
  );
};

export default Header;
