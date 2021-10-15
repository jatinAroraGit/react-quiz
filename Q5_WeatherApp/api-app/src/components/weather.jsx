import React, { useState } from 'react';
import '../App.css'
function Weather(props) {
  let [query, setQuery] = useState();
  let [locations, setLocations] = useState([]);
  let [location, setLocation] = useState();
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState();
  let locationsList = [];

  const handleChange = function (e) {
    setQuery(e.target.value)
  }

  const getLocation = function (query) {
    locationsList = [];
    setError();
    setLocation();
    setLoading(true);
    fetch("http://www.metaweather.com/api/location/search/?query=" + query)
      .then(res => res.json())
      .then(result => {
        if (result.length > 0) {
          setLocations(result);
          setLoading(false);
        }
        else {
          setLoading(false);
          setError('Could Not Find a city with this name');
        }
      },
        (error) => {
          setLoading(false);
          setError('Oops! Something Went wrong. Try Again Later');
        }
      )

  }
  locations.forEach(r => {
    locationsList.push(<h5 onClick={() => getWeather(r.woeid)} style={{ margin: 1, textAlign: "start", color: "#FFFFFF", cursor: 'pointer', textDecoration: 'underline' }}>{r.title}</h5>)
  });

  let getWeather = function (locId) {
    setError();
    setLoading(true);
    setLocations([]);
    locationsList = [];

    fetch("http://www.metaweather.com/api/location/" + locId)
      .then(res => res.json())
      .then(result => {
        setLocation(result);
        setLoading(false);
      },
        (error) => {
          setLoading(false);
          setError('There was an error getting the info. Try again later.')
        }
      )

  }



  return (
    <div>
      <h3>Weather</h3>
      <div>
        <input onChange={handleChange} size='20' style={{ background: "#000000", color: "#FFFFFF", fontSize: 20, borderRadius: 20, padding: 10, borderColor: "#FFFFFF", borderWidth: 0 }} placeholder="Enter City" />
        <button style={{ background: "#FFFFFF", fontSize: 20, borderWidth: 0, marginLeft: 5 }} onClick={() => getLocation(query)}>Search</button>
      </div>
      <div>
        {locationsList.length > 0 &&
          <div>
            <h4>Select A Location</h4>

            {locationsList}
          </div>
        }

        {error && <div>
          <p>{error}</p>
        </div>

        }
        {loading && <div>
          <p>Loading Data ....</p>
        </div>

        }
      </div>
      <div>
        {location &&
          <div>
            <h3>Weather Detail</h3>
            <div style={{ border: "3px solid #FFFFFF", borderRadius: 10, padding: 5 }}>
              <h4>  {location.title}, {location.parent.title} </h4>
              <li>Weather Status: {location.consolidated_weather[0].weather_state_name}</li>
              <li>Max temp: {location.consolidated_weather[0].max_temp}</li>
              <li>Max temp: {location.consolidated_weather[0].min_temp}</li>
              <li>Humidity: {location.consolidated_weather[0].humidity}</li>
              <li>Visibility: {Math.round(location.consolidated_weather[0].visibility * 100) / 100}</li>
              <li>Wind Speed: {Math.round(location.consolidated_weather[0].wind_speed * 100) / 100}</li>
            </div>
          </div>
        }
      </div>
    </div>
  );

}

export default Weather;