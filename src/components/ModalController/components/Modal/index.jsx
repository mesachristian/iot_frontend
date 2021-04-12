import React, { Component } from 'react';
import './styles.css';

class Modal extends Component{

    constructor(props){
        super(props);
        this.closeWindow = this.closeWindow.bind(this);
    }

    closeWindow(event){
        if(event.target.classList.contains('my_modal_container-visible')){
            this.props.suppress();
        }
    }

    render(){

        const { show, closeModal, suppress } = this.props;

        const showModal = show ? "my_modal_container-visible" : "my_modal_container-notvisible";
        const animate = closeModal ? "my_modal-close" : "";

        return(
            <div>
            <div className={`my_modal_container ${showModal}`} onClick={this.closeWindow}>
                <div className={`my_modal ${animate}`}>
                    <p className="my_modal_close_btn" onClick={suppress}>X</p>
                    <div>{this.props.children}</div>
                </div>
            </div>
            </div>
        );
    }
}

export default Modal; 