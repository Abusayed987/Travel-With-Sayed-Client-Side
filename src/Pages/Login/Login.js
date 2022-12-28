import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    }
    return (
        <div>
            <div className=" hero-content mt-20 ">
                <form onSubmit={handleLogin} className="card flex-shrink-0 w-1/2 max-w-lg shadow-2xl bg-base-100">
                    <div className=" p-7">
                        <div className="form-control">
                            <div className=' w-full mb-5  h-1 rounded-sm  bg-cyan-700'></div>
                            <div
                                className="btn no-animation text-gray-400  bg-white hover:bg-white hover:drop-shadow-lg
                                border-gray-400 rounded-md sm:h-6">
                                <img
                                    className='w-12 '
                                    src="https://media.tenor.com/Rwmnr_eC0sMAAAAC/good-google.gif" alt="img" />
                                <span>Login with Google</span>
                            </div>
                        </div>
                        <p className='text-center my-2'>OR</p>

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
                            <label className="label">
                                <Link className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary bg-cyan-800 text-white   hover:bg-cyan-800 border-none hover:drop-shadow-2xl ">Login</button>
                        </div>
                        <label className="text-center">
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