import React, { useState } from 'react'
import { Link, useLocation, useHistory } from 'react-router-dom'
import { Spinner, Alert } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import about from '../../../images/rolex_2.jpg'


const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, authError, isLoading } = useAuth();
    const location = useLocation();
    const history = useHistory();


    const handleOnBlure = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);

    }

    const handleLogin = (e) => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    return (
        <div className="container">
            <section>
            <div className="container py-5">
                <div className="row d-flex justify-content-center align-items-center">
                <div className="col col-xl-10">
                    <div className="card" style={{borderRadius:'1rem', borderColor:'red'}}>
                    <div className="row g-0">
                        <div className="col-md-6 col-lg-5 d-none d-md-block">
                        <img
                            src={about}
                            alt="login form"
                            className="img-fluid" style={{borderRadius:'1rem 0 0 1rem'}}
                        />
                        </div>
                        <div className="col-md-6 col-lg-7 d-flex align-items-center">
                        <div className="card-body p-4 p-lg-5 text-black">
                         { !isLoading && <form onSubmit={handleLogin}>
                            <h5 className="fw-normal mb-3 pb-3" style={{letterSpacing:'1px'}}>Sign into your account</h5>

                            <div className="form-outline mb-4">
                                <input type="email" onBlur={handleOnBlure} name="email" className="form-control form-control-lg" placeholder="Your Email" />
                            </div>
                            <div className="form-outline mb-4">
                                <input type="password" onBlur={handleOnBlure} name="password" className="form-control form-control-lg" placeholder="Your" />
                            </div>
                            <div className="pt-1 mb-4">
                                <button className="btn btn-dark btn-lg btn-block" type="submit">Login</button>
                            </div>
                            <p className="mb-5 pb-lg-2" style={{color:'#393f81'}}>Don't have an account? <Link to="/registation" style={{color:'#393f81'}}>Register here</Link></p>
                        </form>}
                            {isLoading && <Spinner animation="border" variant="info" />}
                            {user?.email && <Alert bg="primary">Your Account Create Successfully !</Alert>}
                            {authError && <Alert  variant="danger" >{ authError}</Alert>}

                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
        </div>
    )
}

export default Login
