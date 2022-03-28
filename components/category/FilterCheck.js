import { useEffect } from "react"

const filterCheck = () => {
    // useEffect(() => {
    //      (function ($) {
    //    $.Thailand({
    //      database: "./jquery.Thailand.js/database/db.json",

    //      $district: $('#place [name="district"]'),
    //      $amphoe: $('#place [name="amphoe"]'),
    //      $province: $('#place [name="province"]'),
    //      // $zipcode: $('#place [name="zipcode"]'),
    //      onDataFill: function (data) {
    //        console.info("Data Filled", data)
    //      },
    //      onLoad: function () {
    //        $("#loader, .place").toggle()
    //      },
    //    })

    //    $('#place [name="district"]').change(function () {
    //      console.log("ตำบล", this.value)
    //    })
    //    $('#place [name="amphoe"]').change(function () {
    //      console.log("อำเภอ", this.value)
    //    })
    //    $('#place [name="province"]').change(function () {
    //      console.log("จังหวัด", this.value)
    //    })
    // })(jQuery)
    

    // }, [])
    
    return (
        <>
            <div class="col-lg-3">
                    <div class="dmne-sidebar">
                        <div class="widget widget-select-inner dropdown-filter">
                            <h4 class="widget-title ">หลักสูตร</h4>
                            <ul>
                                <li>
                                    <div class="single-form-check form-check">
                                        <input class="form-check-input" type="checkbox" value="All"
                                            id="flexCheckDefault1"/>
                                        <label class="form-check-label" for="flexCheckDefault1">
                                            ทั้งหมด
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div class="single-form-check form-check">
                                        <input class="form-check-input" type="checkbox" value="UI UX"
                                            id="flexCheckDefault2"/>
                                        <label class="form-check-label" for="flexCheckDefault2">
                                            UI &amp; UX
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div class="single-form-check form-check">
                                        <input class="form-check-input" type="checkbox" value="Web Design"
                                            id="flexCheckDefault3"/>
                                        <label class="form-check-label" for="flexCheckDefault3">
                                            Web Design
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div class="single-form-check form-check">
                                        <input class="form-check-input" type="checkbox"
                                            value="Graphic Design & Illustration" id="flexCheckDefault4"/>
                                        <label class="form-check-label" for="flexCheckDefault4">
                                            Graphic Design & Illustration
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div class="single-form-check form-check">
                                        <input class="form-check-input" type="checkbox" value="Design Tools"
                                            id="flexCheckDefault5"/>
                                        <label class="form-check-label" for="flexCheckDefault5">
                                            Design Tools
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div class="single-form-check form-check">
                                        <input class="form-check-input" type="checkbox" value="Game Design"
                                            id="flexCheckDefault6"/>
                                        <label class="form-check-label" for="flexCheckDefault6">
                                            Game Design
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div class="single-form-check form-check">
                                        <input class="form-check-input" type="checkbox" value="3D & Animation"
                                            id="flexCheckDefault7"/>
                                        <label class="form-check-label" for="flexCheckDefault7">
                                            3D & Animation
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div class="single-form-check form-check">
                                        <input class="form-check-input" type="checkbox" value="Fashion Design"
                                            id="flexCheckDefault8"/>
                                        <label class="form-check-label" for="flexCheckDefault8">
                                            Fashion Design
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div class="single-form-check form-check">
                                        <input class="form-check-input" type="checkbox" value="Architectural Design"
                                            id="flexCheckDefault9"/>
                                        <label class="form-check-label" for="flexCheckDefault9">
                                            Architectural Design
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div class="single-form-check form-check">
                                        <input class="form-check-input" type="checkbox" value="Interior Design"
                                            id="flexCheckDefault10"/>
                                        <label class="form-check-label" for="flexCheckDefault10">
                                            Interior Design
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div class="single-form-check form-check">
                                        <input class="form-check-input" type="checkbox" value="Other Design"
                                            id="flexCheckDefault11"/>
                                        <label class="form-check-label" for="flexCheckDefault11">
                                            Other Design
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div class="single-form-check form-check">
                                        <input class="form-check-input" type="checkbox" value="คณิตศาสตร์"
                                            id="flexCheckDefault12"/>
                                        <label class="form-check-label" for="flexCheckDefault12">
                                            คณิตศาสตร์
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div class="single-form-check form-check">
                                        <input class="form-check-input" type="checkbox" value="ภาษา"
                                            id="flexCheckDefault13"/>
                                        <label class="form-check-label" for="flexCheckDefault13">
                                            ภาษา
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div class="single-form-check form-check">
                                        <input class="form-check-input" type="checkbox" value="ทำอาหารและขนม"
                                            id="flexCheckDefault14"/>
                                        <label class="form-check-label" for="flexCheckDefault14">
                                            ทำอาหารและขนม
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div class="single-form-check form-check">
                                        <input class="form-check-input" type="checkbox" value="แต่งหน้า"
                                            id="flexCheckDefault15"/>
                                        <label class="form-check-label" for="flexCheckDefault15">
                                            แต่งหน้า
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div class="single-form-check form-check">
                                        <input class="form-check-input" type="checkbox" value="ถ่ายรูปและแต่งรูป"
                                            id="flexCheckDefault16"/>
                                        <label class="form-check-label" for="flexCheckDefault16">
                                            ถ่ายรูปและแต่งรูป
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div class="single-form-check form-check">
                                        <input class="form-check-input" type="checkbox" value="บุคลิกภาพ"
                                            id="flexCheckDefault17"/>
                                        <label class="form-check-label" for="flexCheckDefault17">
                                            บุคลิกภาพ
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div class="single-form-check form-check">
                                        <input class="form-check-input" type="checkbox" value="การพูด"
                                            id="flexCheckDefault18"/>
                                        <label class="form-check-label" for="flexCheckDefault18">
                                            การพูด
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div class="single-form-check form-check">
                                        <input class="form-check-input" type="checkbox" value="ร้องเพลงและการแสดง"
                                            id="flexCheckDefault19"/>
                                        <label class="form-check-label" for="flexCheckDefault19">
                                            ร้องเพลงและการแสดง
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div class="single-form-check form-check">
                                        <input class="form-check-input" type="checkbox" value="งานฝีมือ"
                                            id="flexCheckDefault20"/>
                                        <label class="form-check-label" for="flexCheckDefault20">
                                            งานฝีมือ
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div class="single-form-check form-check">
                                        <input class="form-check-input" type="checkbox" value="กีฬา"
                                            id="flexCheckDefault21"/>
                                        <label class="form-check-label" for="flexCheckDefault21">
                                            กีฬา
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div class="single-form-check form-check">
                                        <input class="form-check-input" type="checkbox" value="ดนตรี"
                                            id="flexCheckDefault22"/>
                                        <label class="form-check-label" for="flexCheckDefault22">
                                            ดนตรี
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div class="single-form-check form-check">
                                        <input class="form-check-input" type="checkbox" value="จัดดอกไม้และจัดสวนถาด"
                                            id="flexCheckDefault23"/>
                                        <label class="form-check-label" for="flexCheckDefault23">
                                            จัดดอกไม้และจัดสวนถาด
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div class="single-form-check form-check">
                                        <input class="form-check-input" type="checkbox" value="วาดรูป"
                                            id="flexCheckDefault24"/>
                                        <label class="form-check-label" for="flexCheckDefault24">
                                            วาดรูป
                                        </label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        {/* <!-- <div class="widget widget-select-inner">
                            <h4 class="widget-title">ระดับ</h4>
                            <ul>
                                <li>
                                    <div class="single-form-check form-check">
                                        <input class="form-check-input" type="checkbox" value="เริ่มต้น"
                                            id="flexCheckDefault25"/>
                                        <label class="form-check-label" for="flexCheckDefault25">
                                            เริ่มต้น
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div class="single-form-check form-check">
                                        <input class="form-check-input" type="checkbox" value="ระดับกลาง"
                                            id="flexCheckDefault26"/>
                                        <label class="form-check-label" for="flexCheckDefault26">
                                            ระดับกลาง
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div class="single-form-check form-check">
                                        <input class="form-check-input" type="checkbox" value="ระดับผู้เชี่ยวชาญ"
                                            id="flexCheckDefault27"/>
                                        <label class="form-check-label" for="flexCheckDefault27">
                                            ระดับผู้เชี่ยวชาญ
                                        </label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="widget widget-select-inner">
                            <h4 class="widget-title">Rating</h4>
                            <ul>
                                <li>
                                    <div class="single-form-check form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault27"/>
                                        <label class="form-check-label" for="flexCheckDefault27">
                                        <div class="user-rating">
                                            <span>
                                                <i class="fa fa-star"></i> 
                                                <i class="fa fa-star"></i> 
                                                <i class="fa fa-star"></i> 
                                                <i class="fa fa-star"></i> 
                                                <i class="fa fa-star"></i> 
                                          </span>
                                            5.0
                                        </div>
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div class="single-form-check form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault27"/>
                                        <label class="form-check-label" for="flexCheckDefault28">
                                        <div class="user-rating">
                                            <span>
                                                <i class="fa fa-star"></i> 
                                                <i class="fa fa-star"></i> 
                                                <i class="fa fa-star"></i> 
                                                <i class="fa fa-star"></i> 
                                          </span>
                                            4.0
                                        </div>
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div class="single-form-check form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault27"/>
                                        <label class="form-check-label" for="flexCheckDefault29">
                                        <div class="user-rating">
                                            <span>
                                                <i class="fa fa-star"></i> 
                                                <i class="fa fa-star"></i> 
                                                <i class="fa fa-star"></i> 
                                          </span>
                                            3.0
                                        </div>
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div class="single-form-check form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault27"/>
                                        <label class="form-check-label" for="flexCheckDefault30">
                                        <div class="user-rating">
                                            <span>
                                                <i class="fa fa-star"></i> 
                                                <i class="fa fa-star"></i> 
                                          </span>
                                            2.0
                                        </div>
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div class="single-form-check form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault27"/>
                                        <label class="form-check-label" for="flexCheckDefault31">
                                        <div class="user-rating">
                                            <span>
                                                <i class="fa fa-star"></i> 
                                          </span>
                                            1.0
                                        </div>
                                        </label>
                                    </div>
                                </li>
                            </ul>
                        </div> --> */}
                        <div class="widget widget-select-inner">
                            <h4 class="widget-title">ราคา</h4>
                            <ul>
                                <li>
                                    <div class="single-form-check form-check">
                                        <input class="form-check-input" type="checkbox" value="299-500"
                                            id="flexCheckDefault33"/>
                                        <label class="form-check-label" for="flexCheckDefault33">
                                            299-500 บาท
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div class="single-form-check form-check">
                                        <input class="form-check-input" type="checkbox" value="501-1000"
                                            id="flexCheckDefault34"/>
                                        <label class="form-check-label" for="flexCheckDefault34">
                                            501-1000 บาท
                                        </label>
                                    </div>
                                    <div class="single-form-check form-check">
                                        <input class="form-check-input" type="checkbox" value="1001-3000"
                                            id="flexCheckDefault35"/>
                                        <label class="form-check-label" for="flexCheckDefault35">
                                            1001-3000 บาท
                                        </label>
                                    </div>
                                    <div class="single-form-check form-check">
                                        <input class="form-check-input" type="checkbox" value="3001-5000"
                                            id="flexCheckDefault36"/>
                                        <label class="form-check-label" for="flexCheckDefault36">
                                            3001-5000 บาท
                                        </label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="widget widget-select-inner">
                            <h4 class="widget-title">สถานที่</h4>
                            <div id="loader">
                                <div uk-spinner></div> รอสักครู่ กำลังโหลดฐานข้อมูล...
                            </div>
                            <form id="place" class="place" style={{display:'none'}} autocomplete="off">
                                <div class="single-form-place">
                                    <label class="form-check-label">จังหวัด</label>
                                    <input name="province" class="uk-input uk-width-1-1" type="text"/>
                                </div>
                                <div class="single-form-place">
                                    <label class="form-check-label">ตำบล / แขวง</label>
                                    <input name="district" class="uk-input uk-width-1-1" type="text"/>
                                </div>
                                <div class="single-form-place">
                                    <label class="form-check-label">อำเภอ / เขต</label>
                                    <input name="amphoe" class="uk-input uk-width-1-1" type="text"/>
                                </div>
                            </form>
                        </div>
                        <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 widget widget-select-inner">
                            <section class="justify-content-start align-items-start">
                                <div class=" d-flex justify-content-center align-items-center w-full md:w-[100%] xl:w-[70%] h-[200px] md:h-[400px] bg-[#bcbcbc]">
                                    <div class="">
                                        <h2>Banner Ads</h2>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
        </>
    );
}

export default filterCheck;