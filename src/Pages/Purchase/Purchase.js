import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";


const Purchase = () => {
  const { puchaseId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/watches/${puchaseId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [puchaseId]);

  return (
    <div style={{ height: "100vh" }}>
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
                        <p>{product.price}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col sm={12} md={6}>
          <form onSubmit="">
            <h5
              className="fw-normal my-3 pb-3"
              style={{ letterSpacing: "1px" }}
            >Please input Your Information</h5>
            <div className="form-outline mb-4">
              <input
                type="text"
                onBlur=""
                name="name"
                className="form-control form-control-lg"
                placeholder="Your name"
              />
            </div>
            <div className="form-outline mb-4">
              <input
                type="email"
                onBlur=""
                name="email"
                className="form-control form-control-lg"
                placeholder="Your Email"
              />
            </div>
            <div className="form-outline mb-4">
              <input
                type="number"
                onBlur=""
                name="phone"
                className="form-control form-control-lg"
                placeholder="Phone Number"
              />
            </div>
            <div className="form-outline mb-4">
              <input
                type="text"
                onBlur=""
                name="address"
                className="form-control form-control-lg"
                placeholder="Your address"
              />
            </div>
            <div className="pt-1 mb-4">
              <button className="btn btn-dark btn-lg btn-block" type="submit">
                Order Confirm
              </button>
            </div>
          </form>
        </Col>
      </Row>
    </div>
  );
};

export default Purchase;
