import logo from "../assets/logo.png";
import { FaWhatsapp } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar navbar-dark fixed-top glass-nav">
      <div className="vexio-container">

        <a className="navbar-brand d-flex align-items-center" href="#">
          <img src={logo} alt="Vexio" className="logo-img" />
          <strong>VEXIO</strong>
        </a>

        <a
          href="https://wa.me/543512447171?text=Hola,%20quiero%20más%20información%20sobre%20Vexio."
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp"
        >
          <FaWhatsapp className="whatsapp-icon" />
          <span className="whatsapp-text">WhatsApp</span>
        </a>

      </div>
    </nav>
  );
}

export default Navbar;