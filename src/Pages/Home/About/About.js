import React from 'react'
import { Card, Col, Row, Image } from 'react-bootstrap'
import about from '../../../images/rolex-about.png'



const About = () => {
    return (
        <div className="bg my-5 mx-5" id="about">
            <h3 style={{textTransform:'uppercase'}}>About Us</h3>
            <Row className="g-4 m-2">
                <Col className="about-text" xs={12} md={5}>
                    <h2>ABOUT OUR WATCH</h2>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it</p>
                </Col>
                <Col xs={12} md={7}>
                    <Card className="about-img">
                        <Image style={{width:'75%', marginLeft:'6rem'}} src={about} alt="image"/>
                    </Card>
                </Col>
            </Row>
        </div>


    )
}

export default About
