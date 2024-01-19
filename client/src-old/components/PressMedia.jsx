import React from 'react';
import { Link } from 'react-router-dom';
import social_1 from '../assets/images/social/1.png';
import social_2 from '../assets/images/social/2.png';
import social_3 from '../assets/images/social/3.png';

const PressMedia = () => {
  return (
    <section className="artists-section section-padding" id="section_3">
    <div className="container">
        <div className="row justify-content-center">
            <h2 className="text-dark text-center mb-5">Social Links </h2>
            <div className="col-lg-4 col-md-4 mb-3 col-sm-6 col-xs-12 ">
                <div className="hovereffect">
                    <img className="img-fluid" src={social_1} alt="social" />
                    <div className="overlay">
                       <h2>FACEBOOK</h2>
                       <Link className="info" to={'https://www.facebook.com/Janetshiwramrealty '} target='_blank'>VIEW</Link>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 mb-3 col-sm-6 col-xs-12">
                <div className="hovereffect">
                    <img className="img-fluid" src={social_2} alt="social" />
                        <div className="overlay">
                            <h2>INSTAGRAM</h2>
                            <p>
                                <Link to={"https://www.instagram.com/janetshiwramrealty"} target='_blank'>VIEW</Link>
                            </p>
                        </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 mb-3 col-sm-6 col-xs-12">
                <div className="hovereffect">
                    <img className="img-fluid" src={social_3} alt="social" />
                        <div className="overlay">
                            <h2>Tiktok</h2>
                            <p>
                                <Link to={"https://www.tiktok.com/janetshiwramrealty"} target='_blank' >VIEW</Link>
                            </p>
                        </div>
                </div>
            </div>

        </div>
    </div>
</section>
  )
}

export default PressMedia