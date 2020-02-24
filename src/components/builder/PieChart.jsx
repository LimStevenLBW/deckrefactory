import React from 'react';

import CanvasJSReact from '../../utils/canvasjs/canvasjs.react';
//var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const PieChart = ({ pieData }) => {
    const options = {
        theme: "light2",
        animationEnabled: true,
        exportEnabled: false,
        title:{
            text: "Color Distribution"
        },
        data: [{
            type: "pie",
            showInLegend: true,
            legendText: "{label}",
            toolTipContent: "{label}: <strong>{y}%</strong>",
            indexLabel: "{y}%",
            indexLabelPlacement: "inside",
            dataPoints: pieData,
        }]
    }

    return (  
         <CanvasJSChart options = {options} />
    );
}
 
export default PieChart;
