import { Input, SelectRangeAge, SelectTeach, SelectVaccine } from "../Input";
import DatePicker from "react-datepicker";
import { useState } from "react";
import { Controller } from "react-hook-form";
import moment from "moment";
const EditInstructor = ({ onSubmit, register, auth, control }) => {
  let day = new Date(auth.user?.birthday);
  let getDay = day.toLocaleDateString()
  console.log(day.toLocaleDateString())
  const [startDate, setStartDate] = useState(new Date(day));
  return (
    <div className="w-full py-10 px-12 sm:px-4 md:px-10 ">
      <div className="text-center mb-10">
        <h2 className="text-Athiti !font-semibold !text-titleBlue  !text-[2rem] !leading-none md:!text-[3rem] ">
          ข้อมูลส่วนตัวของคุณ
        </h2>
      </div>
      <form onSubmit={onSubmit}>
      <p class="text-blueGray-400 text-lg  font-semibold uppercase font-Athiti">
          รายละเอียดส่วนตัว
        </p>

        <div className="relative">
          <label className="text-sm  !font-semibold px-1 subtext-Athiti ">วันเกิด</label>
        <Controller
          control={control}
          name="birthday"
          render={({ field }) => (
            // console.log(field)
            <DatePicker
            className="form-input w-full border py-2 px-2 border-b-2 border-gray-300 bg-white bg-opacity-80 placeholder-gray-400 focus:border-gray-300 focus:ring-0"
            placeholderText="เลือกวันเกิด"
            defaultValue={startDate}
              onChange={(date) => field.onChange(date)}
              selected={field.value}
            />
          )}
        />
        </div>
        {/* <DatePicker selected={startDate} {...register('birthday',)} /> */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 mt-5 ">
          <Input
            label="first_name"
            defaultValue={auth.user?.first_name}
            inputName={auth.user?.first_name}
            register={register}
            placeholder="ชื่อจริง"
          />
          <Input
            label="last_name"
            register={register}
            placeholder="นามสกุล"
            defaultValue={auth.user?.last_name}
          />
          {/* 
                  <Input
                    label="email"
                    register={register}
                    placeholder="Email"
                    defaultValue={auth.user?.email}
                  /> */}
          <Input
            label="tel"
            register={register}
            placeholder="เบอร์โทร"
            defaultValue={auth.user?.tel}
          />
          <Input
            label="อายุ"
            register={register}
            placeholder="อายุ"
            defaultValue={auth.user?.อายุ}
            type="number"
          />
          <SelectVaccine
            label="ฉีดวัคซีนป้องกัน"
            register={register}
            placeholder="ฉีดวัคซีนป้องกัน"
            defaultValue={auth.user?.ฉีดวัคซีนป้องกัน}
          />
          <SelectTeach
            label="ช่องทางการสอน"
            register={register}
            placeholder="ช่องทางการสอน"
            defaultValue={auth.user?.ฉีดวัคซีนป้องกัน}
          />
          {/* <Input
                        label="ช่องทางการสอน"
                        register={register}
                        placeholder="ช่องทางการสอน"
                        defaultValue={auth.user?.ช่องทางการสอน}
                      />
                       */}
          <SelectRangeAge
            label="ช่วงอายุของกลุ่มผู้เรียนที่ถนัดในการสอน"
            register={register}
            placeholder="ช่วงอายุของกลุ่มผู้เรียนที่ถนัดในการสอน"
            defaultValue={auth.user?.ช่วงอายุของกลุ่มผู้เรียนที่ถนัดในการสอน}
          />
          <Input
            label="ประวัติการศึกษา"
            register={register}
            placeholder="ประวัติการศึกษา (ถ้ามี)"
            defaultValue={auth.user?.ประวัติการศึกษา}
          />
          {/* <Input
                        label="ช่วงอายุของกลุ่มผู้เรียนที่ถนัดในการสอน"
                        register={register}
                        placeholder="ช่วงอายุของกลุ่มผู้เรียนที่ถนัดในการสอน"
                        defaultValue={auth.user?.ช่วงอายุของกลุ่มผู้เรียนที่ถนัดในการสอน}
                      /> */}
          {/* <Input
                        label="ฉีดวัคซีนป้องกัน"
                        register={register}
                        placeholder="ฉีดวัคซีนป้องกัน"
                        defaultValue={auth.user?.ฉีดวัคซีนป้องกัน}
                      /> */}

          <Input
            label="ประวัติการสอน"
            register={register}
            placeholder="ประวัติการสอน (ถ้ามี)"
            defaultValue={auth.user?.ประวัติการสอน}
          />
          <Input
            label="ประกาศนียบัตร"
            register={register}
            placeholder="รางวัลจากการสอน (ถ้ามี)"
            defaultValue={auth.user?.ประกาศนียบัตร}
          />
          <Input
            label="กรณีเรียนนอกสถานที่"
            register={register}
            placeholder="สถานที่สอน (กรณีเรียนนอกสถานที่) (ถ้ามี)"
            defaultValue={auth.user?.กรณีเรียนนอกสถานที่}
          />
          <Input
            label="รูปถ่าย"
            register={register}
            placeholder="รูป Profile (ถ้ามี)"
            defaultValue={auth.user?.รูปถ่าย}
          />
          <Input
            label="Social Media"
            register={register}
            placeholder="ช่องทาง Social Media"
            // defaultValue={auth.user?.รูปถ่าย}
          />
          <Input
            label="บัตรประชาชน"
            register={register}
            placeholder="บัตรประชาชน"
            // defaultValue={auth.user?.รูปถ่าย}
          />
        </div>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            datepicker
            type="text"
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Select date"
          />
        </div>
        <button
          className=" subtext-Athiti !font-semibold  !text-3xl bg-gradient-to-r from-pink-500 hover:to-yellow-5 inline-block px-8 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
          type="submit"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          s
        >
          ยืนยัน
        </button>
      </form>
    </div>
  );
};

export default EditInstructor;
