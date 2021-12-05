import React from 'react'
import { Card, Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Product = ({ product }) => {

    const {_id, title, description, img, price } = product;
    return (
        <div>
            <Col>
            <Card>
                <Card.Img style={{height: '400px'}} variant="top" src={img} />
                <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Title>${ price}</Card.Title>
                    <Card.Text>
                        {description.slice(0, 120)}
                    </Card.Text>
                    <Link to={`/purchase/${_id}`}><Button>Buy Now</Button></Link>
                </Card.Body>
            </Card>
            </Col>
        </div>
    )
}

export default Product;
