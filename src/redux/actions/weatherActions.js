import axios from "axios";

export const weatherFinder = (cityName) => {
  return (dispatch) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=2ed352864e3fb8455799d5183ebb4822`
      )
      .then((response) => {
        console.log(response.data);
        const res = response.data;
        const data = {
          name: res.name,
          temperature: res.main.temp,
          pressure: res.main.pressure,
          humidity: res.main.humidity,
          feels_like: res.main.feels_like,
          coordinates: res.coord,
          temp_min: res.main.temp_min,
          temp_max: res.main.temp_min,
        };
        dispatch(store_weatherData(data));
      })
      .catch((error) => {
        console.log(error);
        const data = {
          errorMsg: "Something went wrong!",
        };
        dispatch(show_Error(data));
      });
  };
};

export const store_weatherData = (data) => {
  return {
    type: "STORE_WEATHER_DATA",
    payload: data,
  };
};
export const city_Name_Update = (data) => {
  return {
    type: "CITY_NAME_UPDATE",
    payload: { data: data },
  };
};

export const show_Error = (data) => {
  return {
    type: "SHOW_ERROR",
    payload: data,
  };
};
