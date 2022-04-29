import CourseCard from "./course-card"
import {useRouter} from "next/router"
import {DataContext} from "../../store/GlobalState"
import {toast} from "react-toastify"
import {useEffect, useState, useContext, Fragment} from "react"
const Home = () => {
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
      <div className="drawer drawer-mobile bg-[#2a303c]">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex justify-center lg:justify-start ">
          <div className="lg:w-[60vw] max-w-screen-lg lg:pt-4 lg:p-4">
            <div className="navbar bg-base-100 lg:hidden sticky top-0 w-full z-50">
              <div className="flex-none">
                <label for="my-drawer-2" className="btn btn-square btn-ghost lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-5 h-5 stroke-current">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                </label>
              </div>
              <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl" href="./">
                  Sarissa Blog
                </a>
              </div>
              <div className="flex-none">
                <button
                  data-set-theme="winter"
                  className="btn btn-sm btn-ghost btn-square"
                  data-act-className="btn-active">
                  <svg
                    className="inline-block w-4 h-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <title>ionicons-v5-q</title>
                    <path d="M256,118a22,22,0,0,1-22-22V48a22,22,0,0,1,44,0V96A22,22,0,0,1,256,118Z" />
                    <path d="M256,486a22,22,0,0,1-22-22V416a22,22,0,0,1,44,0v48A22,22,0,0,1,256,486Z" />
                    <path d="M369.14,164.86a22,22,0,0,1-15.56-37.55l33.94-33.94a22,22,0,0,1,31.11,31.11l-33.94,33.94A21.93,21.93,0,0,1,369.14,164.86Z" />
                    <path d="M108.92,425.08a22,22,0,0,1-15.55-37.56l33.94-33.94a22,22,0,1,1,31.11,31.11l-33.94,33.94A21.94,21.94,0,0,1,108.92,425.08Z" />
                    <path d="M464,278H416a22,22,0,0,1,0-44h48a22,22,0,0,1,0,44Z" />
                    <path d="M96,278H48a22,22,0,0,1,0-44H96a22,22,0,0,1,0,44Z" />
                    <path d="M403.08,425.08a21.94,21.94,0,0,1-15.56-6.45l-33.94-33.94a22,22,0,0,1,31.11-31.11l33.94,33.94a22,22,0,0,1-15.55,37.56Z" />
                    <path d="M142.86,164.86a21.89,21.89,0,0,1-15.55-6.44L93.37,124.48a22,22,0,0,1,31.11-31.11l33.94,33.94a22,22,0,0,1-15.56,37.55Z" />
                    <path d="M256,358A102,102,0,1,1,358,256,102.12,102.12,0,0,1,256,358Z" />
                  </svg>
                </button>
                <button
                  data-set-theme="garden"
                  className="btn btn-sm btn-ghost btn-square"
                  data-act-className="btn-active">
                  <svg
                    className="inline-block w-4 h-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </button>
                <button
                  data-set-theme="dark"
                  className="btn btn-sm btn-ghost btn-square"
                  data-act-className="btn-active">
                  <svg
                    className="inline-block w-4 h-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <title>ionicons-v5-j</title>
                    <path d="M152.62,126.77c0-33,4.85-66.35,17.23-94.77C87.54,67.83,32,151.89,32,247.38,32,375.85,136.15,480,264.62,480c95.49,0,179.55-55.54,215.38-137.85-28.42,12.38-61.8,17.23-94.77,17.23C256.76,359.38,152.62,255.24,152.62,126.77Z" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex-1 p-3 md:py-[35]">
              <div className="space-y-2 md:space-y-6">
                <CourseCard />

                <div className="card card-side bg-base-200 shadow-xl">
                  <div className="card-body">
                    <h2 className="card-title">
                      Fringilla est ullamcorper eget nulla facilisi etiam dignissim.
                    </h2>
                    <div className="justify-start">
                      <button className="btn btn-xs btn-accent">Article</button>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim.
                      Purus viverra accumsan in nisl. Aliquam faucibus purus in massa. In vitae
                      turpis massa sed elementum tempus egestas. Nisl purus in mollis nunc sed.
                      Ullamcorper morbi tincidunt ornare massa eget. Enim nulla aliquet porttitor
                      lacus luctus accumsan. Id neque aliquam vestibulum morbi blandit cursus.
                      Pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Sed augue lacus
                      viverra vitae.
                    </p>
                  </div>
                </div>
                <div className="card card-side bg-base-200 shadow-xl">
                  <figure>
                    <img src="https://api.lorem.space/image/book?w=200&h=280" alt="Book" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">Rhoncus dolor purus non enim.</h2>
                    <div className="justify-start">
                      <button className="btn btn-xs btn-error">Books</button>
                      <button className="btn btn-xs btn-success">Author</button>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim.
                    </p>
                  </div>
                </div>
                <div className="card card-side bg-base-200 shadow-xl">
                  <div className="card-body">
                    <h2 className="card-title">
                      Elementum pulvinar etiam non quam lacus suspendisse
                    </h2>
                    <div className="justify-start">
                      <button className="btn btn-xs btn-warning">Note</button>
                    </div>
                    <p>
                      Sagittis id consectetur purus ut faucibus pulvinar elementum integer. Massa
                      sed elementum tempus egestas sed. Proin sagittis nisl rhoncus mattis rhoncus
                      urna. Amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus.
                      Posuere urna nec tincidunt praesent semper. Elementum pulvinar etiam non quam
                      lacus suspendisse.
                    </p>
                  </div>
                </div>
                <div className="card card-side bg-base-200 shadow-xl">
                  <figure>
                    <img src="https://api.lorem.space/image/game?w=200&h=280" alt="Game" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">Sed augue lacus viverra vitae.</h2>
                    <div className="justify-start">
                      <button className="btn btn-xs btn-primary">Game</button>
                    </div>
                    <p>
                      Sodales ut etiam sit amet nisl purus in mollis nunc. Suspendisse potenti
                      nullam ac tortor vitae purus. Eu mi bibendum neque egestas congue quisque
                      egestas diam.
                    </p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="btn-group">
                    <button className="btn">1</button>
                    <button className="btn">2</button>
                    <button className="btn btn-disabled">...</button>
                    <button className="btn">99</button>
                    <button className="btn">100</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="drawer-side">
          <label for="my-drawer-2" className="drawer-overlay"></label>
          <div className="overflow-y-auto flex lg:justify-end w-fit lg:w-[40vw]">
            {/* <!-- Sidebar content here --> */}
            <div className="w-fit p-3 lg:m-6 bg-base-100">
              {/* <!-- avatar start --> */}
              <div className="avatar w-60">
                <div className="w-16 lg:w-32 rounded-full mx-auto">
                  <img src="https://api.lorem.space/image/face?hash=92310" />
                </div>
              </div>
              {/* <!-- avatar end --> */}
              <h1 className="text-2xl p-2 pl-4 text-white text-center"> {auth.user?.first_name}</h1>
              <h1 className="text-2xl p-2 pl-4 text-white text-center"> {auth.user?.last_name}</h1>
              <p className="text-sm pl-4 text-white text-center"> {auth.user?.type}</p>
              <div className="flex gap-1 justify-center pt-4">
                <a className="btn btn-sm btn-ghost btn-square">
                  <svg
                    className="inline-block w-4 h-4 fill-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a className="btn btn-sm btn-ghost btn-square">
                  <svg
                    className="inline-block w-4 h-4 fill-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                  </svg>
                </a>
                <a className="btn btn-sm btn-ghost btn-square">
                  <svg
                    className="inline-block w-4 h-4 fill-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a className="btn btn-sm btn-ghost btn-square">
                  <svg
                    className="inline-block w-4 h-4 fill-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round">
                    {" "}
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </a>
              </div>
              <div className="divider"></div>
              {/* <!-- menu start --> */}
              <div className="pt-4">
                <ul className="menu bg-base-100 rounded-box">
                  <li>
                    <a href="./">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                      </svg>
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="./about.html">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      About
                    </a>
                  </li>
                  <li>
                    <a href="./categories.html">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                        />
                      </svg>
                      Categories
                    </a>
                  </li>
                  <li>
                    <a href="./search.html">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                      Search
                    </a>
                  </li>
                  <li>
                    <a href="./archive.html">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                        />
                      </svg>
                      Archive
                    </a>
                  </li>
                  <div className="divider"></div>
                  <li className="hidden lg:block">
                    <div className="flex gap-1 justify-center">
                      <button
                        data-set-theme="winter"
                        className="btn btn-sm btn-ghost btn-square"
                        data-act-className="btn-active">
                        <svg
                          className="inline-block w-4 h-4 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512">
                          <title>ionicons-v5-q</title>
                          <path d="M256,118a22,22,0,0,1-22-22V48a22,22,0,0,1,44,0V96A22,22,0,0,1,256,118Z" />
                          <path d="M256,486a22,22,0,0,1-22-22V416a22,22,0,0,1,44,0v48A22,22,0,0,1,256,486Z" />
                          <path d="M369.14,164.86a22,22,0,0,1-15.56-37.55l33.94-33.94a22,22,0,0,1,31.11,31.11l-33.94,33.94A21.93,21.93,0,0,1,369.14,164.86Z" />
                          <path d="M108.92,425.08a22,22,0,0,1-15.55-37.56l33.94-33.94a22,22,0,1,1,31.11,31.11l-33.94,33.94A21.94,21.94,0,0,1,108.92,425.08Z" />
                          <path d="M464,278H416a22,22,0,0,1,0-44h48a22,22,0,0,1,0,44Z" />
                          <path d="M96,278H48a22,22,0,0,1,0-44H96a22,22,0,0,1,0,44Z" />
                          <path d="M403.08,425.08a21.94,21.94,0,0,1-15.56-6.45l-33.94-33.94a22,22,0,0,1,31.11-31.11l33.94,33.94a22,22,0,0,1-15.55,37.56Z" />
                          <path d="M142.86,164.86a21.89,21.89,0,0,1-15.55-6.44L93.37,124.48a22,22,0,0,1,31.11-31.11l33.94,33.94a22,22,0,0,1-15.56,37.55Z" />
                          <path d="M256,358A102,102,0,1,1,358,256,102.12,102.12,0,0,1,256,358Z" />
                        </svg>
                      </button>
                      <button
                        data-set-theme="garden"
                        className="btn btn-sm btn-ghost btn-square"
                        data-act-className="btn-active">
                        <svg
                          className="inline-block w-4 h-4 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2">
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                          />
                        </svg>
                      </button>
                      <button
                        data-set-theme="dark"
                        className="btn btn-sm btn-ghost btn-square"
                        data-act-className="btn-active">
                        <svg
                          className="inline-block w-4 h-4 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512">
                          <title>ionicons-v5-j</title>
                          <path d="M152.62,126.77c0-33,4.85-66.35,17.23-94.77C87.54,67.83,32,151.89,32,247.38,32,375.85,136.15,480,264.62,480c95.49,0,179.55-55.54,215.38-137.85-28.42,12.38-61.8,17.23-94.77,17.23C256.76,359.38,152.62,255.24,152.62,126.77Z" />
                        </svg>
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
              {/* <!-- menu end --> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home