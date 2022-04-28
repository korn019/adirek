import Header from "./partial/Header"
import Footer from "./partial/Footer"
import Navbar from "./NavBar"
export default function Layout({children}) {
  return (
    <>
      {/* <Header /> */}
      <Navbar/>
       {children}
      <Footer />
    </>
  )
}
