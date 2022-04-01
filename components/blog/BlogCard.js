import Link from "next/link"
import {useRouter} from "next/router"
import {useState} from "react"
import { useEffect } from "react"
const BlogCard = (
  {
    article,
    setPerfectionistView,
    perfectionistView,
    setAcceptanceView,
    acceptanceView,
    setInspirationView,
    inspirationView,
  },
  props
) => {
  const {search, setSearch} = props

  const router = useRouter()
  const CountView = () => {
    if (typeof window !== "undefined") {
      if (article.url == "Perfectionist") {
        var xhr = new XMLHttpRequest()
        xhr.open(
          "GET",
          "https://api.countapi.xyz/hit/adirek-nextjs.herokuapp.comBlogPerfectionist/awesomeclick"
        )
        xhr.responseType = "json"
        xhr.onload = function () {
          localStorage.setItem("@PerfectionistCountView", this.response.value)
          router.push(`/Blog/${article.url}`)
        }
        xhr.send()
      } else if (article.url == "Inspiration") {
        var xhr = new XMLHttpRequest()
        xhr.open(
          "GET",
          "https://api.countapi.xyz/hit/adirek-nextjs.herokuapp.comBlogInspiration/awesomeclick"
        )
        xhr.responseType = "json"
        xhr.onload = function () {
          localStorage.setItem("@inspirationViewCountView", this.response.value)
          router.push(`/Blog/${article.url}`)
        }
        xhr.send()
      } else if (article.url == "Self-acceptance") {
        var xhr = new XMLHttpRequest()
        xhr.open(
          "GET",
          "https://api.countapi.xyz/hit/adirek-nextjs.herokuapp.comBlogSelf-acceptance/awesomeclick"
        )
        xhr.responseType = "json"
        xhr.onload = function () {
          localStorage.setItem("@AcceptanceCountView", this.response.value)
          // console.log(this.response.value)
          router.push(`/Blog/${article.url}`)
        }
        xhr.send()
      }
    }
  }

  


  return (
    <>
      <section className="text-gray-700 body-font group">
        <div className="h-full  group-hover:border-none border-2 border-gray-200 rounded-lg overflow-hidden hover:shadow-lg duration-500">
          <div className="w-full h-full">
            <div className=" group-hover:scale-105 group-hover:ease-in group-hover:duration-500">
              <Link href="">
                <a onClick={CountView}>
                  <img
                    className=" w-full object-cover object-center "
                    src={article.img}
                    alt="blog"
                  />
                </a>
              </Link>
            </div>
          </div>
          <div className="p-6 group-hover:bg-white group-hover:duration-500 group-hover:shadow-[0_2px_48px_0_rgba(0,0,0,0.08)]">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
              {article.date}
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              <Link href="">
                <a onClick={CountView}>{article.title}</a>
              </Link>
            </h1>
            <p className="leading-relaxed mb-3 truncate">{article.subtitle}</p>
            <div className="flex items-center flex-wrap ">
              <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">By Admin</a>
              <span className="text-gray-600 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-300">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                {article.view}
              </span>
              <span className="text-gray-600 inline-flex items-center leading-none text-sm">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
                {article.comment}
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogCard

{
  /* <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
                <div className="lg:h-48 bg-gray-400 md:h-36 w-full object-cover object-center"></div>
                <div className="p-6">
                  <h2 className="bg-gray-400 animate-pulse h-4 w-1/4 mb-2"></h2>
                  <h1 className="w-1/2 mb-4 h-6 animate-pulse bg-gray-500"></h1>
                  <p className="leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-400"></p>
                  <p className="leading-relaxed mb-3 w-2/3 h-3 animate-pulse bg-gray-400"></p>
                  <p className="leading-relaxed mb-3 w-1/2 h-3 animate-pulse bg-gray-400"></p>
                  <div className="flex items-center flex-wrap ">
                    <a className="bg-indigo-300 h-4 animate-pulse mt-2 w-32 inline-flex items-center md:mb-2 lg:mb-0"></a>
                    <span className="bg-indigo-300 w-16 mt-2 h-4 animate-pulse mr-3 px-2 inline-flex items-center ml-auto leading-none text-sm pr-5 py-1"></span>
                  </div>
                </div>
              </div>
            </div> */
}
{
  /* <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
                <div className="lg:h-48 bg-gray-400 md:h-36 w-full object-cover object-center"></div>
                <div className="p-6">
                  <h2 className="bg-gray-400 animate-pulse h-4 w-1/4 mb-2"></h2>
                  <h1 className="w-1/2 mb-4 h-6 animate-pulse bg-gray-500"></h1>
                  <p className="leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-400"></p>
                  <p className="leading-relaxed mb-3 w-2/3 h-3 animate-pulse bg-gray-400"></p>
                  <p className="leading-relaxed mb-3 w-1/2 h-3 animate-pulse bg-gray-400"></p>
                  <div className="flex items-center flex-wrap ">
                    <a className="bg-indigo-300 h-4 animate-pulse mt-2 w-32 inline-flex items-center md:mb-2 lg:mb-0"></a>
                    <span className="bg-indigo-300 w-16 mt-2 h-4 animate-pulse mr-3 px-2 inline-flex items-center ml-auto leading-none text-sm pr-5 py-1"></span>
                  </div>
                </div>
              </div>
            </div> */
}
