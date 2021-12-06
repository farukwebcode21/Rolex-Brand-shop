import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import Review from '../Review/Review';




const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
        .then(data =>setReviews(data))
    },[])

    return (
        <Container className="my-5">
            <h1 className="mb-5">Reviews</h1>
            <Row xs={1} md={3}>
                {
                reviews.map(review => <Review key={review._id} review={review }/>)
              }
            </Row>

        </Container>
    )
}

export default Reviews
