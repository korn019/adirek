import BreadcrumbPage from "../../components/BreadcrumbPage";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { SearchCourseProvider } from "../Category";
import BannerAds from "../../components/BannerAds";
import {
  FacebookIcon,
  LineIcon,
  LineShareButton,
  TwitterIcon,
  FacebookShareButton,
  TwitterShareButton,
} from "react-share";
const Perfectionist = () => {
  const [url, setUrl] = useState("");
  const shareUrl = `${url}`;
  const [view, setView] = useState();
  useEffect(() => {
    if (typeof window !== "undefined") {
      const perfection = localStorage.getItem("@PerfectionistCountView");
      setView(perfection);
      setUrl(window.location.href)
    }
  }, []);

  return (
    <SearchCourseProvider>
      <Layout>
        <BreadcrumbPage
          title="Perfectionist สาเหตุหนึ่งของซึมเศร้า"
          bread1="บทความ"
          href1="/Blog"
          breadActive=" Perfectionist สาเหตุหนึ่งของซึมเศร้า"
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
                        <FacebookShareButton
                          url={shareUrl}
                          className="Demo__some-network__share-button">
                          <FacebookIcon size={20} round className="ml-2" />
                        </FacebookShareButton>
                        <TwitterShareButton url={shareUrl} className="">
                          <TwitterIcon size={20} round className="ml-2" />
                        </TwitterShareButton>
                        <LineShareButton url={shareUrl} className="">
                          <LineIcon size={20} round className="ml-2" />
                        </LineShareButton>
                      </li>
                    </ul>
                    <h2 className="text-center font-title text-f3xl">
                      Perfectionist สาเหตุหนึ่งของซึมเศร้า
                    </h2>
                  </div>
                </div>
                <div className="article-image">
                  <img src="/assets/img/blog/perfectionist.jpeg" alt="image" className="w-100" />
                </div>
                <div className="article-content ">
                  <h2 className="font-title text-f3xl">Perfectionist สาเหตุหนึ่งของซึมเศร้า</h2>
                  <div className="whitespace-pre-line px-2">
                    <p className="text-content-justify mt-10">
                      เมื่อพูดถึงการที่ใครสักคนหนึ่งรักในความสมบูรณ์แบบ
                      แน่นอนว่าสิ่งที่ผู้ฟังจินตนาการถึงมักเป็นผลงานที่ยอดเยี่ยมไร้ที่ติใช่ไหมคะ
                      แต่หากการหลงไหลในความสมบูรณ์แบบกลับทำให้เราเจ็บปวดในระยะยาวแล้วแบบนั้นจะยังเรียกว่าไร้ที่ติได้อยู่หรือเปล่า?&nbsp;
                    </p>

                    <p className="text-content-justify mt-10">
                      หลังจากทั่วโลกเกิดการปฏิวัติทางอุตสาหกรรม
                      สังคมโลกก้าวเข้าสู่เศรษฐกิจแบบทุนนิยมมนุษย์ต้องทำงานเพื่อแลกกับเงินแทนการผลิตเพื่อบริโภคการชี้วัดความสามารถในการทำงานจึงเป็นการชี้วัดคุณค่าของแรงงานต่อกระบวนการผลิตเพื่อผลกำไรและสุดท้ายกลายเป็นการชี้วัดคุณค่าและที่ยืนของเราในสังคมไปด้วย
                    </p>
                    <p className="text-content-justify mt-10">
                      การพยายามตอบสนองความคาดหวังของมนุษย์ที่มีความต้องการไม่สิ้นสุดนั้นแทบจะเป็นไปไม่ได้เลย
                      จากการวิจัยในช่วงศตวรรษที่ 21 หลายชิ้นพบว่าการเป็นคนที่ยึดติดกับความสมบูรณ์แบบ
                      (perfectionist) ส่งผลเสียต่อสุขภาพจิตรวมถึงคุณภาพชีวิตอีกด้วย
                      นอกจากนี้คนที่คลั่งไคล้ความสมบูรณ์แบบนั้นมีแนวโน้มที่จะตั้งเป้าหมายที่เกินความเป็นจริงหรือตั้งเป้าหมายที่สูงจนเกินกว่าจะทำได้อีกทั้งยังชอบตัดสินตัวเองเพราะคอยแต่กังวลว่าตัวเองได้ทำสิ่งต่าง
                      ๆ ได้สมบูรณ์แบบแล้วหรือยัง
                      คนที่ต้องการความสมบูรณ์แบบมักจะหวาดกลัวความผิดพลาดจนนำไปสู่ความวิตกกังวล
                      แม้จะได้รับคำชื่นชมสักเพียงใดก็จะหมกมุ่นอยู่กับความผิดพลาดเล็ก ๆ นั้น
                      คอยเฝ้าแต่ถามตัวเองว่าถ้าทำแบบนั้นน่าจะดีกว่า หรือ เราไม่ควรทำแบบนั้นเลย
                      พวกเขาจะคุ้นเคยคือความรู้สึกผิด อับอาย ด้อยคุณค่า ไร้ความสามารถ
                      กล่าวโทษตัวเองในความผิดพลาดเสมอ
                      ซึ่งพฤติกรรมเช่นนี้จะเกิดขึ้นทุกครั้งที่ได้ทำงานซึ่งอาจนำไปสู่ภาวะซึมเศร้าได้
                    </p>
                    <p className="text-content-justify mt-10">
                      อย่างไรก็ตามการวิตกกังวลว่าสิ่งที่ตนเองได้ทำไปนั้นมีข้อบกพร่องหรือไม่หากเกิดขึ้นอย่างเหมาะสมจะช่วยให้เราทำงานได้รอบคอบมากขึ้น
                      แต่หากมากเกินไปก็จะส่งผลต่อสมาธิและการนอนหลับ
                      รวมถึงส่งกระทบต่อผลการทำงานเนื่องจากไม่สามารถปรับตัวให้ทำงานภายใต้สภาวะที่กดดันซึ่งเสี่ยงต่อความผิดพลาดหรือถูกตำหนิได้นั่นเองค่ะ
                    </p>
                    <ul>
                      <li>
                        <p className=" indent-5  mt-10 text-base leading-relaxed !text-grey-500   text-content-justify">
                          หากเรากำลังเผชิญกับความรู้สึกนี้อยู่บ่อย ๆ
                          ขอให้เริ่มลองฝึกเมตตาต่อตนเองด้วยวิธีเหล่านี้ดูนะคะ
                        </p>
                      </li>
                      <ul className="list-disc">
                        <li>
                          <p className=" indent-5  mt-10 text-base leading-relaxed !text-grey-500   text-content-justify">
                            หลังจากทั่วโลกเกิดการปฏิวัติทางอุตสาหกรรม
                            สังคมโลกก้าวเข้าสู่เศรษฐกิจแบบทุนนิยม
                            มนุษย์ต้องทำงานเพื่อแลกกับเงินแทนการผลิตเพื่อบริโภค
                            การชี้วัดความสามารถในการทำงานจึงเป็นการชี้วัดคุณค่าของแรงงานต่อกระบวนการผลิตเพื่อผลกำไรและสุดท้ายกลายเป็นการชี้วัดคุณค่าและที่ยืนของเราในสังคมไปด้วย
                          </p>
                        </li>
                        <li>
                          <p className=" indent-5  mt-10 text-base leading-relaxed !text-grey-500   text-content-justify">
                            สร้างสิ่งแวดล้อมที่เอื้อต่อการเติบโตให้แก่ตนเองและผู้อื่น
                            แทนที่จะใช้การลงโทษหรือตำหนิเมื่อเกิดความผิดพลาดจากตนเองหรือผู้อื่น
                            เรามุ่งเป้าไปที่การแก้ไขและพัฒนา
                            นอกจากนี้เราควรเรียนรู้ที่จะปล่อยสิ่งที่ไม่สามารถควบคุมได้ไปเพราะเราได้ทำในส่วนที่เราทำได้อย่างเต็มที่แล้ว{" "}
                          </p>
                        </li>
                        <li>
                          <p className=" indent-5  mt-10 text-base leading-relaxed !text-grey-500   text-content-justify">
                            มีงานวิจัยชี้ว่าการฝึกทำสมาธิ เจริญสติ (mindfulness) ช่วยให้เห็นสิ่งต่าง
                            ๆ ตามความเป็นจริงมากขึ้น
                            ช่วยให้เราสามารถตั้งเป้าหมายที่สมเหตุสมผลและไม่ขยายความผิดพลาดให้ใหญ่โตจนเกินความเป็นจริง
                            และช่วยทำให้จิตใจสงบ ช่วยให้นอนหลับได้ดีอีกด้วยค่ะ
                          </p>
                        </li>
                        <li>
                          <p className=" indent-5  mt-10 text-base leading-relaxed !text-grey-500  text-content-justify">
                            ให้ตระหนักไว้เสมอว่าความคิดในหัวของเรา ไม่ใช่ความจริง
                            สิ่งที่เกิดขึ้นจริงกับความคิดของเรานั้นไม่ใช่เรื่องเดียวกัน
                            ดังนั้นการตระหนักรู้ว่าเสียงวิพากษ์วิจารณ์ที่เกิดขึ้นในหัวของเราไม่ใช่ตัวตัดสินคุณค่าของเรา
                          </p>
                        </li>
                      </ul>
                      <p className=" indent-5  mt-10 text-base leading-relaxed !text-grey-500  text-content-justify">
                        อย่างที่กล่าวไปข้างต้นว่าความคาดหวังที่จะทำบางสิ่งให้ออกมาดีที่สุดนั้นคือสิ่งที่มีประโยชน์
                        สุดท้ายแล้วสิ่งที่เราทำนั้นจะดีพอหรือไม่ย่อมไม่สามารถทำให้สมบูรณ์แบบได้ในสายตาของทุกคน
                        และนั่นคือสวยงามของมุมมองที่มีความแตกต่างหลากหลาย
                        ขอให้ทุกคนเรียนรู้ที่จะรักและอยู่กับความไม่สมบูรณ์แบบของตัวเองได้อย่างเป็นสุขนะคะ
                      </p>
                    </ul>
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
};

export default Perfectionist;
