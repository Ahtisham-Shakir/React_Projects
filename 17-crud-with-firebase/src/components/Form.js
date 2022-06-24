import React from 'react';
import { useGlobalContext } from '../context';


const Form = () => {
    const {data, setData, handleSubmit, isEditing} = useGlobalContext();

    // onChange Function
    const handleChange = (e) => {
        setData((s) => (
            {
                ...s,
                [e.target.name]: e.target.value
            }
        ))
    }


    return (
        <div className='container w-50 box mb-5'>
            <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-md-6">
                    <label htmlFor="inputPassword4" className="form-label">Name</label>
                    <input type="text" name='name' value={data.name} onChange={handleChange} className="form-control" id="inputPassword4" />
                </div>

                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">Email</label>
                    <input type="email" name='email' value={data.email} onChange={handleChange} className="form-control" id="inputEmail4" />
                </div>

                <div className="col-md-6">
                    <label htmlFor="age" className="form-label">Age</label>
                    <input type="number" name='age' value={data.age} onChange={handleChange} className="form-control" id="age" />
                </div>

                <div className="col-md-6">
                    <label htmlFor="degree" className="form-label">Degree</label>
                    <input type="text" name='degree' value={data.degree} onChange={handleChange} className="form-control" id="degree" />
                </div>

                <div className="col-12 text-center">
                    <button type="submit" className="btn btn-primary">{isEditing?"Update":"Add user"}</button>
                </div>
            </form>
        </div>
    )
}

export default Form