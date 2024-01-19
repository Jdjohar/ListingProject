import React from "react";
import serviceImg from '../assets/images/services.gif'
import Footer from '../components/Footer'

const ServicePage = () => {
  return (
    <div>
      <section className="ticket-section section-padding">
        <div className="container"></div>
      </section>
      <section
        className="bg-white about-section section-padding"
        id="section_2"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-12">
              <div className="about-text-wrap">
                <img
                  src={serviceImg}
                  className="about-image img-fluid"
                />
              </div>
            </div>

            <div className="col-lg-7 col-12 mb-4 mb-lg-0 d-flex align-items-center">
              <div className="services-info w-100">
                <h2 className="text-dark mb-4 mt-3">Our Services </h2>
                <p>
                  Discover seamless transactions at Jannat Shiwram, your go-to
                  destination for buying, selling, and investing. Elevate your
                  retail experience with our expert services tailored to meet
                  your every need.
                </p>
                <hr />
                <div className="detailcity py-5 d-flex flex-row justify-content-between">
                  <div className="d-flex flex-row align-items-center">
                    {/* <div className="item"></div> */}
                    <div className="itemcopy">
                      <h2 className=" text-left font-weight-bold hrd">
                        Buying
                      </h2>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center">
                    {/* <div className="item"></div> */}
                    <div className="itemcopy">
                      <h3 className=" font-weight-bold hrd">Selling</h3>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center">
                    {/* <div className="item"></div> */}
                    <div className="itemcopy">
                      <h3 className=" font-weight-bold hrd">Investing</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white about-section section-padding" id="section_2">
        <div className="container">
            <div className="row">

                <h3>When We Work Together, You Get:</h3>

                <div className="list">
                    <li>A Personalized Approach</li>
                    <li>Market Insights</li>
                    <li>Free Home Evaluation</li>
                    <li>Professional High-Definition Pictures</li>
                    <li>Social Media Marketing</li>
                    <li>Open Houses</li>
                    <li>MLS Listing</li>
                    <li>24/7 Online Booking System</li>

                </div>
            </div>
        </div>
    </section>

    <Footer/>
   
    </div>
  );
};

export default ServicePage;
