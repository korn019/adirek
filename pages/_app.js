import Head from "next/head"
import "swiper/swiper-bundle.min.css"
import "swiper/swiper.min.css"
// import "owl.carousel/dist/assets/owl.carousel.css"
// import "owl.carousel/dist/assets/owl.theme.default.css"
import { DefaultSeo, NextSeo } from "next-seo"
import {SEO} from "../next-seo.config"
import SwiperCore, {Autoplay, Navigation, Pagination} from "swiper"

import 'bootstrap/dist/css/bootstrap.css'
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


// import "/static/css/style.css"

SwiperCore.use([Autoplay, Navigation, Pagination])

function MyApp({Component, pageProps}) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Head>
        {/* <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"/> */}
        {/* <title>Adirek - ให้ทุกวันคือการสร้างโอกาสใหม่</title>
         <meta name="description" content="Adirek - ให้ทุกวันคือการสร้างโอกาสใหม่" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        */}
        <link
          href="https://fonts.googleapis.com/css2?family=Kodchasan:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&family=Mitr:wght@200;300;400;500;600;700&family=Prompt:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"/>  
        {/* <link rel="icon" href="/public/static/img/fevicon.png" /> */}
        {/* <link rel="preload" href="/assets/fonts/DB-Adman-X-Bd.ttf" as="font" crossOrigin="" /> */}
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
