import Navbar from "./Navbar";
import logo from "../assets/logo.png"

function Header() {
  return (
    <header>
      <a href="/" className="logo">
        <img src={logo} alt="MICHY Telecommunications Limited Logo"/>
      </a>
      <Navbar />
    </header>
  )
}

export default Header