import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import useTittle from '../../hooks/UseTittle';


const googleProvider = new GoogleAuthProvider()

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'
    useTittle('Login')

    const {
        logInWithEmailAndPass,
        setLoading,
        setUser,
        googleLogin,
    } = useContext(AuthContext)


    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);


        logInWithEmailAndPass(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                toast.success('Successfully Login')
                form.reset();
                navigate(from, { replace: true })
            })
            .catch((e) => {
                toast.error(e.message)
                console.error('error: ', e)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    const handleGoogleLogin = () => {
        googleLogin(googleProvider)
            .then(result => {
                const user = result.user;
                // console.log(user);
                // setUser(user)
                navigate(from, { replace: true })
            })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <div className=" hero-content mt-20 ">
                <form onSubmit={handleLogin}
                    className="card flex-shrink-0 lg:w-1/2 md:w-1/2 sm:w-full max-w-lg shadow-2xl bg-base-100">
                    <div className=" card-body">
                        <div className="form-control">
                            <div className=' w-full mb-5  h-1 rounded-sm  bg-cyan-700'></div>
                            <div onClick={handleGoogleLogin}
                                className="btn no-animation text-gray-400  bg-white hover:bg-white hover:drop-shadow-lg
                                border-gray-400 rounded-md sm:h-6">
                                <img
                                    className='w-12 '
                                    src="https://media.tenor.com/Rwmnr_eC0sMAAAAC/good-google.gif" alt="img" />
                                <span>Login with Google</span>
                            </div>
                        </div>
                        <div className="divider">OR</div>
                        <p className='text-2xl font-bold'>Sign In</p>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Your Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className=" mt-2 text-right">
                                <Link className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6 mb-4">
                            <button type='submit' className="btn btn-primary bg-cyan-800 text-white   hover:bg-cyan-800 border-none hover:drop-shadow-2xl ">Login</button>
                        </div>
                        <label className=" text-center">
                            <span className="label-text-alt ">Don't have an Account?
                                <Link to='/signup' className='font-bold link link-hover text-sm	'> Sign Up</Link>
                            </span>
                        </label>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;