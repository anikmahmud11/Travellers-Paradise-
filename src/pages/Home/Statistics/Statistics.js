import React from 'react';
import Chart from 'react-google-charts';

const Statistics = () => {
    return (
        <div className="container-fluid w-50" id="place">
            <h1 className="text-success">Most Popular Place to visit</h1>
            <Chart 
  width={'800px'}
  height={'400px'}
  chartType="PieChart"
  loader={<div>Loading Chart</div>}
  data={[
    ['Tourism area', 'Popularity'],
    ['Bandorban', 33],
    ['Saint Martin', 26],
    ['Rangamati', 22],
    ['Sylhet', 10], // Below limit.
    ['Khulna', 9], // Below limit.
  ]}
  options={{
    title: 'Popular area for travel',
    sliceVisibilityThreshold: 0.2, // 20%
  }}
  rootProps={{ 'data-testid': '7' }}
/>
        </div>
    );
};

export default Statistics;