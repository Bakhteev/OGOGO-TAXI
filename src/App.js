import './index.scss';
import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Header from './pages/componets/header';
import Footer from './pages/componets/footer';
import Index from './pages/index/index';
import Partners from './pages/partners/index';
import Autopark from './pages/autopark';
import ScrollToTop from './scrollToTop.js';

const App = () => {
  return (
    <div className="App">
      <Header />
      <ScrollToTop/>
        <Switch>
          <Route exact path='/' component={Index} />
          <Route exact path='/partners' component={Partners} />
          <Route exact path='/autopark' component={Autopark} />
        </Switch>
      <Footer />
    </div>
  );
};

export default App;