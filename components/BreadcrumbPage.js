import Breadcrumb from "./Breadcrumb";

const BreadcrumbPage = ({title, bread1, bread2, breadActive, href1, href2, hrefActive,Search}) => {
  return (
    <div className="border-b border-[#e5f1fb]">
      <div className="container ">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1  h-full justify-center items-center  py-10 lg:py-12 ">
          <div className="md:col-span-3 lg:col-span-4 xl:col-span-5 2xl:col-span-4">
            <Breadcrumb
              breadActive={breadActive}
              hrefActive={hrefActive}
              bread1={bread1}
              bread2={bread2}
              href1={href1}
              href2={href2}
            />
          </div>
          <div className="text-Athiti bg-slate-400 md:col-span-3 lg:col-span-8 xl:col-span-7 2xl:col-span-8 h-44 flex items-center justify-center w-full mt-12 md:mt-6">
            <p>Banner Ads</p>
          </div>
        </div>
        <div className=""> 
          <h1 className="text-Athiti  mb-4  !font-semibold text-Athiti   !text-titleBlue">
            {Search ? (
              <span className="!text-[3rem] md:!text-[3rem]   drop-shadow-md">{title}</span>
            ) : (
              <span className="!text-[3rem] md:!text-[3rem]   drop-shadow-md">{title}</span>
            )}
          </h1>
        </div>
      </div>
    </div>
  )
}

export default BreadcrumbPage;