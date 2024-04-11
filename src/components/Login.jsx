import React from 'react'
import { NavLink } from 'react-router-dom';

const Login = () => {
    return (
        <>
            <section className="section1">
                <div className="container d-flex justify-content-center">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8">
                            <div className="signup-form bg-dark p-3">
                                <h1 className='text-center text-light fw-bold'>Login</h1>
                                <p className="text-center text-light ">*Login to your EduConnect Account</p>
                                <form action="">
                                    <div className="row">
                                        <div className="col-md-12 d-flex justify-content-center mt-3">
                                            <input type="username" placeholder='Enter Your Username' className='form-control  w-75 w-md-50' />
                                        </div>
                                        <div className="col-md-12 d-flex justify-content-center mt-3">
                                            <input type="password" placeholder='Enter Your Password' className='form-control  w-75 w-md-50' />
                                        </div>
                                        <div className="col-md-12 text-center mt-3">
                                            <button className="btn btn-success w-75">Login </button>
                                            <p className='text-light pt-2'>or <NavLink to='forgotPass' className='text-light login-link'> Forgot Password</NavLink></p>
                                            <hr className='text-light mt-3' />
                                            <p className='text-light'>Don't have an Account ? <NavLink to='/loginpage' className='text-light login-link'>Sign up</NavLink></p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login;
