import React from 'react'
import {  Col, Card } from 'react-bootstrap'

const Review = ({ review }) => {
    const {title, description, img } = review;
    return (
        <Col>
            <Card>
                <Card.Img style={{height: '300px'}} variant="top" src={img} />
                <Card.Body>
                        <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description.slice(0, 120)}
                    </Card.Text>
                </Card.Body>
            </Card>
            </Col>

    )
}

export default Review
