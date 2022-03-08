import React, { useState } from 'react';
import axios from 'axios';


function WeatherInfo() {
    const initialState={
        query:"",
        data:[]
    }
    const [state,setState]=useState(initialState);

    const handleChange=(e)=>{
        setState({...state,query:e.target.value})
    }
    const handleSearch=()=>{
      axios({
          method:"get",
          baseURL:"http://api.weatherapi.com/v1",
          url:"/current.json",
          params:{
              key:"15913a882a854372910190402220803",
              q:state.query
          }
      })
      .then(res=>setState({...state,data:res.data}))
      .then(error=>console.log(error))
    }
    console.log(state);
  return (
    <div>
        <h1>Waether Information</h1>
        <input placeholder='Enter City Name..' value={state.query} onChange={handleChange}/>
        <button onClick={handleSearch}>Search</button>
        {state?.data?.location && 
        <h2>{state?.data?.location?.name}</h2>}

        {state?.data?.current &&
        <div>
        <h2>{state?.data?.current?.condition?.text}</h2>
        <img src={state?.data?.current?.condition?.icon} alt="weathericon"/>
        </div>
        }
    </div>
  )
}

export default WeatherInfo