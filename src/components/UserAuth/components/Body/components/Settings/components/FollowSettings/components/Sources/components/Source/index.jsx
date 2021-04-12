import React, { Component } from 'react';
import './styles.css';

class Source extends Component{

    constructor(props){
        super(props);
        this.state = {
            elements : [],
            lastElementSlected : 0,
            title : this.props.title
        };
        this.handleListItemClicked = this.handleListItemClicked.bind(this);
        this.addElement = this.addElement.bind(this);
        this.deleteElement = this.deleteElement.bind(this);
    }

    componentWillUpdate(){
        if(this.state.lastElementSlected >= this.props.elements.length){
            this.setState({ lastElementSlected : (this.props.elements.length - 1) });
        }
    }

    handleListItemClicked(elementIdx){
        const lastIndex = this.state.lastElementSlected;
        if( elementIdx !==  lastIndex ){
            this.setState( { lastElementSlected : elementIdx} );
        }
    }

    addElement(event){
        this.updateElements();
    }

    deleteElement(event){
        const lastItem = this.state.lastElementSlected;
        this.props.deleteElement(this.props.elements[lastItem]);   
    }

    render(){
        const elements = buildElements(this.props.elements, this.state.lastElementSlected);
        const title = this.props.title;
        
        if(elements === null){
            return (
                <h1>Loading...</h1>
            );
        }

        return(
            <div className="source">
                <h3>{title + ':'}</h3>
                <div className="source-display">
                    <ul className="source-display-list">
                        {elements.map( (element,elementIdx) => {

                            const style = element.isSelected ? 'source-display-list-item-selected' : 'source-display-list-item';

                            return(
                            <li key={elementIdx} className={style} onClick={() => this.handleListItemClicked(elementIdx)}>{element.value}</li>
                            );
                        })}
                    </ul>
                </div>

                <div className="source-btns">
                    <div className="source-btns-container">
                        <button className="source-add-btn" onClick = {this.addElement}>
                            Agregar
                        </button>
                    </div>

                    <div className="source-btns-container">
                        <button className="source-delete-btn" onClick = {this.deleteElement}>
                            Borrar
                        </button>
                    </div>

                </div>
            </div>
        );
    }
}

function buildElements(values, lastItemSlected){
    let elements = [];
    for(let i=0; i < values.length; i++){
        let selected = false;
        if(i === lastItemSlected ){
            selected = true;
        }

        elements.push(
            { isSelected : selected, value : values[i] }
        );
    }
    return elements;
}

export default Source;