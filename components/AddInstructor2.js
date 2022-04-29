import { useState, Fragment, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { css } from "@emotion/react";
import SyncLoader from "react-spinners/SyncLoader";
import axios from "axios";
import Select from "./Select";
import ClipLoader from "react-spinners/ClipLoader";
import { useEffect } from "react";
import Toast from "./Toast";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { Input, SelectForm } from "./Input";
import { postData, putData } from "../utils/fetchData";
import { DataContext } from "../store/GlobalState";
const Add = () => {
  const { state, dispatch } = useContext(DataContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
    e.preventDefault();
    postData("instructor/add", data)
      .then((res) => {
        let idIns = res.data.add_id.toString();

        postData("course_title", data)
          .then((res) => {
            let TitleId = res.data.title_id.toString();
            postData("course_details", data)
              .then((res) => {
                let DetailId = res.data.detail_id.toString();

                postData("course_price", data)
                  .then((res) => {
                    let PriceId = res.data.price_id.toString();
                    console.log(data.course_list_id);

                    const data2 = {
                      instructor_list_id: idIns,
                      course_list_id: data.course_list_id,
                      title_list_id: TitleId,
                      price_list_id: PriceId,
                      details_list_id: DetailId,
                    };

                    putData(`course_list/${idIns}`, data2)
                      .then((res) => {
                        dispatch({
                          type: "NOTIFY",
                          payload: { error: toast.success(res.data.message) },
                        });
                        console.log(res);
                      })
                      .catch((err) => {
                        dispatch({
                          type: "NOTIFY",
                          payload: {
                            error: toast.error(err.response.data.message),
                          },
                        });
                        console.log(err);
                      });
                  })
                  .catch((err) => {
                    dispatch({
                      type: "NOTIFY",
                      payload: {
                        error: toast.error(err.response.data.message),
                      },
                    });
                    console.log(err);
                  });
              })
              .catch((err) => {
                dispatch({
                  type: "NOTIFY",
                  payload: { error: toast.error(err.response.data.message) },
                });
                console.log(err);
              });
          })
          .catch((err) => {
            dispatch({
              type: "NOTIFY",
              payload: { error: toast.error(err.response.data.message) },
            });
            console.log(err.response.data);
          });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: "NOTIFY",
          payload: { error: toast.error(err.response.data.message) },
        });
      });
  };

  const [isOpenAddCourse, setIsOpenAddCourse] = useState(false);
  const [bgColor, setBgColor] = useState("");
  const [instructor, setInstructor] = useState({
    firstName: "",
    lastName: "",
    ที่อยู่อีเมล: "",
    เบอร์โทร: "",
    ช่องทางการสอน: "",
    ช่วงอายุของกลุ่มผู้เรียนที่ถนัดในการสอน: "",
    ฉีดวัคซีนป้องกัน: "",
    ประวัติการศึกษา: "",
    ประวัติการสอน: "",
    ประกาศนียบัตร: "",
    กรณีเรียนนอกสถานที่: "",
    รูปถ่าย: "",
    อายุ: "",
    อีเมลผู้กรอกฟอร์ม: "",
  });
  const [course, setCourse] = useState({
    title_course: "",
    detail: "",
    price_course: "",
  });
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  let [loading, setLoading] = useState(false);
  const [warning, setWarning] = useState(false);
  const [warnText, setWarnText] = useState();
  function closeModal() {
    setIsOpen(false);
    setIsOpenAddCourse(false);
  }

  const [value, setValue] = useState("");
  const [getCategory, setGetCategory] = useState([]);

  const handleChangeSelect = (e) => {
    setValue(e.target.value);
  };

  // console.log(selectedOption.filter_category_course)
  const temp = getCategory.map((ext) => ext.filter_id);
  const [currentExtension, setCurrentExtension] = useState(temp);

  const categoryName = () => {
    axios
      .get("https://www.api-adirek.online/api/filterCategory")
      .then((res) => {
        setGetCategory(res.data);
      })
      .catch((err) => {
        // console.log(err);
      });
  };
  function openModal() {
    setIsOpen(true);
  }
  const handleChange = (event) => {
    setInstructor({ ...instructor, [event.target.name]: event.target.value });
    setCourse({ ...course, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    categoryName();
  }, []);

  return (
    <>
      <section id="register">
        <div className="min-w-screen min-h-screen bg-svg flex items-center justify-center px-2 py-12">
          <div
            className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden"
            style={{ maxWidth: 1500 }}
          >
            <div className="md:flex w-full items-center justify-center">
              <div className="w-full py-10 px-12 sm:px-4 md:px-10 ">
                <div className="text-center mb-10">
                  <h2 className="text-Athiti !font-semibold !text-titleBlue  !text-[3rem] !leading-none md:!text-[4rem] ">
                    ลงทะเบียนผู้สอน
                  </h2>
                  {/* <h1 className="font-title text-f4xl text-gray-900">
                    ลงทะเบียน
                  </h1> */}
                  <p className="subtext-Athiti !font-medium">
                    กรอกข้อมูลลงทะเบียนเพื่อให้เราติดต่อกลับ
                  </p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="grid grid-cols-1 gap-3 md:grid-cols-3 mt-5 ">
                    <Input
                      label="firstName"
                      register={register}
                      placeholder="ชื่อจริง"
                    />

                    <Input
                      label="lastName"
                      register={register}
                      placeholder="นามสกุล"
                    />

                    <Input
                      label="ที่อยู่อีเมล"
                      register={register}
                      placeholder="Email"
                    />
                    <Input
                      label="เบอร์โทร"
                      register={register}
                      placeholder="เบอร์โทร"
                    />
                    <Input
                      label="ช่องทางการสอน"
                      register={register}
                      placeholder="ช่องทางการสอน"
                    />
                    <Input
                      label="ช่วงอายุของกลุ่มผู้เรียนที่ถนัดในการสอน"
                      register={register}
                      placeholder="ช่วงอายุของกลุ่มผู้เรียนที่ถนัดในการสอน"
                    />
                    <Input
                      label="ฉีดวัคซีนป้องกัน"
                      register={register}
                      placeholder="ฉีดวัคซีนป้องกัน"
                    />
                    <Input
                      label="ประวัติการศึกษา"
                      register={register}
                      placeholder="ประวัติการศึกษา"
                    />
                    <Input
                      label="ประวัติการสอน"
                      register={register}
                      placeholder="ประวัติการสอน"
                    />
                    <Input
                      label="ประกาศนียบัตร"
                      register={register}
                      placeholder="ประกาศนียบัตร"
                    />
                    <Input
                      label="กรณีเรียนนอกสถานที่"
                      register={register}
                      placeholder="กรณีเรียนนอกสถานที่"
                    />
                    <Input
                      label="รูปถ่าย"
                      register={register}
                      placeholder="รูปถ่าย"
                    />
                    <Input
                      label="อายุ"
                      register={register}
                      placeholder="label"
                    />
                    <Input
                      label="อีเมลผู้กรอกฟอร์ม"
                      register={register}
                      placeholder="อีเมลผู้กรอกฟอร์ม"
                    />
                  </div>

                  <div className="my-5">
                    <div>
                      <label>คอร์สของคุณ</label>
                    </div>
                    <SelectForm
                      placeholder="ประเภท"
                      label="course_list_id"
                      register={register}
                      getCategory={getCategory}
                    />
                    <Input
                      label="title_course"
                      register={register}
                      placeholder="หัวข้อคอร์ส"
                    />
                    <Input
                      label="detail"
                      register={register}
                      placeholder="รายละเอียดคอร์ส"
                    />
                    <Input
                      label="price_course"
                      register={register}
                      placeholder="ราคาคอร์ส"
                      type="number"
                    />
                  </div>
                  <button
                    className=" subtext-Athiti !font-semibold  !text-3xl bg-gradient-to-r from-pink-500 hover:to-yellow-5 inline-block px-8 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                    type="submit"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    s
                  >
                    ลงทะเบียน
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Toast t={toast} bgColor={bgColor} />
    </>
  );
};
export default Add;
