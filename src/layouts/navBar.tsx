import { BrowserRouter as Router, Route, Routes as Switch, Link } from 'react-router-dom';
import { navPages, Home } from '../pages/index.tsx';

interface Props
{
    defaultPage?: (()=> JSX.Element);
}


const NavBar = ({defaultPage = Home} : Props) =>
{
    let page = defaultPage == undefined ? Home : defaultPage;

    return(
        <>
        <Router>
            {navPages.map((navPage) => <Link className={`nav-${navPage}`} to={`/${(navPage != Home ? navPage : "")}`} >{navPage.name}</Link>)}
            <Switch>
                {/* {<Route path='/' Component={Home} />} */}
                {<Route path={`/${(page.name != Home.name ? page.name : "")}`} Component={page}/>}
            </Switch>
        </Router>
        </>
  );
}

export default NavBar