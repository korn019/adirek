const CoursePrice = () => {
  return (
    <>
      <h2 className="price d-inline-block mb-0">$30</h2>
      <a className="btn btn-base ms-auto" href="#">
        Add to Cart
      </a>
      <a className="btn btn-base-light ms-3" href="#">
        Buy Now
      </a>
      <div className="ms-auto d-425-none">
        <a href="#">
          <i className="far fa-heart"></i>
        </a>
        <a className="ms-4" href="#">
          <i className="fa fa-share me-2"></i>share
        </a>
      </div>
    </>
  )
}

export default CoursePrice
