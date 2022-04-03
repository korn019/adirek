import { useState } from "react";
const InstructorDetail = ({e}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        className="row d-flex justify-content-center justify-content-md-between "
        style={{marginTop: -160}}>
        <div className="col-12 col-md-4 col-lg-6 d-flex justify-content-center justify-content-lg-start align-items-md-center">
          <div className="blog-post-content single-blog-post">
            <div className="card bg-light text-dark shadow">
              <div className="card-body">
                <div className="">
                  <img
                    src={e.รูปถ่าย == "" ? "/assets/img/user.png" : `/${e.รูปถ่าย}`}
                    alt="img"
                    className="object-scale-down w-[370px] h-[240px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-8 col-lg-6 mt-5 mt-md-0 ">
          <div
            className="d-lg-flex align-items-center "
            style={{
              backgroundColor: "#242424",
              overflow: "hidden",
              padding: "1.4rem",
              borderRadius: 10,
            }}>
            <div className="col-12 col-md-12 col-lg-7 text-center text-md-center text-lg-center">
              <div>
                <h3 className="title" style={{color: "white", fontSize: 42}}>
                  {e.ชื่อจริง}
                </h3>
                <h3 className="title" style={{color: "white", fontSize: 42}}>
                  {e.นามสกุล}
                </h3>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-5  border-md-left">
              <div className="text-center  text-md-center mt-3 space-y-1">
                <p className="sub-title-teacher text-[#f8f8f8] text-[16px]">
                  {" "}
                  <i className="fa fa-check-circle text-[aquamarine]" aria-hidden="true"></i>
                  Verified
                </p>
                <p className="sub-title-teacher  text-[#f8f8f8] text-[16px]">
                  {" "}
                  <i className="fa fa-check-circle text-[aquamarine]" aria-hidden="true"></i>
                  {e.ฉีดวัคซีนป้องกัน}
                </p>
                <ul className="social-area d-inline-block">
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-youtube "></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 mt-5 ">
         
          <div className="lg:px-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:space-x-3">
              <div className=" md:col-span-1">
                <h1 className="font-title text-f3xl text-[#cf9b3b]">คอร์สเรียน</h1>
              </div>
              <div className="bg-slate-700 rounded-lg  px-2  lg:col-span-1">
                <a href={`tel:${e.เบอร์โทร}`} className="flex items-center justify-between ">
                  <h1 className="font-title text-f3xl text-white">โทรหาผู้สอน</h1>
                  <i className="fa fa-phone text-[#cf9b3b] text-3xl"></i>
                </a>
              </div>
            </div>

            <div className="mt-5 space-y-2">
              <div className="grid grid-cols-3 ">
                <p className="line-clamp-3 col-span-2 font-body !text-2xl subtext">
                  1.{e.รายละเอียดคอร์สเรียน}
                </p>
                <h5 className="line-clamp-3 col-span-1 text-right font-body text-flg">
                  {parseFloat(e.ราคาคอร์สเรียน.replace(/,/g, ""))} บาท
                </h5>
              <button
                className="text-black font-bold uppercase text-sm px-2 py-1 text-left   rounded hover:border  ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(true)}>
                อ่านเพิ่มเติม
              </button>
              </div>
              {showModal ? (
                <>
                  <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                      {/*content*/}
                      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                          <h3 className="text-3xl font-semibold">{e.Category}</h3>
                          <button
                            className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={() => setShowModal(false)}>
                            <span className="bg-transparent text-red-500  h-6 w-6 text-3xl block outline-none focus:outline-none">
                              ×
                            </span>
                          </button>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                          <p className="my-4 text-slate-500 text-lg leading-relaxed">
                            {e.รายละเอียดคอร์สเรียน}
                          </p>
                        </div>
                        {/*footer*/}
                        <div className="bg-red-500 flex items-center justify-between p-6 border-t border-solid border-slate-200 rounded-b">
                          <div
                            className="text-black background-transparent  font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button">
                            <h1 className="font-title text-f3xl text-white">
                              {parseFloat(e.ราคาคอร์สเรียน.replace(/,/g, ""))} บาท
                            </h1>
                          </div>
                          <a href={`tel:${e.เบอร์โทร}`}>
                            <div
                              className="bg-emerald-500 text-white active:bg-emerald-600 font-title text-3xl uppercase px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button">
                              โทร
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
              ) : null}
            </div>
          </div>

          <div className="mt-6 md:mt-0 lg:px-5">
            {" "}
            <div className="space-y-1">
              <h1 className="font-title text-f3xl text-[#cf9b3b]">หมวดหมู่:</h1>
              <div className="align-items-center justify-content-center bg-[#eaf0f6] border-b-2 border-gray-200 rounded-lg p-2">
                <div className="ml-1 title text-black text-[32px]">
                  { e.ช่องทางการสอน == "" ? "ไม่พบข้อมูล" : e.ช่องทางการสอน}{" "}
                </div>
              </div>
              <div className="align-items-center justify-content-center bg-[#eaf0f6] border-b-2 border-gray-200 rounded-lg p-2">
                <div className="ml-1 title text-black text-[32px]">
                  { e.Category == "" ? "ไม่พบข้อมูล" : e.Category}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 items-center justify-between mt-5">
              <div>
                <h1 className="font-title text-f3xl text-[#cf9b3b]">Rating</h1>
              </div>
              <div className="text-right">
                <span>
                  <i className="fa fa-star text-[#f2994a] mr-1"></i>
                </span>
                <span>
                  <i className="fa fa-star text-[#f2994a] mr-1"></i>
                </span>
                <span>
                  <i className="fa fa-star text-[#f2994a] mr-1"></i>
                </span>
                <span>
                  <i className="fa fa-star text-[#f2994a] mr-1"></i>
                </span>
                <span>
                  <i className="fa fa-star text-[#f2994a] mr-1"></i>
                </span>
              </div>
              <div>
                <h1 className="font-title text-fxl">นักเรียนทั้งหมด</h1>
              </div>

              <div className="text-right">
                <h1 className="font-title text-fxl">2000 คน</h1>
              </div>
              <div>
                <h1 className="font-title text-fxl">ขายได้</h1>
              </div>
              <div className="text-right">
                <h1 className="font-title text-fxl">200 ครั้ง</h1>
              </div>
            </div>
          </div>
          <div className="lg:px-5 mt-6">
            {" "}
            <h1 className="title text-[#cf9b3b]">แนะนำผู้สอน</h1>
            <p className=" subtext ">
              {e.ประวัติการสอน == '' ? "ไม่พบข้อมูล" : e.ประวัติการสอน}
            </p>
          </div>
          <div className="lg:px-5 mt-6">
            {" "}
            <h1 className="title text-[#cf9b3b]">ประวัติการศึกษา</h1>
            <p className=" subtext">
              { e.ประวัติการศึกษา == "" ? "ไม่พบข้อมูล" : e.ประวัติการศึกษา}
            </p>
          </div>
          <div className="lg:px-5 mt-6">
            {" "}
            <h1 className="title text-[#cf9b3b]">ติดต่อผู้สอน</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <p className="lead font-bold">phone:</p>
              <p className="line-clamp-3 col-span-1 text-left !indent-0 subtext">{e.เบอร์โทร}</p>
              <p className="lead font-bold">Address:</p>
              <p className="line-clamp-3 col-span-1 text-left !indent-0 subtext">
                { e.กรณีเรียนนอกสถานที่ == ""
                  ? "ไม่พบข้อมูล"
                  : e.กรณีเรียนนอกสถานที่}
              </p>
              <p className="lead font-bold">Email:</p>
              <p className="line-clamp-3 col-span-1 text-left !indent-0 subtext">
                adirek@hotmail.com
              </p>
            </div>
          </div>
          <div className="lg:px-5 mt-6">
            {" "}
            <h1 className="title text-[#cf9b3b]">Review</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <ol className="list-decimal" style={{color: "#808191"}}>
                <li className="subtext">สอนเข้าใจง่าย</li>
                <li className="subtext">เนื้อหากระชับ ชัดเจน</li>
                <li className="subtext">คุณครูน่ารัก</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="row d-flex mt-5">
        <div className="col-md-12 col-lg-6">
          <div className="align-items-center justify-content-center ">
            <div className=" shadow-sm d-flex align-items-center justify-content-between ">
              <h5 className="line-clamp-3 w-60 ">{e.รายละเอียดคอร์สเรียน}</h5>
              <p className="lead">{e.ราคาคอร์สเรียน}</p>
            </div>
          </div>
        </div>

        <div className="col-md-12  col-lg-6 mt-md-5 mt-lg-0">
          <div className="col-12  col-md-12 col-lg-12 mt-2 mt-md-0">
            <div className=" align-items-center ">
              <div className="">
                <h1 className="ml-1 title text-[#cf9b3b] text-[42px]">หมวดหมู่: </h1>
                <div
                  className="align-items-center justify-content-center "
                  style={{padding: 5, background: "#eaf0f6", borderRadius: 10, margin: 2}}>
                  <div
                    className="ml-1 title"
                    style={{color: "black", fontWeight: 500, fontSize: 32}}>
                    {" "}
                    {typeof e.ช่องทางการสอน == "undefined" ? "ไม่พบข้อมูล" : e.ช่องทางการสอน}{" "}
                  </div>
                </div>
                <div
                  className="align-items-center justify-content-center "
                  style={{padding: 5, backgroundColor: "#eaf0f6", borderRadius: 10, margin: 2}}>
                  <div
                    className="ml-1 title"
                    style={{color: "black", fontWeight: 500, fontSize: 32}}>
                    {" "}
                    {typeof e.Category == "undefined" ? "ไม่พบข้อมูล" : e.Category}
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between my-8 mx-0">
                <h2 className="title" style={{color: "black"}}>
                  Rating
                </h2>
                <div className="">
                  <span>
                    <i className="fa fa-star text-[#f2994a] mr-1"></i>
                  </span>
                  <span>
                    <i className="fa fa-star text-[#f2994a] mr-1"></i>
                  </span>
                  <span>
                    <i className="fa fa-star text-[#f2994a] mr-1"></i>
                  </span>
                  <span>
                    <i className="fa fa-star text-[#f2994a] mr-1"></i>
                  </span>
                  <span>
                    <i className="fa fa-star text-[#f2994a] mr-1"></i>
                  </span>
                </div>
              </div>
              <div className="">
                <div className="d-flex align-items-center justify-content-between">
                  <h4
                    className="line-watch title"
                    style={{color: "black", fontWeight: 400, fontSize: 32}}>
                    นักเรียนทั้งหมด
                  </h4>
                  <h4 className="title" style={{color: "black", fontWeight: 400, fontSize: 32}}>
                    2000 ครั้ง
                  </h4>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <h4
                    className="line title"
                    style={{color: "black", fontWeight: 400, fontSize: 32}}>
                    ขายได้{" "}
                  </h4>
                  <h4 className="title" style={{color: "black", fontWeight: 200, fontSize: 32}}>
                    1 ครั้ง
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-6">
          <div className="col-11">
            <h1 className="title text-[#cf9b3b]">แนะนำผู้สอน</h1>
            <p className="lead ">
              {typeof e.ประวัติการสอน == "undefined" ? "ไม่พบข้อมูล" : e.ประวัติการสอน}
            </p>
          </div>
        </div>
        <div className="col-md-6 mt-5 mt-md-0">
          <div className="col-12">
            <h1 className="title text-[#cf9b3b]">การศึกษา</h1>
            <ul style={{color: "#808191"}}>
              <li>
                <p className=" lead">
                  {typeof e.ประวัติการศึกษา == "undefined" ? "ไม่พบข้อมูล" : e.ประวัติการศึกษา}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-6">
          <div className="col-11">
            <h1 className="title text-[#cf9b3b]">ติดต่อผู้สอน</h1>
            <div className="d-xl-flex justify-content-between">
              <p className="lead" style={{fontWeight: 600}}>
                phone:
              </p>
              <p className="lead">
                {typeof e.เบอร์โทร == "undefined" ? "ไม่พบข้อมูล" : e.เบอร์โทร}
              </p>
            </div>
            <div className="d-xl-flex justify-content-between">
              <p className="lead" style={{fontWeight: 600}}>
                Address:
              </p>
              <p className="lead">555/205 Nirvana Park,Bangkok</p>
            </div>
            <div className="d-xl-flex justify-content-between">
              <p className=" lead" style={{fontWeight: 600}}>
                Email:
              </p>
              <p className="lead">adirek@hotmail.com</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mt-md-0 mt-5">
          <div className="col-12">
            <h1 className="title text-[#cf9b3b]">Review</h1>
            <ul style={{color: "#808191"}}>
              <li className="sub-title-teacher">
                <p className="lead">สอนเข้าใจง่าย</p>
              </li>
              <li className="sub-title-teacher">
                <p className="lead">เนื้อหากระชับ ชัดเจน</p>
              </li>
              <li className="sub-title-teacher">
                <p className="lead">คุณครูน่ารัก</p>
              </li>
            </ul>
          </div>
        </div>
      </div> */}
    </>
  )
}

export default InstructorDetail
