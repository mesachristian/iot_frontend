import React, { Component } from "react";
import NavItem from "./components/NavItem";
import Logo from "./components/Logo";
import "./styles.css";

const initialState = {
  elements: [],
  selected: null,
};

class Navbar extends Component {

  constructor(props) {
    super(props);
    
    this.state = initialState;

    this.handleClick = this.handleClick.bind(this);
    this.unselectAllElements = this.unselectAllElements.bind(this);

  }

  componentDidMount() {
    let items = this.props.items;
    let elements = [];
    items.forEach((element, index) => {
      elements.push({
        value: element.name,
        isSelected: false,
        icon: element.hasIcon ? element.iconName : '',
        url : element.url
      });
    });

    this.setState({ elements: elements });
  }

  unselectAllElements(){
    const lastIndex = this.state.selected;
    let elements = this.state.elements;
    if(lastIndex != null){
        elements[lastIndex].isSelected = false;
    }
    this.setState({ elements: elements, selected: null, showLogin : false, showRegister: false });
  }

  handleClick(index) {
    this.updateListItemColor(index);
  }

  updateListItemColor(index){
    const lastIndex = this.state.selected;

    if (index !== lastIndex) {
        let elements = this.state.elements;
        elements[index].isSelected = true;
  
        if (lastIndex != null) {
          elements[lastIndex].isSelected = false;
        }
  
        this.setState({ elements: elements, selected: index });
    }
  }

  render() {
    const elements = this.state.elements;
    const props = this.props;

    const logoProps = {
      appName: props.appName,
      logo: props.logo,
      onBrandClick : () => this.unselectAllElements()
    };

    return (
      <div className="navbar-not-auth">

        <Logo {...logoProps}/>

        
        <nav className="navbar-not-auth-body">
          <ul className="navbar-not-auth-items">
            {elements.map((element, index) => {
              return (
                <NavItem 
                    {...buildNavItemProps(element,index)}
                    key={index} onClick={(index) => this.handleClick(index)}
                >
                  {element.value}
                </NavItem>
              );
            })}
          </ul>
        </nav>
      </div>
    );
  }
}



function buildNavItemProps(element, index){
    let props =  {
        index : index,
        isSelected : element.isSelected,
        iconName : element.icon,
        url : element.url
    };

    return props;
}

export default Navbar;