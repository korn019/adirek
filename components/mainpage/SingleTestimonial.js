const SingleTestimonial = ({people}) => {
  return (
    <>
      <div
        key={people}
        className=" bg-white p-5 text-center single-testimonial-wrap  hover:border-blue-400 shadow-none border-noen">
        <div className="flex flex-col items-center hover:scale-105 duration-300">
          <a href="#">
            <img
              className=" rounded-full mx-auto top-0 -mt-8  border-4 border-white"
              src="static/img/user-review.png"
            />
          </a>
          <div className="mt-4">
            <p className="mt-2 mb-4 text-base leading-6 font-Kodchasan text-gray-500">{people.text}</p>
            <a href="#" className="hover:text-indigo-500 text-gray-900 text-xl font-Mitr font-semibold">
              {people.name}
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleTestimonial
