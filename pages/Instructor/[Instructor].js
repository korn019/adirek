import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import InstructorDetail from "../../components/Instructor/InstructorDetail";
import { SearchCourseProvider } from "../Category";
import BannerAds from "../../components/BannerAds";
import { CourseCheck } from "../../components/course/Courselabel";
import axios from "axios";
const Instructor = () => {
  const router = useRouter();
  const { Instructor } = router.query;
  const [data, setData] = useState([]);
  const [check, setCheck] = useState(CourseCheck);

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
      .get("http://7e0b-184-22-117-39.ngrok.io/api/instructor")
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

  return (
    <SearchCourseProvider>
      <Layout>
        {data.map((e, id) => {
          return Instructor == `id=${e.record}` ? (
            <>
              {check.map((item) => {
                return item.value.includes(e.filterCategory) ? (
                  <>
                    <img
                      className="object-fill h-[400px] w-full"
                      src={`/${item.imgBannerDetails}`}
                      alt="img"
                    />
                  </>
                ) : null;
              })}
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
