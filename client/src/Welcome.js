
import React from 'react';
import './welcome.css';
import Tabs from "./components/Tabs";
import Graph1 from "./components/Graph1";
import Graph2 from "./components/Graph2";
import Graph3 from "./components/Graph3";

const Welcome = () => (
    <>
    <header>
    <h1 className="titre">Valeurs foncières</h1>
    </header>
    <br/><br/><br/>
    <div>
      <Tabs>
        <div label="Prix moyen au m²">
          <Graph1></Graph1>
        </div>
        <div label="Nombre de ventes">
          <Graph2></Graph2>
        </div>
        <div label="Répartition des ventes">
          <Graph3></Graph3>
        </div>
      </Tabs>
    </div>
    </>
  );


export default Welcome;

