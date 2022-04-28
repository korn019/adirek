import { Input, SelectType } from "./Input";
import { useForm } from "react-hook-form";
import Toast from "./Toast";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useState } from "react";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [bgColor, setBgColor] = useState("");
  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log(data);
    axios
      .post("http://localhost:3000/api/users/register", data)
      .then((res) => {
        console.log(res);
        setBgColor("bg-success");
        toast("สมัครสมาชิกสำเร็จ");
        // window.location = "/Login";
      })
      .catch((err) => {
        console.log(err.response.data);
        setBgColor("bg-danger");
        toast(err.response.data.message);
      });
  };
  return (
    <>
      {/* <section className="h-full gradient-form bg-gray-200">
        <div className="container py-12 px-6 h-full">
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div className="xl:w-10/12">
              <div className="block bg-white shadow-lg rounded-lg">
                <div className="lg:flex lg:flex-wrap g-0">
                  <div className="lg:w-6/12 px-4 md:px-0">
                    <div className="md:p-12 md:mx-6">
                      <div className="text-center">
                        <img
                          className="mx-auto w-48"
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                          alt="logo"
                        />
                        <h4 className="text-xl font-semibold mt-1 mb-12 pb-1">
                          We are The Lotus Team
                        </h4>
                      </div>
                      <form>
                        <p className="mb-4">Please login to your account</p>
                        <Input
                          label="email"
                          register={register}
                          placeholder="Email"
                          type="email"
                          required
                        />
                        <Input
                          label="password"
                          register={register}
                          placeholder="Password"
                          required
                          type="password"
                        />
                        <Input
                          label="first_name"
                          register={register}
                          placeholder="ชื่อจริง"
                          required
                        />
                        <Input
                          label="last_name"
                          register={register}
                          placeholder="นามสกุล"
                          required
                        />

                        <Input
                          label="tel"
                          register={register}
                          placeholder="เบอร์โทรศัพท์"
                          required
                        />
                        <div className="text-center pt-1 mb-12 pb-1 relative">
                          <button
                            className=" bg-gradient-to-r from-pink-500 hover:to-yellow-5 inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                            type="submit"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                            s>
                            Log in
                          </button>
                          <a className="text-gray-500" href="#!">
                            Forgot password?
                          </a>
                        </div>
                        <div className="flex items-center justify-between pb-6">
                          <p className="mb-0 mr-2">Don't have an account?</p>
                          <button
                            type="button"
                            className="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light">
                            Danger
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none  bg-gradient-to-r from-pink-500 hover:to-yellow-5 ">
                    <div className="text-white px-4 py-6 md:p-12 md:mx-6">
                      <h4 className="text-xl font-semibold mb-6">
                        We are more than just a company
                      </h4>
                      <p className="text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <Toast t={toast.message} bgColor={bgColor} />

      <div className="w-full bg-grey-lightest">
        <div className="container mx-auto py-8">
          <div className="w-5/6 lg:w-1/2 mx-auto bg-white rounded shadow">
            <div className="py-4 px-8 text-black text-xl border-b border-grey-lighter">
              Register for a free account
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="py-4 px-8">
                <div className="w-full md:w-1/3  mb-6 md:mb-0">
                 
                  <SelectType
                    label="type"
                    register={register}
                    placeholder="ประเภทบัญชี"
                    />
                   
                </div>
                <div className="flex mb-4">
                  <div className="w-1/2 mr-1">
                    <Input
                      label="first_name"
                      register={register}
                      placeholder="ชื่อจริง"
                      type="text"
                    />
                  </div>
                  <div className="w-1/2 ml-1">
                    <Input
                      label="last_name"
                      register={register}
                      placeholder="นามสกุล"
                      type="text"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <Input
                    label="tel"
                    register={register}
                    placeholder="เบอร์โทรศัพท์"
                    required
                  />
                </div>
                <div className="mb-4">
                  <Input
                    label="email"
                    register={register}
                    placeholder="Email Address"
                    type="email"
                  />
                </div>
                <div className="">
                  <Input
                    label="password"
                    register={register}
                    placeholder="Password"
                    type="password"
                  />
                  <p className="text-grey text-xs mt-1">
                    รหัสผ่านอย่างน้อย 8 ตัวอักษร
                  </p>
                </div>
                <div className="">
                  <Input
                    label="confirm_password"
                    register={register}
                    placeholder="Confirm password"
                    type="password"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <button
                    className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded-full"
                    type="submit"
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default RegisterPage;
