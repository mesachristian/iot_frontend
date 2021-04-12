import './styles.css';

function CircularIconButton(props){

    return(
        <a className="icon-button" onClick={props.onClick}>
          {props.icon}
        </a>
    );
}

export default CircularIconButton;
