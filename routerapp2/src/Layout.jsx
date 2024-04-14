import { Outlet } from "react-router"
import Header from "./compoents/Header"
import Footer from "./compoents/Footer"

const Layout = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
