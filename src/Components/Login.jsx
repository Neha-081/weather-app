import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext';
import { ThemeContext } from '../context/ThemeContext';
import styles from './Login.module.css'
import WeatherInfo from './WeatherInfo';

function Login() {
 const [state,setState]=useState({email:"",password:""})
 
const {isAuth,handleLogin}=useContext(AuthContext)
const {theme}=useContext(ThemeContext)
// console.log("theme",theme);

 const handleSubmit=(e)=>{
  e.preventDefault();
  handleLogin(state.email,state.password)
 }

  return (
    <div>
        {!isAuth ? 
        <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit} className={styles.login_form} style={{backgroundColor:theme.background,color:theme.textColor}}>
            <h5>Enter Form Details</h5>
        <input value={state.email}
         onChange={(e)=>setState({...state,email:e.target.value})}
         placeholder="Enter Email"
         />
        <input value={state.password}
         onChange={(e)=>setState({...state,password:e.target.value})}
         placeholder="Enter Password" 
         />
        <input type="submit" value="login"/>
        </form>
    </div> : 
    <WeatherInfo isAuth={isAuth}/>
    }
    </div>
  )
}

export default Login