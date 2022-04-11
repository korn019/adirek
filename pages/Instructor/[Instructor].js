import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import InstructorDetail from "../../components/Instructor/InstructorDetail";
import { SearchCourseProvider } from "../Category";
import BannerAds from "../../components/BannerAds";
import axios from "axios";
const Instructor = () => {
  const router = useRouter();
  const { Instructor } = router.query;
  const [data, setData] = useState([]);

  // const getData = () => {
  //   fetch("../../assets/json/user.json", {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //   })
  //     .then(function (response) {
  //       return response.json()
  //     })
  //     .then(function (myJson) {
  //       setData(myJson)
  //     })
  // }
  // // สร้าง Id ใน JSON
  // const Id = data.forEach(function (e, i) {
  //   e["id"] = i
  // })

  // const Filter = data.filter((x) => {
  //   return x.filterCategory === "Web Design"
  // })
  const getData = () => {
    axios
      .get("http://9823-184-22-117-182.ngrok.io/api/instructor")
      .then((res) => {
        setData(res.data);
        // setIsLoading(true)
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  const IMG = () => {
    if (course.filterCategory == "Design" && course.รูปถ่าย == "") {
      return (
        <img
          className="object-fill "
          src="/assets/img/icon/course/P1.jpg"
          alt="img"
        />
      );
    } else if (course.filterCategory == "วิชาการ" && course.รูปถ่าย == "") {
      return (
        <img
          className="object-fill "
          src="/assets/img/icon/course/P2.jpg"
          alt="img"
        />
      );
    } else if (course.filterCategory == "งานฝีมือ" && course.รูปถ่าย == "") {
      return (
        <img
          className="object-fill "
          src="/assets/img/icon/course/P3.jpg"
          alt="img"
        />
      );
    } else if (
      course.filterCategory == "ถ่ายรูปและแต่งรูป" &&
      course.รูปถ่าย == ""
    ) {
      return (
        <img
          className="object-fill "
          src="/assets/img/icon/course/P4.jpg"
          alt="img"
        />
      );
    } else if (course.filterCategory == "แต่งหน้า" && course.รูปถ่าย == "") {
      return (
        <img
          className="object-fill "
          src="/assets/img/icon/course/P5.jpg"
          alt="img"
        />
      );
    } else if (course.filterCategory == "บุคลิกภาพ" && course.รูปถ่าย == "") {
      return (
        <img
          className="object-fill "
          src="/assets/img/icon/course/P6.jpg"
          alt="img"
        />
      );
    } else if (
      course.filterCategory == "ร้องเพลงและการแสดง" &&
      course.รูปถ่าย == ""
    ) {
      return (
        <img
          className="object-fill "
          src="/assets/img/icon/course/P7.jpg"
          alt="img"
        />
      );
    } else if (course.filterCategory == "กีฬา" && course.รูปถ่าย == "") {
      return (
        <img
          className="object-fill "
          src="/assets/img/icon/course/P8.jpg"
          alt="img"
        />
      );
    } else if (course.filterCategory == "ดนตรี" && course.รูปถ่าย == "") {
      return (
        <img
          className="object-fill "
          src="/assets/img/icon/course/P9.jpg"
          alt="img"
        />
      );
    } else if (
      course.filterCategory == "ทำอาหารและขนม" &&
      course.รูปถ่าย == ""
    ) {
      return (
        <img
          className="object-fill "
          src="/assets/img/icon/course/P10.jpg"
          alt="img"
        />
      );
    } else if (course.filterCategory == "ดูดวง" && course.รูปถ่าย == "") {
      return (
        <img
          className="object-fill "
          src="/assets/img/icon/course/P11.jpg"
          alt="img"
        />
      );
    } else if (
      course.filterCategory == "Cryptocurrency" &&
      course.รูปถ่าย == ""
    ) {
      return (
        <img
          className="object-fill "
          src="/assets/img/icon/course/P12.jpg"
          alt="img"
        />
      );
    } else if (course.filterCategory == "NFT" && course.รูปถ่าย == "") {
      return (
        <img
          className="object-fill "
          src="/assets/img/icon/course/P13.jpg"
          alt="img"
        />
      );
    } else {
      return (
        <img className="object-fill " src={`/${course.รูปถ่าย}`} alt="img" />
      );
    }
  };
  return (
    <SearchCourseProvider>
      <Layout>
        {data.map((e, id) => {
          return Instructor == `id=${e.record}` ? (
            <>
           <div
                className="instector-banner-area"
                style={{ height: 400 }}
              ></div> 
              
              <div className="pd-bottom-115" key={e.record}>
                <div className="container">
                  <InstructorDetail e={e} />
                </div>
              </div>
            </>
          ) : null;
        })}
        {/* <div className="">
        <BannerAds />
      </div> */}
      </Layout>
    </SearchCourseProvider>
  );
};

export default Instructor;
