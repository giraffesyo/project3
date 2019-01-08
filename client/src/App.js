import React from 'react';
import VistaAdministrador from "./pages/administrador";

function App() {
  return (
      //Aquí va lo necesario de React Router, para que dependiendo el path url
      // muestre el login, la VistaAdministrador, o la Vistaempleados (en "pages")
      <VistaAdministrador />
    
  );
}



export default App;