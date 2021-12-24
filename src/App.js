import React, { Component } from "react";
import * as styles from "./App.module.scss";
import * as actions from "./redux/actions/weatherActions";
import { connect } from "react-redux";

class App extends Component {
  // state = {
  //   cityName: "",
  //   name: "",
  //   temperature: "",
  //   pressure: "",
  //   humidity: "",
  //   feels_like: "",
  //   coordinates: "",
  //   temp_min: "",
  //   temp_max: "",
  // };

  inputHandler = (event) => {
    const value = event.target.value;
    // this.setState({ ...this.state, cityName: value });
    console.log(value);
    this.props.onCityNameUpdate(value);
  };

  render() {
    console.log(this.props);
    return (
      <div className={styles.App}>
        <h1>Use Open weather Api and the data for any city input</h1>
        <section className={styles.form}>
          <form>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">City Name</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                // aria-describedby="emailHelp"
                placeholder="Enter City Name"
                onChange={(e) => this.inputHandler(e)}
                value={this.props.cityName}
              />
              <small id="emailHelp" className="form-text text-muted">
                Enter the city name you want to search weather of.
              </small>
            </div>

            <button
              type="button"
              className="btn btn-primary"
              onClick={() => this.props.onCallWeatherApi(this.props.cityName)}
            >
              Search Weather
            </button>
          </form>
        </section>
        <section className="weather">
          <p>
            Name of City: <span>{this.props.name}</span>
          </p>
          <p>
            Temp: <span>{this.props.temperature}</span>
          </p>
          {/* Feels_like: <span></span> */}
          <p>
            Temp_min:
            <span>{this.props.temp_min}</span>
          </p>
          <p>
            Temp_max: <span>{this.props.temp_max}</span>
          </p>
          <p>
            Pressure: <span>{this.props.pressure}</span>
          </p>
          <p>
            Humidity: <span>{this.props.humidity}</span>
          </p>

          {/* <p>Name : <span></span></p>
          <p>Name : <span></span></p> */}
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cityName: state.todos.cityName,
    name: state.todos.name,
    temperature: state.todos.temperature,
    pressure: state.todos.pressure,
    humidity: state.todos.humidity,
    feels_like: state.todos.feels_like,
    coordinates: state.todos.coordinates,
    temp_min: state.todos.temp_min,
    temp_max: state.todos.temp_max,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCallWeatherApi: (city) => dispatch(actions.weatherFinder(city)),
    onCityNameUpdate: (city) => dispatch(actions.city_Name_Update(city)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
