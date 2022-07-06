import { useState,useEffect } from "react";
import "./App.css";
import API_KEY from "./gitignore/API_KEY";
import axios from "axios";


const baseURL = 'https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid='
const API_key = API_KEY;

function App() {

  const [forecast,setForecast] = useState('')



  useEffect(()=>{
    axios
    .get(`${baseURL}${API_key}`)
    .then((response)=>{
      setForecast(response.data.main.temp)
      console.log(response.data.main)
    })
    .catch((err)=>{
      console.log(err)
    })
  })


  return (
    <div className="App">
      <h1 class="text-3xl font-bold">Weather app!!</h1>
      <div>
        {forecast}
      </div>
    </div>
  );
}

export default App;
