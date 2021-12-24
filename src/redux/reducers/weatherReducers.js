const initialState = {
  cityName: "",
  name: "",
  temperature: "",
  pressure: "",
  humidity: "",
  feels_like: "",
  coordinates: "",
  temp_min: "",
  temp_max: "",
  errorMsg: "",
};

export const reducer = (state = initialState, action) => {
  // const payload = action.payload;
  switch (action.type) {
    case "STORE_WEATHER_DATA":
      return {
        ...state,

        name: action.payload.name,
        temperature: action.payload.temperature,
        pressure: action.payload.pressure,
        humidity: action.payload.humidity,
        feels_like: action.payload.feels_like,
        coordinates: action.payload.coordinates,
        temp_min: action.payload.temp_min,
        temp_max: action.payload.temp_max,
      };
    case "CITY_NAME_UPDATE":
      return {
        ...state,
        cityName: action.payload.data,
      };
    case "SHOW_ERROR":
      return {
        ...state,
        cityName: "",
        name: "",
        temperature: "",
        pressure: "",
        humidity: "",
        feels_like: "",
        coordinates: "",
        temp_min: "",
        temp_max: "",
        errorMsg: action.payload.data,
      };

    default:
      return state;
  }
};
