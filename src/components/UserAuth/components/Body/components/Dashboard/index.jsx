import React, { useEffect, useState, useRef } from 'react';
import './styles.css';
import {
    getCurrentDayTemperatureData,
    getCurrentDayLightIntensityData,
    getCurrentDayNaturalGasData
} from './services/services';

import {useAuth} from 'context/AuthContext';

import Chart from 'chart.js';
import LineChart from 'components/LineChart';

function download(data, fileName){
    const blob = new Blob([data] , { encoding:"UTF-8", type : 'text/csv;charset=UTF-8' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('hidden', '');
    a.setAttribute('href',url);
    a.setAttribute('download',fileName);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

function downloadTempData(){
    const csvRows = [];
    const headers = ["hour" ,"value"];
    csvRows.push(headers.join(';'));
    
    getCurrentDayTemperatureData().then( (data) => {

        const trueData = data.filter( (el) => { return el });

        trueData.map( (element, idx) => {
            csvRows.push(`"${idx + 1}:00\";${element}`);
        });
        const csvData = csvRows.join('\n');
        download(csvData, 'temperatura.csv');
    });
}

function downloadLightData(){
    const csvRows = [];
    const headers = ["hour" ,"value"];
    csvRows.push(headers.join(';'));
    
    getCurrentDayLightIntensityData().then( (data) => {

        const trueData = data.filter( (el) => { return el });

        trueData.map( (element, idx) => {
            csvRows.push(`"${idx + 1}:00\";${element}`);
        });
        const csvData = csvRows.join('\n');
        download(csvData, 'intensidad_luminica.csv');
    });
}

function downloadGasData(){
    const csvRows = [];
    const headers = ["hour" ,"value"];
    csvRows.push(headers.join(';'));
    
    getCurrentDayNaturalGasData().then( (data) => {

        const trueData = data.filter( (el) => { return el });

        trueData.map( (element, idx) => {
            csvRows.push(`"${idx + 1}:00\";${element}`);
        });
        const csvData = csvRows.join('\n');
        download(csvData, 'gas.csv');
    });
}


export default function Dashboard(props){
    
    const {currentUser} = useAuth();

    const username = currentUser.displayName;

    const [temperatureData, setTemperatureData] = useState();
    const [temperatureLabels, setTemperatureLabels] = useState();

    const [lightData, setLightData] = useState();
    const [lightLabels, setLightLabels] = useState();

    const [gasData, setGasData] = useState();
    const [gasLabels, setGasLabels] = useState();

    const mounted = useRef();

    useEffect(() => {
    if (!mounted.current) {

        getCurrentDayTemperatureData().then( (data) => {

            const trueData = data.filter( (el) => { return el });

            const labels = trueData.map( (element, idx) => {
                return `${idx + 1}`;
            });

            setTemperatureData(trueData);
            setTemperatureLabels(labels);
        });

        getCurrentDayLightIntensityData().then( (data) => {

            const trueData = data.filter( (el) => { return el });

            const labels = trueData.map( (element, idx) => {
                return `${idx + 1}`;
            });

            setLightData(trueData);
            setLightLabels(labels);
        });

        getCurrentDayNaturalGasData().then( (data) => {

            const trueData = data.filter( (el) => { return el });

            const labels = trueData.map( (element, idx) => {
                return `${idx + 1}`;
            });

            setGasData(trueData);
            setGasLabels(labels);
        });
        
        mounted.current = true;
    } else {

        const timer = setTimeout( () => {
            for (var id in Chart.instances) {
                Chart.instances[id].resize();
            }
        }, 400);

        return () => clearTimeout(timer);
    }
    });

    return(
        <div className="dashboard">
            
            <div className="title-ll-container">
                <p className="title-ll">¡Bienvenido {username}!</p>
            </div>

            {temperatureData, temperatureLabels && 
            <LineChart 
                chartID="temp-1"
                labels={temperatureLabels}
                data={temperatureData}
                chartLabel="Temperatura"
                yAxesLabel="Temperatura(°)"
                xAxesLabel="Horas"
                title="Temperatura"
                downloadData={downloadTempData}/>
            }

            {lightData, lightLabels && 
            <LineChart 
                chartID="light-1"
                labels={lightLabels}
                data={lightData}
                chartLabel="Luz"
                yAxesLabel="Luz(W)"
                xAxesLabel="Horas"
                title="Intensidad Luminica"
                downloadData={downloadLightData}/>
            }

            {gasData, gasLabels && 
            <LineChart 
                chartID="gas-1"
                labels={gasLabels}
                data={gasData}
                chartLabel="Gas"
                yAxesLabel="Gas(x)"
                xAxesLabel="Horas"
                title="Gas"
                downloadData={downloadGasData}/>
            }
        </div>
    );
}