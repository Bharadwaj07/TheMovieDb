import React from 'react';
import './App.css';
import Home from './contents/Home';
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <div className="App">
     <Router>
     <Home/>
        {/* <Switch>
            <Route
              exact
              path='/'
              component={Home}
            />
            <Route
            path='/:movieid'
            component={MovieDetails}
            />
        </Switch> */}
     </Router>
     
    </div>
  );
}

export default App;
