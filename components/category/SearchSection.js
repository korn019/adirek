import {useState, useContext} from "react"
import {DataContext} from "../../store/GlobalState"
const SearchSection = (props) => {
    const {searchCourse, setSearchCourse} = useContext(DataContext)
//   const {search, setSearch} = props
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
                    placeholder="ค้นหาคอร์สที่ต้องการ..."
                    className="bg-white h-10 px-5 pr-10 border-b  rounded-full text-sm focus:outline-none "
                    onChange={(e) => setSearchCourse(e.target.value)}
                    value={searchCourse}
                  />
                  <button type="submit" className="">
                    <i className="fa fa-search"></i>
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

export default SearchSection
