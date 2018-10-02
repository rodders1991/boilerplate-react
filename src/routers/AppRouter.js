import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import HomePage from '../components/HomePage';
import Footer from '../components/Footer';
import About from '../components/About';
import Job from '../components/Job';
import Contact from '../components/Contact';
import Menu from '../components/Menu';

const AppRouter = () => (
  <BrowserRouter>
    <div className="app-container">
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/about" component={About} exact={true} />
        <Route path="/job" component={Job} exact={true} />
        <Route path="/contact" component={Contact} exact={true} />
        <Route path="/menu" component={Menu} exact={true} />
      </Switch>
    <Footer />
    </div>
  </BrowserRouter>
);

export default AppRouter;
