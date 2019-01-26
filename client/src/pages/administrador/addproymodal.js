import React, { Component } from "react"
import { Redirect } from "react-router-dom"
import Helmet from "react-helmet"
import DayPicker, { DateUtils } from "react-day-picker"
import "react-day-picker/lib/style.css"
import API from "../../utils/API"
import { withAlert } from "react-alert"

class Addproyect extends Component {
  static defaultProps = {
    numberOfMonths: 2
  }
  state = {
    success: false,
    clave: "",
    nombreempresa: "",
    direccion: "",
    inicio: "",
    fin: "",
    preciototal: "",
    cantidad: ""
  }
  handleChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }
  handleFormSubmit = event => {
    event.preventDefault()
    API.saveProyect({
      clave: this.state.clave,
      nombreempresa: this.state.nombreempresa,
      direccion: this.state.direccion,
      inicio: this.state.from,
      fin: this.state.to,
      preciototal: this.state.preciototal,
      cantidad: this.state.cantidad
    })
      .then(this.props.alert.success("Estudio añadido exitosamente"))
      .then(this.setState({ success: true }))
      .catch(err => console.log(err))
  }

  constructor(props) {
    super(props)
    this.handleDayClick = this.handleDayClick.bind(this)
    this.handleResetClick = this.handleResetClick.bind(this)
    this.state = this.getInitialState()
  }
  getInitialState() {
    return {
      from: undefined,
      to: undefined
    }
  }
  handleDayClick(day) {
    const range = DateUtils.addDayToRange(day, this.state)
    this.setState(range)
  }
  handleResetClick() {
    this.setState(this.getInitialState())
  }

  render() {
    const { from, to, success } = this.state
    const modifiers = { start: from, end: to }
    return (
      <div className="container">
        {success && <Redirect to="/addorder" />}
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Añadir Proyecto</h1>
            <p className="lead">
              Añade un proyecto nuevo y después sus estudios correspondientes
            </p>
          </div>
        </div>
        <form>
          <div className="form-row">
            <div className="form-group col-md-4">
              <label>Clave</label>
              <input
                onChange={this.handleChange}
                className="form-control"
                name="clave"
                placeholder="750"
              />
            </div>
            <div className="form-group col-md-4">
              <label>Razon Social</label>
              <input
                onChange={this.handleChange}
                className="form-control"
                name="nombreempresa"
                placeholder="Aimex, Ingenieria y Construcción, S.A DE C.V"
              />
            </div>
            <div className="form-group col-md-4">
              <label>Direccion</label>
              <input
                onChange={this.handleChange}
                className="form-control"
                name="direccion"
                placeholder="Calz. de Tlalpan 1634, Col.Ermita, Benito Juárez, C.P 03590"
              />
            </div>
          </div>
          <div className="RangeExample">
            <p>
              {!from && !to && "Por favor selecciona el primer día."}
              {from && !to && "Por favor selecciona el ultimo día."}
              {from &&
                to &&
                `Seleccionado del ${from.toLocaleDateString()} al
                ${to.toLocaleDateString()}`}{" "}
              {from && to && (
                <button className="link" onClick={this.handleResetClick}>
                  Reset
                </button>
              )}
            </p>
            <DayPicker
              className="Selectable"
              numberOfMonths={this.props.numberOfMonths}
              selectedDays={[from, { from, to }]}
              modifiers={modifiers}
              onDayClick={this.handleDayClick}
            />
            <Helmet>
              <style>{`
  .Selectable .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
    background-color: #f0f8ff !important;
    color: #4a90e2;
  }
  .Selectable .DayPicker-Day {
    border-radius: 0 !important;
  }
  .Selectable .DayPicker-Day--start {
    border-top-left-radius: 50% !important;
    border-bottom-left-radius: 50% !important;
  }
  .Selectable .DayPicker-Day--end {
    border-top-right-radius: 50% !important;
    border-bottom-right-radius: 50% !important;
  }
`}</style>
            </Helmet>
          </div>

          <div className="form-row">
            <div className="form-group col-md-4">
              <label>Precio</label>
              <input
                onChange={this.handleChange}
                className="form-control"
                name="preciototal"
                placeholder="2000"
              />
            </div>
            <div className="form-group col-md-4">
              <label>Cantidad de estudios</label>
              <input
                onChange={this.handleChange}
                className="form-control"
                name="cantidad"
                placeholder="3"
              />
            </div>
          </div>

          <button
            onClick={this.handleFormSubmit}
            type="submit"
            className="btn btn-primary"
          >
            Crear Nuevo Proyecto
          </button>
        </form>
      </div>
    )
  }
}
export default withAlert(Addproyect)
