import React, { useState,useEffect } from "react";
import "./App.css";
import axios from "axios";

import Header from "./components/Header";

const city = "Miami"
const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=`
const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY

function App() {

  const [humidity, setHumidity] = useState('')
  const [pressure, setPressure] = useState('')
  const [city,setCity] = useState('')
  const [country,setCountry] = useState('')
  const [temp,setTemp] = useState('')
  const [temp_min,setTempMin] = useState('')
  const [temp_max,setTempMax] = useState('')
  const [description,setDescription] = useState('')
  const [icon,setIcon] = useState('')
  const [condition,setCondition] = useState('')






  useEffect(()=>{
    axios
    .get(`${baseURL}${REACT_APP_API_KEY}`)
    .then((response)=>{
      setHumidity(response.data.main.humidity)
      setPressure(response.data.main.pressure)
      setCity(response.data.name)
      setCountry(response.data.sys.country)
      setTemp(response.data.main.temp)
      setTempMin(response.data.main.temp_min)
      setTempMax(response.data.main.temp_max)
      setDescription(response.data.weather[0].description)
      setIcon(response.data.weather[0].icon)
      setCondition(response.data.weather[0].main)
      console.log(response.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])


  return (
    <div className="App bg-slate-400">
      <Header />
      <div className="container flex justify-center content-center">
      <h1 class="text-3xl font-bold">Weather app!!</h1>
        <ul>
          <li>Temperature: {temp}</li>
          <li>Humidity: {humidity}</li>
          <li>Pressure: {pressure}</li>
          <li>Min-Temp: {temp_min}</li>
          <li>Condition: {condition}</li>
          <li>Max-Temp: {temp_max}</li>
          <li>Description: {description}</li>
          <li>Icon: {icon}</li>
          <li>City: {city}</li>
          <li>Country: {country}</li>
        </ul>
        <img src='http://openweathermap.org/img/wn/01d@2x.png'/>
      </div>
    </div>
  );
}

export default App;
