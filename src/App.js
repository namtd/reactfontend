import React from 'react';
import './App.css';

import Managingstaff from './pages/Managingstaff';
import CompAddStaff from './components/staff/CompAddStaff';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
      <Route path="/" exact  >
          <Managingstaff />
        </Route>
        <Route path="/:staffId"  >
          <Managingstaff />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
