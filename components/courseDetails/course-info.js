const CourseInfo = () => {
  return (
    <>
      <h5 className="widget-title">รายละเอียดคอร์ส</h5>
      <ul>
        <li>
          Level: <span>Beginner</span>
        </li>
        <li>
          Categories:{" "}
          <span>
            <a href="#">Business</a>
            <a href="#">Design</a>
            <a href="#">Development</a>
            <a href="#">Marketing</a>
            <a href="#">WordPress</a>
          </span>
        </li>
        <li>
          Total Hour: <span>07h 30m</span>
        </li>
        <li>
          Total Lessons: <span>15</span>
        </li>
        <li>
          Total Enrolled: <span>5000</span>
        </li>
        <li>
          Last Update: <span>August 23, 2021</span>
        </li>
      </ul>
    </>
  )
}

export default CourseInfo
