import { createContext, useEffect, useState } from "react";

 export let UserContext = createContext();
                                              //<App>
 export default function CounterContextProvider(props) {
    const [userlogin,setuserlogin]=useState(null)
    useEffect(()=>{
        if (localStorage.getItem('userToken') !==null) {
            setuserlogin(localStorage.getItem('userToken'))
        }
    },[])
    return <UserContext.Provider value={{userlogin,setuserlogin}}>
                {props.children} 
            </UserContext.Provider>
 }