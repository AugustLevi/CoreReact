import React, { useState } from "react";
import ReactApexChart from 'react-apexcharts';

const NewMenu=()=>{
    const [chartData, setChartData] = useState({
        options: {
          chart: {
            id: 'basic-bar'
          },
          xaxis: {
            categories: ['Boy', 'Girl', 'Other']
          }
        },
        series: [
          {
            name: 'series-1',
            data: [30, 40, 10]
          }
        ]
      });
    return(
        <>
       <h1>Hello World</h1>
 <ReactApexChart options={chartData.options}
  series={chartData.series} type="bar" height={500} />
       </>
    )
}

export default NewMenu;