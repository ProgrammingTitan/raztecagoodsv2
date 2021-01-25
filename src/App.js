import './App.css';
import Home from './Home';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
     <Nav />
     <BrowserRouter>
            <Switch>
            <Route path="/" component ={Home} exact></Route>
            <Route path="/About" component = {About} exact></Route>
            <Route path="/ContactUs" component = {Contact} exact></Route>
            </Switch>

    
    </BrowserRouter>
     <Footer />
    </div>
  );
}

export default App;
