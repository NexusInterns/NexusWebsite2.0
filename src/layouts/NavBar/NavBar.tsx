import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { navPages } from "../../pages";
import "./navBar.css";
import { useLocation, useNavigate } from 'react-router-dom';
import { logo, GetIcon } from "../../assets/icons";

const NavBar = () => {
  const [scrollY, setScrollY] = useState(0);
  const scrollReset = () => {window.scrollTo(0,0); SetScrollBar();};
  const [scrollLength, setScrollLength] = useState(0);
  
  const SetScrollBar = () => {
    var limit = Math.max( document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight) - window.innerHeight;
    setScrollLength(Math.floor((window.scrollY / limit) * 100));
  }
  
  const handleScroll = async () => {
    setScrollY(window.scrollY);
    SetScrollBar();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const location = useLocation();
  const pathName = location.pathname === "/" ? "Home" : location.pathname.slice(1);
  const navName = () => pathName.indexOf("/") === -1 ? pathName : pathName.substring(0, pathName.indexOf("/"));

  const navigate = useNavigate();

  return (
    <header>
      <div className={`nav-title ${scrollY >= 100 ? "shadow-header" : ""}`} onClick={() => {
        if (scrollY === 0) navigate("/");
        else scrollReset();
      }}>
        <img className="nav-icon" src={logo} alt="" />
        <h1 className="nav-name">NEXUSCLOUD IT SOLUTIONS</h1>
        <div id="nav-line-break" style={{width: `${scrollLength}% no-landscape`}}></div>
      </div>
      <nav className={`${scrollLength !== 100 && window.scrollY > window.scrollX ? "shadow-header" : ""}`}>
        {navPages.map((navPage) => (
          <Link
            key={navPage.name}
            id={`tab-${navPage.name}`}
            className={`nav-tab ${navPage.name === navName() ? "selected" : ""}`}
            to={navPage.paths[navPage.paths.length - 1]}
            onClick={scrollReset}
          >
            <img
              className="tab-icon no-landscape"
              src={GetIcon(navPage.name)}
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
