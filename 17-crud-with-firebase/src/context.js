import React, { useState, createContext, useContext } from "react";
import { firestore } from "./config/firebase";
import { collection, addDoc } from "firebase/firestore";

const AppContext = createContext();

const AppProvider = ({ children }) => {
    // State for input tags
    const [data, setData] = useState({
        name: '',
        email: '',
        age: '',
        degree: '',
    });

    const collectionName = 'users';
    const collectionRef = collection(firestore, collectionName);

    
    // Function to validate object
    const validate = (obj) => {
        for (let key in obj) {
            if (obj[key] === "") {
                return false
            }
        }
        return true;
    }


    // Function Form Submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(data);
        if (validate(data)) {
            try {
                const docRef = await addDoc(collectionRef, data);
                setData({
                    name: '',
                    email: '',
                    age: '',
                    degree: ''
                })
                alert("Users has been added successfully");
                console.log("Document Written with ID:" + docRef.id);


            } catch (error) {
                alert("Some issue occured please try again");
            }
        }
        else {
            alert("Please Fill all the fields");
        }
    }



    return <AppContext.Provider value={{
        data, setData,
        handleSubmit
    }}>{children}</AppContext.Provider>
}





// Custom Hook
const useGlobalContext = () => {
    return useContext(AppContext);
}


export { useGlobalContext, AppProvider }