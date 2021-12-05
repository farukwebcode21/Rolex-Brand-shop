import React, {useState} from 'react'
import { Spinner, Alert } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth';
import about from '../../../images/rolex_2.jpg'

const Registation = () => {

    const [loginData, setLoginData] = useState({});
    const history = useHistory();

    const {user, authError, registerUser, isLoading } = useAuth();


    const handeRegisterOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData)

    }

    const handleRegister = (e) => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match ');
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }

    return (
        <div className="container">
            <section className="">
            <div className="container py-5">
                <div className="row d-flex justify-content-center align-items-center">
                <div className="col col-xl-10">
                    <div className="card" style={{borderRadius:'1rem', borderColor:'red'}}>
                    <div className="row g-0">
                        <div className="col-md-6 col-lg-5 d-none d-md-block">
                        <img
                            src={about}
                            alt="login form"
                            className="img-fluid" style={{borderRadius:'1rem 0 0 1rem', height:'100%'}}
                        />
                        </div>
                        <div className="col-md-6 col-lg-7 d-flex align-items-center">
                        <div className="card-body p-4 p-lg-5 text-black">
                            {!isLoading && <form onSubmit={handleRegister}>
                                <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>Sign into your account</h5>
                                <div className="form-outline mb-4">
                                    <input type="text" onBlur={handeRegisterOnBlur} name="name" className="form-control form-control-lg" placeholder="Your name" required />
                                </div>
                                <div className="form-outline mb-4">
                                    <input type="email" onBlur={handeRegisterOnBlur} name="email" className="form-control form-control-lg" placeholder="Your Email" />
                                </div>
                                <div className="form-outline mb-4">
                                    <input type="password" onBlur={handeRegisterOnBlur} name="password" className="form-control form-control-lg" placeholder="Your Password" required />
                                </div>
                                <div className="form-outline mb-4">
                                    <input type="password" onBlur={handeRegisterOnBlur} name="password2" className="form-control form-control-lg" placeholder="Re-Type Your Password" required />
                                </div>
                                <div className="pt-1 mb-4">
                                    <button className="btn btn-dark btn-lg btn-block" type="submit">Register</button>
                                </div>
                                <p className="mb-5 pb-lg-2" style={{color:'#393f81'}}>Have already an account ? <Link to="/login" style={{color:'#393f81'}}> Login here</Link></p>
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

export default Registation
