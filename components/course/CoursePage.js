import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import BannerAds from "../BannerAds";
import BreadcrumbPage from "../BreadcrumbPage";
import SingleCourse from "./SingleCourse";
import SwiperCourse from "./SwiperCourse";
import axios from "axios";
const CoursePage = ({ e, FilterData }) => {
  const [data, setData] = useState([]);
  const [dataJson, setDataJson] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    axios
      .get("https://www.api-adirek.online/api/instructor-course")
      .then((res) => {
        setData(res.data);
        setIsLoading(true);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  let availableCourse = data.map((item) => item.filter_category_course)
  let availableCourseCategory = data.map((item) => item.main_category)
  let filterLength = availableCourse.filter((num) => e.value.includes(num));

  let CourseLength = availableCourseCategory.filter((num) => {
    if (e.value.includes("Design")) {
      return num.includes("Design");
    } else if (e.value.includes("วิชาการ")) {
      return num.includes("วิชาการ");
    } else if (e.value.includes("Life Style")) {
      return num.includes("Life Style");
    }
  });
  const Filter = data.filter((x) => {
    if (e.value == e.category) {
      return x.main_category == e.category
    } else {
      return x.filter_category_course == e.value
    }
  });

  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [checkItem, setCheckItem] = useState([]);

  const items = Filter.map((course) => {
    return (
      <SingleCourse course={course} key={course.instructor_id} index={course.instructor_id} />
    );
  });

  useEffect(() => {
    getData();
    const endOffset = itemOffset + 24;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / 24));
    // setData(dataJson.map((item, id) => Object.assign(item, {id})))
  }, [data, itemOffset]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * 24) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <BreadcrumbPage
        title={e.value}
        breadActive={e.value}
        hrefActive="#"
        bread1="คอร์ส"
        href1="/Category"
      />
      <div className="flex  justify-end m-2">
        <strong className="text-lg group-hover:text-red-600 font-Mitr font-light">
          ทั้งหมด&nbsp;
          {e.value == "Design"
            ? CourseLength.length
            : e.value == "วิชาการ"
            ? CourseLength.length
            : e.value == "Life Style"
            ? CourseLength.length
            : filterLength.length}
          &nbsp;คอร์ส
        </strong>{" "}
      </div>
      {isLoading ? (
        <>
          <div className="mt-5   grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4  md:space-x-2 lg:space-x-2">
            {currentItems &&
              currentItems.map((item, index) => {
                return (
                  <div key={index}>
                    <h3>{item}</h3>
                  </div>
                );
              })}
          </div>
          <div className="flex justify-center items-center grid-cols-1 lg:grid-cols-3 w-full">
            <ReactPaginate
              nextLabel="ถัดไป"
              onPageChange={handlePageClick}
              pageRangeDisplayed={1}
              marginPagesDisplayed={1}
              pageCount={pageCount}
              previousLabel="ก่อนหน้า"
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
              breakLabel="..."
              breakClassName="page-item"
              breakLinkClassName="page-link"
              containerClassName="pagination"
              activeClassName="active"
              renderOnZeroPageCount={null}
            />
          </div>
          <div className="pt-5">
            <BannerAds />
          </div>
        </>
      ) : (
        <h1 className="font-title text-f3xl">กำลังโหลดข้อมูล....</h1>
      )}
    </>
  );
};

export default CoursePage;
