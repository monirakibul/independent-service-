
import React, { useEffect, useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import 'react-toastify/dist/ReactToastify.css';

const LogIn = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const [userEmail, setuserEmail] = useState('');
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        emailUser,
        emailLoading,
        emailError,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending, resendError] = useSendPasswordResetEmail(auth);

    const handleGoogleSignIn = () => {
        signInWithGoogle()
    }

    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    useEffect(() => {
        toast(emailError?.message ? emailError?.message : error?.message);
    }, [emailError, error])

    useEffect(() => {
        if (resendError?.message) {
            toast(resendError?.message)
        }
    }, [resendError])

    if (user || emailUser) {
        navigate(from, { replace: true });
    }

    const handleLogin = async (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;

        await signInWithEmailAndPassword(email, password);

    }

    const resendEmail = async () => {

        if (!userEmail) {
            toast('Enter email');
        } else {
            await sendPasswordResetEmail(userEmail);
            toast('Reset email sent ')
        }
    }

    return (
        <div className='container body-container col-lg-6 text-start'>
            <h2 className='text-center m-3'>LogIn</h2>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' onChange={(e) => setuserEmail(e.target.value)} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Log In
                </Button>
            </Form>

            <p className='my-3'>Don't have account? <Link className='text-decoration-none' to='/signup'>SignUp</Link></p>
            <p className='pointer' onClick={resendEmail}>Forgot Password?</p>
            <div className="d-flex justify-content-between w-100">
                <hr style={{ height: '1px', width: '45%' }} />
                <p>OR</p>
                <hr style={{ height: '1px', width: '45%' }} />
            </div>
            <div className="text-center">
                <button onClick={handleGoogleSignIn} className="btn btn-md btn-primary btn-outline" href="#"><img src="https://img.icons8.com/color/16/000000/google-logo.png" /> Login Using Google</button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default LogIn;