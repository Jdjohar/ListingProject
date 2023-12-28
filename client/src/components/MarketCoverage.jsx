import React from 'react';
import city1 from '../assets/images/cities/1.jpg';
import city2 from '../assets/images/cities/2.jpg';
import city3 from '../assets/images/cities/3.jpg';
import city4 from '../assets/images/cities/4.jpg';
import city5 from '../assets/images/cities/5.jpg';
import city6 from '../assets/images/cities/6.jpg';
import city7 from '../assets/images/cities/7.jpg';
import city8 from '../assets/images/cities/8.jpg';
import city9 from '../assets/images/cities/9.jpg';
import { Link } from 'react-router-dom';

const MarketCoverage = () => {
  return (
    <section className="artists-section section-padding" id="section_4">
            <div className="container">
                <div className="row justify-content-center">
                    <h2 className="text-dark text-center mb-5">Market Coverage </h2>
                    <div className="col-lg-4 col-md-4 mb-3 col-sm-6 col-xs-12 ">
                        <div className="hovereffect">
                            <img className="img-fluid" src={city1} alt="city" />
                            <div className="overlay">
                               <h2>Bronte</h2>
                               <Link className="info" to={'/neighbourhoods/bronte'}>VIEW</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 mb-3 col-sm-6 col-xs-12">
                        <div className="hovereffect">
                            <img className="img-fluid" src={city2} alt="city" />
                                <div className="overlay">
                                    <h2>Bronte Creek</h2>
                                    <p>
                                    <Link to={'/neighbourhoods/Brontecreek'}>VIEW</Link>
                                    </p>
                                </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 mb-3 col-sm-6 col-xs-12">
                        <div className="hovereffect">
                            <img className="img-fluid" src={city3} alt="city" />
                                <div className="overlay">
                                    <h2>Burlington</h2>
                                    <p>
                                    <Link to={'/neighbourhoods/Burlington'}>VIEW</Link>
                                    </p>
                                </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 mb-3 col-sm-6 col-xs-12">
                        <div className="hovereffect">
                            <img className="img-fluid" src={city4} alt="city" />
                                <div className="overlay">
                                    <h2>Oakville</h2>
                                    <p>
                                    <Link to={'/neighbourhoods/Oakville'}>VIEW</Link>
                                    </p>
                                </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 mb-3 col-sm-6 col-xs-12">
                        <div className="hovereffect">
                            <img className="img-fluid" src={city5} alt="city" />
                                <div className="overlay">
                                    <h2>Clearview</h2>
                                    <p>
                                    <Link to={'/neighbourhoods/Clearview'}>VIEW</Link>
                                    </p>
                                </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 mb-3 col-sm-6 col-xs-12">
                        <div className="hovereffect">
                            <img className="img-fluid" src={city6} alt="city" />
                                <div className="overlay">
                                    <h2>College Park</h2>
                                    <p>
                                    <Link to={'/neighbourhoods/Collegepark'}>VIEW</Link>
                                    </p>
                                </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 mb-3 col-sm-6 col-xs-12">
                        <div className="hovereffect">
                            <img className="img-fluid" src={city7} alt="city" />
                                <div className="overlay">
                                    <h2>Mississauga</h2>
                                    <p>
                                    <Link to={'/neighbourhoods/Mississauga'}>VIEW</Link>
                                    </p>
                                </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 mb-3 col-sm-6 col-xs-12">
                        <div className="hovereffect">
                            <img className="img-fluid" src={city8} alt="city" />
                                <div className="overlay">
                                    <h2>Brampton</h2>
                                    <p>
                                        <Link to={'/neighbourhoods/Brampton'}>VIEW</Link>
                                    </p>
                                </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 mb-3 col-sm-6 col-xs-12">
                        <div className="hovereffect">
                            <img className="img-fluid" src={city9} alt="city" />
                                <div className="overlay">
                                    <h2>Rest of GTA</h2>
                                    <p>
                                        <Link to={'/neighbourhoods/Gta'}>VIEW</Link>
                                    </p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default MarketCoverage