import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {

const links=[
    {
        title:"home",
        to:"/"
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
        title:"login",
        to:"/login"
    },
]

  return (
    <div style={{padding:15,backgroundColor:"gray"}}>
        {links.map(({title,to},index)=>(
            <Link key={index} to={to} style={{padding:10,textDecoration:"none",color:"black"}}>{title} </Link>
        ))}
    </div>
  )
}

export default Navbar