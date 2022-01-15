import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import EndpointData from './Pages/EndpointData';
import Home from './Pages/Home';
import Login from './Pages/Login';
import PageNotFound from './Pages/PageNotFound';
import SignUp from './Pages/Signup';
import ChooseHabit from './Pages/ChooseHabit';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* The Switch component wraps around the Routes; A Route is a link to a new page */}
      <Switch> 
        <Route exact path={"/"}
          render={props => (
            <Login {...props}/>
          )}
        />
        <Route exact path={"/" + process.env.REACT_APP_PAGES_PATH_HOME}
          render={props => (
            <Home {...props}/>
          )}
        />
        <Route exact path="/EndpointData"
          render={props => (
            <EndpointData {...props}/>
          )}
        />
        <Route exact path={"/" + process.env.REACT_APP_PAGES_PATH_SIGNUP}
          render={props => (
            <SignUp {...props}/>
          )}
        />
        <Route exact path={"/" + process.env.REACT_APP_PAGES_PATH_LOGIN}
          render={props => (
            <Login {...props}/>
          )}
        />
        <Route exact path={"/" + process.env.REACT_APP_PAGES_PATH_PROFILE}
          render={props => (
            <Home {...props}/>
          )}
        />
        <Route exact path={"/" + process.env.REACT_APP_PAGES_PATH_HABITTRACKER}
          render={props => (
            <Home {...props}/>
          )}
        />
        <Route exact path={"/" + process.env.REACT_APP_PAGES_PATH_CHOOSEHABIT + "/*"}
          render={props => (
            <ChooseHabit {...props}/>
          )}
        />
        <Route exact path={"/" + process.env.REACT_APP_PAGES_PATH_HABITSEARCH}
          render={props => (
            <Home {...props}/>
          )}
        />
        <Route 
          render={() => <PageNotFound/>}
        />
      </Switch>
    </div>
  );
}

export default App;
