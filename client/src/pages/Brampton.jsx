import React, {useState, useEffect} from "react";
import video from "../assets/video/bronte.mp4";
import city8 from "../assets/images/cities/8.jpg";
import CommonCarousel from "../components/CommonCarousel";
import { Link } from 'react-router-dom';
import Footer from "../components/Footer";

const Brampton = () => {

  const [BramptonProperties, setBramptonProperties] = useState([]);

  useEffect(() => {
    fetchProperties();
  }, []);


  const sendcityName = {
    neighborhoods: 'brampton'
  }

  const fetchProperties = async () => {
    try {
    
      const response = await fetch('http://localhost:3001/api/getpropertiesbyNeighbourHood', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sendcityName), // Pass your neighborhoods array here
      });

      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }

      const data = await response.json();
      console.log(data, "data");
      setBramptonProperties(data);
    } catch (error) {
      setError(error.message);
    }
  };


  return (
    <div>
      <section className="hero-section" id="section_1">
        <div className="section-overlay"></div>

        <div className="container d-flex justify-content-center align-items-center">
          <div className="row">
            <div className="col-12 mt-auto mb-5 text-center">
              <h1 className="text-white mb-5">BRAMPTON</h1>
              <p className="text-white">
              Brampton, a vibrant city in Ontario, Canada, is characterized by its cultural diversity, family-friendly neighborhoods, and a growing urban landscape that reflects both tradition and innovation.

</p>
            </div>
          </div>
        </div>

        <div className="video-wrap">
          <video autoPlay loop muted className="custom-video">
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      <section
        className="bg-white about-section section-padding"
        id="section_2"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img src={city8} className="img-fluid mb-4" />
            </div>

            <div className="col-lg-6 col-12 mb-4 mb-lg-0 d-flex align-items-center">
              <div className="services-info ">
                <h2 className="text-dark mb-4">WELCOME TO BRAMPTON </h2>

                <p className="text-dark text-justify">
                In 1853, a small agricultural fair was set up by the newly initiated County Agricultural Society of the County of Peel and was held at the corner of Main and Queen streets. Grains, produce, roots, and dairy products were up for sale. Horses and cattle, along with other lesser livestock, were also sold at the market. This agricultural fair eventually became the modern Brampton Fall Fair.</p>

                    
                <p className="text-dark text-justify">In that same year Brampton was incorporated as a village.[9] In 1866, the town became the county seat and the location of the Peel County Courthouse which was built in 1865–66; a three-storey County jail was added at the rear in 1867.
                </p>

                <p className="text-dark text-justify">
                Edward Dale, an immigrant from Dorking, England, established a flower nursery in Brampton[10] shortly after his arrival in 1863.[11] Dale's Nursery became the town's largest[10] and most prominent employer, developed a flower grading system,[11] and established a global export market for its products.[10] The company chimney was a town landmark,[11] until Brampton Town Council allowed it to be torn down in 1977.[11] At its height, the company had 140 greenhouses,[12] and was the largest cut flower business in North America,[13] producing 20 million blooms and introducing numerous rose and orchid varietals and species to the market.[13] It also spurred the development of other nurseries in the town. Forty-eight hothouse flower nurseries once did business in the town</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="carousel-sec pt-4 pb-5">
        <h2 className="fw-bold display-4 p-2 text-center my-3">
          What our customers say
        </h2>
        <CommonCarousel />
      </section> */}

      <section className="testimonial py-5" style={{background: "#ebebeb"}}>
        <div className="container py-5">
          <div className="row">
            <h3 className="text-center ">PROPERTY LISTINGS</h3>

            <div className="search">
              <input
                type="text"
                className="serachbtn lp-input--dark"
                placeholder="Search by address, city, state, zip..."
                id="search-input"
                name="search-input"
              />
            </div>

            <div className="col-md-4">
              <select className=" w-100 serachbtn">
                <option>Select property type</option>
                <option>Residential</option>
                <option>Townhouse</option>
                <option>Condo</option>
                <option>Commercial</option>
                <option>Multi-Family</option>
              </select>
            </div>
            <div className="col-md-4">
              <select className=" w-100 serachbtn">
                <option>1+ Bathrooms</option>
                <option>2+ Bathrooms</option>
                <option>3+ Bathrooms</option>
                <option>4+ Bathrooms</option>
                <option>5+ Bathrooms</option>
                <option>6+ Bathrooms</option>
              </select>
            </div>
            <div className="col-md-4">
              <select className=" w-100 serachbtn">
                <option>1+ Bedrooms</option>
                <option>2+ Bedrooms</option>
                <option>3+ Bedrooms</option>
                <option>4+ Bedrooms</option>
                <option>5+ Bedrooms</option>
                <option>6+ Bedrooms</option>
              </select>
            </div>
          </div>
        </div>

        {BramptonProperties.length == 0 ? (
              <p className='text-center fw-bold'>No featured properties available.</p>
            ) : (
        <div className="container">
          <div className="row justify-content-center">
            <h2 className="text-dark text-center mb-5"> </h2>
            {BramptonProperties.map((property, index) => (
              <div key={index} className="col-lg-4 col-12 my-2">
                <div className="shad p-3">
                  <div className="artists-image-wrap">
                    {property.imageUrls && property.imageUrls[0] ? (
                      <img
                        src={`http://localhost:3001/${property.imageUrls[0]}`}
                        className="artists-image img-fluid"
                        alt={`Property ${index}`}
                      />
                    ) : (
                      ''
                    )}
                  </div>
                  <div className="py-3">
                    <h4>{property.PropertyName}</h4>
                    <p>
                      <i className="bi bi-pin-map-fill"></i> {property.Address}
                    </p>
                    <ul className="p-0 list-point">
                      <li>
                        <i className="bi bi-segmented-nav"></i>{' '}
                        <strong>{property.NumofBeds} Bed</strong>{' '}
                      </li>
                      <li>
                        <i className="bi bi-arrows-angle-expand"></i>{' '}
                        <strong>{property.Area} SQ.Ft</strong>
                      </li>
                    </ul>
                  </div>
                  <Link
                    className="btn custom-btn w-100 smoothscroll"
                    to={`/listing-page/${property._id}`}
                  >
                    View Listing
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
            )}
      </section>

      <Footer />
    </div>
  );
};

export default Brampton;
