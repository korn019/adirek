const SingleTestimonial = ({people}) => {
  return (
    <>
      <div
        key={people}
        className=" bg-white p-5 pb-10 text-center single-testimonial-wrap  hover:border-blue-400 shadow-sm">
        <div className="flex flex-col items-center hover:scale-105 duration-300">
          <a href="#">
            <img
              className=" rounded-full mx-auto h-20 w-20  top-0 -mt-8  border-4 border-white"
              src="assets/img/user.png"
            />
          </a>
          <div className="mt-4">
            <p className="mt-2 mb-4 text-base leading-6 text-gray-500">{people.text}</p>
            <a href="#" className="hover:text-indigo-500 text-gray-900 font-semibold">
              {people.name}
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleTestimonial
