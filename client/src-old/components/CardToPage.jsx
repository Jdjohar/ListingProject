import React from 'react'
import card1 from '../assets/images/1.jpg'
import card2 from '../assets/images/2.jpg'
import card3 from '../assets/images/3.jpg'
import { Link } from 'react-router-dom'

const CardToPage = () => {
  return (
    <div>
         <section className="artists-section section-padding" id="section_5">
            <div className="container">
                <div className="row justify-content-center">

                
                    <div className="col-lg-4 col-12">
                        <div className="artists-thumb">
                            <div className="artists-image-wrap">
                                <Link to={'/'}>
                                <img src={card1} className="artists-image img-fluid" />
                               </Link>
                            </div>
                            <div className="py-3 text-center">
                                <Link to>
                                <h3>Listing</h3>
                            </Link>
                            </div>
                     </div>
                    </div>
                    <div className="col-lg-4 col-12">
                        <div className="artists-thumb">
                            <div className="artists-image-wrap">
                                <Link to={'/'}>
                                <img src={card2} className="artists-image img-fluid" />
                                </Link>
                            </div>
                            <div className="py-3 text-center">
                                <Link to={'/'}>
                                <h3>Services</h3></Link>
                            </div>
                     </div>
                    </div>
                    <div className="col-lg-4 col-12">
                        <div className="artists-thumb">
                            <div className="artists-image-wrap">
                                <Link to={'/'}>
                                <img src={card3} className="artists-image img-fluid" />
                               </Link>
                            </div>
                            <div className="py-3 text-center">
                                <Link to={'/'}>
                                <h3>Neighbourhoods</h3></Link>
                            </div>
                     </div>
                    </div>

                
                </div>
            </div>
        </section>
    </div>
  )
}

export default CardToPage