import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import HomePage from '../components/HomePage';
import Footer from '../components/Footer';


const AppRouter = () => (
  <BrowserRouter>
    <div className="app-container">
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
      </Switch>
    <Footer />
    </div>
  </BrowserRouter>
);

export default AppRouter;
