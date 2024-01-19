import React from 'react';
import aboutimg from '../assets/images/img.jpg';
import CommonCarousel from '../components/CommonCarousel';
import Footer from '../components/Footer';



const AboutPage = () => {
  return (
    <main>
        <section className="ticket-section section-padding">
            {/**  <div className="section-overlay"></div> */ }

            <div className="container">

            </div>
               
        </section>

    <section className="bg-white about-section mt-5 section-padding" id="section_2">
        <div className="container">
            <div className="row">

                <div className="col-lg-6 col-12 mb-4 mb-lg-0 d-flex align-items-center">
                    <div className="services-info">
                        <h2 className="text-dark mb-4"> Introducing Janet Shiwram </h2>
                        <p className="text-dark">Janet Shiwram is a licensed Realtor®️ with the Toronto Regional Real Estate Board (TRREB).  Janet has the ability to reach buyers, sellers, businesses and marketing statistics and information , throughout the GTA and surrounding areas.</p>

                        <p className="text-dark">Real Estate business, Janet holds an extensive background in psychotherapy and counselling. In short, Janet Shiwram is all about people and supporting families through their transitions. </p>

                      </div>
                </div>

                <div className="col-lg-6 col-12">
                    <div className="about-text-wrap">
                        <img src={aboutimg} className="about-image w-75 d-block m-auto img-fluid" />

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

            <div className="row">
              <p className="text-dark mb-2">Janet has always been intrigued about understanding the human mind. Her education curtailed around the total self programs, addictions, counseling and various social services programs   She takes pride in her work history of helping low income people find affordable housing and conducting community workshops teaching mental health and life skills. To merge her love for Real Estate with her fascination for psychology she embarked on a dual career path that helps her counsel and support her clients to make the best decisions on their important Real Estate transactions.</p>
              <p className="text-dark mb-2">Janet Shiwram, your reliable Realtor®️.</p>
              <p className="text-dark mb-2">Janet brings a sophisticated approach in understanding human behavior, communication and the emotional aspects of decision-making.  These are invaluable and unique when it comes to the intricate process of buying and selling a home. In her practice, Janet applies principles of effective communication, skilled negotiation as well as a calming presence for an amicable resolution during transactions.</p>
              <p className="text-dark mb-2">Janet understands that a Real Estate transaction should not only meet your physical and financial requirements, but it should align with your emotional and psychological needs whether you are a first time home buyer, navigating the excitement and anxiety of a new chapter or a seller parting ways with a property filled with memories. Janet is adept at guiding clients through the emotional nuances of real estate transactions . Her unique skills have not only assisted her to build a successful career, it continues to also make a lasting impact on the lives of those she serves in the dynamic world of Real Estate. </p>
            </div>
        </div>
    </section>

    {/* <section className='carousel-sec pt-4 pb-5'>
    <h2 className="fw-bold display-4 p-2 text-center my-3">What our customers say</h2>
    <CommonCarousel/>
    </section> */}

    <Footer/>
    </main>
  )
}

export default AboutPage;