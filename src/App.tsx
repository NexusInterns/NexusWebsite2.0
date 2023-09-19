// import * as Components from './components/index.tsx';
// import axios from 'axios'; 
import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom';
import NavBar from "./layouts/NavBar/NavBar.tsx";
import * as Pages from './pages/index.tsx';

function App()
{
  return (
    <>
      <Router>
          <NavBar />
          <Switch>
              {Pages.navPages.map((navPage) => <Route key={navPage.name} path={`/${(navPage.name != Pages.Home.name ? navPage.name : "")}`} Component={navPage}/>)}
          </Switch>
      </Router>
    </>
  );
}

export default App
