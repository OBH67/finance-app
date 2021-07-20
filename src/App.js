import React from 'react'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './component/Home'
import CoinDetails from './component/ViewCoin'
import {DataProvider} from './context/DataContext';


function App() {
  return (
   <DataProvider>
      <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/details'>
          <CoinDetails />
        </Route>
      </Switch>
    </Router>
   </DataProvider>
  );
}

export default App;
