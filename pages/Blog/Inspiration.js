import BreadcrumbPage from "../../components/BreadcrumbPage"
import Layout from "../../components/Layout"
import {useState, useEffect} from "react"
import {SearchCourseProvider} from "../Category"
import BannerAds from "../../components/BannerAds"
import {
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  LineIcon,
  LineShareButton,
  LinkedinIcon,
  LivejournalIcon,
  TwitterIcon,
  WhatsappIcon,
  FacebookShareButton,
  FacebookShareCount,
  TwitterShareButton,
} from "react-share"
const BlogContent = () => {
   const shareUrl = window.location
   const title = "Adirek"
  const [view, setView] = useState()
  useEffect(() => {
    if (typeof window !== "undefined") {
      const inspiration = localStorage.getItem("@inspirationViewCountView")
      setView(inspiration)
    }
  }, [])
console.log(shareUrl)
  return (
    <SearchCourseProvider>
      <Layout>
        <BreadcrumbPage
          title="การสร้างแรงบันดาลใจในที่ทำงาน"
          bread1="บทความ"
          href1="/Blog"
          breadActive="การสร้างแรงบันดาลใจในที่ทำงาน"
          hrefActive=""
        />
        <section className="area-blog">
          <div className="container align-items-center">
            <div className="row ">
              <div className="blog-details-desc">
                <div className="blog-details-area">
                  <div className="author-area blog-post-content">
                    <ul>
                      <li className="admin">By Admin</li>
                      <li>22 มีนาคม 2022</li>
                      <li>
                        {" "}
                        <i className="fas fa-eye"></i> <span id="Pefection"></span> {view} view
                      </li>
                      <li>
                        <i className="fas fa-share-square  text-[#808080d9] text-[19px]"> </i>
                        <FacebookShareButton url={shareUrl} quote={title} className="">
                          <FacebookIcon size={20} round className="ml-2" />
                        </FacebookShareButton>
                        <TwitterShareButton url={shareUrl} quote={title} className="">
                          <TwitterIcon size={20} round className="ml-2" />
                        </TwitterShareButton>
                        <LineShareButton url={shareUrl} quote={title} className="">
                          <LineIcon size={20} round className="ml-2" />
                        </LineShareButton>
                      </li>
                    </ul>
                    <h2 className="text-center font-title text-f3xl">
                      การสร้างแรงบันดาลใจในที่ทำงาน
                    </h2>
                  </div>
                </div>
                <div className="article-image">
                  <img src="/assets/img/blog/inspiration.jpg" alt="image" className="w-100" />
                </div>
                <div className="article-content ">
                  <h2 className="font-title text-f3xl">การสร้างแรงบันดาลใจในที่ทำงาน</h2>
                  <div className="whitespace-pre-line px-2">
                    <p className="text-content-justify mt-10">
                      เราไม่อาจปฏิเสธได้ว่าในองค์กรหนึ่งนั้นต้องอาศัยความร่วมมือกันจากทีมงานอย่างมีประสิทธิภาพไม่ใช่เพียงตัวเราท่านั้น
                      ที่ต้องการแรงบันดาลใจเพื่อที่จะดึงความสามารถที่มีอยู่ออกมาได้อย่างเต็มที่คนรอบข้างตัวเราเองก็ต้องการสิ่งนั้น
                      เช่นเดียวกัน ซึ่งในการทำงานเป็นทีมแต่ละคนจะมีรูปแบบวิธีการทำงานที่แตกต่างกันไป
                      การให้ความสำคัญกับไสตล์การทำงานแต่ละคนและคุณภาพชีวิตของพวกเขา
                      จะช่วยให้ทีมงานสามารถแสดงศักยภาพได้อย่างเต็มที่ โดยหลักการใหญ่ ๆ
                      ที่สามารถนำไปประยุกต์ใช้กับทีมงานเพื่อส่งเสริมการทำงานของแต่ละบุคคลได้อย่างเท่าเทียมได้นั้นมีดังนี้ค่ะ
                    </p>
                    <ul style={{listStyleType: "decimal"}}>
                      <li>
                        <p className="lead text-content-justify mt-10">
                          สนับสนุนให้ทีมงานได้เรียนรู้สิ่งใหม่ๆ อย่างสม่ำเสมอ
                          แม้เราอาจรู้สึกว่าทักษะการเรียนรู้บางอย่างอาจฟังดูแล้วไม่ได้เกิดประโยชน์ต่อเนื้อหาของงานโดยตรง
                          แต่ช่วยส่งเสริมร่างกาย
                          บุคลิกภาพและทัศนคติรวมถึงหลักการพื้นฐานในชีวิตแก่บุคคลากรซึ่งจะทำให้พวกเขาเกิดแรงบันดาลใจใหม่ๆ
                          และสามารถพัฒนาทักษะในการทำงานได้ในลำดับต่อมาเช่น
                          การจัดกิจกรรมดูนกในธรรมชาติ คลาสโยคะ ฝึกสมาธิ ศิลปะบำบัด เป็นต้น
                          นอกจากนี้การอนุญาตและสนับสนุนให้ทีมงานใช้เวลาไปกับสิ่งใหม่ๆ
                          ที่พวกเขาสนใจจะช่วยให้ทีมงานรู้สึกว่าพวกเขาได้รับความเอาใจใส่ด้วยค่ะ
                        </p>
                      </li>
                      <li>
                        <p className="lead text-content-justify mt-10">
                          รับฟังปัญหาเพื่อแก้ไขปัญหา ไม่ใช่เพื่อตัดสินตัวตน
                          หากเพื่อนร่วมงานของเรากำลังขอความช่วยเหลือหรือขอความคิดเห็น
                          เราควรให้ความสำคัญกับการแก้ไขปัญหาตรงหน้าอย่างเปิดกว้างมากกว่าการฟังเพื่อตำหนิ
                          หรือว่ากล่าว หากมีวิธีการทำงานที่เห็นว่าต้องได้รับการแก้ไขหรือพัฒนาในอนาคต
                          ควรให้คำแนะนำหลังเสร็จงาน
                          การทำเช่นน้ีจะช่วยให้ทีมงานมุ่งเป้าหมายไปที่การพัฒนามากกว่าวิตกกังวลต่อความผิดพลาด
                          หรือกลัวการถูกตำหนิจนไม่กล้าลงมือทำ
                        </p>
                      </li>
                      <li>
                        <p className="lead text-content-justify mt-10">
                          ให้ความสำคัญกับความพยายามและแนวคิดใหม่ ๆ เสมอ
                          ความพยายามและความคิดสร้างสรรค์คือคุณสมบัติที่ทรงคุณค่าต่อองค์กรค่ะ
                          ดังน้้นเราควรชื่นชมกับความพยายามและแนวคิดใหม่ ๆ ของผู้อื่น
                          แม้ว่าสิ่งน้้นจะประสบความสำเร็จหรือไม่ก็ตาม
                          อย่าบีบบังคับให้ทุกคนมีแนวคิดแบบเดียวกันเพียงเพราะเข้าใจผิดว่านั่นคือการสร้างการมีส่วนร่วม
                          (engagement) หากต้องการสร้างการมีส่วนร่วมจริง ๆ
                          เราควรสนับสนุนให้ทุกคนกำหนดเป้าหมายและใช้แนวทางของตนเองเพื่อพิชิตเป้าหมายน้้นร่วมกันแทนค่ะ
                        </p>
                      </li>
                      <li>
                        <p className="lead text-content-justify mt-10">
                          สร้างพื้นที่ทำงานที่น่าอยู่ สบายตา
                          มีการศึกษาพบว่าการทำงานของพนักงานนั้นมีประสิทธิภาพมากขึ้นเมื่ออยู่ในสิ่งแวดล้อมที่เป็นมิตรและดูดี
                          แม้จะเป็นสิ่งนอกกายแต่สามารถรับรู้ได้ด้วยสายตา เสียงและการดมกลิ่น
                          เช่นการตกแต่งพื้นที่ให้มีสีสันอย่างสีฟ้า
                          สีเขียวและสีเหลืองช่วยสร้างสมาธิและความคิดสร้างสรรค์ได้
                          ซึ่งสามารถกล่าวได้ว่าการรับรู้ด้วยสายตาของพนักงานจะส่งผลต่อความคิดที่อยู่ภายในตัวพวกเขาได้นั่นเองค่ะ
                          ดังน้้นเราอาจอนุญาตให้พนักงานได้จัดโต๊ะทำงานตามแบบที่ตัวเองชอบ
                          เลือกเก้าอี้หามาเองหากพวกเขาสะดวกแบบน้ันเป็นต้น
                          นอกจากนี้ควรมีการสนับสนุนอุปกรณ์สำนักงานที่จำเป็นอย่างเต็มที่เพื่อให้ทีมงานได้มุ่งเป้าหมายไปที่ผลงานมากกว่าการต้องมากังวลกับอุปกรณ์ตลอดเวลานะคะ
                        </p>
                      </li>
                      <li>
                        <p className="lead text-content-justify mt-10">
                          ระวังการหมดไฟ (burn out)
                          การหาพนักงานใหม่น้ันสร้างต้นทุนที่สูงกว่าการจ้างพนักงานคนเดิมต่อเนื่อง
                          ดังน้ันการใส่ใจสุขภาพจิต
                          และคุณภาพชีวิตโดยรวมของพนักงานก็เป็นสิ่งจำเป็นอย่างมาก
                          ควรสนับสนุนให้พนักงานทำงานอย่างเต็มที่ในเวลาทำงานและกลับบ้านพักผ่อนเมื่อถึงเวลาเลิกงาน
                          ให้พวกเขาอยู่ล่วงเวลาเท่าที่จำเป็นจริงๆ เท่านั้น
                          นอกจากนี้ไม่ควรสร้างวัฒนธรรมที่การลาพักร้อนเป็นเรื่องผิด
                          เพราะการพักผ่อนจะทำให้มนุษย์สามารถกลับมามีหัวใจและสมองที่สดชื่นพร้อมที่จะทำงานได้อย่างเต็มที่มากกว่าเดิมค่ะ
                        </p>
                      </li>
                    </ul>

                    <p className="text-content-justify mt-10">
                      ที่ทำงานคือพื้นที่ที่เราใช้เวลาอยู่ที่นั่นเป็นส่วนใหญ่
                      การมีเพื่อนร่วมงานที่มีความสุข
                      ทำงานไดอ้ย่างมีประสิทธิภาพส่งผลให้เราสามารถทำงานได้เต็มศักยภาพและมีความสุขด้วยเช่นกัน
                      ดังนั้นขอให้ทุกคนเป็นส่วนหนึ่งของสังคมการทำงานที่ดีต่อจิตใจและร่างกายของคนรอบข้าง
                      เพื่อสร้างพื้นที่เชิงบวกให้กันและกันอยู่เสมอด้วยนะคะ{" "}
                    </p>
                    <p className="mt-10">
                      ขอบคุณ
                      <p>
                        {" "}
                        <strong>
                          <a href="https://www.entrepreneur.com/article/350720">
                            https://www.entrepreneur.com/article/340720
                          </a>
                        </strong>
                      </p>
                      <p>
                        {" "}
                        <strong>
                          <a href="https://www.entrepreneur.com/slideshow5306956">
                            https://www.entrepreneur.com/slideshow/306956
                          </a>
                        </strong>
                      </p>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="pb-12">
          <BannerAds />
        </div>
        {/* <section className="pd-bottom-80 ">
          <div className="container d-flex justify-content-center align-items-center bg-[#bcbcbc] w-full h-[170px]">
            <div className="">
              <h2>Banner Ads</h2>
            </div>
          </div>
        </section> */}
      </Layout>
    </SearchCourseProvider>
  )
}

export default BlogContent
