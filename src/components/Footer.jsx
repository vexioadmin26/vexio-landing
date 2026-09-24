import logo from "../assets/logo.png";
import {
  FaInstagram,
  FaFacebook,
  FaTiktok,
  FaYoutube,
  FaXTwitter
} from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer">

      <div className="container">

        <div className="footer-top">

          <div className="footer-brand">
            <img src={logo} alt="Vexio" />
            <p>
              Sistema de gestión integral para comercios,
              supermercados, kioscos, bares y restaurantes.
            </p>
          </div>

          <div className="col-lg-3 footer-links">
            <h5>Redes</h5>

            <a
              href="https://www.instagram.com/vexio.26/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram /> Instagram
            </a>

            <a
              href="https://www.facebook.com/Vexio.2026"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook /> Facebook
            </a>

            <a
              href="https://x.com/Vexio26"
              target="_blank"
              rel="noreferrer"
            >
              <FaXTwitter /> Twitter
            </a>

            <a
              href="https://www.tiktok.com/@vexio.2026"
              target="_blank"
              rel="noreferrer"
            >
              <FaTiktok /> TikTok
            </a>

            <a
              href="https://www.youtube.com/@Vexio2026"
              target="_blank"
              rel="noreferrer"
            >
              <FaYoutube /> YouTube
            </a>
          </div>

          <div className="footer-contact">
            <h5>Contacto</h5>

            <p>📧 vexioadmin26@gmail.com</p>
            <p>📱 +54 351 244 7171</p>
            <p>Córdoba, Argentina</p>
          </div>

        </div>

        <div className="footer-bottom">
          © 2026 Vexio. Todos los derechos reservados.
        </div>

      </div>

    </footer>
  );
}

export default Footer;