import React,{createContext,useState} from "react";

const IndexContent=createContext();
const IndexContentProvider=({children})=>{
    const [emailAddress,setEmailAddress]=useState("");
    const [localStorageValue,setLocalStorageValue]=useState("");
    const [predictedPrice,setPredictedPrice]=useState("");
    const [carDetails,setCarDetails]=useState("")

    return(
        <IndexContent.Provider value={{emailAddress,setEmailAddress,localStorageValue,setLocalStorageValue,predictedPrice,setPredictedPrice,carDetails,setCarDetails}} >
            {children}
        </IndexContent.Provider>
    )
}
export {IndexContent,IndexContentProvider}
