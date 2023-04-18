import React from "react"; // var React = require("react");
import ReactDOM from 'react-dom'; // var ReactDOM = require("react-dom");
import Card from "./Cards";
import Sdata from "./Sdata"
import './index.css'

ReactDOM.render(
  <>
  <h1 className="heading_style">List of Top 5 Netflix Series</h1>
    {Sdata.map((val) => <Card imgsrc={val.imgsrc} title={val.title} sname={val.sname} link={val.link} /> )}
  </> , document.getElementById('root')
)