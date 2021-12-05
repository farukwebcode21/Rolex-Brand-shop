import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'

const Navigation = () => {
    const { user, logOut} = useAuth();

    const btnstyle = {
        textDecoration: 'none',
        color: 'white',
        marginLeft:'20px'

    }
    return (
        <Navbar sticky="top" bg="dark" variant="dark" expand="lg">
            <Container>
                <Link to="/home" style={btnstyle}><Navbar.Brand>ROLEX</Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/home" style={btnstyle}>Home</Link>
                        <Link to="/explores" style={btnstyle}>Explores</Link>
                        <Link to="/about" style={btnstyle}>about</Link>
                    </Nav>

                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                    {
                        user?.email ?

                            <div>
                                <Link onClick={logOut} style={{ color: 'white', textDecoration: 'none', marginRight:'20px'}} to="/login">Log Out</Link>
                                <Link style={{ color: 'white', textDecoration: 'none' }} to="/dashboard">Dashboard</Link>
                            </div>
                            :<Link style={{color:'white', textDecoration:'none'}} to="/login">Login</Link>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation
