import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import * as Pages from "../../pages/index";
import "./navBar.css";
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

var scrollPercent: number = 0;
const SetScrollBar = () => {
  var limit = Math.max( document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight) - window.innerHeight;
  scrollPercent = Math.floor((window.scrollY / limit) * 100);
  const line_width = `${scrollPercent}%`;
  document.getElementById("nav-line-break").style.width = line_width;
}


const NavBar = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const scrollReset = () => {window.scrollTo(0,0); SetScrollBar();};

  useEffect(() => {
    const handleScroll = (event: any) => {
      setScrollTop(window.scrollY);
      SetScrollBar();
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("click", SetScrollBar);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", SetScrollBar);
    };
  }, []);
  
  const location = useLocation();
  const pathName = location.pathname === "/" ? "Home" : location.pathname.slice(1);

  const navigate = useNavigate();

  return (
    <header>
      <div className={`nav-title &{scrollTop >= 100 ? "shadow-header" : ""}`} onClick={() => {
        if (scrollTop === 0) navigate("/");
        else scrollReset();
      }}>
        <img className="nav-icon" src="./src/assets/icons/logo.svg" alt="" />
        <h1 className="nav-name">NEXUSCLOUD IT SOLUTIONS</h1>
        <div id="nav-line-break"></div>
      </div>
      <nav className={`${scrollPercent === 100 ? "" : "shadow-header"}`}>
        {Pages.orientationSettings.navPages.map((navPage: () => JSX.Element) => (
          <Link
            key={navPage.name}
            id={`tab-${navPage.name}`}
            className={`nav-tab ${pathName === navPage.name ? "selected" : ""}`}
            to={`/${navPage != Pages.Home ? navPage.name : ""}`}
            onClick={scrollReset}
          >
            <img
              className="tab-icon no-landscape"
              src={`./src/assets/icons/${navPage.name.toLowerCase()}.svg`}
              alt={navPage.name}
            />
            <span className="tab-title no-portrait">{navPage.name}</span>
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default NavBar;
