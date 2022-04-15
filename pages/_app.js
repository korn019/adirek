import Head from "next/head"
import "../styles/globals.css"
import "swiper/swiper-bundle.min.css"
import "swiper/swiper.min.css"
import "owl.carousel/dist/assets/owl.carousel.css"
import "owl.carousel/dist/assets/owl.theme.default.css"
import { DefaultSeo, NextSeo } from "next-seo"
import {SEO} from "../next-seo.config"
import SwiperCore, {Autoplay, Navigation, Pagination} from "swiper"
SwiperCore.use([Autoplay, Navigation, Pagination])

function MyApp({Component, pageProps}) {
  return (
    <>
        <DefaultSeo {...SEO} />
      <Head>
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"/>
        {/* <title>Adirek - ให้ทุกวันคือการสร้างโอกาสใหม่</title>
         <meta name="description" content="Adirek - ให้ทุกวันคือการสร้างโอกาสใหม่" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        */}
        <link rel="icon" href="/assets/img/fevicon.png" />{" "}
        <link rel="preload" href="/assets/fonts/DB-Adman-X-Bd.ttf" as="font" crossOrigin="" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
