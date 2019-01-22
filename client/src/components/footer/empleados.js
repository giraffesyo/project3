// import React, { Component } from "react";
// import Engrane from "../footer/engrane";
// import ReactModal from 'react-modal';

// class Signatariomodal extends Component {

//     constructor (props) {
//         super(props);
//         this.state = {
//           showModal: false
//         };
        
//         this.handleOpenModal = this.handleOpenModal.bind(this);
//         this.handleCloseModal = this.handleCloseModal.bind(this);
//     }
  
//     handleOpenModal = () => {
//         this.setState({ showModal: true });
//     }
  
//     handleCloseModal = () =>{
//         this.setState({ showModal: false });
//     }
  
  
//     render() {
//       return (
  
//         <div className="basico">
          
//             <Engrane
//                 editarbasesignatario={this.handleOpenModal}
//             />
//             <ReactModal 
//                 isOpen={this.state.showModal}
//                 contentLabel="onRequestClose Example"
//                 onRequestClose={this.handleCloseModal}
//                 shouldCloseOnOverlayClick={false}
//             >
//                 <p>Modal text!</p>
//                 <button onClick={this.handleCloseModal}>Close Modal</button>
//             </ReactModal>







//         </div>




  
         
  
       
  
//       );
//     }
//   }
  
//   export default Signatariomodal;
  
  