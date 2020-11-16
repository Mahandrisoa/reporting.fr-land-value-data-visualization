import React, { Component } from 'react';
import * as d3 from 'd3'
import Svg2 from "../Helpers/svg2";
import _ from 'lodash'

class Graph2 extends Component {

  constructor(props) {
    super(props);
    this.state = { tri: 'day', dateDebut: '2019-01-01', dateFin: '2020-12-01', data: [] };
  }

  componentWillMount() {
    console.log('Je suis appelé en premier!');
  }

  getData() {
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
        var arr = [];
        data.map(function (thisList) {
          arr.push({
            value: thisList.nb_ventes | 0,
            date: new Date(thisList.date_vente.date).toLocaleDateString('fr-FR', { day: 'numeric', year: 'numeric', month: 'long' })
          });
        })
        if(this.state.tri === "month") {
          var groupedByMoisData = _.chain(arr)
          .groupBy(function(item) {
            return item.date.split(" ")[1] + " " + item.date.split(" ")[2]; 
          })
          .map((value, key) => ({ date: key, value: value.reduce((total, current) => total + current.value, 0) }))
          .value()
          this.setState({ data: groupedByMoisData });
        } else if(this.state.tri === "year") {
          var groupedByYearData = _.chain(arr)
          .groupBy(function(item) {
            return item.date.split(" ")[2]; 
          })
          .map((value, key) => ({ date: key, value: value.reduce((total, current) => total + current.value, 0) }))
          .value()
          this.setState({ data: groupedByYearData });
        } else {
          this.setState({ data: arr });
        }
      })
      .catch(error => console.log(error));
  }

  componentDidMount() {
    this.getData()
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.dateDebut !== this.state.dateDebut || prevState.dateFin !== this.state.dateFin || prevState.tri !== this.state.tri) {
      this.getData()
    }
  }

  handleChangeDateDebut(event) {
    this.setState({ dateDebut: event.target.value });
  };

  handleChangeDateFin(event) {
    this.setState({ dateFin: event.target.value });
  };

  handleChangeDateDebutMois(event) {
    this.setState({ tri: event.target.value });
  };

  render() {
    return (
      <div>
        <h3>Filtre  :</h3>
        <select onChange={this.handleChangeDateDebutMois.bind(this)} class="custom-select" name="">
          <option value="day">Jour</option>
          <option value="month">Mois</option>
          <option value="year">Année</option>

        </select>
        <br /><br />

        <h3>Date début : </h3>
        <input type="date" class="form-control" placeholder="Saisir la date de debut "
          onChange={this.handleChangeDateDebut.bind(this)}
          min="2015-01-01" max="2020-12-31" value={this.state.dateDebut}/><br />

        <h3>Date fin : </h3>
        <input type="date" class="form-control" placeholder="Saisir la date de fin "
          onChange={this.handleChangeDateFin.bind(this)}
          min="2015-01-01" max="2020-12-31" value={this.state.dateFin} />

        {this.state.data.length > 0 && (
        <Svg2
          data={this.state.data}
          width={1200}
          height={800}
          top={20}
          bottom={30}
          left={100}
          right={30}
        />
        )}
      </div>

    );
  }
}

export default Graph2;