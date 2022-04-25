import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import InstructorDetail from "../../components/Instructor/InstructorDetail";
import { SearchCourseProvider } from "../Category";
import BannerAds from "../../components/BannerAds";
import { CourseCheck2 } from "../../components/category/Check";
import axios from "axios";
const Instructor = () => {
  const router = useRouter();
  const { Instructor } = router.query;
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [check, setCheck] = useState(CourseCheck2);

  const getData = () => {
    axios
      .get("http://www.localhost:3000/api/test")
      .then((res) => {
        // console.log(res.data)
        setData(res.data)
        // setIsLoading(true)
      })
      .catch((err) => {
        console.error(err)
      })
  };
  const getData2 = () => {
    axios
      .get("https://www.api-adirek.online/api/instructor")
      .then((res) => {
        setData2(res.data)
        // setIsLoading(true)
      })
      .catch((err) => {
        console.error(err)
      })
  };
  useEffect(() => {
    getData();
    getData2()
  }, []);

  return (
    <SearchCourseProvider>
      <Layout>
        {data.map((e, id) => {
          return Instructor == `id=${id}` ? (
            <>
              {check.map((item) => {
                return item.value.includes(e.filter_category_course) ? (
                  <>
                    <img
                      className="object-cover h-[400px] w-full"
                      src={`/${item.imgBannerDetails}`}
                      alt="img"
                      key={e.instructor_id}
                    />
                  </>
                ) : null
              })}
              <div className="pd-bottom-115">
                <div className="container">
                  <InstructorDetail
                    data={data}
                    e={e}
                    Instructor={Instructor}
                    id={id}
                  />
                </div>
              </div>
            </>
          ) : null
        })}
        {/* <div className="">
        <BannerAds />
      </div> */}
      </Layout>
    </SearchCourseProvider>
  )
};

export default Instructor;
