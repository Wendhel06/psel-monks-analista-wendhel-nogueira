import { Formulario } from "./components/Form";
import "./styles.css";

export function Footer({ dataObject }) {
  return (
    <footer>
      <div className="hold-all-footer-content">
        <div className="default-container">
          <div className="form-container">
            <img className="footer-img" src={dataObject.footer_image} alt="" />
            <div className="hold-form">
              <h2 className="section-title">{dataObject.footer_title}</h2>
              <p>{dataObject.footer_description}</p>
              <p>{dataObject.form_text}</p>
              <Formulario />
            </div>
          </div>

          <div className="social-media-container">
            <div className="hold-socia-media-icon">
              <a href={dataObject.link_instagram} target="_blank">
                <img src={dataObject.logo_instagram} alt="" />
              </a>
              <a href={dataObject.link_whatsapp} target="_blank">
                <img src={dataObject.logo_whatsapp} alt="" />
              </a>
              <a href={dataObject.link_twitter} target="_blank">
                <img src={dataObject.logo_twitter} alt="" />
              </a>{" "}
              <a href={dataObject.link_facebook} target="_blank">
                <img src={dataObject.logo_facebook} alt="" />
              </a>
            </div>
            <p>{dataObject.titulo_rodape}</p>
            <nav className="footer-menu">
              <ul>
                <li>
                  <a href="#">Lorem ipsum</a>
                </li>
                <li>
                  <a href="#">Lorem ipsum</a>
                </li>
                <li>
                  <a href="#">Lorem ipsum</a>
                </li>
                <li>
                  <a href="#">Lorem ipsum</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
