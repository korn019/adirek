const SingleSlideCourse = ({item}) => {
  return (
    <>
      <div className="item">
        <div className="single-intro-wrap">
          <div className="thumb">
            <img src={item.img} alt="img" />
          </div>
          <div className="wrap-details">
            <h6 className="text-center">
              <a href="#">{item.course}</a>
            </h6>
            <p>มี {item.available} หลักสูตรให้เลือก</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleSlideCourse
