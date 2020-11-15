import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";



const Svg = props => {

const data = props.data;

function isInteger(n) {
    return n === +n && n === (n|0);
}

const  margin = 40;
const width = 1000, height = 700;
const offset = 50;

const h = height - 2 * margin, w = width - 2 * margin;

const x = d3.scaleLinear()
           .domain(d3.extent(data, d => d.year )) //domaine : [min,max] d'year
           .range([margin, w])


const y = d3.scaleLinear()
           .domain([20000, d3.max(data, d => d.average)]) // domaine [0,max] de b (à partir de 0)
           .range([h, margin])




const line = d3.line()
           .x(d => x(d.year))
           .y(d => y(d.average))
           .curve(d3.curveCatmullRom.alpha(0.5))
           
          
const xTicks = x.ticks(6).map(d => (
               <g transform={`translate(${x(d)},${h + margin})`}>  
                 <text>{(isInteger(d))? d:' '}</text>
                 <line x1='0' x1='0' y1='0' y2='10' transform="translate(0,-40)" stroke="gray"/>
               </g>
             : null
         ))
     
const yTicks = y.ticks(5).map(d => (
             y(d) > 10 && y(d) < h ? 
               <g transform={`translate(${margin},${y(d)})`}>  
                 <text x="-50" y="5" transform=" translate(-20,-25) rotate(270)">{d}</text>
                 <line x1='0' x1='5' y1='0' y2='0' transform="translate(-5,0)" stroke="gray"/>
                 <line className='gridline' x1='0' x1={w - margin} y1='0' y2='0' transform="translate(-5,0)" stroke="gray"/> 
               </g>
             : null
         ))


         return  ( 
         <div>

           
           <svg className="svg" width={width} height={height}>
              <line className="axis" x1={margin} x2={w} y1={h} y2={h} stroke="gray"/>
              <line className="axis" x1={margin} x2={margin} y1={margin} y2={h} stroke="gray" />
              <path className="path" fill="none" stroke="steelblue" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" d={line(data)}/>
              <g className="axis-labels">
                {xTicks}
              </g>
              <g className="axis-labels">
                {yTicks}
              </g>
           </svg>
           
           </div>
         )

}

export default Svg;