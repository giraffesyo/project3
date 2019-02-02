import React from "react";

export const InformacionAMostrar = props => {
  return (
        <div className="form-group">
            <label {...props} >{props.label}</label>
            <input {...props} className="form-control" id="exampleFormControlInput1"/>
            
        </div>
  );
}


