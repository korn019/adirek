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
        <div className="pt-12">
          <BannerAds />
        </div>
        <Partner />
        <div className="">
          <BannerAds />
        </div>
        <Course />
        <Activity />
        <Testimonial />
        <div className="py-24">
          <BannerAds />
        </div>
        <ClientArea />
      </div>

      {/* <BlogCard /> */}
    </>
  )
}

export default Main
