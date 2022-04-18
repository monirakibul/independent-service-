import React, { useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import 'react-toastify/dist/ReactToastify.css';



const SignUp = () => {

    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, UpdateError] = useUpdateProfile(auth);

    const [
        signInWithGoogle,
        emailUser,
        emailLoading,
        emailError,
    ] = useSignInWithGoogle(auth);

    useEffect(() => {
        toast(emailError?.message ? emailError?.message : error?.message);
    }, [emailError, error])

    if (user || emailUser) {
        console.log(user)
    }

    const handleRegister = async (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log(UpdateError)
        navigate('/');
    }
    return (
        <div className='container body-container col-lg-6 text-start'>
            <h2 className='text-center m-3'>SignUp</h2>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control name="name" type="text" placeholder="Enter Name" required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" required />
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
            <ToastContainer />
        </div>
    );
};

export default SignUp;