import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = { term: '' };

    this._onTermChanged = this._onTermChanged.bind(this);
    this._onFormSubmit = this._onFormSubmit.bind(this);
  }

  _onTermChanged(event){
    this.setState({ term:event.target.value });
  }

  _onFormSubmit(event){
    event.preventDefault();
    //We need to fetch weather data.
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  }

  render(){

    return (
      <form onSubmit={this._onFormSubmit} className="input-group">
        <input
          className="form-control"
          placeholder="Get a five-day forecast in your favorite cities"
          value={this.state.term}
          onChange={this._onTermChanged}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            Submit
          </button>
        </span>
      </form>

    );
  }

}


function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
