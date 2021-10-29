import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../../hooks/useAuth';


const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    console.log(location.state?.from);
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    return (
        <div >
            <h1 className="text-success m-5">Please Login</h1>
            <div className="m-5">

                <Button
                    onClick={handleGoogleLogin}
                >Google Sign In
                </Button>
            </div>
        </div>
    );
};

export default Login;