import React, { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";


const Logout=()=>{
const {handleLogout}=useContext(AuthContext);

useEffect(()=>{
    handleLogout()
},[])

    return <h2>User logged out successfully</h2>
}
export default Logout