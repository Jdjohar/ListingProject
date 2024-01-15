import React from 'react';
import aboutImg from '../assets/images/img.jpg'
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
         <section className="bg-white about-section section-padding" id="section_2">
        <div className="container">
            <div className="row">

                <div className="col-lg-6 col-12 mb-4 mb-lg-0 d-flex align-items-center">
                    <div className="services-info">
                        <h2 className="text-dark mb-4 mt-4">Introducing Janet Shiwram</h2>
                        <p className="text-dark">Janet Shiwram is a licensed Realtor®️ with the Toronto Regional Real Estate Board (TRREB).  Janet has the ability to reach buyers, sellers, businesses and marketing statistics and information , throughout the GTA and surrounding areas. </p>

                        <p className="text-dark">Real Estate business, Janet holds an extensive background in psychotherapy and counselling. In short, Janet Shiwram is all about people and supporting families through their transitions. </p>
                        <Link to={'/about-page'} className="btn custom-btn smoothscroll">Learn More</Link>
                      </div>
                </div>

                <div className="col-lg-6 col-12">
                    <div className="about-text-wrap">
                        <img src={aboutImg} className="about-image img-fluid" />

                        {/* <div className="about-text-info d-flex">
                            <div className="d-flex">
                            <i className="about-text-icon bi-person"></i>
                            </div>


                            <div className="ms-4">
                                <h3>Janet Shiwram</h3>

                                <p className="mb-0">Real Estate</p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default About