import PageWraper from './components/PageWraper';
import Home from './components/Pages/Home';
import Portfolio from './components/Pages/Portfolio';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Contacts from './components/Pages/Contacts';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <PageWraper>
        <br />

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
        <Route exact path='/contact/:contactId'>
          <Contact></Contact>
        </Route>
        <Route exact path='/allcontacts'>
          <Contacts></Contacts>
        </Route>
      </PageWraper>
    </BrowserRouter>
  );
}

export default App;
