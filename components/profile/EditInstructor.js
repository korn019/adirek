import {Input, SelectRangeAge, SelectTeach, SelectVaccine} from "../Input"
const EditInstructor = ({onSubmit, register, auth}) => {
  return (
    <div className="w-full py-10 px-12 sm:px-4 md:px-10 ">
      <div className="text-center mb-10">
        <h2 className="text-Athiti !font-semibold !text-titleBlue  !text-[2rem] !leading-none md:!text-[3rem] ">
          ข้อมูลส่วนตัวของคุณ
        </h2>
      </div>
      <form onSubmit={onSubmit}>
          
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
            placeholder="ประวัติการศึกษา"
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
            placeholder="ประวัติการสอน"
            defaultValue={auth.user?.ประวัติการสอน}
          />
          <Input
            label="ประกาศนียบัตร"
            register={register}
            placeholder="ประกาศนียบัตร"
            defaultValue={auth.user?.ประกาศนียบัตร}
          />
          <Input
            label="กรณีเรียนนอกสถานที่"
            register={register}
            placeholder="กรณีเรียนนอกสถานที่"
            defaultValue={auth.user?.กรณีเรียนนอกสถานที่}
          />
          <Input
            label="รูปถ่าย"
            register={register}
            placeholder="รูปถ่าย"
            defaultValue={auth.user?.รูปถ่าย}
          />
        </div>

        <button
          className=" subtext-Athiti !font-semibold  !text-3xl bg-gradient-to-r from-pink-500 hover:to-yellow-5 inline-block px-8 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
          type="submit"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          s>
          ยืนยัน
        </button>
      </form>
    </div>
  )
}

export default EditInstructor
