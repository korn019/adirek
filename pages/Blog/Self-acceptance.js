import BreadcrumbPage from "../../components/BreadcrumbPage"
import Layout from "../../components/Layout"
import {useState, useEffect} from "react"
import {SearchCourseProvider} from "../Category"
import BannerAds from "../../components/BannerAds"
import {
  FacebookIcon,
  LineIcon,
  LineShareButton,
  TwitterIcon,
  FacebookShareButton,
  TwitterShareButton,
} from "react-share"
const BlogContent = () => {
  const [url, setUrl] = useState("")
  const shareUrl = `${url}`
  const [view, setView] = useState()
  useEffect(() => {
    if (typeof window !== "undefined") {
      const Acceptance = localStorage.getItem("@AcceptanceCountView")
      setView(Acceptance)
      setUrl(window.location.href)
    }
  }, [])
  return (
    <SearchCourseProvider>
      <Layout>
        <BreadcrumbPage
          title="การยอมรับตนเอง self-acceptance"
          bread1="บทความ"
          href1="/Blog"
          breadActive="การยอมรับตนเอง self-acceptance"
          hrefActive=""
        />
        <section className="area-blog">
          <div className="container align-items-center">
            <div className="row ">
              <div className="blog-details-desc">
                <div className="blog-details-area">
                  <div className="author-area blog-post-content relative">
                    <ul>
                      <li className="admin">By Admin</li>
                      <li>22 มีนาคม 2022</li>
                      <li>
                        {" "}
                        <i className="fas fa-eye"></i> <span id="Pefection"></span> {view} view
                      </li>
                      <li>
                        {/* <i className="fas fa-share-square  text-[#808080d9] text-[19px]"> </i> */}
                        <FacebookShareButton url={shareUrl}  className="Demo__some-network__share-button">
                          <FacebookIcon size={20} round className="ml-2" />
                        </FacebookShareButton>
                        <TwitterShareButton url={shareUrl}  className="">
                          <TwitterIcon size={20} round className="ml-2" />
                        </TwitterShareButton>
                        <LineShareButton url={shareUrl}  className="">
                          <LineIcon size={20} round className="ml-2" />
                        </LineShareButton>
                      </li>
                    </ul>
                    <h2 className="text-center font-title text-f3xl">
                      การยอมรับตนเอง self-acceptance
                    </h2>
                  </div>
                </div>
                <div className="article-image">
                  <img src="/assets/img/blog/self-acceptance.jpg" alt="image" className="w-100" />
                </div>
                <div className="article-content ">
                  <h2 className="font-title text-f3xl">การยอมรับตนเอง self-acceptance</h2>
                  <div className="whitespace-pre-line px-2">
                    <p className="text-content-justify mt-10">
                      เราทราบกันดีว่ามนุษย์เป็นสิ่งมีชีวิตที่อยู่รวมกันเป็นสังคม
                      ดังนั้นความต้องการได้รับการยอมรับนั้นจึงเป็นสัญชาตญาณพื้นฐานของมนุษย์เพื่อให้สามารถดำรงชีพอยู่ได้
                      เราจึงต้องเรียนรู้ที่จะปรับตัวและคิดวิเคราะห์หาหนทางอยู่ร่วมกันอยู่เสมอมาตั้งแต่สมัยโบราณ
                      อย่างไรก็ตามความคิดเห็นของคนรอบข้างในยุคโบราณนั้นไม่หลั่งไหลเข้าสู่ตัวตนของเรามากมายเท่าปัจจุบัน
                      ดังนั้นนอกจากการได้รับการยอมรับจากบุคคลอื่นแล้ว
                    </p>

                    <p className="text-content-justify mt-10">
                      การยอมรับตนเองก็เป็นอีกประเด็นหนึ่งที่ถูกพูดถึงในสังคมสมัยใหม่
                      ท่ามกลางโลกที่เต็มไปด้วยเสียงวิพากษ์วิจารณ์ ความคิดเห็นต่อสิ่งต่าง ๆ
                      ถูกโพสต์ลงไปในสื่อออนไลน์
                      จึงไม่ง่ายที่เราจะห้ามตนเองไม่ให้นำความคิดเห็นเหล่านั้นมาตัดสินตนเองและพยายามเปลี่ยนแปลงตนเองให้เข้ากับกระแสของสังคมอยู่เสมอ
                      การยอมรับตนเองจึงเป็นเรื่องยาก เพราะเกิดการไม่พอใจในตนเองไม่ว่าในแง่ของร่างกาย
                      จิตใจ ความรู้ พฤติกรรม ฯลฯ หลายครั้งเราอาจตื่นมาแล้วรู้สึกว่าไม่อยากลุกไปทำงาน
                      หรือทำหน้าที่ของตนเอง อยากจะวิ่งหนีออกไปให้ไกล
                      แต่ก็ไม่มีที่ใดที่เราจะหนีตัวเราได้พ้น{" "}
                    </p>
                    <p className="text-content-justify mt-10">
                      เรามักเชื่อว่าเราต้องเป็นคนที่สมบูรณ์แบบ ไม่มีอะไรผิดพลาด
                      ถึงจะเป็นคนที่ได้รับการยอมรับ หรือจะสามารถยอมรับตนเองได้
                      แท้จริงแล้วเราควรยอมรับตนเองโดยปราศจากเงื่อนไขภายนอก
                      ซึ่งมีการศึกษาหลายชิ้นทั้งการศึกษาระยะสั้นและระยะยาว
                      พบว่าการรู้สึกว่าตนเองนั้นเป็นคนที่ได้ ‘โอเค’ มีผลที่ดีต่อสุขภาพจิต
                      ความสุขในการทำงาน และมีผลของการทำงานดี
                      มากกว่าคนที่รู้สึกว่าตนเองนั้นต้องถูกควบคุมและเปลี่ยนแปลงบางสิ่งบางอย่างถึงจะ
                      ‘โอเค’ ในประเด็นดังกล่าวไม่ได้อยู่ที่ว่าเป็นคนประเภทใด
                      แต่อยู่ที่ว่าเรามองตนเองอย่างไร
                      ที่เป็นเช่นนั้นคนที่รู้สึกว่าตนเองนั้นสามารถยอมรับตนเองได้จะมีเป้าหมายเป็นงานที่อยู่ตรงหน้า
                      กล้าที่จะลงมือทำ ไม่หลีกหนีที่จะเผชิญกับปัญหารวมถึงกล้าที่จะลองผิดลองถูก
                      โดยที่สิ่งที่ทำนั้นไม่ใช่เงื่อนไขที่จะตัดสินตัวตน
                      ซึ่งก็คือการยอมรับตนเองโดยปราศจากเงื่อนไขใด ๆ นั่นเองค่ะ
                    </p>
                    <p className="text-content-justify mt-10">
                      หลายคนเข้าใจผิดว่าการยอมรับตนเองโดยไม่มีเงื่อนไขนั้น จะทำให้เราหยุดพัฒนาตัวเอง
                      หรือไม่เรียนรู้สิ่งใหม่ ๆ จริง ๆ
                      แล้วในทางกลับกันการยอมรับตนเองจะทำให้เรากล้าออกไปลองทำสิ่งใหม่ ๆ มากขึ้น
                      และการรับรู้ว่าแม้เราจะทำสิ่งใดผิดพลาดหรืออยู่ในจุดที่ต่ำที่สุดของชีวิตก็ตาม
                      คุณค่าของเราจะไม่ลดน้อยลงไป ซึ่งจะนำไปสู่เราในรูปแบบที่ดีกว่าเดิม
                      มีความสุขมากกว่าเดิม
                    </p>
                    <ul>
                      <li>
                        <p className=" indent-5  mt-10 text-base leading-relaxed !text-grey-500   text-content-justify">
                          การยอมรับตัวเองโดยไม่มีเงื่อนไขสามารถฝึกฝนได้ในเบื้องต้นดังนี้ค่ะ
                        </p>
                      </li>
                      <ul className="list-disc">
                        <li>
                          <p className=" indent-5  mt-10 text-base leading-relaxed !text-grey-500   text-content-justify">
                            <strong>พูดคุยกับตนเองด้วยความเมตตา</strong>{" "}
                            แม้จะสวนทางกับความคิดที่กำลังตำหนิ หรือเรียกร้องให้เราเป็นคนที่ดีกว่านี้
                            แต่ความเมตตาต่อตนเองนั้นจะช่วยให้การตำหนิเหล่านั้นอ่อนกำลังลง
                            ตัวอย่างคำพูดที่เราควรพูดกับตัวเองให้มากขึ้น เช่น
                            ฉันได้รับอนุญาตให้ผิดพลาดได้เช่นเดียวกับมนุษย์คนอื่น ๆ , ไม่เป็นไร,
                            ฉันสมควรได้รับความสุข, ฉันทำดีที่สุดเท่าที่ตัวฉันในตอนนั้นจะทำได้แล้ว
                            เป็นต้น
                          </p>
                        </li>
                        <li>
                          <p className=" indent-5  mt-10 text-base leading-relaxed !text-grey-500   text-content-justify">
                            <strong>ระบุความคิดของตนเองให้ได้ </strong> เมื่อเกิดความรู้สึกไร้ค่า
                            ให้ใช้เวลาสงบใจสักครู่พยายามสังเกตความคิดตนเองว่ากำลังบอกเราว่าอะไร
                            จากนั้นให้แยกความคิดกับความรู้สึกออกจากกัน เช่น หากเราทำงานผิดพลาด
                            มักจะเกิดความคิดที่ว่า ฉันเป็นคนแย่ ฉันเป็นคนไม่ดี
                            ปะปนกับความรู้สึกเจ็บปวดและความรู้สึกผิด
                          </p>
                        </li>
                      </ul>
                    </ul>
                    <p className=" indent-5  mt-10 text-base leading-relaxed !text-grey-500  text-content-justify">
                      เมื่อเห็นความคิดและความรู้สึกแยกกันแล้ว
                      ให้เราทำความเข้าใจว่าความคิดนั้นไม่ใช่ข้อเท็จจริง(fact)
                      และความคิดบางอย่างนั้นเกินจำเป็นและไม่เกิดประโยชน์ต่อตัวเราและผู้อื่น
                      ในช่วงแรกเราอาจใช้วิธีจดบันทึกเพื่อช่วยให้เห็นภาพและจัดลำดับความคิดได้ดีมากขึ้นก็ได้
                      เมื่อเราจัดการความคิดที่ไม่มีความจำเป็นเหล่านั้นแล้ว ความรู้สึกเจ็บปวดจะค่อย ๆ
                      ถูกเยียวยาจนหายไป
                      นอกจากการจดบันทึกแล้วยังมีแบบฝึกหัดทางจิตวิทยาที่ช่วยให้เราสามารถฝึกความเมตตาต่อตนเองมากมายบนสื่อออนไลน์ซึ่งทุกคนสามารถเข้าถึงได้โดยไม่มีค่าใช้จ่ายอีกด้วยค่ะ
                    </p>
                    <p className=" indent-5  mt-10 text-base leading-relaxed !text-grey-500  text-content-justify">
                      การฝึกยอมรับตนเองเป็นกระบวนการที่ใช้ระยะเวลายาวนาน
                      แต่หากเราลองจินตนาการถึงวันที่เราตื่นขึ้นมาแล้วรู้สึกว่าการเป็นตัวเรานั้นก็ไม่ได้เลวร้ายอะไร
                      อีกทั้งยังมีความสุขที่ได้อยู่ในชีวิตและร่างกายนี้
                      ก็นับว่าเป็นสิ่งคุ้มค่าที่จะฝึกฝนในระยะยาวใช่ไหมคะ
                      ทั้งนี้เราควรระวังกับดักความคิดที่ว่า ‘ฉันไม่ดีพอเพราะยังไม่ยอมรับตนเอง’
                      เอาไว้ด้วย
                      หากเรากำลังรู้สึกว่าเราไม่ชอบและปฏิเสธตัวตนของเราจนไม่อยากอยู่ในชีวิตของเราอีกต่อไป
                      การปรึกษาผู้เชี่ยวชาญเพื่อขอความช่วยเหลือจะเป็นหนทางที่ดีที่สุดค่ะ
                    </p>
                    <p className="mt-10">
                      ขอบคุณ
                      <p>
                        {" "}
                        <strong>Ackerman, Courtney E. n.d.</strong>{" "}
                        <a href="https://positivepsychology.com">https://positivepsychology.com.</a>{" "}
                        Accessed March 15, 2022.{" "}
                        <a href="https://positivepsychology.com/self-acceptance/">
                          https://positivepsychology.com/self-acceptance/
                        </a>
                      </p>
                      <p>
                        {" "}
                        <strong>Frank W. Bond, and David Bunce</strong>. 2003. "The Role of
                        Acceptance and Job Control in Mental Health,Job Satisfaction, and Work
                        Performance." Journal of Applied Psychology 1057-1067.
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
