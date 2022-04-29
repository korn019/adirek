import Header from "./partial/Header"
import Footer from "./partial/Footer"
import Navbar from "./NavBar"
import Notify from "./Notify"
export default function Layout({children}) {
  return (
    <>
      {/* <Header /> */}
      <Navbar/>
      <Notify/>
       {children}
      <Footer />
    </>
  )
}
