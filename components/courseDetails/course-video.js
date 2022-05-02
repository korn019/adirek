import Image from "next/image"

const CourseVideo = () => {
  return (
    <div className="thumb">
      <a className="play-btn" href="#">
        <i className="fa fa-play"></i>
      </a>
      <Image src="/static/img/course/video.png" alt="img" width='850' height='480' />
    </div>
  )
}

export default CourseVideo
