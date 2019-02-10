import React, { Component } from "react"
import Section from "../../components/section"
import Engrane from "../../components/footer/engrane"
import { Link } from "react-router-dom"
import "./administradorCSS.css"
import "./style.css"


class VistaAdministrador extends Component {
  render() {
    return (
      <div className="contenedor">  
        <Link to="/addproyect">
            <button className="saveButton5">
              +  Proyecto
            </button>
        </Link> 
        <Section />
        <Engrane />
        <a href={`${window.location.origin}/reportes`} target="_blank" rel="noopener noreferrer" className="botonAReportes">Reportes</a>
      </div>
    )
  }
}

export default VistaAdministrador
