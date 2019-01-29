import React from "react"
import DayPickerInput from "react-day-picker/DayPickerInput"
import "react-day-picker/lib/style.css"
import API from "../../utils/API"
//import { Link } from "react-router-dom"

class Addorden extends React.PureComponent {
  state = {
    title: "",
    clave: "",
    rama: "",
    tipodeestudio: "",
    signatario: [],
    equipo: [],
    start: "",
    end: "",
    preciosubtotal: "",
    status: "",
    comentarios: ""
  }

  componentDidMount = () => {
    //const { id } = this.props.match.params
    //this.setState({ clave: id })
    const { id: proyecto } = this.props.match.params
    this.setState({ proyecto })
  }
  handleChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }
  handleFormSubmit = event => {
    event.preventDefault()
    API.saveOrden({
      title: this.state.tipodeestudio,
      proyecto: this.state.proyecto,
      clave: this.state.clave,
      rama: this.state.rama,
      tipodeestudio: this.state.tipodeestudio,
      signatario: this.state.signatario,
      equipo: this.state.equipo,
      start: this.state.day,
      end: this.state.day,
      comentarios: this.state.comentarios,
      status: this.state.status,
      preciosubtotal: this.state.preciosubtotal
    }).catch(err => console.log(err))
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Añadir Estudios</h1>
            <p className="lead">
              Añade los estudios del proyecto correspondiente
            </p>
          </div>
        </div>
        <form>
          <div className="form-row">
            <div className="form-group col-md-4">
              <label>Id</label>
              <input
                onChange={this.handleChange}
                className="form-control"
                name="clave"
                placeholder="200-FF-19-1"
              />
            </div>
            <div className="form-group col-md-4">
              <label>Rama</label>
              <select
                onChange={this.handleChange}
                className="form-control"
                name="rama"
              >
                <option>Fuentes Fijas</option>
                <option>Aguas Residuales</option>
                <option>Ambiente Laboral</option>
              </select>
            </div>
            <div className="form-group col-md-4">
              <label>Tipo de Estudio</label>
              <select
                onChange={this.handleChange}
                className="form-control"
                name="tipodeestudio"
              >
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
                onChange={this.handleChange}
                className="form-check-input"
                type="checkbox"
                name="signatario"
                value="AYB"
              />
              <label className="form-check-label">Alfredo Yáñez Báez</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                onChange={this.handleChange}
                className="form-check-input"
                type="checkbox"
                name="signatario"
                value="RJM"
              />
              <label className="form-check-label">Rocio Juárez Moran</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                onChange={this.handleChange}
                className="form-check-input"
                type="checkbox"
                name="signatario"
                value="KP"
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
                onChange={this.handleChange}
                className="form-check-input"
                type="checkbox"
                name="equipo"
                value="Eq1"
              />
              <label className="form-check-label">Equipo 1</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                onChange={this.handleChange}
                className="form-check-input"
                type="checkbox"
                name="equipo"
                value="Eq2"
              />
              <label className="form-check-label">Equipo 2</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                onChange={this.handleChange}
                className="form-check-input"
                type="checkbox"
                name="equipo"
                value="Eq3"
                disabled
              />
              <label className="form-check-label">Equipo 3</label>
            </div>
          </div>
          <div>
            <p>Por favor escoge un día:</p>
            <DayPickerInput onDayChange={day => console.log(day)} />
          </div>
          <div className="form-group">
            <label>Precio</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              name="preciosubtotal"
              placeholder="2500"
            />
          </div>
          <h2>Status</h2>

          <div className="form-check form-check-inline">
            <input
              onChange={this.handleChange}
              className="form-check-input"
              type="checkbox"
              name="status"
              value="Progress"
            />
            <label className="form-check-label">En progreso</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              onChange={this.handleChange}
              className="form-check-input"
              type="checkbox"
              name="status"
              value="AntPayment"
            />
            <label className="form-check-label">Pago en anticipo</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              onChange={this.handleChange}
              className="form-check-input"
              type="checkbox"
              name="status"
              value="FieldDone"
            />
            <label className="form-check-label">Ya fueron a campo</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              onChange={this.handleChange}
              className="form-check-input"
              type="checkbox"
              name="status"
              value="Concluded"
            />
            <label className="form-check-label">Concluido</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              onChange={this.handleChange}
              className="form-check-input"
              type="checkbox"
              name="status"
              value="Payed"
            />
            <label className="form-check-label">Pagado</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              onChange={this.handleChange}
              className="form-check-input"
              type="checkbox"
              name="status"
              value="Cancelled"
            />
            <label className="form-check-label">
              <div className="badge badge-danger text-wrap">Cancelado</div>
            </label>
          </div>

          <div className="form-group">
            <label>Comentarios</label>
            <textarea
              onChange={this.handleChange}
              className="form-control"
              name="comentarios"
              placeholder="Comentarios"
              rows="3"
            />
          </div>
          <button
            onClick={this.handleFormSubmit}
            type="submit"
            className="btn btn-primary"
          >
            Crear Nuevo Estudio
          </button>
        </form>
      </div>
    )
  }
}
export default Addorden
