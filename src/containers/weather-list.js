import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import WeatherListItemChart from '../components/weather-list-item-chart';
import GoogleMap from '../components/google-map'

class WeatherList extends Component {


  _renderWeather(cityData){
    //console.log(cityData);
    const data = cityData.list;

    const temps = data.map(weather => Number(weather.main.temp) - 273);
    const pressures = data.map(weather => weather.main.pressure);
    const humidities = data.map(weather => weather.main.humidity);

    const { lat, lon } = cityData.city.coord;

    return (
      <tr key={cityData.city.id}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td>
          <WeatherListItemChart color="green" data={temps} units="C" />
        </td>
        <td>
          <WeatherListItemChart color="blue" data={pressures} units="hPa" />
        </td>
        <td>
          <WeatherListItemChart color="red" data={humidities} units="%" />
        </td>
      </tr>
    );
  }

  render() {


    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Tempurate (C)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this._renderWeather)}
        </tbody>
      </table>
    );
  }


}

function mapStateToProps({ weather }){
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
