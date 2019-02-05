import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import VistaAdministrador from "./pages/administrador"
import addEmpModal from "./pages/administrador/addempmodal"
import addProyectModal from "./pages/administrador/addproymodal"
import { Provider as AlertProvider } from "react-alert"
import AlertTemplate from "react-alert-template-basic"
//import StockInfo from "../src/components/app/components/profile/StockInfo"
import Profile from "../src/components/app/containers/Profile/Profile"

const options = {
  position: "top center",
  timeout: 5000,
  offset: "30px",
  transition: "scale"
}
export default () => (
  <AlertProvider template={AlertTemplate} {...options}>
    <Router>
      <Switch>
        <Route exact path="/" component={VistaAdministrador} />
        <Route exact path="/addorder/:id" component={addEmpModal} />
        <Route exact path="/addproyect" component={addProyectModal} />
        <Route exact path="/reportes" component={Profile} />
      </Switch>
    </Router>
  </AlertProvider>
)
