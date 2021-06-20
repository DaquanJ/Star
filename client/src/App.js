import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sign from './components/Sign';
import Footer from './components/Footer';
import Horoscope from './components/Horoscope';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/' component={Sign} />
          <Route path='/horoscope/:sign' component={Horoscope} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
