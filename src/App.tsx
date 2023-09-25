// import * as Components from './components/index.tsx';
// import axios from 'axios'; 
import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom';
import NavBar from "./layouts/NavBar/NavBar.tsx";
import * as Pages from './pages/index.tsx';
import { useEffect } from 'react';

var isPortrait: boolean | null = null;

function App()
{
  const handleResize = (event: any) => {
    if (isPortrait === window.innerHeight > window.innerWidth) return;
    isPortrait = window.innerHeight > window.innerWidth;
    location.reload();
  };
  useEffect(() => {  
    window.screen.orientation.addEventListener('change', handleResize);
    return () => window.screen.orientation.removeEventListener('change', handleResize);
  }, []);

  return (
    <>
      <Router>
          <NavBar />
          <Switch>
              {Pages.orientationSettings.navPages.map((navPage) => <Route key={navPage.name} path={`/${(navPage.name != Pages.Home.name ? navPage.name : "")}`} Component={navPage}/>)}
          </Switch>
      </Router>
    </>
  );
}

export default App
