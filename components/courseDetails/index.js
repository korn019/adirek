import CourseVideo from "./course-video"
import CourseUser from "./course-user"
import CoursePrice from "./course-price"
import CourseLesson from "./course-lesson"
import CourseInfo from "./course-info"
import CourseOverview from "./course-overview"
import {useRouter} from "next/router"


const index = ({courseData,Course,item,shareUrl}) => {
  const router = useRouter()
  return (
    <>

      <section className="courses-details-area py-24">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="mb-0  ">
                <CourseVideo item={item}/>
                <div className=" pt-3">
                  <div className="space-y-4">
                    <h5 className="text-Athiti !font-semibold !text-f2xl">{item.title_course}</h5>
                    {/* <p>{item.detail}</p> */}
                  </div>
                  <div className="user-area flex mt-3">
                    <CourseUser item={item}/>
                  </div>
                  <div className="buying-wrap d-flex align-items-center mt-4">
                    <CoursePrice  item={item} shareUrl={shareUrl} />
                  </div>
                </div>
              </div>
              <ul className="course-tab nav nav-pills pd-top-100">
                <li className="nav-item ">
                  <button
                    className="nav-link active text-black  !font-semibold"
                    id="pill-1"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-01"
                    type="button"
                    role="tab"
                    aria-controls="pills-01"
                    aria-selected="true">
                      <p className="text-Athiti !font-semibold !text-f2xl">รายละเอียดคอร์ส</p>
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
                    <CourseOverview item={item}/>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 sidebar-area">
              {/* <div className="widget widget-accordion-inner">
                <CourseLesson />
              </div> */}
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