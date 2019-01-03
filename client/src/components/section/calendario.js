import React, { Component as Compo } from "react";
import "./calendario.css";

import Calendar from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";

const DnDCalendar = withDragAndDrop(Calendar);

//Calendar.setLocalizer(Calendar.momentLocalizer(moment)); Esto es igual a la línea de abajo, pero sin requerir llamarlo más abajo en el render
const localizer = Calendar.momentLocalizer(moment);

class Section extends Compo {
  state = {
    events: [
      {
        start: new Date(),
        end: new Date(moment().add(1, "days")),
        title: "Some title"
      }
    ]
  };


  // El "event" contiene todo el evento
  onEventDrop = ({ event, start, end }) => {
    this.setState(state => {
        state.events[0].start = start;
        state.events[0].end = end;
        return { events: state.events };
    });
    console.log("ESTO onEventDrop",start,event);
  };

  onEventResize = ({ event, start, end }) => {
    this.setState(state => {
      state.events[0].start = start;
      state.events[0].end = end;
      return { events: state.events };
    });
  };




  render() {
    return (
      <div className="contenedorcalendario">
        <DnDCalendar 
          onEventDrop={this.onEventDrop}
          onEventResize={this.onEventResize}
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          events={this.state.events}
          style={{ height: "70vh" }} //Sin esta línea no se muestra el calendario
        />
      </div>
    );
  }
}






  
export default Section;        




