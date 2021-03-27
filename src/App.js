import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';  // Bootstrap
import 'font-awesome/css/font-awesome.min.css';  // Font Awesome
import { BrowserRouter, Route, Switch } from 'react-router-dom'; // Router

// Component Imports
import Navbar from './components/navbar/navbar';
import Catalog from './components/catalog';
import Todo from './components/todo';
import Footer from './components/footer/footer';
import LandingPage from './components/landingPage';
import About from './components/about';
import Cart from './components/cart';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar></Navbar>

        <div className="container-fluid">
          <Switch>
            <Route path="/" exact component={LandingPage}></Route>
            <Route path="/store" component={Catalog}></Route>
            <Route path="/list" component={Todo}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/cart" component={Cart}></Route>
          </Switch>
        </div>

        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;