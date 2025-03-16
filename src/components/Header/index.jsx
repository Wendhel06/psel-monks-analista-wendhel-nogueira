import { useState } from "react";
import "./styles.css";
import { FiMenu } from "react-icons/fi";

export function Header({ dataObject }) {
  const [loaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  function toggleMenu() {
    setIsVisible(!isVisible);
  }
  return (
    <header>
      <div className="hold-content-header">
        <div className="hold-menu">
          <a className="hold-logotipo-link" href="#">
            <img
              src={dataObject.logotipo}
              alt=""
              style={{ display: loaded ? "block" : "none" }}
              onLoad={() => setIsLoaded(true)}
            />
          </a>
          <nav className="hold-navigation">
            <FiMenu
              className="hamburguer-icon"
              size={20}
              cursor="pointer"
              onClick={toggleMenu}
            />
            <ul className={isVisible ? "visible" : "hidden"}>
              <li>
                <a href="#">Categoria 1</a>
              </li>
              <li>
                <a href="#">Categoria 2</a>
              </li>{" "}
              <li>
                <a href="#">Categoria 3</a>
              </li>{" "}
              <li>
                <a href="#">Categoria 4</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
