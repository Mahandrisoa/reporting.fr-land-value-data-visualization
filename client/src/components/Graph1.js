import React, { Component } from 'react';
import * as d3 from 'd3'
import Svg from "../Helpers/svg";
 


class Graph1 extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: []
    }
  }
  componentWillMount(){
  }

  getData(){
  	fetch(`https://${document.domain}:8443/averageSalesPerYear`)
      .then(response => {
        if (response.ok) {
          const data = response.json()
          return data;
        } else {
          throw new Error('Something went wrong ...');
        }
      })
      .then(data => {
        this.setState({data: data });
      })
      .catch(error => console.log("error"));

  }

  componentDidMount(){
    this.getData();
  }

 
  render() {

  	const data =  this.state.data

    
		return  ( 
         <Svg data={data}>
			
         </Svg>
         )
  }
}
   
 
     
export default Graph1;
