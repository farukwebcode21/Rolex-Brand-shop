import React from 'react'
import { Container, Row, Col, Image, Card, Carousel } from 'react-bootstrap'
import banner1 from '../../../images/item-3.jpg'
import banner2 from '../../../images/item-2.jpg'
import banner3 from '../../../images/watch1.jpg'



const Reviews = () => {
    return (
        <Container className="my-5">
            <h1 className="mb-5">Reviews</h1>
            <Carousel>
                <Carousel.Item>
                <Row>
                    <Col xs={12} md={4}>
                        <Card>
                            <Image style={{height:'300px', width:'auto'}} className="h-20" variant="top" src={banner1} />
                            <Card.Body>
                                <Card.Title>Yousuf Khan</Card.Title>
                                <Card.Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis quae illum tenetur expedita atque nesciunt necessitatibus sapiente odio placeat quasi qui, officiis quidem accusantium dolorum.</Card.Text>
                            </Card.Body>
                        </Card>
                        </Col>
                        <Col xs={12} md={4}>
                        <Card>
                            <Image style={{height:'300px', width:'auto'}} variant="top" src={banner3} />
                            <Card.Body>
                                <Card.Title>Yousuf Khan</Card.Title>
                                <Card.Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis quae illum tenetur expedita atque nesciunt necessitatibus sapiente odio placeat quasi qui, officiis quidem accusantium dolorum.</Card.Text>
                            </Card.Body>
                        </Card>
                        </Col>
                        <Col xs={12} md={4}>
                        <Card>
                            <Image style={{height:'300px', width:'auto'}} variant="top" src={banner2} />
                            <Card.Body>
                                <Card.Title>Yousuf Khan</Card.Title>
                                <Card.Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis quae illum tenetur expedita atque nesciunt necessitatibus sapiente odio placeat quasi qui, officiis quidem accusantium dolorum.</Card.Text>
                            </Card.Body>
                        </Card>
                        </Col>

                </Row>
                </Carousel.Item>
            </Carousel>
        </Container>
    )
}

export default Reviews
