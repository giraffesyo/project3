import React from 'react';
import VistaAdministrador from "./pages/administrador";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"



export default () => (
  <Router>
    <Switch>
      <Route exact path="/" component={VistaAdministrador} />
      
    </Switch>
  </Router>
)


