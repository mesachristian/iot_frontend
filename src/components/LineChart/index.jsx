import React, {useEffect, useState} from 'react';

import Chart from 'chart.js';

import './styles.css';

const LineChart = (props) => {

    const CHART_DATA = {
        labels : props.labels,
        datasets : [{
            label: props.chartLabel,
            fill : false,
            backgroundColor: 'rgb(54, 79, 107)',
            borderColor: 'rgb(252, 81, 133)',
            data: props.data
        }]
    };
     
    const CHART_OPTIONS = {
        showLines : true,
        responsive : true,
        maintainAspectRatio : false,
        legend: {
            labels: {
                fontColor: 'white'
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    fontColor: 'white'
                },
                scaleLabel : {
                    display : true,
                    labelString : props.yAxesLabel,
                    fontColor: 'white'
                },
            }],
    
            xAxes:[{
                ticks: {
                    fontColor: 'white'
                },
                scaleLabel : {
                    display : true,
                    labelString : props.xAxesLabel,
                    fontColor: 'white'
                }
            }]
        }
    };

    const CHART_PARAM = {
        type : 'line',
        data : CHART_DATA,
        options : CHART_OPTIONS
    };

    const [chart, setChart] = useState();

    useEffect( () => {
        const ctx = document.getElementById(props.chartID).getContext('2d');
        setChart( new Chart(ctx, CHART_PARAM) );
    }, []);

    return(
        <div className="chart-container">
            
            <div className="chart-title-container">
                <h2>{props.title}</h2>
            </div>

            <div style={{height : 250}}>
            <canvas id={props.chartID} ></canvas>
            </div>

            <div className="download-chart-button-container">
                <button className="download-chart-button" onClick={props.downloadData}>
                    <i className="fa fa-fw fa-arrow-down" width="10" height="10"></i>
                    <p>Descargar CSV</p>
                </button>
            </div>
            
        </div>
        
    );

};

export default LineChart;