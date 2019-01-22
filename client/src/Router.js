import React from 'react';
import VistaAdministrador from "./pages/administrador";

export default () => (
  <Router>
    <Switch>
      <Route exact path="/" component={VistaAdministrador} />
      <Route exact path="/addorder" component={addEmpModal} />
    </Switch>
  </Router>
)


