import React from 'react';
import Plot from 'react-plotly.js';

function PlotlyGraph({ className, jsonData, keyProp, title }) {
    const dataDict = JSON.parse(jsonData); // Parse JSON string into an object
    const csvData = dataDict[keyProp];
    const noOfRetries = csvData.retries || 0;
    const csvRows = csvData.data.split('\n');
    const xData = [];
    const yData = [];

    // Parse the CSV data and extract x and y values
    for (const row of csvRows.slice(1, -1)) {
        const [x, y] = row.split(',');
        xData.push(x);
        yData.push(parseFloat(y));
    }

    // Create the Plotly trace
    const trace = {
        x: xData,
        y: yData,
        type: 'scatter',
        mode: 'lines+markers',
        name: `Value over Time - ${keyProp}`,
    };

    // Set the Plotly data
    const data = [trace];

    let xAxisLabel = 'Year'; // default x-axis label
    if (title.includes('Month')) xAxisLabel = 'Month';
    else if (title.includes('Quarter')) xAxisLabel = 'Quarter';

    // if the title is too long, insert a line break
    let titleArray = title.split(' ');
    if (titleArray.length > 6) {
        titleArray.splice(5, 0, '<br>');
        title = titleArray.join(' ');
    }

    const layout = {
        title: title,
        xaxis: {
            title: {
                text: xAxisLabel,
            },
            nticks: 12,     // set a maximum of 12 ticks on the x-axis
        },
        yaxis: {
            title: {
                text: 'CPI'
            }
        }
    };

    // Configuration for the mode bar
    const config = {
        displayModeBar: true,
        modeBarButtonsToRemove: [
            'select2d', 
            'lasso2d', 
            'zoomIn2d', 
            'autoScale2d', 
            'hoverClosestCartesian', 
            'hoverCompareCartesian', 
            'toggleSpikelines'
        ],
    };

    return (
        <div className={`${className} w-max`}>
            <Plot 
                data={data} 
                layout={layout} 
                config={config}
            />
            <div className='bg-white mt-[-5px] font-bold'>Worker assigned to retrieve data for this graph required {noOfRetries} SAS session connection retries</div>
        </div>
    );
    
}

export default PlotlyGraph;