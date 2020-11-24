import './index.scss';
import { Route, Router } from 'react-router-dom';
import Header from './pages/componets/header';
import Footer from './pages/componets/footer';
import Index from './pages/index/index';
import Partners from './pages/partners/index';
import Autopark from './pages/autopark';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Route exact path='/' component={Index} />
      <Route exact path='/partners' component={Partners} />
      <Route exact path='/autopark' component={Autopark} />
      <Footer />
    </div>
  );
};

export default App;