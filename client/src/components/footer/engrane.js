import React, { Component } from 'react';
import "./modal.css";
import API from "../../utils/APIuna";
import {Listado} from "./listado"
import {Input} from "./Input"
import {BotonGuardar} from "./botonGuardar"
import {ListadoAgrupado} from "./listado"


import ReactModal from 'react-modal';
ReactModal.setAppElement('#root');

class Engrane extends Component {
    state = {
        showMenu:false,
        showModal: false,
        showFormularioAgregarSignatario: false,
        showFormularioEditarSignatario: false,
        liClass:"",
        metodosdisponibles:[],
        metodosSeleccionados:[],
        claveNuevoSignatario:"",
        nombreNuevoSignatario:"",
        contrasenaNuevoSignatario: "",
        nombreBuscarEditarSignatario:"",
        todosSignatarios:[],
        encontradosSignatarios:[],
        filtrarSignatario: false,

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

    //--------------->MODAL SIGNATARIO NUEVO
    handleOpenModal = () => {
        this.setState({ showModal: true });
    }
  
    handleCloseModal = () =>{
        this.setState({ showModal: false, showFormularioAgregarSignatario: false, showFormularioEditarSignatario: false });
    }
    
    empezaragregarsignatario = () =>{
        this.setState({ showFormularioAgregarSignatario: true });
        this.cargarmetodos();
    }

    cargarmetodos = () => {
        API.getMetodos()
        .then(res => this.setState({ metodosdisponibles: res.data }))
        .catch(err => console.log(err));
    }

    handleMetodoClick = valorLiClick => {
        this.setState({ metodosSeleccionados: this.state.metodosSeleccionados.concat(valorLiClick), liClass: "limetodosselect" })
    }
    
    handleOnChangeInputNuevoSignatario = event => {
        const {value, name} = event.target
        this.setState({ [name]: value })
    }

    botonGuardarEmpleadoNuevo = event => {
        event.preventDefault();
        API.saveSignatarioNuevo({
            clave: this.state.claveNuevoSignatario,
            nombresignatario: this.state.nombreNuevoSignatario,
            metodos: this.state.metodosSeleccionados,
            contrasena: this.state.contrasenaNuevoSignatario
        })
        .then(res => this.setState({ showModal: false, showFormularioAgregarSignatario: false  }))
        .catch(err => console.log(err,"ERROR API.SAVEsIGNATARIOnUEVO"))
    }

    //--------------->MODAL SIGNATARIO EDITAR
    empezareditarsignatario = () => {
        this.setState({ showFormularioEditarSignatario: true });
        this.getTodosSignatarios()
    }

    handleOnChangeBuscarEditarSignatario = event => {
        const {value, name} = event.target
        this.setState({ [name]: value }, () => //El name es nombreBuscarEditarSignatario
            this.filtrarBusquedaSignatarios() 
        )
    }

    getTodosSignatarios = () => {
        API.getSignatarios()
        .then(res => this.setState({ todosSignatarios: res.data }, () =>
            this.filtrarBusquedaSignatarios()
        ))
        .catch(err => console.log(err, "ERROR API.GETtODOSsIGNATARIOS"))
    };

    filtrarBusquedaSignatarios = () => {
       // this.setState((state) => { return {mensaje:
        const signatarioEncontrado = this.state.todosSignatarios.filter(encontrado => 
            (encontrado.nombresignatario).toLowerCase() === this.state.nombreBuscarEditarSignatario.toLowerCase() )
        console.log("SIGNATARIO ENCONTRADO:",signatarioEncontrado)

        this.setState({encontradosSignatarios: signatarioEncontrado})

    }

    // getSignatarioSeleccionado = () => {
    //     API.getSignatarioSeleccionado(this.state.nombreBuscarEditarSignatario)
    //     //.then(res => this.loadBooks())
    //     .catch(err => console.log(err));
    // }

   

     

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
        ) : (null)}

        {/*--------- Modal signatarios */}
        <ReactModal 
            isOpen={this.state.showModal}
            contentLabel="onRequestClose Example"
            onRequestClose={this.handleCloseModal}
            shouldCloseOnOverlayClick={false}
            ariaHideApp={true}
            shouldFocusAfterRender={true}
        >
            
            <button onClick={this.empezaragregarsignatario}>Agregar empleado</button>
            <button onClick={this.empezareditarsignatario}>Editar empleado</button>

            {this.state.showFormularioAgregarSignatario ? (
                <form>
                    <div className="form-group">
                        <label>Agrega un nuevo empleado</label>
                        <Input
                            label="Clave"
                            name="claveNuevoSignatario"
                            value={this.state.claveNuevoSignatario}
                            onChange={this.handleOnChangeInputNuevoSignatario}
                        />
                        <Input
                            label="Nombre"
                            name="nombreNuevoSignatario"
                            value={this.state.nombreNuevoSignatario}
                            onChange={this.handleOnChangeInputNuevoSignatario}
                        />
                        <Input
                            label="Contraseña"
                            name="contrasenaNuevoSignatario"
                            value={this.state.contrasenaNuevoSignatario}
                            onChange={this.handleOnChangeInputNuevoSignatario}
                        />
                        <Listado>
                            {this.state.metodosdisponibles.map(mapmetodosdisponibles => (
                                <li className={`${this.state.liClass}`||"limetodos"} onClick={()=>this.handleMetodoClick(mapmetodosdisponibles.nombremetodo)} name={mapmetodosdisponibles.nombremetodo} id={mapmetodosdisponibles._id} key={mapmetodosdisponibles._id}>
                                    {mapmetodosdisponibles.nombremetodo}
                                </li>
                            ))}
                        </Listado>
                        <BotonGuardar
                            onClick={this.botonGuardarEmpleadoNuevo}
                        >
                            Guardar empleado nuevo
                        </BotonGuardar>
                    </div>
                </form> 
            ) : (null)}

            {this.state.showFormularioEditarSignatario ? (
                <form>
                    <div className="form-group">
                        <label>Editar empleados</label>
                        <Input
                            label="Buscar empleado por nombre"
                            name="nombreBuscarEditarSignatario"
                            value={this.state.nombreBuscarEditarSignatario}
                            onChange={this.handleOnChangeBuscarEditarSignatario}
                        />
                        <ul className="list-group list-group-flush">
                            {this.state.encontradosSignatarios.length ? ( 
                                <div>
                                    {this.state.encontradosSignatarios.map(signatarioEncontrado => (
                                    <ListadoAgrupado
                                        key={signatarioEncontrado._id}
                                        nombre={signatarioEncontrado.nombresignatario}
                                        mostrarDetalleSignatario= {this.mostrarDetalleSignatario}
                                    />
                                    ))}
                                </div>
                            ):(
                                this.state.nombreBuscarEditarSignatario?(<p>...Buscando</p>)
                                :(<p>No hay infomación para mostrar</p>)
                            )}
                        </ul>





                    </div>
                </form>
            ) : (null)}

           

            <button onClick={this.handleCloseModal}>Close Modal</button>
        </ReactModal>


        {/*--------- Modal equipo */}


    </div>






    );
  }
}

export default Engrane;        







