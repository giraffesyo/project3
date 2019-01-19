import React, { Component } from "react"
import Helmet from "react-helmet"
import DayPicker, { DateUtils } from "react-day-picker"
import "react-day-picker/lib/style.css"
import API from "../../utils/API"

//import API from "../utils/API"

class Addorden extends Component {
  state = {
    clave: "",
    rama: "",
    tipodeestudio: "",
    signatario: [],
    equipo: [],
    inicio: "",
    fin: "",
    preciosubtotal: "",
    status: "",
    comentarios: ""
  }
  handleFormSubmit = event => {
    event.preventDefault()
    API.saveOrden({
      clave: this.state.clave,
      rama: this.state.rama,
      tipodeestudio: this.state.tipodeestudio,
      inicio: this.state.inicio,
      fin: this.state.fin,
      comentarios: this.state.comentarios,
      status: this.state.status,
      preciosubtotal: this.state.preciosubtotal
    }).catch(err => console.log(err))
  }

  //For Calendar
  static defaultProps = {
    numberOfMonths: 2
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
    const { from, to } = this.state
    const modifiers = { start: from, end: to }
    return (
      <div className="container">
        <form>
          <div className="form-row">
            <div className="form-group col-md-4">
              <label>Id</label>
              <input
                className="form-control"
                id="inputId"
                placeholder="200-FF-19-1"
              />
            </div>
            <div className="form-group col-md-4">
              <label>Rama</label>
              <select className="form-control" id="exampleFormControlSelect1">
                <option>Fuentes Fijas</option>
                <option>Aguas Residuales</option>
                <option>Ambiente Laboral</option>
              </select>
            </div>
            <div className="form-group col-md-4">
              <label>Tipo de Estudio</label>
              <select className="form-control" id="exampleFormControlSelect1">
                <option>Estudio de Ruido en los centros de trabajo</option>
                <option>
                  Estudio de electricidad estatica en los centros de trabajo
                </option>
                <option>
                  Estudio de las condiciones de ilumninacion en los centros de
                  trabajo
                </option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <h5>Signatario</h5>
            <hr />
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox1"
                value="option1"
              />
              <label className="form-check-label">Alfredo Yáñez Báez</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox2"
                value="option2"
              />
              <label className="form-check-label">Rocio Juárez Moran</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox3"
                value="option3"
                disabled
              />
              <label className="form-check-label">Kyouchi Pochi</label>
            </div>
          </div>
          <div className="form-row">
            <h5>Equipo</h5>
            <hr />
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox1"
                value="option1"
              />
              <label className="form-check-label">Equipo 1</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox2"
                value="option2"
              />
              <label className="form-check-label">Equipo 2</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox3"
                value="option3"
                disabled
              />
              <label className="form-check-label">Equipo 3</label>
            </div>
          </div>

          <p>
            {!from && !to && "Por favor selecciona el día de inicio"}
            {from && !to && "Please selecciona el día de termino"}
            {from &&
              to &&
              `Seleccionado del ${from.toLocaleDateString()} al
                ${to.toLocaleDateString()}`}{" "}
            {from && to && (
              <button
                className="btn btn-outline-danger link"
                onClick={this.handleResetClick}
              >
                Borrar
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
          <div className="form-group">
            <label>Precio</label>
            <input
              className="form-control"
              id="inputPrecio"
              placeholder="2500"
            />
          </div>
          <h2>Status</h2>

          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox1"
              value="option1"
            />
            <label className="form-check-label">En progreso</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox2"
              value="option2"
            />
            <label className="form-check-label">Pago en anticipo</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox2"
              value="option2"
            />
            <label className="form-check-label">Ya fueron a campo</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox2"
              value="option2"
            />
            <label className="form-check-label">Concluido</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox2"
              value="option2"
            />
            <label className="form-check-label">Pagado</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox2"
              value="option2"
            />
            <label className="form-check-label">
              <div className="badge badge-danger text-wrap">Cancelado</div>
            </label>
          </div>
          <div className="form-group">
            <label>Comentarios</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Crear Nuevo Estudio
          </button>
        </form>
      </div>
    )
  }
}
export default Addorden
