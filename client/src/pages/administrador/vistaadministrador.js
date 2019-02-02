import React, { Component } from "react"
import Section from "../../components/section"
import Engrane from "../../components/footer/engrane"
import { Link } from "react-router-dom"
import "./administradorCSS.css"
import "./style.css"

class VistaAdministrador extends Component {
  render() {
    return (
      
      <div className="container">
        <nav className="navbar navbar-light">
          <h1>AIMEX</h1>
          <a href={`${window.location.origin}/reportes`} target="_blank" className="botonAReportes">Reportes</a>
        </nav>
        <br />
        <br />
        <Section />
        <br />
        <div className="row">
          <div className="col">
            <Link to="/addproyect">
              <button className="saveButton5">
                Agregar Proyecto
              </button>
            </Link>
          </div>
          <br />
          <div className="col">
            <Engrane />
          </div>
        </div>
        <br />
      </div>
    )
  }
}

export default VistaAdministrador
