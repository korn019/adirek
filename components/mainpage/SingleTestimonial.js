const SingleTestimonial = ({ people }) => {
  return (
    <>
      <div key={people} className=" py-6 w-full text-center  shadow-none">
        <div className="flex flex-col items-center hover:scale-105 duration-300">
          <a href="#">
            <img className=" rounded-full mx-auto top-0   " src="static/img/user-review2.png" />
          </a>

          <div className=" drop-shadow-sm p-8 px-24 rounded-xl mt-8 grid grid-cols-1">
            <div className="my-2">
              <p className=" text-lg md:text-3xl subpixel-antialiased  text-black subtext-Athiti">
                {people.text}
              </p>
            </div>
            <div className="mt-5 text-center">
              <a
                href="#"
                className="hover:text-indigo-500 text-white text-xl font-Mitr font-light bg-red-600 py-2 px-12  rounded-full ">
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
  )
};

export default SingleTestimonial;
