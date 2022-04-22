const SingleTestimonial = ({ people }) => {
  return (
    <>
      <div key={people} className=" bg-gray-100 py-6 text-center  shadow-none">
        <div className="flex flex-col items-center hover:scale-105 duration-300">
          <a href="#">
            <img
              className=" rounded-full mx-auto top-0   "
              src="static/img/user-review2.png"
            />
          </a>

          <div className="bg-white drop-shadow-md p-8 rounded-3xl mt-8 grid grid-cols-1">
            <div className="my-2">
              <p className=" text-lg md:text-2xl  font-Mitr font-light text-black ">
                {people.text}
              </p>
            </div>
            <div className="mt-5 text-center">
              <a
                href="#"
                className="hover:text-indigo-500 text-white text-xl font-Mitr font-light bg-red-600 py-2 px-12  rounded-full "
              >
                {people.name}
              </a>
            </div>
            <div className="mt-4 text-2xl">
              <span>
                <i className="fa fa-star text-[#FFC107] "></i>
              </span>
              <span>
                <i className="fa fa-star text-[#FFC107] "></i>
              </span>
              <span>
                <i className="fa fa-star text-[#FFC107] "></i>
              </span>
              <span>
                <i className="fa fa-star text-[#FFC107] "></i>
              </span>
              <span>
                <i className="fa fa-star text-[#FFC107] "></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleTestimonial;
