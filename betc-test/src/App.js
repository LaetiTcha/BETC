import React from 'react';
import './App.css';
import Weather from './app_component/weather.component';

// api call api.openweathermap.org/data/2.5/weather?q=London,uk
const API_key = "e42ca4b5c4de5ce5717d9e5bb5c1dc8f";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            city: undefined,
            main: undefined,
            celsius: undefined,
            description: "",
            wind: undefined,
            humidity:undefined,
            latitude: undefined,
            longitude: undefined,
            error: false,
            wind_direction: undefined,
        };
        this.getWeather();
    }

    calCelsius(temp){
        let cell = Math.floor(temp - 273.15);
        return cell;
    }

    calKilometers(km) {
        let mile = Math.floor(km * 1.609);
        return mile;
    }

    getWeather = async () =>{
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_key}`);

        const response = await api_call.json();

        console.log(response);

        this.setState({
            city: response.name,
            celsius: this.calCelsius(response.main.temp),
            description: response.weather[0].description,
            wind: this.calKilometers(response.wind.speed),
            humidity: response.main.humidity,
            latitude: response.coord.lat,
            longitude: response.coord.lon,
            wind_direction: response.wind.deg,
        });
    }

    render() {
        return(
            <div className="App">
                <Weather
                    city={this.state.city}
                    temp_celsius={this.state.celsius}
                    description={this.state.description}
                    wind_speed={this.state.wind}
                    humidity={this.state.humidity}
                    latitude={this.state.latitude}
                    longitude={this.state.longitude}
                    wind_direction={this.state.wind_direction}
                />
            </div>
        );
    }
}

export default App;