import axios from 'axios';
import React, { useState } from 'react'

const AuthContext=React.createContext();

const AuthContextProvider=({children})=>{
    const [isAuth,setIsAuth]=useState(false);
   const [token,setToken]=useState("")

    const handleLogin=(email,password)=>{
        axios({
            method:"post",
            url:"https://reqres.in/api/login",
             data:{
                 email,
                 password
             }
        }).then(res=>{
            console.log(res.data);
            setIsAuth(true)
            setToken(res.data.token)
        })
        .catch(err=>console.log(err))
    }

    const handleLogout=()=>{
        setToken("")
        setIsAuth(false)
    }
    const value={isAuth,handleLogin,token,handleLogout}
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export {AuthContext,AuthContextProvider}