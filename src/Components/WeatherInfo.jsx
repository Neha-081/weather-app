import React, { useContext, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';



function WeatherInfo() {

  
    const initialState={
        query:"",
        data:[]
    }

    const [state,setState]=useState(initialState);
    const [loading,setLoading]=useState(false)
    const apiKey=process.env.REACT_APP_API_KEY
    const {token}=useContext(AuthContext)

    const handleChange=(e)=>{
        setState({...state,query:e.target.value})
    }
    const handleSearch=()=>{
        setLoading(true)
      axios({
          method:"get",
          baseURL:"http://api.weatherapi.com/v1",
          url:"/current.json",
          params:{
              key:apiKey,
              q:state.query || "delhi"
          }
      })
      .then(res=>setState({...state,data:res.data}))
      .then(error=>console.log(error))
      .finally(()=>setLoading(false))
    }
    console.log(state);
  return (
    <div>
      <h2>token is : {token}</h2>
        <h1>Weather Information</h1>
        <input placeholder='Enter City Name..' value={state.query} onChange={handleChange}/>
        <button onClick={handleSearch}>Search</button>
        {loading  && <h3>Loading...</h3>}
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