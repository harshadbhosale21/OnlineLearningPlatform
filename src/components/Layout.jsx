import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
// import Dropdown from "react-bootstrap/Dropdown";
import NavDropdown from "react-bootstrap/NavDropdown";


const Layout = () => {
    const location = useLocation();
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const backgroundColor = () => {

        if (location.pathname === '/') {
            if (scrollY > 100) {
                return 'white';
            }
            else {
                return 'transparent';
            }
        }
        else {
            return 'white';
        }
    }

    const color = () => {
        if (location.pathname === '/') {
            if (window.scrollY > 100) {
                return 'black';
            }
            else {
                return 'white';
            }
        }
        else {
            return 'black'
        }
    }

    const boxShadow = () => {
        if (location.pathname === '/') {
            return 'none'
        }
        else {
            return 'rgba(0, 0, 0, 0.35) 0px 5px 15px';
        }
    }
    return (
        <>
            <Navbar backgroundColor={backgroundColor()} color={color()} boxShadow={boxShadow()} />
            <Outlet />
            <Footer />
        </>
    )
}

const Navbar = ({ backgroundColor, color, boxShadow }) => {

    return (
        <>
            {/* ********************NAVBAR**************************** */}
            <nav className="navbar navbar-expand-lg  fixed nav" style={{ backgroundColor, color, boxShadow }} id="nav1">
                <div className="container-fluid">
                    <NavLink to='' className="navbar-brand  nav-logo" style={{ color }}>EduConnect</NavLink>

                    <button className="navbar-toggler order-2 order-lg-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon "></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-list">
                            <li className="nav-item">
                                <NavLink to='/' className='nav-link' style={{ color }}>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/about' className='nav-link ' style={{ color }}>About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/services' className='nav-link ' style={{ color }}>Services</NavLink>
                            </li>
                            <li>
                                <NavDropdown title="Courses" id="basic-nav-dropdown" style={{ color }}>
                                    <NavDropdown.Item><NavLink className='nav-link p-0' to='/development'>Development</NavLink></NavDropdown.Item>
                                    <NavDropdown.Item ><NavLink className='nav-link p-0' to='/development'>I.T and Software</NavLink></NavDropdown.Item>
                                    <NavDropdown.Item ><NavLink className='nav-link p-0' to='/development'>Marketing</NavLink></NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">
                                        other
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/team' className='nav-link ' style={{ color }}>Team</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/contact' className='nav-link ' style={{ color }}>Contact</NavLink>
                            </li>
                        </ul>

                    </div>
                    <div className="sign-button order-1 order-lg-2">
                        <button className="btn btn-success btn-sm mx-1"><NavLink to='/loginpage' className=' text-light text-decoration-none'>Login</NavLink></button>
                        <button className="btn btn-danger btn-sm mx-1"><NavLink to='/signup' className='text-light text-decoration-none'>Sign up</NavLink></button>
                    </div>

                </div>
            </nav >

        </>
    )
}

const Footer = () => {
    return (

        <>
            <div className="container-fluid m-0  footer">
                <div className="container footer-top">
                    <div className="row gy-4">
                        <div className="col-lg-5 col-md-12">
                            <h3>iEducate</h3>
                            <p className="mt-1 text-dark ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque voluptatibus doloribus voluptatem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, nisi?</p>
                            <div className="d-flex mt-4 social-links">
                                <img src="/images/twitter-logo.png" alt="" />
                                <img src="/images/fb-logo.png" alt="" />
                                <img src="/images/linkedin-logo.png" alt="" />
                                <img src="/images/insta-logo.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-2 col-6 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li><NavLink to="/">Home</NavLink></li>
                                <li><NavLink to="/about">About</NavLink></li>
                                <li><NavLink to="">Services</NavLink></li>
                                <li><NavLink to="">Courses</NavLink></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-6 footer-links">
                            <h4>Our Services</h4>
                            <ul>
                                <li><NavLink to=''>Web Developement</NavLink></li>
                                <li><NavLink to=''>Cloud Computing</NavLink></li>
                                <li><NavLink to=''>Data Science</NavLink></li>
                                <li><NavLink to=''>Product Management</NavLink></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-12 text-center text-md-start">
                            <h4>Contact us</h4>
                            <p>Shivaji Nagar, Pune <br /> Maharahtra</p>

                            <p className="mt-4"><strong>Phone:</strong> +00 12345678</p>
                            <p><strong>Email:</strong> info@gmail.com</p>
                        </div>
                    </div>
                    <div className="container copyright text-center mt-4">
                        <p>Copyrights</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export { Navbar, Footer, Layout };