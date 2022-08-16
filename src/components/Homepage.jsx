import React from "react";
import Barchart from "./Barchart";
import Page from "./Page";
import "./homepage.css";
const Homepage = () => {
  return (
    <>
      <div className="container-out">
        <div className="head">
          <h1>Chart Created Using Echart</h1>
        </div>
        <div className="container">
          <div className="scatter">
            <Page className='scatter-graph' />
          </div>
          <div className="bar">
            <Barchart className='bar-graph' />
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
