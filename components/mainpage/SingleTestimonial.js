import ReactStars from "react-stars"

const SingleTestimonial = ({people}) => {
  return (
    <>
      <div key={people} className=" py-6 w-full text-center  shadow-none">
        <div className="flex flex-col items-center hover:scale-105 duration-300">
          <a>
            <img className=" rounded-full mx-auto top-0   " src="static/img/user-review2.png" />
          </a>

          <div className=" drop-shadow-sm p-8 rounded-xl mt-8 grid grid-cols-1">
            <div className="my-2">
              <p className=" text-lg md:text-3xl subpixel-antialiased  text-black subtext-Athiti">
                {people.text}
              </p>
            </div>
            <div className="mt-5 text-center">
              <a
               
                className="hover:text-indigo-500 text-white text-xl font-Mitr font-light bg-red-600 py-2 px-12  rounded-full cursor-pointer">
                {people.name}
              </a>
            </div>
            <div className="mt-4 text-2xl flex items-center justify-center">
              <span className="drop-shadow-sm">

              <ReactStars
                count={5}
                half={true}
                value={5}
                // onChange={ratingChanged}
                edit={false}
                size={22}
                color2={"rgb(253 186 116)"}
                />
                </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleTestimonial
