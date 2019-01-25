import React, { Component } from "react"
import Section from "../../components/section"
import { Link } from "react-router-dom"
class VistaAdministrador extends Component {
  render() {
    return (
      <div className="container">
        <Section />
        <br />
        <div className="row">
          <div className="col">
            <Link to="/addorder">
              <button className="btn btn-success btn-lg active">
                Agregar Estudio
              </button>
            </Link>
          </div>
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
        <div className="row">
          <div className="col">
            <button className="btn btn-secondary btn-lg active">Editar</button>
          </div>
        </div>
      </div>
    )
  }
}

export default VistaAdministrador
