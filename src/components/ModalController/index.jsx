import React, { Component } from 'react';
import Modal from './components/Modal';

class ModalController extends Component{

    constructor(props){
        super(props);
        this.state = {
            show : false,
            closeModal : true
        };

        this.showModal = this.showModal.bind(this);
        this.desactivateModal = this.desactivateModal.bind(this);
    }

    componentDidUpdate(){
        const {activate} = this.props;
        const {show, closeModal} = this.state;
        
        if(activate && show === false){
            this.showModal();
        }

        if(activate === false && show && closeModal === false){
            this.desactivateModal();
        }
    }
    
    showModal(){
        this.setState({show : true, closeModal : false});
    }

    desactivateModal(){
        this.setState({show : true, closeModal : true});
        setTimeout(() => {
            this.setState({show : false, closeModal : true});
        }, 900);
        this.props.desactivateListener();
    }

    render(){
        const showModal = this.state.show;
        const closeModal = this.state.closeModal;

        return(
            <div>
                <Modal show={showModal} closeModal={closeModal} suppress={this.desactivateModal}
                >
                    {this.props.children}
                </Modal>
            </div>
        );
    }
}

export default ModalController;