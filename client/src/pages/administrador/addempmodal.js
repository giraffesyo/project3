import React, { Component } from "react"
import Helmet from "react-helmet"
import DayPicker, { DateUtils } from "react-day-picker"
import "react-day-picker/lib/style.css"

//import API from "../utils/API"

class Addorden extends Component {
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
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Id</label>
              <input
                type="email"
                class="form-control"
                id="inputEmail4"
                placeholder="200-FF-19-1"
              />
            </div>
            <div class="form-group col-md-6">
              <label for="exampleFormControlSelect1">Rama</label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>Fuentes Fijas</option>
                <option>Aguas Residuales</option>
                <option>Ambiente Laboral</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div class="form-group col">
              <label for="exampleFormControlSelect1">Tipo de Estudio</label>
              <select class="form-control" id="exampleFormControlSelect1">
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
            <div class="form-group col">
              <label for="exampleFormControlSelect1">Equipo</label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>Equipo 1</option>
                <option>Equipo 2</option>
                <option>Equipo 3</option>
              </select>
            </div>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="inlineCheckbox1"
              value="option1"
            />
            <label class="form-check-label" for="inlineCheckbox1">
              Alfredo Yáñez Báez
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="inlineCheckbox2"
              value="option2"
            />
            <label class="form-check-label" for="inlineCheckbox2">
              Rocio Juárez Moran
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="inlineCheckbox3"
              value="option3"
              disabled
            />
            <label class="form-check-label" for="inlineCheckbox3">
              Kyouchi Pochi
            </label>
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
          <div class="form-group">
            <label for="exampleFormControlInput1">Precio</label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="2500"
            />
          </div>
          <h2>Status</h2>

          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="inlineCheckbox1"
              value="option1"
            />
            <label class="form-check-label" for="inlineCheckbox1">
              En progreso
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="inlineCheckbox2"
              value="option2"
            />
            <label class="form-check-label" for="inlineCheckbox2">
              Pago en anticipo
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="inlineCheckbox2"
              value="option2"
            />
            <label class="form-check-label" for="inlineCheckbox2">
              Ya fueron a campo
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="inlineCheckbox2"
              value="option2"
            />
            <label class="form-check-label" for="inlineCheckbox2">
              Concluido
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="inlineCheckbox2"
              value="option2"
            />
            <label class="form-check-label" for="inlineCheckbox2">
              Pagado
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="inlineCheckbox2"
              value="option2"
            />
            <label class="form-check-label" for="inlineCheckbox2">
              <div class="badge badge-danger text-wrap">Cancelado</div>
            </label>
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Comentarios</label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Crear Nuevo Estudio
          </button>
        </form>
      </div>
    )
  }
}
export default Addorden
