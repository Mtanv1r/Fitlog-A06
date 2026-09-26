"use client"


import { createContext, useState } from "react";

//creating context 
 export const CardContext = createContext({ })
//contextprovider 
 export const CardProvider=({children})=>{
    //making state 
    const[todayCard,setTodayCard]=useState([])
    const [saveCard, setSaveCard] = useState([]);
    
    //sharing data i choosed
    const shareData={
        todayCard,
        setTodayCard,
        saveCard,
        setSaveCard,
    }
    return(
        <CardContext.Provider value={shareData}>
            {children}
        </CardContext.Provider>
    )
}