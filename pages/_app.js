import Head from "next/head";
import "../styles/globals.css";

function MyApp({Component, pageProps}) {
  return (
    <>
      <Head>
        <title>Adirek - ให้ทุกวันคือการสร้างโอกาสใหม่</title>
        <meta name="description" content="Adirek - ให้ทุกวันคือการสร้างโอกาสใหม่" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="assets/img/fevicon.png" />{" "}
        <link rel="preload" href="/asset/font/DB-Adman-X-Bd.ttf" as="font" crossOrigin="" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
