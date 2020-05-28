import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import DailyHoroscope from './components/DailyHoroscope';
import MyHoroscopes from './components/MyHoroscopes';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className='App'>
     <Router>
       <Switch>
         <Route path='/' exact component={Login} />
         <Route path='/signup' component={Signup} />
         <Route path='/horoscope' component={DailyHoroscope} />
         <Route path='/myhoroscopes' component={MyHoroscopes} />
         <Route path='/reviews' component={Reviews} />
       </Switch>
      <Footer/>
     </Router>
    </div>
  );
}

export default App;
