import ReactStars from "react-stars";

const SingleTestimonialInstructor = () => {
  return (
    <div className="  text-center  shadow-none">
      <div className="flex flex-col items-center hover:scale-[1.01] duration-300">
        <div className="drop-shadow-md p-8 rounded-3xl mt-8 grid grid-cols-1">
          <div className=" text-center">
            <div className="text-2xl p-4  text-center items-center justify-center flex">
              <ReactStars
                count={5}
                half={true}
                value={5}
                // onChange={ratingChanged}
                edit={false}
                size={32}
                color2={"#FFC107"}
              />
            </div>
            <a
              href="#"
              className="hover:text-indigo-500 text-white text-xl font-Mitr font-light bg-red-600 py-2 px-12  rounded-full "
            >
              สุภเวช
            </a>
          </div>

          <div className="my-5">
            <p className=" text-lg md:text-3xl subpixel-antialiased  text-black subtext-Athiti ">
              แพลตฟอร์มที่มีผู้เรียนมาก ทำให้ผู้เรียนสามารถเลือกครูได้อย่างอิสระ
              และยังไม่มีการหักค่าคอมใดๆเลย
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonialInstructor;
