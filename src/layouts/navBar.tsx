import { BrowserRouter as Router, Route, Routes as Switch, Link } from 'react-router-dom';
import * as Pages from '../pages/index.tsx';
import "../assets/navBar.css";

interface Props
{
    defaultPage?: (()=> JSX.Element);
}


const NavBar = ({defaultPage = Pages.Home} : Props) =>
{
    let page = defaultPage == undefined ? Pages.Home : defaultPage;

    return(
        <>
        <Router>
            <nav>
                {Pages.navPages.map((navPage) => <Link key={navPage.name} className={`nav-item`} to={`/${(navPage != Pages.Home ? navPage.name : "")}`} >{navPage.name}</Link>)}
            </nav>
            <Switch>
                {<Route key={page.name} path={`/${(page.name != Pages.Home.name ? page.name : "")}`} Component={page}/>}
            </Switch>
        </Router>
        </>
  );
}

export default NavBar