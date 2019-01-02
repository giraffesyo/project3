import React from "react";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import BigCalendar from 'react-big-calendar';

import "./calendario.css";

const Section = ({props}) => {
  return <span> <BigCalendar {...props} />  </span>
}


// export function Section ({props}){
//   return(
//         <div className="contenedorcalendario">
//         <BigCalendar {...props} /> 
//         </div>
//     )
   
// }
  
export default Section;        




