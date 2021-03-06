import React from 'react'
import axios from 'axios';
import { useForm } from "react-hook-form";

const Review = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
         axios.post('http://localhost:5000/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Are you Sure Added data');
                    reset();
                }
            })

    };

    return (
        <div className="add-service mt-5 dashboard-home">
            <h1 className="mb-5">Please Write Your Feedback Here </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("title", { required: true, maxLength: 20 })} placeholder="Name" style={{padding:'10px'}} />
                <textarea {...register("description")} placeholder="Description" style={{height:'150px', marginBottom:'10px'}} />
                <input  {...register("img")} placeholder="img url" style={{padding:'10px'}} />
                <input type="submit" />
            </form>
        </div>
    )
}

export default Review
