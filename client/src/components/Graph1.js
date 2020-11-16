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
		return  ( 
        <div className="container-fluid">
          {this.state.data.length > 0 ? (
            <Svg data={this.state.data}>
            </Svg>
          ) : 
          (<center>
            <br/><br/><br/><br/>
            <div class="spinner-border text-info" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </center>)}
        </div>
         )
  }
}
   
 
     
export default Graph1;
