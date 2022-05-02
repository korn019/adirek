import CourseVideo from "./course-video"
import CourseUser from "./course-user"
import CoursePrice from "./course-price"
import CourseLesson from "./course-lesson"
import CourseInfo from "./course-info"
import CourseOverview from "./course-overview"
import {useRouter} from "next/router"


const index = ({courseData,course}) => {
  const router = useRouter()
  return (
    <>

      <section className="courses-details-area pd-top-135 pd-bottom-130">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="single-course-wrap mb-0">
                <CourseVideo />
                <div className="wrap-details">
                  <h5>{/* <a href="#">{coursedetail}</a> */}</h5>
                  <p>
                    Learn Python like a Professional Start from the basics and go all the way to
                    creating your own applications and games
                  </p>
                  <div className="user-area">
                    <CourseUser />
                  </div>
                  <div className="buying-wrap d-flex align-items-center">
                    <CoursePrice />
                  </div>
                </div>
              </div>
              <ul className="course-tab nav nav-pills pd-top-100">
                <li className="nav-item">
                  <button
                    className="nav-link active"
                    id="pill-1"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-01"
                    type="button"
                    role="tab"
                    aria-controls="pills-01"
                    aria-selected="true">
                    Overview
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link"
                    id="pill-2"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-02"
                    type="button"
                    role="tab"
                    aria-controls="pills-02"
                    aria-selected="false">
                    Exercise Files
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link"
                    id="pill-3"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-03"
                    type="button"
                    role="tab"
                    aria-controls="pills-03"
                    aria-selected="false">
                    Reviews
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-01"
                  role="tabpanel"
                  aria-labelledby="pill-1">
                  <div className="overview-area">
                    <CourseOverview />
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-02"
                  role="tabpanel"
                  aria-labelledby="pill-2">
                  ...
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-03"
                  role="tabpanel"
                  aria-labelledby="pill-3">
                  ...
                </div>
              </div>
            </div>
            <div className="col-lg-4 sidebar-area">
              <div className="widget widget-accordion-inner">
                <CourseLesson />
              </div>
              <div className="widget widget-course-details mb-0">
                <CourseInfo />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default index;