import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import VistaAdministrador from "./pages/administrador"
import addEmpModal from "./pages/administrador/addempmodal"
import addProyectModal from "./pages/administrador/addproymodal"

export default () => (
  <Router>
    <Switch>
      <Route exact path="/" component={VistaAdministrador} />
      <Route exact path="/addorder" component={addEmpModal} />
      <Route exact path="/addproyect" component={addProyectModal} />
    </Switch>
  </Router>
)
