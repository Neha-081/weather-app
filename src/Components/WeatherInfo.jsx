import React, { useState } from 'react'

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
        
    }
  return (
    <div>
        <h1>Waether Information</h1>
        <input placeholder='Enter City Name..' value={state.query} onChange={handleChange}/>
        <button onClick={handleSearch}>Search</button>
    </div>
  )
}

export default WeatherInfo