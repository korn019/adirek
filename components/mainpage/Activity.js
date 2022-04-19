const Activity = () => {
  return (
    <>
      <section className="pd-top-80 pd-bottom-140">
        <div className="container">
          <div className="row justify-content-center gx-0">
            <div className="col-lg-12">
              <div className="section-title  drop-shadow-xl">
                <h2 className="!font-Prompt font-black ">กิจกรรมของเรา</h2>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="activity-img align-items-center justify-content-center d-flex w-full h-full">
                <div className="content-overlay"></div>
                <img
                  src="static/img/activity/activity-1.jpg"
                  className=" w-full h-full"
                  alt="img"
                />
                <div className="content-details fadeIn-bottom">
                  <h3 className="content-title">หัวข้อ</h3>
                  <p className="content-text">description</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="activity-img align-items-center justify-content-center d-flex  w-full h-full">
                <div className="content-overlay"></div>
                <img src="static/img/activity/activity-2.jpg" className="w-full h-full" alt="img" />
                <div className="content-details fadeIn-bottom">
                  <h3 className="content-title">หัวข้อ</h3>
                  <p className="content-text">description</p>
                </div>
              </div>
            </div>
            <div className="col col-12 col-md-6 col-lg-4">
              <div className="activity-img align-items-center justify-content-center d-flex w-full h-full">
                <div className="content-overlay"></div>
                <img src="static/img/activity/activity-3.jpg" className="w-full h-full" alt="img" />
                <div className="content-details fadeIn-bottom">
                  <h3 className="content-title">หัวข้อ</h3>
                  <p className="content-text">description</p>
                </div>
              </div>
            </div>
            <div className="col col-md-6 col-lg-4">
              <div className="activity-img align-items-center justify-content-center d-flex w-full h-full">
                <div className="content-overlay"></div>
                <img src="static/img/activity/activity-4.jpg" className="w-full h-full" alt="img" />
                <div className="content-details fadeIn-bottom">
                  <h3 className="content-title">หัวข้อ</h3>
                  <p className="content-text">description</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="activity-img align-items-center justify-content-center d-flex w-full h-full">
                <div className="content-overlay"></div>
                <img src="static/img/activity/activity-5.jpg" className="w-full h-full" alt="img" />
                <div className="content-details fadeIn-bottom">
                  <h3 className="content-title">หัวข้อ</h3>
                  <p className="content-text">description</p>
                </div>
              </div>
            </div>
            <div className="col col-md-6 col-lg-4">
              <div className="activity-img align-items-center justify-content-center d-flex w-full h-full">
                <div className="content-overlay"></div>
                <div
                  className="container d-flex justify-content-center align-items-center"
                  style={{backgroundColor: "#bcbcbc", width: "100%", height: "300px"}}>
                  <div className="">
                    <h2>Banner Ads</h2>
                  </div>
                </div>
                <div className="content-details fadeIn-bottom">
                  <h3 className="content-title">หัวข้อ</h3>
                  <p className="content-text">description</p>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Activity
