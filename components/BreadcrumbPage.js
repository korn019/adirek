import Breadcrumb from "./Breadcrumb";

const BreadcrumbPage = ({title}) => {
    return (
      <div className="border-b border-[#e5f1fb]">
        <div className="container ">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-8 xl:grid-cols-12 h-full justify-center items-center  py-10 lg:py-12 ">
            <div className="md:col-span-1 lg:col-span-2 xl:col-span-3">
              <Breadcrumb breadActive="บทความ" hrefActive="Blog" />
            </div>
            <div className="bg-slate-400 md:col-span-2 lg:col-span-6 xl:col-span-9 h-44 flex items-center justify-center mt-12 md:mt-6">
              <p>Banner Ads</p>
            </div>
          </div>
          <div className="">
            <h1 className="title-font text-f5xl sm:text-f4xl  mb-4 font-title  text-gray-900">
              <span className="title-word title-word-1">{title}</span>
            </h1>
          </div>
        </div>
      </div>
    )
}

export default BreadcrumbPage;