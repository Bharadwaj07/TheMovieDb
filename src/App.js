import React from 'react';
import './App.css';
import Home from './contents/Home';
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom'
import MovieDetails from './contents/MovieDetails';

function App() {
  return (
    <div className="App">
     <Router>
        <Switch>
            <Route
              exact
              path='/'
              component={Home}
            />
            <Route
            path='/:movieid'
            component={MovieDetails}
            />
        </Switch>
     </Router>
    </div>
  );
}

export default App;
