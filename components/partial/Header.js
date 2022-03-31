import Link from "next/link"
import {useEffect, useState, useContext} from "react"
import {CourseCheck} from "../course/Courselabel"
import {SearchCourseContext} from "../../pages/Category"
import {useRouter} from "next/router"
const Header = () => {
  const [course, setCourse] = useState(CourseCheck)
    const router = useRouter()
   const {searchCourse,setSearchCourse} = useContext(SearchCourseContext)
   
   const enterandgo = (event) => {
      if (event.keyCode === 13) {
          router.push(`/Search/${searchCourse}`)
      }
    }
  return (
    <>
      <div className="search-popup" id="search-popup">
        <form action="index.html" className="search-form">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Search....." />
          </div>
          <button type="submit" className="submit-btn">
            <Link
              href={{
                pathname: "/Categort",
                query: searchCourse, // the data
              }}>
              <a>
                <i className="fa fa-search"></i>
              </a>
            </Link>
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
              <Link href="/">
                <a className="main-logo">
                  <img src="/assets/img/logo.png" alt="img" />
                </a>
              </Link>
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
                <input
                  type="text"
                  placeholder="ค้นหาหลักสูตร..."
                  onChange={(e) => setSearchCourse(e.target.value)}
                  value={searchCourse}
                  onKeyDown={(e) => enterandgo(e)}
                />
                <Link href={`/Search/${searchCourse}`}>
                  <button onKeyDown={(e) => enterandgo(e)}>
                    <i className="fa fa-search"></i>
                  </button>
                </Link>
              </div>
              <ul className="navbar-nav menu-open text-end">
                <li className="menu-item">
                  <Link href="/Category">
                    <a>หลักสูตรคอร์สเรียนทั้งหมด</a>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="/Blog">
                    <a>บทความและข่าวสาร</a>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="/Instructor">
                    <a>มาร่วมสอนกับเรา</a>
                  </Link>
                </li>

                <li className="current-menu-item menu-item">
                  <Link href="/Contact">
                    <a>ติดต่อเรา</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <div className="category-responsive d-xl-none d-block">
        <div className="container">
          <div className="category-slider owl-carousel">
            {course.map((item, index) => {
              return (
                <div className="item" key={item.id}>
                  <Link href={`/Course/${item.value}`} as={`/Course/${item.value}`}>
                    <a>{item.value}</a>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* <!-- style="margin-top: 72px" --> */}
      <div className="category-navbar navbar-area d-xl-block d-none">
        <nav className="navbar navbar-expand-lg">
          <div className="container nav-container">
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav menu-open">
                {course.map((item, index) => {
                  return (
                    <li key={item.id}>
                      <Link href={`/Course/${item.value}`} as={`/Course/${item.value}`}>
                        <a>{item.value}</a>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Header
