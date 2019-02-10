import React from "react";

export const Nav = (props) => {
  return (
        <nav className="navbar navbar-light" {...props}>
          <h1>AIMEX</h1>
          {props.children}
        </nav>
  );
}


