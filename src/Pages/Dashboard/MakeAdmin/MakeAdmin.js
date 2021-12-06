import React, { useState } from 'react'
import { Alert } from 'react-bootstrap';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlure = (e) => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        const user ={email}
        fetch(`http://localhost:5000/users/admin`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true);
                }
            })
        e.preventDefault()
    }
    return (
        <div className="container dashboard-home">
            <form className="w-50 pt-5" onSubmit={handleAdminSubmit}>
                <h5 className="fw-normal mb-3 pb-3" style={{letterSpacing:'1px'}}>Create Admin</h5>
                <div className="form-outline mb-2">
                    <input type="email" onBlur={handleOnBlure} name="email" className="form-control form-control-lg" placeholder="Your Email" />
                </div>
                <div className="pt-1 mb-4">
                    <button className="btn btn-dark btn-lg btn-block" type="submit">Make Admin</button>
                </div>
            </form>
            {success && <Alert bg="primary">Admin Create Successfully !</Alert>}
        </div>
    )
}

export default MakeAdmin
