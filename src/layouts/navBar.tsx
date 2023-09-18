import { Link } from 'react-router-dom';
import * as Pages from '../pages/index.tsx';
import "../assets/navBar.css";

const NavBar = () =>
{
    return(
        <nav>
            {Pages.navPages.map((navPage: (()=> JSX.Element)) => <Link key={navPage.name} className={`nav-item`} to={`/${(navPage != Pages.Home ? navPage.name : "")}`}>{navPage.name}</Link>)}
        </nav>
     );
}

export default NavBar