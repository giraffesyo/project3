import React, { Component } from "react";
import Section  from "../../components/section"; //trae el calendario
//import API from "../../utils/APIutils";
// import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
// import { Input, TextArea, FormBtn } from "../../components/Form";
import BigCalendar from 'react-big-calendar';
import Calendar from "react-big-calendar";
import moment from "moment";

const localizer = Calendar.momentLocalizer(moment);

class VistaAdministrador extends Component {
    state = {
        events: [
            {
            start: new Date(),
            end: new Date(moment().add(1, "days")),
            title: "Some title"
            }
        ]
    };





    render() {
        return (
            
                
                  < Section
                    localizer={localizer}
                    events={this.state.events}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: "100vh" }}
                    defaultDate={new Date()}
                    defaultView="month"
                  
                  />
                  
                
            
            
        
        );
    }
}






export default VistaAdministrador;