import React, { useState, createContext, useContext, useEffect } from "react";
import { firestore } from "./config/firebase";
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";

const AppContext = createContext();

const AppProvider = ({ children }) => {
    // State for input tags
    const [data, setData] = useState({
        name: '',
        email: '',
        age: '',
        degree: '',
    });

    const [usersList, setUsersList] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [editId, setEditId] = useState(null);

    // Reference For Firebase
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


    // Reading users from Firebase
    useEffect(() => {
        const readDocs = async () => {
            let array = [];
            const querySnapshot = await getDocs(collectionRef);
            querySnapshot.forEach((docs) => {
                array.push({ ...docs.data(), id: docs.id });
            });
            setUsersList(array);
        }
        readDocs();
    }, [collectionRef]);


    // Function Form Submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(data);


        // If editing is enable then document will be update
         if (isEditing && validate(data)) {
            const docRef = doc(firestore, collectionName, editId);
            updateDoc(docRef, data)
                .then((doc) => {
                    console.log(doc.data(), doc.id);
                });
                // Resetting fields
                setData({
                    name: '',
                    email: '',
                    age: '',
                    degree: ''
                })
            alert("Updated Successfully");
            setIsEditing(false);
            setEditId(null);
        }

        // if above condition is false then document will be added
       else if (validate(data)) {
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




    // Function to delete user from firestore
    const deleteUser = async (id) => {
        try {
            await deleteDoc(doc(firestore, collectionName, id));
            alert("Document Deleted Successfully");
        } catch (error) {
            alert(error);
        }
    }

   



    return <AppContext.Provider value={{
        data, setData,
        handleSubmit,
        usersList,
        isEditing,
        setIsEditing,
        setEditId,
        deleteUser
    }}>{children}</AppContext.Provider>
}





// Custom Hook
const useGlobalContext = () => {
    return useContext(AppContext);
}


export { useGlobalContext, AppProvider }