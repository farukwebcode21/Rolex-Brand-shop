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
        <div className="add-service">
            <h1>Add Product Here </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("title", { required: true, maxLength: 20 })} placeholder="Name" />
                <textarea {...register("description")} placeholder="Description" />
                <input type="number" {...register("price")} placeholder="price" />
                <input  {...register("img")} placeholder="img url" />
                <input type="submit" />
            </form>
        </div>
    )
}

export default AddProduct
