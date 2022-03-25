import Head from "next/head";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";

function MyApp({Component, pageProps}) {
  return (
    <>
      <Head>
        <title>Adirek - ให้ทุกวันคือการสร้างโอกาสใหม่</title>
        <meta name="description" content="Adirek - ให้ทุกวันคือการสร้างโอกาสใหม่" />
        <link rel="icon" href="assets/img/fevicon.png" />{" "}
        <link rel="preload" href="/asset/font/DB-Adman-X-Bd.ttf" as="font" crossOrigin="" />
        {/* <link rel="stylesheet" href="/assets/css/animate.min.css" />
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/magnific.min.css" />
        <link rel="stylesheet" href="/assets/css/nice-select.min.css" />
        <link rel="stylesheet" href="/assets/css/owl.min.css" />
        <link rel="stylesheet" href="/assets/css/slick-slide.min.css" />
        <link rel="stylesheet" href="/assets/css/fontawesome.min.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/responsive.css" /> */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
