import React from "react";

export const Listado = (props) => {
  return (
    
    <div> 
           
       
        <div className="form-group">
            
            {/* <select className="form-control" id="exampleFormControlSelect1"> */}
                {/* <option val={props.metodo} >1</option> */}
                <ul>
                    {props.children}
                </ul>
            {/* </select> */}
        </div>
       
        {/* <button onClick={()=>props.botonGuardarEmpleadoNuevo({...props})}>Guardar empleado</button> */}
        
    </div>
    
  );
}

export const ListadoAgrupado = (props) => {
    return (
      
      <div>    
            <li onClick={()=>props.mostrarDetalleSignatario({...props})} className="list-group-item">{props.nombre}</li>

      </div>
    );
}

export const ListadoConBotonDelete= (props) => {
    return (
      
      <div>    
            <li className="list-group-item disponibles" >{props.nombre}</li>
            <button className="borrarMetodoAgregado" onClick={()=>props.BotonBorrarMetodo({...props})}> x </button>
      </div>
    );
}

