const CourseOverview = () => {
  return (
    <>
      <h5>Course details</h5>
      <p>
        New to web design? Start here first. Instructor James Williamson introduces the fundamental
        concepts, tools, and learning paths for web design. He explains what it means to be a web
        designer, the various areas of specialization, and whether web design is the right hobby or
        career for you. Along the way, he talks to five prominent designers and developers, who have
        each found success in a different corner of the web.
      </p>
      <div className="bg-gray">
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
      </div>
      <h6>Requirements</h6>
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
      </ul>
      <div className="reviewers-area">
        <div className="row">
          <div className="col-lg-5">
            <div className="media d-flex align-items-center">
              <div className="thumb">
                <img src="/static/img/author/01.png" alt="img" />
              </div>
              <div className="media-body">
                <h6>Jessica Jessy</h6>
                <span>Product Designer</span>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <p className="review-content">
              Great for the people that are willing to improve and learn. Please show up to the
              course with an open mind because the instructor got his own views and philosophy
              towards design that might challenge your own. This course will teach you...
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
