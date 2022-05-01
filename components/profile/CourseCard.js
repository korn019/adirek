import {useRouter} from "next/router"
import {DataContext} from "../../store/GlobalState"
import {toast} from "react-toastify"
import {useEffect, useState, useContext, Fragment} from "react"
const CourseCard = () => {
  const {searchCourse, setSearchCourse, state, dispatch} = useContext(DataContext)
  const {auth} = state
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem("token")

    if (!token) {
      dispatch({type: "NOTIFY", payload: {error: toast.error("You are not already logged in")}})
      router.push("/")
    }
  }, [auth])
  return (
    <>
      <div className="container mx-auto py-12 px-6 card card-side !bg-[rgb(245 245 245)]">
        <div className="">
          <div className="space-y-4 lg:grid lg:grid-cols-3 lg:items-start lg:gap-6 lg:space-y-0">
            <a href="https://stackdiary.com/" className="group">
              <div className="aspect-w-3 aspect-h-2">
                <img
                  className="object-cover shadow-lg rounded-lg group-hover:opacity-75"
                  src="https://stackdiary.com/140x100.png"
                  alt="Featured Photo"
                />
              </div>
            </a>

            <div className="sm:col-span-2">
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  <button className="btn btn-xs btn-error">Books</button>
                  <button className="btn btn-xs btn-success">Author</button>
                  <span className="inline-flex items-center leading-none px-2.5 py-1.5 text-sm font-medium text-skin-inverted rounded-full border border-skin-input">
                    <svg
                      className="mr-1.5 h-2 w-2 brand-react"
                      fill="currentColor"
                      viewBox="0 0 8 8">
                      <circle cx="4" cy="4" r="3"></circle>
                    </svg>
                    Tag #1
                  </span>

                  <span className="inline-flex items-center leading-none px-2.5 py-1.5 text-sm font-medium text-skin-inverted rounded-full border border-skin-input">
                    <svg
                      className="mr-1.5 h-2 w-2 brand-packages"
                      fill="currentColor"
                      viewBox="0 0 8 8">
                      <circle cx="4" cy="4" r="3"></circle>
                    </svg>
                    Tag #2
                  </span>

                  <span className="inline-flex items-center leading-none px-2.5 py-1.5 text-sm font-medium text-skin-inverted rounded-full border border-skin-input">
                    <svg
                      className="mr-1.5 h-2 w-2 brand-tutoriel"
                      fill="currentColor"
                      viewBox="0 0 8 8">
                      <circle cx="4" cy="4" r="3"></circle>
                    </svg>
                    Tag #3
                  </span>
                </div>
              </div>

              <div className="mt-2">
                <a
                  href="https://laravel.cm/articles/traquer-un-champ-validation-conditionelle-react-hook-form-5"
                  className="group">
                  <h4 className="text-lg leading-6 font-semibold font-sans text-skin-inverted group-hover:text-skin-primary">
                    A Tailwind CSS Card for Displaying Blog Posts
                  </h4>
                </a>

                <p className="mt-1 text-sm font-normal text-skin-base leading-5">
                  Metus potenti velit sollicitudin porttitor magnis elit lacinia tempor varius, ut
                  cras orci vitae parturient id nisi vulputate consectetur, primis venenatis cursus
                  tristique malesuada viverra congue risus.
                </p>

                <div className="mt-3 flex items-center font-sans">
                  <div className="shrink-0">
                    <a href="https://stackdiary.com/">
                      <span className="sr-only">{auth.user?.first_name}</span>

                      <div className="h-8 w-8 rounded-full overflow-hidden bg-gray-400 justify-center items-center flex">
                        <span className="text-black text-Athiti !font-semibold !text-base">
                          {Object.keys(auth).length !== 0 ? (
                            auth.user?.first_name.charAt(0) + auth.user?.last_name.charAt(0)
                          ) : (
                            <img
                              className="h-10 w-10 rounded-full"
                              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                              alt=""
                            />
                          )}
                        </span>
                      </div>
                    </a>
                  </div>

                  <div className="ml-3">
                    <p className="text-sm font-medium text-skin-inverted">
                      <a href="" className="hover:underline uppercase">
                        {auth.user?.first_name}
                      </a>
                    </p>

                    <div className="flex space-x-1 text-sm text-skin-muted">
                      <time datetime="2022-02-01">1 Feb, 2022</time>

                      <span aria-hidden="true">·</span>

                      <span>3 min read time</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CourseCard
