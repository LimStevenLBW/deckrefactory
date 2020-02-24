import React from 'react';

import CanvasJSReact from '../../utils/canvasjs/canvasjs.react';
//var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const ColumnChart = ({ columnData }) => {
    const options = {
        animationEnabled: true,
        exportEnabled: false,
        theme: "light2", //"light1", "dark1", "dark2"
        axisY:{
            title: "Quantity",
            titleFontFamily: "arial",
            tickLength: 15,
            interval: 1,
        },
        axisX:{
            title: "Mana Curve",
            titleFontFamily: "arial",
        },
        data: [{
            type: "column", //change type to bar, line, area, pie, etc
            //indexLabel: "{y}", //Shows y value on all Data Points
            indexLabelFontColor: "#5A5757",
            indexLabelPlacement: "outside",
            dataPoints: columnData,
        }]
    }

    return (  
         <CanvasJSChart options = {options} />
    );
}
 
export default ColumnChart;
