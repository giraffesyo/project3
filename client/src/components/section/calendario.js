import React, { Component as Compo } from "react"
import "./calendario.css"
import API from "../../utils/API"
//import APIuna from "../../utils/APIuna";

import Calendar from "react-big-calendar"
import moment from "moment"
import "react-big-calendar/lib/css/react-big-calendar.css"

import "react-big-calendar/lib/addons/dragAndDrop/styles.css"
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop"

const DnDCalendar = withDragAndDrop(Calendar)
//Calendar.setLocalizer(Calendar.momentLocalizer(moment)); Esto es igual a la línea de abajo, pero sin requerir llamarlo más abajo en el render
const localizer = Calendar.momentLocalizer(moment)

class Section extends Compo {
  state = {
    events: [
      {
        start: new Date(),
        end: new Date(moment().add(1, "days")),
        color: "",
        title: "Some title",
        resourceId: 1,
        //allDay: true     Para eventos de todo el día
        //desc: 'Big conference for important people'   Para agregar info adicional
      },
      // {
      //   title: 'on DST',
      //   start: new Date(2019, 2, 1, 1),
      //   end: new Date(2019, 2, 1, 2, 30),
      //   allDay: false,
      // },
      // {
      //   title: "crosses DST",
      //   start: new Date(2019, 2, 1, 5),
      //   end: new Date(2019, 2, 1, 6, 30),
      //   allDay: false
      // },
      // {
      //   title: "MultiDay 1",
      //   start: new Date(2019, 3, 24),
      //   color: "#dc143c",
      //   end: new Date(2019, 3, 25, 1, 0, 0, 0)
      // },
      // {
      //   title: "MultiDay 2",
      //   start: new Date(2019, 3, 25),

      //   end: new Date(2019, 3, 26, 6, 0, 0, 0)
      // },
      // {
      //   title: "has time",
      //   start: moment(new Date(2016, 11, 3))
      //     .add(5, "days")
      //     .subtract(5, "hours")
      //     .toDate(),
      //   end: moment(new Date(2016, 11, 3))
      //     .add(1, "days")
      //     .subtract(4, "hours")
      //     .toDate()
      // }
    ]
  }


  

  componentDidMount = () => {
    API.getOrden()
      .then(res => this.setState({ events: this.state.events.concat(res.data) }) )
      .catch(err => console.log(err))
  }
  
  // componentDidMount = () => {
  //   const seleccionarColorRandom =
  //     "#" + Math.floor(Math.random() * 16777215).toString(16)
  //   console.log("color random", seleccionarColorRandom)
  //   API.getProyect()
  //     .then(res =>
  //       this.setState({ events: this.state.events.concat(res.data) })
  //     )
  //     .then(res =>
  //       this.setState(state => {
  //         state.events[0].color = seleccionarColorRandom
  //       })
  //     )
  //     .catch(err => console.log(err))
  // }

  //-->Para arrastrar y cambiar el start y end del evento
  // El "event" contiene todo el evento
  onEventDrop = ({ event, start, end }) => {
    this.setState(state => {
      state.events[0].start = start
      state.events[0].end = end
      return { events: state.events }
    })
    console.log("ESTO onEventDrop", start, event)
  }

  //-->Para extender la fecha del evento arrastrando a los lados
  onEventResize = ({ event, start, end }) => {
    this.setState(state => {
      state.events[0].start = start
      state.events[0].end = end
      return { events: state.events }
    })
  }

  //-->Para crear evento seleccionando la fecha en calendario
  handleSelect = ({ start, end }) => {
    const title = window.prompt("Nuevo nombre de evento")
    if (title)
      this.setState(state => {
        state.events[0].start = start
        state.events[0].end = end
        state.events[0].title = title
        return { events: state.events } //En el state events, pondrás lo que aquí seteaste state.events
      })
    //console.log(event)
  }

  render() {
    // const culture="es"
    // let formats = {
    //   dateFormat: 'dd',

    //   dayFormat: (date,  localizer,culture) =>
    //     localizer.format(date, 'DDD', culture={culture:'es'}),

    //   dayRangeHeaderFormat: ({ start, end }, culture, localizer) =>
    //     localizer.format(start, { date: 'short' }, culture) + ' — ' +
    //     localizer.format(end, { date: 'short' }, culture)
    // }

    const resourceMap = [
      { resourceId: 1, resourceTitle: 'Board room' },
      { resourceId: 2, resourceTitle: 'Training room' },
      { resourceId: 3, resourceTitle: 'Meeting room 1' },
      { resourceId: 4, resourceTitle: 'Meeting room 2' },
    ]
    return (
      <div className="contenedorcalendario">
        <DnDCalendar
          popup //Para extender cuando hay varios eventos en un mismo día
          selectable //Hace posible que se pueda seleccionar
          onSelectSlot={this.handleSelect}
          onSelectEvent={event => alert(event.clave + event.tipodeestudio)} //Al hacer click sobre el evento, despliega info del evento
          onEventDrop={this.onEventDrop}
          onEventResize={this.onEventResize}
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          events={this.state.events}
          style={{ height: "70vh" }} //Sin esta línea no se muestra el calendario
          eventPropGetter={event => ({
            style: { backgroundColor: event.color }
          })} //Añadir props a los events, ej. cambiar color
          //  formats={formats}//Formato de fecha e idioma
          //   culture="es"
          // views={["month", "day"]}
          resources={resourceMap}
          resourceIdAccessor="resourceId"
          resourceTitleAccessor="resourceTitle"
        />
      </div>
    )
  }
}

export default Section
