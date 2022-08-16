import React, { useState } from "react";
import { BarChart, ScatterChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import * as echarts from "echarts/core";
import ReactEChartsCore from "echarts-for-react/lib/core";
import { colorIntensity, hue, alcohol, malicAcid } from "./data";
const Barchart = () => {
  const [alco, setAlco] = useState(alcohol)
  const [mali, setMali] = useState(malicAcid)
  var data1=[]
  for(let i=0;i<alco.length;i++) {
    var data2=[alco[i],mali[i]]
    data1.push(data2)

  }
    const options = {
        grid: { top: 8, right: 8, bottom: 24, left: 36 },
        xAxis: {
          type: "value",

        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: data1,
            type: "bar",
            smooth: true,
            barWidth: "40%",
          },
        ],
        title: {
          text: "BarGraph",
          subtext: 'Alcohol vs Average Malic acid',
          left: "center",
          textStyle: {
            fontSize: 30
          }},
        tooltip: {
          trigger: "axis",
        },
      };
      echarts.use([ScatterChart, CanvasRenderer]);
      //   return <ReactECharts option={options} />;
    
      return (
        <ReactEChartsCore
        
          echarts={echarts}
          option={options}
          notMerge={true}
          lazyUpdate={true}
          style={{width:"22rem",height:"30rem"}}
          onChartReady={() => console.log("chart Printed")}
        />
      );
    };

export default Barchart