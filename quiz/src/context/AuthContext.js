 import { useContext,createContext } from "react";

 import React from 'react'
 
 export const AuthContextProvider = ({children}) => {
   return (
     <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>
   )
 }
 

 export const userAuth=()=>{
    return useContext(AuthContext)
 }