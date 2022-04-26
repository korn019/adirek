import {useState} from "react"
import {FaSearch} from "react-icons/fa"
const SearchCourse = (props) => {
  const {search, setSearch} = props
  return (
    <div className="blog-cat ">
      <div className="category-navbar navbar-area mt-0 border-top-0 border-blue-400 border-1">
        <nav className="navbar navbar-expand-lg">
          <div className="container nav-container">
            <div className="collapse navbar-collapse justify-content-end" id="themefie_main_menu">
              <div className="single-input-wrap ">
                <div className="relative text-gray-600 flex items-center justify-center ">
                  <input
                    type="text"
                    name="search"
                    placeholder="ค้นหาบทความ..."
                    className="bg-white h-10 px-5 pr-10 border-b  rounded-full focus:outline-none text-Athiti !text-lg"
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <button type="submit" className=" flex items-center justify-center ">
                    <FaSearch />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default SearchCourse
