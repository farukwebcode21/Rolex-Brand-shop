import React, {useEffect, useState} from 'react'
import { Col, Row, Card, Button } from 'react-bootstrap'

const ManageProduct = () => {
    const [manageProduct, setManageProduct] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/watches')
            .then(res => res.json())
            .then(data => setManageProduct(data));
    }, [])

    const handleDelete = (id) => {
        const url = `http://localhost:5000/watches/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('Deleted Success fully');
                    const remaining = manageProduct.filter(manageProduct => manageProduct._id !== id);
                    setManageProduct(remaining);
                }
        })
    }
    return (
        <div className="my-1 dashboard-home">
            <h3 className="products mb-4">Manage Product</h3>
            <Row xs={1} md={4} className="g-4">
                {
                    manageProduct.map(manageProduct => <Col key={manageProduct._id}>
                        <Card>
                        <Card.Img style={{height: '400px'}} variant="top" src={manageProduct.img} />
                        <Card.Body>
                                <Card.Title>{manageProduct.title}</Card.Title>
                                <Card.Title>${manageProduct.price}</Card.Title>
                            <Button onClick={() =>handleDelete(manageProduct._id)}>Delete</Button>
                        </Card.Body>
                    </Card>
                    </Col>)
            }
            </Row>
        </div>
    )
}

export default ManageProduct
