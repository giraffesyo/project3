import React from "react"

export const Card = props => {
  return (
    // <div className="card" style="width: 18rem;">
    <div className="card">
      <img src={props.src} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.clave}</h5>
        <p className="card-text">{props.tipodeestudio}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <span className="labelInputModalB">Rama: </span>
          {props.rama}
        </li>
        <li className="list-group-item">
          <span className="labelInputModalB">Signatario(s): </span>
          {props.signatario}
        </li>

        <li className="list-group-item">
          <span className="labelInputModalB">Comentarios: </span>
          {props.comentarios}
        </li>
        <li className="list-group-item">
          <span className="labelInputModalB">Status: </span>
          {props.status}
        </li>
        <li className="list-group-item">
          <span className="labelInputModalB">$ : </span>
          {props.preciosubtotal}
        </li>
        <li className="list-group-item">
          <span className="labelInputModalB">Inicio: </span>
          {props.start}
        </li>
        <li className="list-group-item">
          <span className="labelInputModalB">Fin: </span>
          {props.end}
        </li>
      </ul>
      <div className="card-body">
        {/* <a href="#" class="card-link">Editar</a>
        <a href="#" class="card-link">Eliminar</a> */}
      </div>
    </div>
  )
}
