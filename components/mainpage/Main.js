import BlogCard from "../blog/BlogCard"
import Course from "../course/Course"
import Activity from "./Activity"
import AdirekIs from "./AdirekIs"
import LandingScreen from "./LandingScreen"
import Partner from "./Partner"
import SlideCourse from "./SlideCourse"
import Testimonial from "./Testimonial"
import ClientArea from "./ClientArea"
import BannerAds from "../BannerAds"
const Main = () => {
  return (
    <>
      <LandingScreen />
      <SlideCourse />
      <div className="test-class">
        <AdirekIs />
      </div>
      <div className="py-12">
        <BannerAds />
      </div>
      <div className="">
        <Partner />
      </div>
      <div className="">
        <BannerAds />
      </div>
      <div className="test-class">
        <Course />
      </div>
      <div className="test-class">
        <Activity />
      </div>
      <div className="">
        <Testimonial />
      </div>
      <div className="py-24">
        <BannerAds />
      </div>
      <div className="">
        <ClientArea />
      </div>
      <div className="test-class"> </div>
      {/* <BlogCard /> */}
    </>
  )
}

export default Main
