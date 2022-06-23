import React, {createContext, useContext} from "react";

const AppContext = createContext();

const AppProvider = ({children})=>{


    return <AppContext.Provider>{children}</AppContext.Provider>
}





// Custom Hook
const useGlobalContext = ()=>{
    return useContext(AppContext);
}


export {useGlobalContext, AppProvider}