import PageWraper from './components/PageWraper';
import Home from './components/Pages/Home';
import Portfolio from './components/Pages/Portfolio';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import { BrowserRouter, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <PageWraper>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route exact path='/portfolio'>
          <Portfolio></Portfolio>
        </Route>
        <Route exact path='/about' component={About}>
          {/* <About></About> */}
        </Route>
        <Route exact path='/contact'>
          <Contact></Contact>
        </Route>

        {/* <Portfolio></Portfolio> */}
      </PageWraper>
    </BrowserRouter>
  );
}

export default App;
