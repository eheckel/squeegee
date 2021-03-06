import React, { useState } from 'react';
import './App.css';
import './custom.scss';
import Welcome from './screens/Welcome';
import Home from './screens/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Details from './screens/Details';
import Signup from './screens/Signup';
import * as firebase from 'firebase';
import Signin from './screens/Signin';
import Companies from './screens/Companies';
import Profile from './screens/Profile';
import SearchResults from './screens/SearchResults';
import JobPage from './screens/JobPage';
import Budget from './screens/Budget';
import CompanyResult from './screens/CompanyResult';
import ExProfile from './screens/ExProfile';
import Review from './screens/Review';


// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");


console.log(firebase);

export const AuthContext = React.createContext(null);


const App = () => {
    const [isLoggedIn, setLoggedIn] = useState(false);
    return (   
      <>   
      <BrowserRouter>
        <Switch>
          <Route path="/" component={ Welcome } exact/>
          <Route path='/details' component={ Details } />
          <Route path='/home' component={ Home } />
          <Route path='/signup' component={ Signup } />
          <Route path='/signin' component={ Signin } />
          <Route path='/companies' component={ Companies } />
          <Route path='/profile' component={ Profile } />
          <Route path='/results' component={ SearchResults } />
          <Route path='/jobs' component={ JobPage } />
          <Route path='/budget' component={ Budget } />
          <Route path='/companyresult' component={ CompanyResult } />
          <Route path='/exprofile' component={ ExProfile } />
          <Route path='/review' component={ Review } />
        </Switch>
      </BrowserRouter> 
      </>
    );
}

export default App;
