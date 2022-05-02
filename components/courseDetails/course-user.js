const CourseUser = () => {
  return (
    <>
      <div className="user-details">
        <img src="/static/img/author/1.png" alt="img" />
        <a href="#">Jessica Jessy</a>
      </div>
      <div className="date ms-auto">
        <i className="fa fa-calendar-alt me-2" style={{ color: "var(--main-color)" }}></i>Last updated 9/2020
      </div>
      <div className="ms-auto">
        <i className="fa fa-user me-2" style={{ color: "var(--main-color)" }}></i>5k already enrolled
      </div>
      <div className="user-rating">
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
    </>
  )
}

export default CourseUser
