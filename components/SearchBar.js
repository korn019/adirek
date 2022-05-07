import {GiArchiveResearch} from "react-icons/gi"
import {useRef} from "react"

export const SearchBarLg = ({searchCourse, setSearchCourse, onKeyDown, onChange}) => {
  const clickPoint = useRef()
  const handleFocus = () => {
    clickPoint.current.style.display = "none"
  }

  const handleBlur = () => {
    clickPoint.current.style.display = "block"
  }
  return (
    <div className="items-center px-4 flex justify-center hidden lg:block">
      <div className="relative flex  items-center justify-center">
        <div className="absolute  left-3 items-center" ref={clickPoint}>
          <GiArchiveResearch color="gray" className="text-2xl  hover:!text-bg hover:duration-700" />
        </div>
        <input
          type="text"
          className="block p-2 !pl-10 w-70 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:!pl-3 text-Athiti !font-medium !text-sm"
          placeholder="ค้นหาคอร์สที่สนใจ..."
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={onChange}
          value={searchCourse}
          onKeyDown={onKeyDown}
        />
      </div>
    </div>
  )
}
export const SearchBarMobile = ({searchCourse, setSearchCourse, onKeyDown, onChange}) => {
  const clickPoint = useRef()
  const handleFocus = () => {
    clickPoint.current.style.display = "none"
  }

  const handleBlur = () => {
    clickPoint.current.style.display = "block"
  }
  return (
    <div className="flex-shrink-0 block lg:hidden">
      <div className="relative flex  items-center justify-center">
        <div className="absolute  left-3 items-center" ref={clickPoint}>
          <GiArchiveResearch color="gray" className="text-2xl  hover:!text-bg hover:duration-700" />
        </div>
        <input
          type="text"
          className="block p-2 !pl-10 w-70 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:!pl-3 text-Athiti !font-medium !text-sm"
          placeholder="ค้นหาคอร์สที่สนใจ..."
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={onChange}
          value={searchCourse}
          onKeyDown={onKeyDown}
        />
      </div>
    </div>
  )
}
