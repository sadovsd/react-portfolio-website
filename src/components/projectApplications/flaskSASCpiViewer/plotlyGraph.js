import React from 'react';
import Plot from 'react-plotly.js';

function PlotlyGraph({ className, csvData, title  }) {
    const csvRows = csvData.split('\n');
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
        name: 'Value over Time',
    };

    // Set the Plotly data
    const data = [trace];
    
    const layout = {
        title: `${title}`,
        xaxis: {
            //tickangle: -55, // set the x-axis labels to be angled
            nticks: 12,     // set a maximum of 12 ticks on the x-axis
        },
    };
    return (
        <div className={className}>
            <Plot data={data} layout={layout} />
        </div>
    );
}

export default PlotlyGraph;
