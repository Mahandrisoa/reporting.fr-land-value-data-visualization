
import React from 'react';
import './welcome.css';
import Tabs from "./components/Tabs";
import Graph1 from "./components/Graph1";
import Graph2 from "./components/Graph2";
import Graph3 from "./components/Graph3";

const Welcome = () => (
    <div>
      <h1>Tabs Demo</h1>
      <Tabs>
        <div label="Gator">
          <Graph1></Graph1>
        </div>
        <div label="Croc">
          <Graph2></Graph2>
        </div>
        <div label="Sarcosuchus">
          <Graph3></Graph3>
        </div>
      </Tabs>
    </div>
  );


export default Welcome;

