import React, {useEffect, useRef, useState} from 'react';
import './styles.css';

import bombillo from 'icons/bombillo.png';
import llama from 'icons/llama.png';
import fan from 'icons/fan.png';

import {
    getActuatorsData,
    updateLuminosityService,
    updateFanService
} from './services/actuators_service';

const Actuators = (props) => {

    const [luminosity, setIluminosity] = useState();
    const [gasAlert, setGasAlert] = useState();
    const [fanState, setFanState] = useState();

    function updateLuminosity(){
        var sliderValue = document.getElementById('luminosity-input').value;
        var percentage = sliderValue * 100 / 255;
        var color = `linear-gradient(90deg, #fc5185 ${percentage}%, #364f6b ${percentage}%)`;
        document.getElementById('luminosity-input').style.background = color;
        document.getElementById('luminosity-input').value=sliderValue;

        updateLuminosityService(document.getElementById('luminosity-input').value).then( () => {
            setIluminosity(document.getElementById('luminosity-input').value);
        });
    }
    

    function updateFanState(){
        updateFanService(!fanState).then( () => {
            setFanState(!fanState);
        });
    }

    const mounted = useRef();

    useEffect( () => {

        if (!mounted.current) {

            getActuatorsData().then( (data) => {
                var percentage = data.luminosity.intensity * 100 / 255;
                var color = `linear-gradient(90deg, #fc5185 ${percentage}%, #364f6b ${percentage}%)`;
                document.getElementById('luminosity-input').style.background = color;
                document.getElementById('luminosity-input').value=data.luminosity.intensity;
                setIluminosity(data.luminosity.intensity);
                setGasAlert( data.gasAlert ? "ON" : "OFF");
                setFanState(data.fan.speed)
            });

            mounted.current = true;
        }else{
            
        }
    });

    return(
        <div className="actuators">
            
            <div className="title-ll-container">
                <p className="title-ll">
                    Tus actuadores...
                </p>
            </div>
            <div className="actuators-container">
                <FanActuator fanState={fanState} toggleListener={updateFanState}/>
                <LuminosityActuator update={updateLuminosity} value={luminosity}/>
                <GasActuator alert={gasAlert}/>
            </div>

        </div>
    );
};

const FanActuator = ({fanState, toggleListener}) => {

    const toggleClass = fanState ? 'toggle-button-active' : 'toggle-button';
    const label = fanState ? 'ON' : 'OFF';

    return(
        <div className="fan-actuator">
            <div className="actuator-title-container">
                <h2>Ventilador</h2>
            </div>

            <div className="actuator-ilustration-container">
                <img src={fan} width="150" height="150"/>
            </div>

            <div className="actuator-input-container">

                <div className={toggleClass}>
                    <div className="toggle-inner-circle" onClick={() => toggleListener()}>
                    </div>
                </div>
            </div>

            <div className="luminosity-value">Estado : {label}</div>          
        </div>
    );
};




const LuminosityActuator = ({update, value}) => {

    return(
        <div className="luminosity-actuator">
            <div className="actuator-title-container">
                <h2>Control Luminosidad</h2>
            </div>

            <div className="actuator-ilustration-container">
                <img src={bombillo} width="150" height="150"/>
            </div>

            <div className="actuator-input-container">

                <input 
                    id="luminosity-input" 
                    className="luminosity-i" 
                    type="range" 
                    min="0" 
                    max="255" 
                    onChange={() => {update()}}
                />
            </div>

            <div className="luminosity-value">Value : {value}</div>

        </div>
    );
};

const GasActuator = ({alert}) => {

    const alertStyle = (alert === "ON") ? 'gas-alert-on' : 'gas-alert-off';

    return(
        <div className="gas-actuator">
            <div className="actuator-title-container">
                <h2>Alerta Gas</h2>
            </div>

            <div className="actuator-ilustration-container">
                <img src={llama} width="150" height="150"/>
            </div>

            <div className={alertStyle}>Alerta : {alert}</div>          
        </div>
    );
};

export default Actuators;