import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import useTittle from '../../hooks/UseTittle';


const Signup = () => {
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'
    useTittle('Sign Up')

    const handleSignup = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPass = form.confirmPass.value;

        if (password !== confirmPass) {
            return toast.error('Password did not match')
        }

        createUser(email, password)
            .then(result => {
                const user = result.user

                const currentUser = {
                    email: user.email
                }
                fetch('https://travel-with-sayed-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        localStorage.setItem('travelWithSayedToken', data.token)
                        navigate(from, { replace: true })
                    })
                toast.success('Successfully SignUp')
                form.reset();

            })
            .catch(err => {
                const errorMessage = err.message;
                alert(errorMessage)
                console.error(err)
            })

    }


    return (
        <div>
            <div className="hero-content mt-8">
                <form onSubmit={handleSignup}
                    className="card flex-shrink-0 lg:w-1/2 md:w-1/2 sm:w-full max-w-lg shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <div className=' w-full mb-5  h-1 rounded-sm  bg-cyan-700'></div>
                            <span
                                className="btn no-animation text-gray-400  bg-white hover:bg-white hover:drop-shadow-lg
                            border-gray-400 rounded-md ">
                                <img
                                    className='w-12 '
                                    src="https://media.tenor.com/Rwmnr_eC0sMAAAAC/good-google.gif" alt="img" />
                                Login with Google
                            </span>
                        </div>
                        <div className="divider ">OR</div>
                        <p className='text-2xl font-bold'>Sign Up</p>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                        </div>
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
                            <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" name='confirmPass' placeholder="Confirm Password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6 mb-4">
                            <button
                                type='submit'
                                className="btn btn-primary bg-cyan-800 text-white   hover:bg-cyan-800 border-none hover:drop-shadow-2xl ">Sign up</button>
                        </div>
                        <label className="text-center">
                            <span className="label-text-alt ">Already have an Account?
                                <Link to='/login' className='font-bold link link-hover text-sm	'> Sign In</Link>
                            </span>
                        </label>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Signup;