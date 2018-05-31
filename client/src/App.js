import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Assets
import Landing from './components/Landing/Landing';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
            <Switch>
              <Route exact path="/" component={Landing} />
            </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
