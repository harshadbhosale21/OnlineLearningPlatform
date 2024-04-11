
import React, { } from "react";
import { NavLink, useLocation, } from "react-router-dom";
import { serviceData1, serviceData2, serviceData3 } from './Data/serviceData.js';
import { teamInfo, teamPost } from "./Data/teamData.js";
import { contactInfo } from "./Data/contactData.js";
import { aboutSec3, callAction, aboutSec1 } from "./Data/aboutData.js";
import { } from "react-bootstrap/esm/PageItem.js";
import { } from "./Layout.jsx";

const Home = () => {
    var loc = useLocation();
    if (loc.pathname === '/') {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    return (
        <>
            <section section id="section1" className="section1 section-bg" >
                <div className="hsla  d-flex align-items-center justify-content-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 sec1-head1">
                                <h2 className="text-white text-center text-lg-start" style={{ fontFamily: 'Montserrat' }}>Transforming Education</h2>
                                <p className="text-white text-center text-lg-start">Ignite Your Passion for Learning , Ignite Your Future</p>
                            </div>
                            <div className="col-lg-5 text-center text-lg-start sec1-head2">
                                <button class="btn btn-danger p-2 my-2  fw-bold" type="button" data-bs-toggle="modal" data-bs-target="#createAccount">See Courses</button>
                                <button className="btn btn-outline-light p-2 mx-3 fw-bold">Buy a Plan</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


const About = () => {
    var loc = useLocation();
    if (loc.pathname === '/about') {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <>
            <section id="section1" className="section1">
                <div className="container">
                    <div className="row align-items-xl-center gy-4">
                        <div className="col-xl-5 abt-col1">
                            <h3>About us</h3>
                            <h2>Unveiling Our Identity: Empowering Education, Connecting Communities</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum quisquam iusto accusantium beatae explicabo nihil!</p>
                            <button className="btn btn-danger p-2 ">Read more</button>
                        </div>
                        <div className="col-xl-7">
                            <div className="row gy-4 ">
                                {
                                    aboutSec1.map((val, index) => {
                                        return (
                                            <>
                                                <div className="col-md-6 abt-col2">
                                                    <div>
                                                        <img src={val.img} className="img-fluid" alt="not" />
                                                        <h3>{val.title}</h3>
                                                        <p>{val.msg}</p>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div >
                    </div >
                </div >
                <div className="stats">
                    <div className="stats-hsla">
                        <div className="container">
                            <h1 className="text-center text-light py-1 mb-1">Creating Impact Around the World</h1>
                            <p className="text-center text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                            <div className="row gy-4">
                                {
                                    callAction.map((val, index) => {
                                        return (
                                            <>
                                                <div className="col-lg-3 col-md-6">
                                                    <div className="stats-item text-center text-light w-100 h-100">
                                                        <h2>{val.title}</h2>
                                                        <p>{val.content}</p>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container " style={{ padding: '60px 0' }}>
                    <div className="row gy-4 justify-content-between abt-sec4">
                        {
                            aboutSec3.map((val, index) => {
                                return (
                                    <>
                                        <div className="col-12 col-md-4 p-2 px-5">
                                            <div className="p-2 py-3">
                                                <h2 className="fw-bold">{val.title}</h2>
                                                <h6 className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam error debitis excepturi voluptatibus eligendi reiciendis?</h6>
                                                <p >{val.link}</p>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </section >

        </>
    )
}

const Services = () => {
    var loc = useLocation();
    if (loc.pathname === '/services') {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    return (
        <>
            <section className="section1 sec-3">
                <div className="container section-title text-center">
                    <h2 className="d-inline-block">Services</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                </div>
                <div className="container">
                    <div className="row gy-4">
                        {
                            serviceData1.map((val, index) => {
                                return (
                                    <>
                                        <div className="col-sm-12  col-lg-6 services">
                                            <div className="sec3-item d-flex">
                                                <div className="item-icon">
                                                    <img src={val.img} alt="" className="px-2" />
                                                </div>
                                                <div className="item-info">
                                                    <h3>{val.name}</h3>
                                                    <p>{val.content}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>

                {/* Courses-section  */}

                <div className="container section-title service-sec2 text-center" id="courses">
                    <h2 className="d-inline-block">Courses</h2>
                    <p>Learn with wide variety of options</p>
                </div>
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-lg-12">
                            <div className="row">
                                {
                                    serviceData2.map((val, index) => {
                                        return (
                                            <>
                                                <div className="col-6 col-lg-3 course-col">
                                                    <NavLink to={val.link}>
                                                        <div className="course-item">
                                                            <img src={val.img} alt="" className="img-fluid" />
                                                        </div>
                                                    </NavLink>

                                                    <p className="text-center fw-bold p-1">{val.name}</p>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pricing-Section  */}
                <section className=" pricing-cont pb-5" id='Pricing'>

                    <div className="container section-title service-sec2 text-center" id="courses">
                        <h2 className="d-inline-block">Pricing</h2>
                        <p>Learn with wide variety of options</p>
                    </div>
                    <div className="container">
                        <div className="row gy-4">
                            {
                                serviceData3.map((val, index) => {
                                    return (
                                        <>
                                            <div className="col-12 col-md-4 p-3">
                                                <div className="pricing-item">
                                                    <div className="text-center mb-5">
                                                        <h4>{val.name}</h4>
                                                        <img src={val.img} alt="" className="img-fluid" />
                                                        <p><sup>$</sup>{val.price}<span><sub>/month</sub></span></p>
                                                    </div>
                                                    <div>
                                                        <p><span><img src={val.imgCrt} alt="" /></span>{val.msg}</p>
                                                        <p><span><img src={val.imgCrt} alt="" /></span>{val.msg}</p>
                                                        <p><span><img src={val.imgCrt} alt="" /></span>{val.msg}</p>
                                                        <p><span><img src={val.imgWrn} alt="" /></span><del>{val.msg}</del></p>
                                                        <p><span><img src={val.imgWrn} alt="" /></span><del>{val.msg}</del></p>
                                                    </div>
                                                    <div className="text-center mt-1">
                                                        <button className="btn btn-outline-danger px-3 py-2">Buy Now</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                </section>
            </section >
        </>
    )
}

const Team = () => {
    var loc = useLocation();
    if (loc.pathname === '/team') {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <>
            <section className="section1 sec-3 team " id="team">
                <div className="container section-title text-center pb-4">
                    <h2 className="d-inline-block">Team</h2>
                    <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                </div>

                {/* TeamInfo  */}
                <div className="container">
                    <div className="row gy-4">
                        {
                            teamInfo.map((val, index) => {
                                return (
                                    <>
                                        <div className="col-12 col-md-4 p-2">
                                            <div className="team-item">
                                                <div className="team-img">
                                                    <img src={val.img} alt="" className="img-fluid d-block m-auto" width='250' />
                                                </div>
                                                <div className="team-info text-center">
                                                    <h4>{val.name}</h4>
                                                    <p>{val.pos}</p>
                                                    <p className="mb-0" style={{ fontSize: '14px' }}>{val.msg}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>

                {/* CallToAction  */}
                <div className="team-mid my-5">
                    <div className="d-flex justify-content-center">
                        <div className="text-center" style={{ width: '65%' }}>
                            <h3 className="text-light fw-bold mb-3 mb-lg-2">Call To Action</h3>
                            <p className="text-light">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <button className="btn btn-outline-light py-2 px-3 fw-bold">Call To Action</button>
                        </div>
                    </div>
                </div>

                {/* TeamCarosel  */}
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-12 col-md-6 p-2 d-flex align-items-center">
                            <div className="testimonials py-2 px-3">
                                <h2>Testimonials</h2>
                                <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div id="carouselExampleSlidesOnly" class="carousel slide caro-border bg-secondary p-3" data-bs-ride="carousel">
                                <div class="carousel-indicators">
                                    <button type="button" data-bs-target="#first-caro" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#second-caro" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#third-caro" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div class="carousel-inner">
                                    <div class="carousel-item active py-3 px-4" id='first-caro'>
                                        <div className="d-flex p-2 mb-3">
                                            <img src="/images/team-img1.jpg" alt="" className="img-fuild" width={70} style={{ borderRadius: '50%', border: '3px solid white' }} />
                                            <div className="px-2 caro-head">
                                                <h3 className="text-light">Dan James</h3>
                                                <p>CEO and Founder</p>
                                            </div>
                                        </div>
                                        <div className="mt-2 p-2 pb-5 caro-info">
                                            <p className="text-light"><img src="/images/quotes-open.png" alt="" className=" px-2" />Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, dolorum. Lorem ipsum dolor sit amet consectetur adipisicing.<img src="/images/quotes-close.png" alt="" className=" px-2" /></p>
                                        </div>
                                    </div>
                                    <div class="carousel-item  py-3 px-4" id="second-caro">
                                        <div className="d-flex p-2 mb-3">
                                            <img src="/images/team-img2.jpg" alt="" className="img-fuild" width={70} style={{ borderRadius: '50%', border: '3px solid white' }} />
                                            <div className="px-2 caro-head">
                                                <h3 className="text-light">Olie Watkins</h3>
                                                <p>Entrepreneur</p>
                                            </div>
                                        </div>
                                        <div className="mt-2 p-2 pb-5 caro-info">
                                            <p className="text-light"><img src="/images/quotes-open.png" alt="" className=" px-2" />Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, dolorum. Lorem ipsum dolor sit amet, consectetur adipisicing.<img src="/images/quotes-close.png" alt="" className=" px-2" /></p>
                                        </div>
                                    </div>
                                    <div class="carousel-item  py-3 px-4" id="third-caro">
                                        <div className="d-flex p-2 mb-3">
                                            <img src="/images/team-img3.jpg" alt="" className="img-fuild" width={70} style={{ borderRadius: '50%', border: '3px solid white' }} />
                                            <div className="px-2 caro-head">
                                                <h3 className="text-light">Mark Huges</h3>
                                                <p>Designer</p>
                                            </div>
                                        </div>
                                        <div className="mt-2 p-2 pb-5 caro-info">
                                            <p className="text-light"><img src="/images/quotes-open.png" alt="" className=" px-2" />Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, dolorum. Lorem ipsum dolor sit, amet consectetur adipisicing.<img src="/images/quotes-close.png" alt="" className=" px-2" /></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            {/* TeamPost  */}
            <section className="team-section2">
                <div className="container section-title text-center pb-4">
                    <h2 className="d-inline-block">Recent Posts</h2>
                    <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                </div>
                <div className="container">
                    <div className="row gy-4">
                        {
                            teamPost.map((val, index) => {
                                return (
                                    <>
                                        <div className="col-12 col-md-4 p-3">
                                            <div className="team-sec2-item">
                                                <div className="post-img">
                                                    <img src={val.img} alt="" className="img-fluid" />
                                                </div>
                                                <div className="post-info p-3 pb-4">
                                                    <p>{val.title}</p>
                                                    <h3>{val.msg}</h3>
                                                    <div className="d-flex">
                                                        <img src={val.img2} alt="" className="img-fluid" width='70' style={{ borderRadius: '50%', padding: '8px' }} />
                                                        <div className="mx-2 p-1">
                                                            <p className="fw-bold mb-1">{val.name}</p>
                                                            <p>{val.date}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

const Contact = () => {
    var loc = useLocation();
    if (loc.pathname === '/contact') {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <>
            <section className="section1 sec-3">
                <div className="container section-title text-center">
                    <h2 className="d-inline-block">Contact us</h2>
                    <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                </div>
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-lg-6">
                            <div className="row">
                                {
                                    contactInfo.map((val, index) => {
                                        return (
                                            <>
                                                <div className="col-md-6 p-2">
                                                    <div className="contact-item p-3">
                                                        <img src={val.img} alt="" className="mb-3" />
                                                        <h4>{val.title}</h4>
                                                        <p>{val.content}</p>

                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="col-lg-6 p-2">
                            <div className="contact-item p-3">
                                <form action="">
                                    <div className="row p-3">
                                        <div className="col-md-6 mt-4 mt-lg-2">
                                            <input type="text" name='name' id="name" placeholder="Enter Full Name" className="p-2 w-100" />
                                        </div>
                                        <div className="col-md-6 mt-4 mt-lg-2">
                                            <input type="email" name='email' id="email" placeholder="Enter Your Email" className="p-2 w-100" />
                                        </div>
                                        <div className="col-md-12 mt-4">
                                            <input type="text" name='subjecr' id="subject" placeholder="Subject" className="p-2 w-100" />
                                        </div>
                                        <div className="col-md-12 mt-4">
                                            <textarea name="message" id="message" placeholder="Message" cols="30" rows="5" className="w-100 p-2"></textarea>
                                        </div>
                                        <div className="col-md-12 text-center p-2">
                                            <button className="btn btn-danger p-2">Send Message</button>
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
export { Home, About, Services, Team, Contact };