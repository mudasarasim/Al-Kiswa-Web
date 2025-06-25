import './About.css';
import jgpg from '../assets/Images/g.jpg';
import image3 from '../assets/Images/image3.png';
import image4 from '../assets/Images/image4.png';
import download from '../assets/Images/download.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import React, { useState } from 'react';




const About = () => {
     const [message, setMessage] = useState('');
    
      const handleWhatsAppSend = () => {
        const phoneNumber = "971526353298"; // AIO WhatsApp Number (without '+')
        const encodedMsg = encodeURIComponent(message || "Hi AIO SERVICES, I need some help.");
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMsg}`;
        window.open(whatsappUrl, "_blank");
      };
  return (
    <>
     <section class="page-title-section bg-img cover-background top-position theme-overlay-dark" data-overlay-dark="6" data-background="img/content/bg-05.jpg" style={{backgroundImage: 'url("img/content/bg-05.jpg")'}}>
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h1>About Us</h1>
                    </div>
                    <div class="col-md-12">
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="#!">About Us</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 mb-2-9 mb-lg-0">
                        <div class="position-relative">
                            <div class="position-relative z-index-1 py-2-9 py-xl-7 px-1-6 px-md-2-9 px-lg-1-6">
                                <img src="img/content/about-04.jpg" class="rounded" alt="..." />
                            </div>
                            <span class="position-absolute w-auto top left z-index-0"><img src="img/content/bg-pattern.png" alt="..." /></span>
                            <div class="counter-style1 rounded">
                                <h4 class="text-primary countup">16</h4>
                                <h5 class="m-0">Years of Experience</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="pl-lg-4">
                            <h5 class="text-primary h6">About Us</h5>
                            <h2 class="display-20 display-md-18 display-lg-16 mb-1-6">We have long stretches of encounters on cleaning</h2>
                            <p class="mb-1-6">We offerings for all sorts and sizes of complexes from small to big places of work and industrial facilities to industrial, warehouse, and retail locations.</p>
                            <div class="row mb-1-6">
                                <div class="col-sm-6">
                                    <ul class="list-style1 mb-0">
                                        <li>Experienced Team</li>
                                        <li>Online Booking</li>
                                        <li>100% Satisfaction</li>
                                    </ul>
                                </div>
                                <div class="col-sm-6">
                                    <ul class="list-style1 mb-0">
                                        <li>Latest Equipment</li>
                                        <li>Certified Company</li>
                                        <li>24/7 Online Support</li>
                                    </ul>
                                </div>
                            </div>
                            <a class="butn" href="#!">Discover More</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="bg-light">
            <div class="container">
                <div class="text-center mb-5">
                    <h5 class="text-primary h6">Our Process</h5>
                    <h2 class="display-20 display-md-18 display-lg-16">Impressive simple cycle steps</h2>
                </div>

                <div class="row">
                    <div class="col-lg-4 mb-2-5 mb-lg-0">
                        <div class="process-block">
                            <div class="process-step">
                                <div class="dot-border">01</div>
                            </div>
                            <h4 class="h5 mb-3">Account &amp; Check In</h4>
                            <p>Account ipsum dolor sit amet consectetur adipisicing elit eiusmod tempor incididunt ut labore et dolore.</p>
                            <a href="#!" class="read-more">read more</a>
                        </div>
                    </div>
                    <div class="col-lg-4 mb-2-5 mb-lg-0">
                        <div class="process-block">
                            <div class="process-step">
                                <div class="dot-border">02</div>
                            </div>
                            <h4 class="h5 mb-3">Choose Category</h4>
                            <p>Category ipsum dolor sit amet consectetur adipisicing elit eiusmod tempor incididunt ut labore et dolore.</p>
                            <a href="#!" class="read-more">read more</a>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="process-block">
                            <div class="process-step">
                                <div class="dot-border last">03</div>
                            </div>
                            <h4 class="h5 mb-3">Get Clean Property</h4>
                            <p>Property ipsum dolor sit amet consectetur adipisicing elit eiusmod tempor incididunt ut labore et dolore.</p>
                            <a href="#!" class="read-more">read more</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="parallax cover-background theme-overlay-dark" data-overlay-dark="8" data-background="img/bg/bg-02.jpg" style={{backgroundImage: 'url("img/bg/bg-02.jpg")'}}>
            <div class="container">
                <div class="row justify-content-center mb-6">
                    <div class="col-lg-8 center-col text-center">
                        <div class="mb-2-9 mb-xl-6">
                            <a class="popup-social-video video_btn" href="https://vimeo.com/154922958">
                                <span class="video_btn">
                                    <i class="fas fa-play"></i>
                                </span>
                            </a>
                        </div>
                        <h2 class="display-18 display-md-16 display-lg-14 text-white font-weight-700">Get happy with our best service we provide</h2>
                    </div>
                </div>
            </div>
        </section>

        <section class="counter-box">
            <div class="container">
                <div class="bg-white shadow py-2-5 px-2-5 rounded mb-1-6">
                    <div class="row justify-content-center">
                        <div class="col-lg-10">
                            <div class="row">
                                <div class="col-sm-6 col-lg-3 text-center mb-1-9 mb-lg-0">
                                    <h5 class="countup display-18">6524</h5>
                                    <p class="mb-0 text-secondary font-weight-500">Workers</p>
                                </div>
                                <div class="col-sm-6 col-lg-3 text-center mb-1-9 mb-lg-0">
                                    <h5 class="countup display-18">1462</h5>
                                    <p class="mb-0 text-secondary font-weight-500">Equipment</p>
                                </div>
                                <div class="col-sm-6 col-lg-3 text-center mb-1-6 mb-sm-0">
                                    <h5 class="countup display-18">124</h5>
                                    <p class="mb-0 text-secondary font-weight-500">World Wide</p>
                                </div>
                                <div class="col-sm-6 col-lg-3 text-center">
                                    <h5 class="countup display-18">42</h5>
                                    <p class="mb-0 text-secondary font-weight-500">Won Award</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div class="container">
                <div class="text-center mb-5">
                    <h5 class="text-primary h6">Our Team</h5>
                    <h2 class="display-20 display-md-18 display-lg-16">Meet our master individuals</h2>
                </div>

                <div class="row">
                    <div class="col-sm-6 col-lg-4 mb-1-9 mb-lg-0">
                        <div class="team-style1 hoverstyle1">
                            <div class="team-img">
                                <img src="img/team/team-01.jpg" alt="" />
                            </div>
                            <div class="team-social-icon">
                                <ul>
                                    <li><a href="#!"><i class="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#!"><i class="fab fa-twitter"></i></a></li>
                                    <li><a href="#!"><i class="fab fa-youtube"></i></a></li>
                                    <li><a href="#!"><i class="fab fa-linkedin-in"></i></a></li>
                                </ul>
                            </div>
                            <div class="team-info">
                                <h6 class="h5">Lena Christner</h6>
                                <small>Refractory Helper</small>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-4 mb-1-9 mb-lg-0">
                        <div class="team-style1 hoverstyle1">
                            <div class="team-img">
                                <img src="img/team/team-02.jpg" alt="" />
                            </div>
                            <div class="team-social-icon">
                                <ul>
                                    <li><a href="#!"><i class="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#!"><i class="fab fa-twitter"></i></a></li>
                                    <li><a href="#!"><i class="fab fa-youtube"></i></a></li>
                                    <li><a href="#!"><i class="fab fa-linkedin-in"></i></a></li>
                                </ul>
                            </div>
                            <div class="team-info">
                                <h6 class="h5">Manuel Millner</h6>
                                <small>Products Arranger</small>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-4">
                        <div class="team-style1 hoverstyle1">
                            <div class="team-img">
                                <img src="img/team/team-03.jpg" alt="" />
                            </div>
                            <div class="team-social-icon">
                                <ul>
                                    <li><a href="#!"><i class="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#!"><i class="fab fa-twitter"></i></a></li>
                                    <li><a href="#!"><i class="fab fa-youtube"></i></a></li>
                                    <li><a href="#!"><i class="fab fa-linkedin-in"></i></a></li>
                                </ul>
                            </div>
                            <div class="team-info">
                                <h6 class="h5">Mary Goldstein</h6>
                                <small>Home Specialist</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
         <div className="whatsapp-button" onClick={handleWhatsAppSend}>
              <FontAwesomeIcon icon={faWhatsapp} />
        </div>
    </>

  );
};

export default About;
