import Head from "next/head"
import "swiper/swiper-bundle.min.css"
import "swiper/swiper.min.css"
// import "owl.carousel/dist/assets/owl.carousel.css"
// import "owl.carousel/dist/assets/owl.theme.default.css"
import {DefaultSeo, NextSeo} from "next-seo"
import {SEO} from "../next-seo.config"
import SwiperCore, {Autoplay, Navigation, Pagination} from "swiper"

import "bootstrap/dist/css/bootstrap.css"
// import "../styles/bootstrap.min.css"
import "../styles/style.css"
import "../styles/globals.css"
import "../styles/fontawesome.min.css"
import "../styles/animate.min.css"
import "../styles/magnific.min.css"
import "../styles/nice-select.min.css"
import "../styles/owl.min.css"
import "../styles/slick-slide.min.css"
// import "../styles/sass/style.scss"
import "../styles/responsive.css"
import Layout from "../components/Layout"
// import {SearchCourseProvider} from "./category"
import {DataProvider} from "../store/GlobalState"
// import "/static/css/style.css"
import "react-toastify/dist/ReactToastify.css"
import "react-datepicker/dist/react-datepicker.css";
// import 'react-date-picker/dist/DatePicker.css';
SwiperCore.use([Autoplay, Navigation, Pagination])

function MyApp({Component, pageProps}) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Athiti:wght@200;300;400;500;600;700&family=Kodchasan:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&family=Mitr:wght@200;300;400;500;600;700&family=Prompt:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/public/static/img/fevicon.png" />
      </Head>
      {/* <SearchCourseProvider> */}
      <DataProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </DataProvider>
      {/* </SearchCourseProvider> */}
    </>
  )
}

export default MyApp
