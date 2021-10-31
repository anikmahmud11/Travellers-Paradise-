import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddNewPackage.css'


const AddNewPackage = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/packages', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }
    return (
        <div className="add-service">
            <h2>Please Add a Package</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Package Name" />
                <textarea {...register("description")} placeholder="Description" />
                <textarea {...register("duration")} placeholder="Tour duration(*Day*night)" />
                <input type="number" {...register("price")} placeholder="price" />
                <input type="number" {...register("rating")} placeholder="rate between (1-5)" />
                <input {...register("img")} placeholder="image url" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddNewPackage;