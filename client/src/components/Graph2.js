import React, { Component } from 'react';
import * as d3 from 'd3'
import Svg2 from "../Helpers/svg2";
 


class Graph2 extends Component {

  constructor(props){
    super(props);
    this.state = {mois: 'month', dateDebut: '2019-01-01',dateFin: '2020-12-01',data: []};
  }
  
  componentWillMount(){
    console.log('Je suis appelé en premier!');
  }

  getData(){
    fetch(`https://${document.domain}:8443/salesFilter?startDate=${this.state.dateDebut}&endDate=${this.state.dateFin}`)
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
      this.getData()
  }

  handleChangeDateDebut(event) {
    this.setState({ dateDebut: event.target.value});
    this.getData();
  };
  handleChangeDateFin(event) {
    this.setState({dateFin: event.target.value});
    this.getData();
  };
    handleChangeDateDebutMois(event) {
    this.setState({mois: event.target.value});
    this.getData();
  };

render() {

  function parseData(data) {
      var arr = [];
      data.map(function (thisList){
        arr.push({
          nb_ventes: thisList.nb_ventes | 0,
            date_vente : thisList.date_vente
        });
      })
      return arr;
    }

    const c  =parseData(this.state.data)

      const generateData = () =>
       c.map((item, index) => ({
        index: index,
        date: new Date(item.date_vente.date).toLocaleDateString('fr-FR', {day: 'numeric', year: 'numeric', month: 'long' }),
        value: item.nb_ventes
      }));
       
      const data = generateData();
      console.log(data)



  return (
    <div>

                <h3>Filtrer par  : <b class=" text-primary">{this.state.mois}</b></h3>
        <h3>La date du debut est : <b class=" text-primary">{this.state.dateDebut}</b></h3>
        <h3>L'annee de fin : <b class=" text-primary">{this.state.dateFin}</b></h3>
      
        <select onChange={this.handleChangeDateDebutMois.bind(this)} class="custom-select" name="">
                  <option >day</option>
                  <option >month</option>
                  <option >year</option>
              
               </select>
         <br/><br/>
         <input type="date" class="form-control" placeholder="Saisir la date de debut "
          onChange={this.handleChangeDateDebut.bind(this)}
            min="2015-01-01" max="2020-12-31"/><br/>
       
          <input type="date" class="form-control" placeholder="Saisir la date de fin "
           onChange={this.handleChangeDateFin.bind(this)}
            min="2015-01-01" max="2020-12-31"/>

      <Svg2
          data={data}
          width={1200}
          height={800}
          top={20}
          bottom={30}
          left={100}
          right={30}
        />


         </div>
          
    );
}
}

   
 
     
export default Graph2;
