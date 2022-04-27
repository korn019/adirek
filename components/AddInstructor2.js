import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { css } from "@emotion/react";
import SyncLoader from "react-spinners/SyncLoader";
import axios from "axios";
import Select from "./Select";
import ClipLoader from "react-spinners/ClipLoader";
import { useEffect } from "react";
import Toast from "./Toast";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { Input, SelectForm } from "./Input";
const Add = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/instructor/add", data)
      .then(function (response) {
        setLoading(false);
        let idIns = response.data.add_id.toString();
        console.log(response.data.add_id.toString());

        axios
          .post("http://localhost:3000/api/course_title", data)
          .then(function (response) {
            console.log(response);
            setWarnText(false);
            setIsOpen(true);
            if (response.status === 200) {
              let TitleId = response.data.title_id.toString();
              axios
                .post("http://localhost:3000/api/course_price", data)
                .then(function (response) {
                  console.log(response);
                  setWarnText(false);
                  setIsOpen(true);
                  if (response.status === 200) {
                    let PriceId = response.data.price_id.toString();
                    setLoading(false);
                    axios
                      .post("http://localhost:3000/api/course_details", data)
                      .then(function (response) {
                        console.log(response);
                        setWarnText(false);
                        setIsOpen(true);
                        if (response.status === 200) {
                          let DetailId = response.data.detail_id.toString();
                          setLoading(false);
                          const data2 = {
                            instructor_list_id: idIns,
                            course_list_id: data.course_list_id,
                            title_list_id: TitleId,
                            price_list_id: PriceId,
                            details_list_id: DetailId,
                          };

                          console.log(data2);
                          const config = {
                            headers: {
                              "Content-Type":
                                "application/x-www-form-urlencoded",
                            },
                          };
                          axios
                            .put(
                              `http://localhost:3000/api/course_list/${idIns}`,
                              data2
                            )
                            .then(function (response) {
                              console.log(response.data);
                              toast("เพิ่มคอร์สเรียบร้อยแล้ว");
                              setBgColor("bg-success");
                              setLoading(false);
                            })
                            .catch((error) => {
                              console.log(error.message);
                              toast("เกิดข้อผิดพลาด ลองใหม่อีกครั้ง");
                              setLoading(false);
                              setBgColor("bg-danger");
                            });
                        }
                      })
                      .catch(function (err) {
                        console.log(err);
                      });
                  }
                })
                .catch(function (err) {
                  console.log(err);
                });
            }
          })
          .catch(function (err) {
            console.log(err);
          });
      })
      .catch(function (error) {
        console.log(error);
        // // let err = error.response.error;
        // setWarning(true);
        // setWarnText(`***${error}***`);
        // if (error.response.status === 400) {
        //   setLoading(false);
        // }
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
      .get("http://localhost:3000/api/filterCategory")
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
                    ลงทะเบียน
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
                      required
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
                  <div className="text-left relative  flex cursor-pointer my-4">
                    <div
                      className=" subtext-Athiti !font-bold  !text-2xl text-gray-700 border-2 border-blue-400  focus:ring-1 focus:outline-none focus:border-[#ff013c]  focus:text-[#ff013c]  rounded-lg  px-2 py-1 text-center mr-2 mb-2"
                      onClick={() => setIsOpenAddCourse(true)}
                    >
                      <p className="text-Athiti ">เพิ่มคอร์ส</p>
                    </div>
                  </div>

                  <Transition show={isOpenAddCourse} as={Fragment}>
                    <Dialog
                      as="div"
                      className="fixed inset-0 z-50 overflow-y-auto items-center justify-center mt-4"
                      onClose={closeModal}
                    >
                      <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                          as={Fragment}
                          enter="ease-out duration-300"
                          enterFrom="opacity-0"
                          enterTo="opacity-100"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Dialog.Overlay className="fixed inset-0 bg-black/[.2]" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span
                          className="inline-block h-screen align-middle"
                          aria-hidden="true"
                        >
                          &#8203;
                        </span>
                        <Transition.Child
                          as={Fragment}
                          enter="ease-out duration-300"
                          enterFrom="opacity-0 scale-95"
                          enterTo="opacity-100 scale-100"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100 scale-100"
                          leaveTo="opacity-0 scale-95"
                        >
                          <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                            <div className="flex justify-between items-center">
                              <Dialog.Title
                                as="h3"
                                className="text-lg font-medium leading-6 text-gray-900"
                              >
                                {/* <h3 className="text-fxl font-title">{category}</h3> */}
                              </Dialog.Title>
                              <Dialog.Title
                                as="h3"
                                className="text-right leading-6 text-gray-900"
                              >
                                <button
                                  className="font-black"
                                  onClick={closeModal}
                                >
                                  X
                                </button>
                              </Dialog.Title>
                            </div>

                            <SelectForm
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
                            />

                            <div className="sweet-loading text-center">
                              <ClipLoader
                                color="blue"
                                loading={loading}
                                size={82}
                              />
                            </div>
                          </div>
                        </Transition.Child>
                      </div>
                    </Dialog>
                  </Transition>
                  <input type="submit" />
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
