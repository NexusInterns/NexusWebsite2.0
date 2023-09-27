import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom';
import NavBar from "./layouts/NavBar/NavBar.tsx";
import pages from './pages/index.tsx';
import ScrollToTop from './components/ScrollToTop.tsx';

function App()
{
  return (
    <>
      <Router>
          <NavBar />
          <ScrollToTop/>
          <Switch>
            {pages.map((page) => page.paths.map(path => <Route key={page.name} path={`/${path}`} Component={page.component}/>))}
          </Switch>
      </Router>
    </>
  );
}

export default App
