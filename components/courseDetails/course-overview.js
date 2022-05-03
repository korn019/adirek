const CourseOverview = ({item}) => {
  console.log(item)
  return (
    <>
      <p className="subtext-Athiti !text-2xl ">
       {item.detail}
      </p>
      {/* <div className="bg-gray">
        <h6>What Will I Learn?</h6>
        <div className="row">
          <div className="col-md-6">
            <ul>
              <li>
                <i className="fa fa-check"></i>Know how to configure Wordpress for best results
              </li>
              <li>
                <i className="fa fa-check"></i>Understand plugins & themes and how to find/install
                them
              </li>
              <li>
                <i className="fa fa-check"></i>Protect their Wordpress website from hackers and
                spammers
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <ul>
              <li>
                <i className="fa fa-check"></i>Create a static homepage useful for most websites, or
                a blog like homepage useful for bloggers.
              </li>
              <li>
                <i className="fa fa-check"></i>Create an affiliate site for passive, recurring
                income
              </li>
              <li>
                <i className="fa fa-check"></i>Create a Responsive Website that looks good on any
                browser.
              </li>
            </ul>
          </div>
        </div>
      </div> */}
      {/* <h6>Requirements</h6>
      <ul>
        <li>
          <i className="fa fa-check"></i>No previous experience or software needed!
        </li>
        <li>
          <i className="fa fa-check"></i>An open mind!
        </li>
      </ul>
      <h6 className="mt-5">Skills covered in this course</h6>
      <ul>
        <li>
          <i className="fa fa-check"></i>This course is great for beginners who are still learning
          the financial markets.
        </li>
        <li>
          <i className="fa fa-check"></i>This course is perfect for you if you are taking over an
          existing Wordpress website, or want to build one from scratch, but don't know where to
          start.
        </li>
        <li>
          <i className="fa fa-check"></i>If you want to learn to master Wordpress without getting
          bogged down with technical jargon, this course is for you.
        </li>
      </ul> */}
      <div className="reviewers-area">
        <div className="row">
          <div className="col-lg-5">
            <div className="media flex  !my-4">
              <div className="thumb">
                <img src="/static/img/author/01.png" alt="img" />
              </div>
              <div className="media-body py-4">
                <p className="font-Athiti font-semibold text-2xl">{item.type == 'institute' ? item.institute : `${item.first_name} ${item.last_name}` }</p>
                <span className="subtext-Athiti  !text-lg uppercase">{item.type}</span>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <p className="review-content">
            {item.ประวัติการสอน}
            </p>
          </div>
        </div>
        <div className="meta-area d-flex">
          <div className="user-rating ms-0">
            <span>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half-alt"></i>
              4.9
            </span>
            (76)
          </div>
          <div className="ms-auto">
            <i className="fa fa-user me-2" style={{color: "var(--main-color)"}}></i>6794 students
          </div>
          <div className="ms-md-5 ms-auto mb-0">
            <i className="far fa-user me-2" style={{color: "var(--main-color)"}}></i>6794 students
          </div>
        </div>
      </div> 
    </>
  )
}

export default CourseOverview
