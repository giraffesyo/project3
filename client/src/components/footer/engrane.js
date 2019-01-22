import React, { Component } from 'react';
import "./modal.css";
import {Formulariosignatarioexistente} from "./modalsignatarioexistente"
// import {Editarempleadomodal} from './botoneditarempleadomodal';
import ReactModal from 'react-modal';
ReactModal.setAppElement('#root');

class Engrane extends Component {
    state = {
        showMenu:false,
        showModal: false,
        showFormularioAgregarSignatario: false
    }

     //--------------->MENÚ TIPO TOGGLE
    showMenu = event => {
        event.preventDefault();
        this.setState({ showMenu: true }, () => {
            document.addEventListener('click', this.closeMenu);
            });
    }

    // Cierra el menú al dar click afuera
    closeMenu =(event)=> {
        if (!this.dropdownMenu.contains(event.target)) {    // "contains" es para referenciarlo
            this.setState({ showMenu: false }, () => {
              document.removeEventListener('click', this.closeMenu);
            });  
        }      
    }

    //--------------->MODAL SIGNATARIO
    handleOpenModal = () => {
        this.setState({ showModal: true });
    }
  
    handleCloseModal = () =>{
        this.setState({ showModal: false });
    }
    
    empezaragregarsignatario = () =>{
        this.setState({ showFormularioAgregarSignatario: true });
    }
    


  render () {
    return (

    <div>
        <button className="menu-editar" onClick={this.showMenu} > Editar </button>
        
        {this.state.showMenu ? (

            <div className="interiormenu-editar" ref={(element) => {this.dropdownMenu = element; }}>
                <button className="boton-baseeditar" onClick={this.handleOpenModal}> Empleado </button>
                {/* <button className="boton-baseeditar" onClick={()=>props.editarbaseequipo}> Equipo </button> */}
                {/* <Editarempleadomodal/> */}
            </div>

        ) : (
            null
        )}

        {/*--------- Modal signatarios */}
        <ReactModal 
            isOpen={this.state.showModal}
            contentLabel="onRequestClose Example"
            onRequestClose={this.handleCloseModal}
            shouldCloseOnOverlayClick={false}
            ariaHideApp={true}
            shouldFocusAfterRender={true}
        >
            
            <button onClick={this.empezaragregarsignatario}>Agregar nuevo empleado</button>
            {this.state.showFormularioAgregarSignatario ? (
                <form>
                    <div className="form-group">
                    <label>Agrega un nuevo empleado</label>
                       
                    </div>
                </form> 
            ) : ( null )}



            {/* <form>
                <div className="form-group">
                <label>Selecciona un empleado</label>
                    <Formulariosignatarioexistente/>
                </div>
            </form> */}

            <button onClick={this.handleCloseModal}>Close Modal</button>
        </ReactModal>


        {/*--------- Modal equipo */}


    </div>






    );
  }
}

export default Engrane;        







