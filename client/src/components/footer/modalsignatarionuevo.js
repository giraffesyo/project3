import React from "react";

//EN ESTE ARCHIVO HAY QUE HACER EL MAP DE LOS MÉTODOS
export const Formulariosignatarionuevo = props => {
  return (
    
   
    <div> 
           
        <div className="form-group">
            <label>Clave</label>
            <input val={props.clave} className="form-control" id="exampleFormControlInput1" placeholder="nombre"/>
        </div>
        <div className="form-group">
            <label >Método</label>
            <select className="form-control" id="exampleFormControlSelect1">
                <option val={props.metodo} >1</option>
            
            </select>
        </div>
        <div className="form-group">
            <label>Contraseña</label>
            <input val={props.contrasena} className="form-control" id="exampleFormControlInput1" placeholder="nombre"/>
        </div>
    
        
    </div>
    



  );
}
