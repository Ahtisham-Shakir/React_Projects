import React, {useState, createContext, useContext} from "react";

const AppContext = createContext();

const AppProvider = ({children})=>{
    // State for input tags
    const [data, setData] = useState({
        name : '',
        email: '',
        age: '',
        degree: '',
    });


    return <AppContext.Provider value={{
        data,setData
    }}>{children}</AppContext.Provider>
}





// Custom Hook
const useGlobalContext = ()=>{
    return useContext(AppContext);
}


export {useGlobalContext, AppProvider}