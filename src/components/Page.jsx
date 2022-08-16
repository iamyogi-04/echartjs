import React ,{useState}from "react";
import ReactECharts from "echarts-for-react";
import { BarChart, ScatterChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import * as echarts from "echarts/core";
import ReactEChartsCore from "echarts-for-react/lib/core";
import { colorIntensity, hue, alcohol, malicAcid } from "./data";
const Page = () => {
  const [first, setFirst] = useState(hue)
  const [color, setColor] = useState(colorIntensity)
  var data1=[]
  for(let i=0;i<first.length;i++) {
    var data2=[color[i],first[i]]
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
    color: ["#e32636"],
    series: [
      {
        data: data1,
        type: "scatter",
        smooth: true,
      },
    ],
    title: {
      text: "Scatter Graph",
      subtext: 'ColorIntensity  vs Hue',
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
    <>
    <div className="page">
    <ReactEChartsCore
    
      echarts={echarts}
      option={options}
      notMerge={true}
      lazyUpdate={true}
      style={{width:"22rem",height:"30rem"}}
      onChartReady={() => console.log("chart Printed")}
    />
    </div>
    
    </>
  );
};

export default Page;
