import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import InstructorDetail from "../../components/Instructor/InstructorDetail";
import { CourseCheck2 } from "../../components/category/Check";
import axios from "axios";
import { getData } from "../../utils/fetchData";
const Instructor = () => {
  const router = useRouter();
  const { Instructor } = router.query;
  const [data, setData] = useState([]);
  const [course, setCourse] = useState([]);
  const [check, setCheck] = useState(CourseCheck2);

  const getData2 = () => {
    axios
      .get("http://localhost:3000/api/instructor-course")
      .then((res) => {
        // console.log(res.data)
        setData(res.data);
        // setIsLoading(true)
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const info = () => {
    getData("users/usersData")
      .then((res) => {
        setCourse(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData2();
    info();
  }, []);
  const mapped = data.map((obj, index) => obj.main_category);
  const filtered = mapped.filter(
    (type, index) => mapped.indexOf(type) === index
  );

  // let getInstructorId = data.map((item) => item.filter_category_course )
  return (
    <>
      {course.map((e) => {
        console.log(e);
        if (`id=${e.id}` === Instructor && e.type !== "student") {
          return (
            <>
              {/* {check.map((item) => {
                return filtered.map((c) => {
                  console.log(c)
                  return item.filterValue.includes(c) ? (
                    <>
                      <img
                        className="object-cover h-[400px] w-full"
                        src={`/${item.imgBannerDetails}`}
                        alt="img"
                      />
                    </>
                  ) : null
                })
              })} */}

              <img
                className="object-cover h-[400px] w-full"
                src="/static/img/icon/course/PP1.jpg"
                alt={`${
                  e.type == "instructor" || e.type == ""
                    ? e.first_name
                    : e.institute
                }`}
              />

              <div className="pd-bottom-115">
                <div className="container">
                  <InstructorDetail
                    data={data}
                    e={e}
                    Instructor={Instructor}
                    id={e.id}
                  />
                </div>
              </div>
            </>
          );
        }
      })}
      {/* {data.map((e, id2) => {
        console.log(e)
        return Instructor == `id=${e.id}` ? (
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
                <InstructorDetail data={data} e={e} Instructor={Instructor} id={e.id} />
              </div>
            </div>
          </>
        ) : null
      })} */}
      {/* {data.map((e, id) => {
          console.log(e)
          return Instructor == `id=${e.instructor_id}` ? (
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
                    id={e.instructor_id}
                  />
                </div>
              </div>
            </>
          ) : null
        })} */}
      {/* <div className="">
        <BannerAds />
      </div> */}
    </>
  );
};

export default Instructor;
