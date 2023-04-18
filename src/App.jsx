import React from "react"; // var React = require("react");
import Card from "./Cards";
import Sdata from "./Sdata"
import Heading from "./Heading";
import './index.css'


const App = () => {
    return(
            <>
            <h1 className="heading_style">List of Top 5 Netflix Series</h1>
                {Sdata.map((val) => <Card key={val.key} imgsrc={val.imgsrc} title={val.title} sname={val.sname} link={val.link} /> )}
            </>
            )
}

export default App;