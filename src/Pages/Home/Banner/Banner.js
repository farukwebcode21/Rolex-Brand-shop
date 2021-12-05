import Button from '@restart/ui/esm/Button'
import React from 'react'
import { Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import banner1 from '../../../images/watch1.jpg'
import banner2 from '../../../images/watch2.jpg'
import banner3 from '../../../images/watch3.jpg'

const Banner = () => {

  return (
    <Carousel>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={banner1}
                alt="First slide"
            />
        <Carousel.Caption>
            <h3 className="rolex-slogan">Rolex – left for greatness</h3>
            <Link to="explores"> <Button className="explore-button">Explore</Button></Link>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img
                className="d-block w-100"
                src={banner2}
                alt="Second slide"
            />
        <Carousel.Caption>
            <h3 className="rolex-slogan">The power of precision</h3>
            <Link to="explores"> <Button className="explore-button">Explore</Button></Link>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={banner3}
                alt="Third slide"
            />

        <Carousel.Caption>
            <h3 className="rolex-slogan">Live for greatness</h3>
            <Link to="explores"> <Button className="explore-button">Explore</Button></Link>
        </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
  )
}

export default Banner
