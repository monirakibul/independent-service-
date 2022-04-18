import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <Navbar collapseOnSelect sticky='top' expand="lg" bg="primary" variant="dark">
                <Container className='d-flex justify-content-between'>
                    <Navbar.Brand as={Link} to="/">MK Photography</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link href="/home#services">Services</Nav.Link>
                            <Nav.Link href="/home#blogs">Blog</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>

                            {
                                user ?
                                    <>
                                        <Nav.Link >{user.displayName}</Nav.Link>
                                        <Nav.Link onClick={() => signOut(auth)}>Sign Out</Nav.Link>
                                    </>
                                    :
                                    <Nav.Link as={Link} to="/login">LogIn</Nav.Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;