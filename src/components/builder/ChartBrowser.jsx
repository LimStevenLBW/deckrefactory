import React from 'react';

import { getColumnChartData, getPieChartData } from '../../utils/dataPoints';
//import CanvasJSReact from '../../utils/canvasjs/canvasjs.react';
import ColumnChart from './ColumnChart';
import PieChart from './PieChart';

const ChartBrowser = ({ deckList }) => {
    const columnChartData = getColumnChartData(deckList);
    const pieChartData = getPieChartData(deckList);

    return (  
        <React.Fragment>
            <div className = "row">
                <div className = "col-8">
                    <ColumnChart columnData = {columnChartData} />
                </div>
				{/* onRef={ref => this.chart = ref} */}
                {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
                
                <div className = "col-4">
                    <PieChart pieData = {pieChartData} />
                </div>
			
            </div>

            <div className = "row">
                <div className = "col"></div>
            </div>
        </React.Fragment>
    );
}
 
export default ChartBrowser;
