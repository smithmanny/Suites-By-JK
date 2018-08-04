import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Assets
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import ComingSoon from './components/ComingSoon/ComingSoon';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Landing from './components/Landing/Landing';
import Packages from './components/Packages/Packages';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        {/* <div className="container"> */}
        <div className="coming-soon">
          {/* <Header /> */}
            <Switch>
              {/* <Route exact path="/" component={Landing} /> */}
              <Route exact path="/" component={ComingSoon} />
              <Route path="/about" component={About} />
              <Route path="/packages" component={Packages} />
              <Route path="/contact" component={Contact} />
            </Switch>
          {/* <Footer /> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
