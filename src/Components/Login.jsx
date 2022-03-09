import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext';
import styles from './Login.module.css'
import WeatherInfo from './WeatherInfo';

function Login() {
 const [state,setState]=useState({email:"",password:""})
 
const {isAuth,handleLogin}=useContext(AuthContext)
console.log(isAuth);

 const handleSubmit=(e)=>{
  e.preventDefault();
  handleLogin(state.email,state.password)
 }

  return (
    <div>
        {!isAuth ? 
        <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit} className={styles.login_form}>
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