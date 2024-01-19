import React from "react";
import { Link } from "react-router-dom";
import teamImg from '../assets/images/team.png'
import CommonCarousel from "../components/CommonCarousel";
import Footer from "../components/Footer";

const Team = () => {
  return (
    <main>
        <section className="ticket-section section-padding">
            {/**  <div className="section-overlay"></div> */ }

            <div className="container">

            </div>
               
        </section>

      <section className="bg-white about-section section-padding" id="section_2">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="about-text-wrap">
                <img src={teamImg} className="about-image img-fluid" />
              </div>
            </div>

            <div className="col-lg-6 col-12 mb-4 mb-lg-0 d-flex align-items-center">
              <div className="services-info">
                <h2 className="text-dark mb-4">Meet Janet Shiwram </h2>

                <p className="text-dark">
                  Meet Janet Shiwram, a seasoned realtor with a unique twist –
                  she's not just skilled in the art of property transactions,
                  but also holds a background in psychotherapy. Born and raised
                  in a bustling urban center, Emily discovered her passion while
                  she was buying her own house. However, her journey started
                  with meeting people with various mental health conditions when
                  she decided to pursue Psychotherapy Practitioner Training even
                  before her real estate career.
                </p>
                <p className="text-dark">
                  Janet's educational background includes a Diploma and
                  discovering a Total Self Program, which laid the foundation
                  for her interest in understanding the human mind. And she did
                  not stop there, she even upgraded her education with an
                  additional Diploma in Addictions Counselling & Social Service.
                  Eager to merge her love for real estate with her fascination
                  for psychology, she embarked on a dual career path that helps
                  her counselling her clients well to take the right decision on
                  their most expensive purchase.
                </p>

                <Link className="btn custom-btn smoothscroll" to={'/about-page'}>
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className='carousel-sec pt-4 pb-5'>
    <h2 className="fw-bold display-4 p-2 text-center my-3">What our customers say</h2>
    <CommonCarousel/>
    </section> */}

    <Footer/>
    </main>
  );
};

export default Team;
