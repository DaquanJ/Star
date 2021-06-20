import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sign from './components/Sign';
import DailyHoroscope from './components/DailyHoroscope';
import MyHoroscopes from './components/MyHoroscopes';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import './App.css';
import Horoscope from './components/Horoscope';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/' exact component={Sign} />
          <Route path='/horoscope/:sign' component={Horoscope} />
          <Route path='/myhoroscopes' component={MyHoroscopes} />
          <Route path='/reviews' component={Reviews} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
