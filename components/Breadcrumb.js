import {useState} from "react"
import Link from "next/link"
const Breadcrumb = ({bread1, bread2, breadActive, href1, href2, hrefActive}) => {
  const [breadcrumb1, setBreadcrumb1] = useState(bread1)
  const [breadcrumb2, setBreadcrumb2] = useState(bread2)
  const [breadcrumbActive, setBreadcrumbActive] = useState(breadActive)
  return (
    <>
      <div className="flex justify-start items-center">
        <div className="flex items-center overflow-y-auto whitespace-nowrap">
          <Link href="/">
            <a className="text-gray-600 dark:text-gray-400 text-lg  font-Athiti !font-semibold">
              หน้าแรก
            </a>
          </Link>
          {breadcrumb1 ? (
            <>
              <span className="mx-3 text-gray-500 dark:text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <Link href={href1}>
                <a className="text-gray-600 dark:text-gray-200 hover:underline font-Athiti !font-semibold text-lg">
                  {bread1}
                </a>
              </Link>
            </>
          ) : null}

          {breadcrumb2 ? (
            <>
              <span className="mx-3 text-gray-500 dark:text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <Link href={href2}>
                <a className="text-gray-600 dark:text-gray-200 hover:underline font-title  text-flg">
                  {bread2}
                </a>
              </Link>
            </>
          ) : null}
          {breadcrumbActive ? (
            <>
              <span className="mx-3 text-gray-500 dark:text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <Link href={hrefActive}>
                <a className="text-blue-600 dark:text-blue-400 hover:underline  text-lg  font-Athiti !font-semibold">
                  {breadActive}
                </a>
              </Link>
            </>
          ) : null}
        </div>
      </div>
    </>
  )
}

export default Breadcrumb
