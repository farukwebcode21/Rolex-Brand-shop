import React, { useEffect, useState } from 'react'
import { Row, Button } from 'react-bootstrap'
import Product from './Product/Product';
import { Link } from 'react-router-dom';



const Products = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/watches')
            .then(res => res.json())
            .then(data => setProduct(data));
    },[])
    return (
        <div>
            <h3 className="products">Our Product List</h3>
            <Row xs={1} md={3} className="g-4 mt-4">
                {
                    product.map(product => <Product key={product._id} product={ product}/>).slice(0,6)
                }
            </Row>
            <Link style={{textDecoration: 'none'}} to="/explores">
                <Button  className="btn btn-primary d-block mx-auto px-5 my-4" >See All</Button>
            </Link>
        </div>
    )
}

export default Products
