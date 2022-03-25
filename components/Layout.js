import Header from "./partial/Header";
import Footer from "./partial/Footer";
export default function Layout({children}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
