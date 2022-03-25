import BlogCard from "../blog/BlogCard"
import Course from "../course/Course"
import AdirekIs from "./AdirekIs"
import LandingScreen from "./LandingScreen"
import SlideCourse from "./SlideCourse"

const Main = () => {
  return (
    <>
      <LandingScreen />
      <SlideCourse />
      <AdirekIs />
      <Course />
      <BlogCard />
    </>
  )
}

export default Main
