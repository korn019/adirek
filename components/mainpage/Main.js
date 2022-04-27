import BlogCard from "../blog/BlogCard";
import Course from "../course/Course";
import Activity from "./Activity";
import AdirekIs from "./AdirekIs";
import LandingScreen from "./LandingScreen";
import Partner from "./Partner";
import SlideCourse from "./SlideCourse";
import Testimonial from "./Testimonial";
import ClientArea from "./ClientArea";
import BannerAds from "../BannerAds";
import InstructorPromote from "../Instructor/InstructorPromote";
const Main = () => {
  return (
    <>
      <LandingScreen />
      <div className=" ">
        <SlideCourse />
      </div>
      <div className=" bg-gray-100 ">
        <AdirekIs />
      </div>
      <div className="py-12">
        <BannerAds />
      </div>
      <div className="">
        <Partner />
      </div>

      {/* <div className=" py-12">
        <Activity />
      </div>
      */}
      <div className="py-12">
        <BannerAds />
      </div>

      <InstructorPromote />

      <div className=" py-12">
        <Course />
      </div>
      <div className="py-12">
        <BannerAds />
      </div>

      <div className="">
        <Testimonial />
      </div>
      <div className="">
        <ClientArea />
      </div>
      {/* <BlogCard /> */}
    </>
  );
};

export default Main;
