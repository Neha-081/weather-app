import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
function Navbar() {



const {token}=useContext(AuthContext);
const getTitle=()=>{
    if(token){
        return ["Logout","/logout"]
    }
    return ["Login","/login"]
    
}

const links=[
    {
        title:"home",
        to:"/home"
    },
    {
        title:"about",
        to:"/about"
    },
    {
        title:"products",
        to:"/products"
    },
    {
        title:getTitle()[0],
        to:getTitle()[1]
    },
]

  return (
    <div style={{padding:15,backgroundColor:"gray"}}>
        {links.map(({title,to},index)=>(
            <NavLink key={index} to={to} style={({isActive})=>({
                color:isActive?"red":"blue",padding:10
            })}>{title} </NavLink>
        ))}
    </div>
  )
}

export default Navbar