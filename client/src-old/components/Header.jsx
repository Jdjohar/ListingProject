import React from 'react'
import heroVideo from '../assets/video/video.mp4';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
        <section className="hero-section" id="section_1">
            <div className="section-overlay"></div>

            <div className="container d-flex justify-content-center align-items-center">
                <div className="row">

                    <div className="col-12 mt-auto mb-5 text-center">
                        <small>Janet Shiwram</small>

                        <h1 style={{fontWeight: '100'}} className="text-white mb-5">Real estate. When you are ready!</h1>

                        <Link className="btn custom-btn smoothscroll" to={'/about-page'}>Let's begin</Link>
                    </div>
                </div>
            </div>

            <div className="video-wrap">
                <video autoPlay loop muted className="custom-video">
                    <source src={heroVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </section>
  )
}

export default Header