import { updateProfile } from 'firebase/auth';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import 'react-toastify/dist/ReactToastify.css';



const SignUp = () => {

    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [
        signInWithGoogle,
        emailUser,
        emailLoading,
        emailError,
    ] = useSignInWithGoogle(auth);


    if (emailError || error) {
        toast(emailError.message ? emailError.message : error.message);
    }

    if (user || emailUser) {
        navigate('/');
    }

    const handleRegister = async (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
    }
    return (
        <div className='container col-lg-6 text-start'>
            <h2 className='text-center m-3'>SignUp</h2>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control name="name" type="text" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Sign Up
                </Button>
            </Form>
            <p className='my-3'>Already have an account? <Link className='text-decoration-none' to='/login'>Please login</Link></p>

            <div className="d-flex justify-content-between w-100">
                <hr style={{ height: '1px', width: '45%' }} />
                <p>OR</p>
                <hr style={{ height: '1px', width: '45%' }} />
            </div>
            <div className="text-center">
                <button onClick={() => signInWithGoogle()} className="btn btn-md btn-primary btn-outline" href="#"><img src="https://img.icons8.com/color/16/000000/google-logo.png" /> SignUp Using Google</button>
            </div>
        </div>
    );
};

export default SignUp;