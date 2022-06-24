import React from 'react'
import { FaRegEdit } from 'react-icons/fa'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { useGlobalContext } from '../context'


const Table = () => {
    const { usersList, setEditId, setIsEditing, setData, deleteUser } = useGlobalContext();


    // Function to update users
    const update = (id) => {
        setIsEditing(true);
        const singleUser = usersList.find((user) => user.id === id);
        setData(singleUser);
        setEditId(id);
    }

    return (
        <div className='container box w-75 mb-5'>
            <h2 className='text-center'>Students List</h2>
            <table className="table table-striped">
                <thead>
                    <th>Sr</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>Degree</th>
                    <th>Actions</th>
                </thead>
                {
                    usersList.length === 0 ?
                        <tbody><td>Nothing to show, Please add user</td></tbody>
                        :
                        <tbody>
                            {
                                usersList.map(({ name, email, age, degree, id }, i) => {
                                    return (
                                        <tr key={i}>
                                            <th>{i+1}</th>
                                            <td>{name}</td>
                                            <td>{email}</td>
                                            <td>{age}</td>
                                            <td>{degree}</td>
                                            <td><FaRegEdit style={{ marginRight: '5px', cursor: "pointer" }} onClick={() => { update(id) }} />
                                                <RiDeleteBin6Line style={{ cursor: "pointer" }} onClick={()=>{deleteUser(id)}}/></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                }

            </table>
        </div>
    )
}

export default Table