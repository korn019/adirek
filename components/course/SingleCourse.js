const SingleCourse = ({course}) => {
  console.log(course.รูปถ่าย)
  return (
    <div className="item" key={course}>
      <div className="single-course-wrap">
        <div className="thumb w-full h-full">
          <a href="#" className="cat cat-blue">
            เริ่มต้น
          </a>
          <img
            src={typeof course.รูปถ่าย == "undefined" ? "assets/img/logo-mock.jpg" : course.รูปถ่าย}
            alt="img"
          />
        </div>
        <div className="wrap-details">
          <h6 className="truncate ...">
            <a href="#" className="font-title text-flg">
              {course.รายละเอียดคอร์สเรียน}
            </a>
          </h6>
          <div className="user-area">
            <div className="user-details ">
              <img src="assets/img/author/1.png" alt="img" />
              <a href="#">
                {course.ชื่อจริง} {course.นามสกุล}
              </a>
            </div>
            <div className="user-rating">
              <span>
                <i className="fa fa-star"></i>
                4.9
              </span>
              (76)
            </div>
          </div>
          <div className="price-wrap">
            <div className="row align-items-center">
              <div className="col-6">
                <p className="truncate ...">
                  <a href="">{course.Category}</a>
                </p>
              </div>
              <div className="col-6 text-end">
                <div className="price">
                  <p className="truncate ... price"> {course.ราคาคอร์สเรียน}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleCourse
