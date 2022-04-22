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
 
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
