import React from 'react';
import Plot from 'react-plotly.js';

function PlotlyGraph({ csvData }) {
    const csvRows = csvData.split('\n');
    const xData = [];
    const yData = [];

    // Parse the CSV data and extract x and y values
    for (const row of csvRows.slice(1, -1)) {
        const [x, y] = row.split(',');
        xData.push(parseFloat(x));
        yData.push(parseFloat(y));
    }

    // Create the Plotly trace
    const trace = {
        x: xData,
        y: yData,
        type: 'scatter',
        mode: 'lines+markers',
        name: 'x vs. y',
    };

    // Set the Plotly data
    const data = [trace];

    return (
        <div>
            <h2>x vs. y Plot</h2>
            <Plot data={data} layout={{ title: 'x vs. y' }} />
        </div>
    );
}

export default PlotlyGraph;
