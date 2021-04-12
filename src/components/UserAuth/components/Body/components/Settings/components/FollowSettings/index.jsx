// Fuente : lemon milk meddium ; descargar
// Imagenes de fondo: 
// Helvetica texto; titulos lemon
import React, { Component } from 'react';

// SERVICES
import FollowService from './services/FollowService';

// COMPONENTS
import Sources from './components/Sources';

// STYLES
import './styles.css';

class FollowSettings extends Component{

    render(){
        return(
            <div className="follow-settings">
                <div className="titulo-principal">
                    <h1>Configuración de Follows</h1>
                </div>

                <Timers/>
                <br/>
                <Limits/>
                <br/>
                <Filters/>
                <br/>
                <Sources/>
                <br/>
                <Accounts/>
            </div>
        );
    }
}

function Timers(){
    return(
        <div className="timers">
            <h2 className="">Temporizadores</h2>
            
            <div className="input-line">
                Esperar entre
                &nbsp;<NumberInput id="minMinutesPerOperation"/> -
                &nbsp;<NumberInput id="maxMinutesPerOperation"/>
                &nbsp;minutos antes de cada operación.
            </div>

            <div className="input-line">
                Seguir entre
                &nbsp;<NumberInput id="minFollowsPerOperation"/> -
                &nbsp;<NumberInput id="maxFollowsPerOperation"/>
                &nbsp;personas en cada operación.
            </div>

            <div className="input-line">
                Esperar entre
                &nbsp;<NumberInput id="minSecondsPerFollow"/> -
                &nbsp;<NumberInput id="maxSecondsPerFollow"/>
                &nbsp;segundos entre cada follow.
            </div>

            <div className="input-line">
                Ejucutar los follows entre
                &nbsp;<HourInput id="minExecutionHour"/> -
                &nbsp;<HourInput id="maxExecutionHour"/>.
            </div>

            <div className="days-of-week">
                <label className="day-check-box"><input type="checkbox" id="mondayCheckBox"/>Lunes</label>
                <label className="day-check-box"><input type="checkbox" id="tuesdayCheckBox"/>Martes</label>
                <label className="day-check-box"><input type="checkbox" id="wednesdayCheckBox"/>Miercoles</label>
                <label className="day-check-box"><input type="checkbox" id="thursdayCheckBox"/>Jueves</label>
                <label className="day-check-box"><input type="checkbox" id="fridayCheckBox"/>Viernes</label>
                <label className="day-check-box"><input type="checkbox" id="saturdayCheckBox"/>Sabado</label>
                <label className="day-check-box"><input className="p-checkbox" type="checkbox" id="sundayCheckBox"/>Domingo</label>
            </div>

        </div>
    );
}

function Limits(){
    return(
        <div className="limits">

            <h2>Limites</h2>

            <div className="input-line">
                Seguir maximo
                &nbsp;<NumberInput id="minTopLimitFollowsDay"/> -
                &nbsp;<NumberInput id="maxTopLimitFollowsDay"/>
                &nbsp;cuentas por dia.
            </div>

            <div className="input-line">
                Parar cuando se llegue a
                &nbsp;<NumberInput id="minTopLimitFollows"/> -
                &nbsp;<NumberInput id="maxTopLimitFollows"/>
                &nbsp;seguidores.
            </div>
        </div>
    );
}

function Filters(){
    return(
        <div className="filters">
            <h2>Filtros cuentas a seguir</h2>

            <div>
                <label className="p-checkbox"><input className="p-checkbox" type="checkbox" id="hasProfileImage"/>Imagen de perfil</label>
            </div>

            <div className="input-line">
                Total de publicaciones entre
                &nbsp;<NumberInput id="minAccountPost"/> -
                &nbsp;<NumberInput id="maxAccountPost"/>.
            </div>
        </div>
    );
}

function handleHashtagClick(value){
    console.log(value);
}

function deleteHashtag(value){
    FollowService.deleteHashtag(value);
}

function Accounts(){
    return(
        <div className="accounts">

        </div>
    );
}

class NumberInput extends Component{
    render(){
        const id = this.props.id;
        return <input className="input-number" type="number" min="0" step="1" max="99" id={id}/>
    }
}

class HourInput extends Component{
    render(){
        const id = this.props.id;
        return <input className="input-hour" type="time" id={id}/>
    }
}
export default FollowSettings;