import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import './Purchase.css'
import axios from 'axios';


const Purchase = () => {
  const { puchaseId } = useParams();
  const { user } = useAuth();
  const history = useHistory();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/watches/${puchaseId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [puchaseId]);

  const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
      axios.post('http://localhost:5000/orders', data)
            .then(res => {
                if (res.data.insertedId) {
                  alert('Are you Sure want to order successfully ?');
                  history.push('/')
                    reset();
                }
            })
    };

  return (
    <div>
      <Row>
        <Col sm={12} md={6}>
          <div className="container py-5">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col col-xl-10">
                <div
                  className="card" style={{ borderRadius: "1rem", borderColor: "red" }}>
                  <div className="row g-0">
                    <div className="">
                      <img
                        src={product.img}
                        alt="login form"
                        className="img-fluid"
                        style={{ borderRadius: "1rem 0 0 1rem" }}/>
                        <h4>{product.title}</h4>
                        <h5>${product.price}</h5>
                       <p>{product.description }</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col className="purchase-product mt-5" sm={12} md={6}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input defaultValue={product.title} {...register("title")} placeholder="title" />
            <input defaultValue={product.price} {...register("price")} placeholder="price" />
            <input defaultValue={user.displayName} {...register("name")} placeholder="Name" />
            <input type="email" defaultValue={user.email} {...register("email")} placeholder="Email"/>
            <input type="number"  {...register("number")} placeholder="Phone Number" required />
            <input type="text" {...register("address")}  placeholder="Address" required />
            <input type="text" {...register("shipping address")}  placeholder="Shipping Address" required />
            <input type="submit" />
            </form>
        </Col>
      </Row>
    </div>
  );
};

export default Purchase;
