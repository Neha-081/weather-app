import React from 'react'

const AuthContext=React.createContext();

const AuthContextProvider=({children})=>{

    return <AuthContext.Provider>{children}</AuthContext.Provider>
}

export {AuthContext,AuthContextProvider}