import React from 'react'
import { NavLink } from 'react-router-dom';

const Registration = () => {
    return (
        <>
            <section className="section1">
                <div className="container d-flex justify-content-center">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-6 ">
                            <div className="signup-form  bg-dark p-3">
                                <h1 className='text-center text-light fw-bold'>Create New Account</h1>
                                <p className="text-center text-light ">*Sign up and Start Learning</p>
                                <form action="">
                                    <div className="row">
                                        <div className="col-md-12 d-flex justify-content-center">
                                            <input type="text" placeholder='Full Name' className='form-control w-75 w-md-50' />
                                        </div>
                                        <div className="col-md-12 d-flex justify-content-center mt-3">
                                            <input type="email" placeholder='Enter e-mail address' className='form-control  w-75 w-md-50' />
                                        </div>
                                        <div className="col-md-12 d-flex justify-content-center mt-3">
                                            <input type="text" placeholder='Enter Phone Number' className='form-control  w-75 w-md-50' />
                                        </div>
                                        <div className="col-md-12 d-flex justify-content-center mt-3">
                                            <input type="password" placeholder='Create New Password' className='form-control  w-75 w-md-50' />
                                        </div>
                                        <div className="col-md-12 d-flex justify-content-center mt-3">
                                            <input type="password" placeholder='Re-enter Password' className='form-control  w-75 w-md-50' />
                                        </div>
                                        <div className="col-md-12 mt-4 d-flex justify-content-center">
                                            <div class="form-check form-switch">
                                                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"></input>
                                                <label class="form-check-label text-light" for="flexSwitchCheckDefault">Send me special offers, and <br /> Learning Tips.</label>
                                            </div>
                                        </div>
                                        <div className="col-md-12 text-center mt-2">
                                            <button className="btn btn-success  w-75 w-md-50">Sign Up</button>
                                            <p className='text-light pt-2'>By signing you agree to out <span className='text-decoration-underline'>Terms of use</span></p>
                                            <hr className='text-light mt-3' />
                                            <p className='text-light'>Already have an Account ? <NavLink to='/loginpage' className='nav-link login-link'>Login</NavLink></p>
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

export default Registration;
