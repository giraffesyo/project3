import React from "react";

export const ListadoAgrupado = (props) => {
    return (
      <div>    
            <li onClick={()=>props.mostrarDetalle({...props})} className="list-group-item">{props.nombre}</li>
      </div>
    );
}

