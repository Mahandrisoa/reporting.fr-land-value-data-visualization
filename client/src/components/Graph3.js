import React, { Component } from 'react';
import * as d3 from 'd3'
import Svg3 from "../Helpers/svg3";
 
class  Graph3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {annee: '2016',data: []};
  };
  
  componentWillMount(){
    console.log('Je suis appeler en premier!');
    }


    getData(){
    fetch(`https://${document.domain}:8443/salesPerDepartment`)
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
    this.timerID = setInterval(
      () => this.getData(),
      1000
      );
    }

    componentWillUnmount() {
      clearInterval(this.timerID);
    }
    
  handleChange(event) {
    this.setState({ annee: event.target.value});
  };
  

  render() {

    function parseData(data) {
      var arr = [];
      data.map(function (thisList){
          arr.push({
            value: thisList.value,
            department_code : thisList.department_code 
          });
      })
      return arr;
  }

  const c  =parseData(this.state.data)

  const generateData = () =>
   c.map((item, index) => ({
    index: index,
    value: item.value,
    department_code: item.department_code

  }));
   
  const data = generateData();
  /*if (data && data.length>0){
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    console.log(data.reduce(reducer));
  }*/
  

  return (
 
 <div>
    <center  >
        <h3>L'annee selectioné est : <b class=" text-primary">{this.state.annee}</b></h3>
        <select onChange={this.handleChange.bind(this)} class="custom-select" name="">
                  <option >2015</option>
                  <option >2016</option>
                  <option >2017</option>
                  <option >2018</option>
                  <option >2019</option>

               </select>


        <br/><br/><br/><br/>
        <Svg3
          data={data}
          width={800}
          height={800}
          innerRadius={150}
          outerRadius={400}
        />
        </center>
      </div>
        
  );
}
}

   
 
     
export default Graph3;
