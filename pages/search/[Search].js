import { useRouter } from "next/router";
import { useState, useEffect, useContext } from "react";
import BreadcrumbPage from "../../components/BreadcrumbPage";
import ReactPaginate from "react-paginate";
import SingleCourse from "../../components/course/SingleCourse";
import BannerAds from "../../components/BannerAds";
import { DataContext, SearchCourseContext } from "../../store/GlobalState";

const CourseCategory = () => {
  const { data, isLoading,state,dispatch } = useContext(DataContext);
  const {courseData} = state;
  const router = useRouter();
  const { Search } = router.query;
  // const [data, setData] = useState([])
  // const [isLoading, setIsLoading] = useState(false)

  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [checkItem, setCheckItem] = useState([]);

  useEffect(() => {
    // getData()
    const endOffset = itemOffset + 20;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / 20));
  }, [data, itemOffset, Search]);

  const SearchCateCourse = courseData.filter((v) => {
    if (Search !== undefined) {
      if (Search.length > 0) {
        return (
          v.filter_category_course
            .toLowerCase()
            .includes(Search.toLowerCase()) ||
          v.first_name.toLowerCase().includes(Search.toLowerCase()) ||
          v.institute.toLowerCase().includes(Search.toLowerCase()) ||
          v.detail.toLowerCase().includes(Search.toLowerCase()) ||
          v.price_course.toLowerCase().includes(Search.toLowerCase())
        );
      }
    }
  });
  const items = SearchCateCourse.map((course) => {
    return (
      <SingleCourse
        course={course}
        key={course.instructor_id}
        index={course.instructor_id}
      />
    );
  });

  const handlePageClick = (event) => {
    const newOffset = (event.selected * 20) % items.length;
    setItemOffset(newOffset);
  };
 
  let courseCounter = [];
  for (let i = 0; i < SearchCateCourse.length; i++) {
    courseCounter = SearchCateCourse.length;
  }

  return (
    <>
      <BreadcrumbPage
        title={
          SearchCateCourse.length > 0
            ? `???????????????????????????????????????????????????????????? ${courseCounter} ?????????????????????????????? ??????????????????????????????????????? " ${Search} "`
            : `???????????????????????????????????? " ${Search} " ????????????????????????????????????????????????????????????`
        }
        breadActive="?????????????????????????????????????????????"
        hrefActive="#"
        bread1="?????????????????????????????????????????????"
        href1="/courses"
        Search={Search}
      />
      {isLoading ? (
        SearchCateCourse.length > 0 ? (
          <>
            <div className="mt-5 container  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4  md:space-x-2 lg:space-x-2">
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
                nextLabel="???????????????"
                onPageChange={handlePageClick}
                pageRangeDisplayed={1}
                marginPagesDisplayed={1}
                pageCount={pageCount}
                previousLabel="????????????????????????"
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
          </>
        ) : (
          <div className="container p-8">
            <h1 className="text-Athiti  mb-4  !font-semibold text-Athiti   !text-titleBlue">
              ???????????????????????????????????? ?????????????????????????????????????????????????????????....
            </h1>
          </div>
        )
      ) : (
        <div className="container p-20">
          <h1 className="font-title text-f3xl">?????????????????????????????????????????????....</h1>
        </div>
      )}
      <div className="py-24">
        <BannerAds />
      </div>
    </>
  );
};

export default CourseCategory;
