import React, { useEffect, useState } from 'react'
import { Row, } from 'react-bootstrap'

import Product from '../Products/Product/Product';

const Explores = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/watches')
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [])

    return (
        <div className="my-5">
            <h3 className="products mb-4">Our Product List</h3>
            <Row xs={1} md={4} className="g-4">
            {
                product.map(product => <Product key={product._id} product={ product}/>)
            }
            </Row>
        </div>
    )
}

export default Explores
