import React, { Component } from "react"
import Section from "../../components/section"
import Engrane from "../../components/footer/engrane"
import { Link } from "react-router-dom"
import "./style.css"

class VistaAdministrador extends Component {
  render() {
    return (
      <div className="container">
        <Section />
        <Engrane />
        <br />
        <div className="row">
          <div className="col">
            <button className="btn btn-primary btn-lg active">
              Consultar Estudio
            </button>
          </div>
          <div className="col">
            <button className="btn btn-danger btn-lg active">
              Cancelar Estudio
            </button>
          </div>
          <div className="col">
            <Link to="/addproyect">
              <button className="btn btn-success btn-lg active">
                Agregar Proyecto
              </button>
            </Link>
          </div>
        </div>
        <br />
      </div>
    )
  }
}

export default VistaAdministrador
