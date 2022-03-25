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
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
