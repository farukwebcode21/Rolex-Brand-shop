import axios from 'axios';
import React from 'react'
import { useForm } from "react-hook-form";
import './AddProduct.css';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/watches', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Are you Sure Added data');
                    reset();
                }
            })
    };

    return (
        <div className="dashboard-home">
            <div className="add-service mt-2">
                <h1>Add  New Product Here </h1>
                <form  onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("title", { required: true, maxLength: 20 })} placeholder="Name" style={{padding:'10px'}} />
                    <textarea {...register("description")} placeholder="Description" style={{marginBottom:'10px'}} />
                    <input type="number" {...register("price")} placeholder="price" style={{padding:'10px'}} />
                    <input  {...register("img")} placeholder="img url" style={{padding:'10px'}} />
                    <input type="submit" />
                </form>
            </div>
        </div>
    )
}

export default AddProduct
