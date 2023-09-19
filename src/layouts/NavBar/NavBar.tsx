import { Link } from 'react-router-dom';
import {useState, useEffect} from 'react';
import * as Pages from '../../pages/index.tsx';
import "./navBar.css";

const NavBar = () =>
{
    const [scrollTop, setScrollTop] = useState(0);
    useEffect(() => {
        const handleScroll = (event: any) => {
          setScrollTop(window.scrollY);
        };
      
        window.addEventListener('scroll', handleScroll);
      
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return(
        <nav className={scrollTop >= 100 ? 'shadow-header' : ''}>
            {Pages.navPages.map((navPage: (()=> JSX.Element)) => <Link key={navPage.name} className="nav-item" to={`/${(navPage != Pages.Home ? navPage.name : "")}`}>{navPage.name}</Link>)}
        </nav>
     );
}

export default NavBar