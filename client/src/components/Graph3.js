import React, { Component } from 'react';
import * as d3 from 'd3'
import Svg3 from "../Helpers/svg3";
import { getDepartmentRegion } from "./depsRegion";
import _ from 'lodash'

class  Graph3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {annee: '2015',data: [], total: 0};
  };
  
  componentWillMount(){
    console.log('Je suis appeler en premier!');
  }

  getData(){
    fetch(`https://${document.domain}:8443/salesPerDepartment?year=${this.state.annee}`)
      .then(response => {
      if (response.ok) {
        const data = response.json()
        return data;
      } else {
        throw new Error('Something went wrong ...');
      }
      })
      .then(data => {
        var arr = [];
        data.map(function (thisList){
            arr.push({
              value: thisList.value,
              region : getDepartmentRegion(thisList.department_code)
            });
        })
        var final = _.chain(arr)
          .groupBy("region")
          .map((value, key) => ({ region: key, value: value.reduce((total, current) => total + current.value, 0) }))
          .value()
          console.log(final)

        var total = final.reduce((total, current) => total + current.value, 0);
        this.setState({data: final, total: total });
      })
      .catch(error => console.log("error"));
  }

  componentDidMount(){
    this.getData()
  }
  
  handleChange(event) {
    this.setState({ annee: event.target.value});
  };

  componentDidUpdate(prevProps, prevState) {
    if(prevState.annee !== this.state.annee) {
      this.getData()
    }
  }
  

  render() {
    return (

    <div>
        <center  >
            <select onChange={this.handleChange.bind(this)} class="custom-select" name="">
                      <option >2015</option>
                      <option >2016</option>
                      <option >2017</option>
                      <option >2018</option>
                      <option >2019</option>
                      <option >2020</option>

                  </select>


            <br/><br/><br/><br/>
            {this.state.data.length > 0 && this.state.total !== 0 && (
              <Svg3
                data={this.state.data}
                width={800}
                height={800}
                innerRadius={150}
                outerRadius={400}
                total={this.state.total}
              />
            )}
            </center>
          </div>
            
      );
    }
}

   
 
     
export default Graph3;
