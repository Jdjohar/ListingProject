import React, {useState, useEffect} from "react";
import video from "../assets/video/bronte.mp4";
import city6 from "../assets/images/cities/6.jpg";
import CommonCarousel from "../components/CommonCarousel";
import { Link } from 'react-router-dom';
import Footer from "../components/Footer";

const Collegepark = () => {

  const [CollegeparkProperties, setCollegeparkProperties] = useState([]);

  useEffect(() => {
    fetchProperties();
  }, []);


  const sendcityName = {
    neighborhoods: 'collegepark'
  }

  const fetchProperties = async () => {
    try {
    
      const response = await fetch('https://estate-tm2d.onrender.com/api/getpropertiesbyNeighbourHood', {
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
      setCollegeparkProperties(data);
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
              <h1 className="text-white mb-5">COLLEGE PARK</h1>
              <p className="text-white">
              COLLEGE PARK is a waterway in the Lake Ontario watershed of Ontario Canada.
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
              <img src={city6} className="img-fluid mb-4" />
            </div>

            <div className="col-lg-6 col-12 mb-4 mb-lg-0 d-flex align-items-center">
              <div className="services-info ">
                <h2 className="text-dark mb-4">WELCOME TO COLLEGE PARK </h2>

                <p className="text-dark text-justify">
                    Eaton's began secretly assembling land at Yonge and College streets in 1910 
                    for a new store. The First World War put the company's development plans on 
                    hold, but Eaton's retained the land. During the 1920s, Eaton's planned to shift 
                    all their operations from their existing location at Yonge Street and Queen 
                    Street West to the College Street site. Eaton's offered to sell part of its 
                    landholdings to its main competitor, Simpson's, in an effort to shift the 
                    heart of Toronto retailing northward and to preserve the synergy created by 
                    having two retail giants next to one another. They did not succeed, and 
                    Simpson's chose instead to expand its Queen Street store.
                </p>

                <h6 className="text-dark  mt-4">College Park – Barbara Ann Scott Ice Trail</h6>
                <p className="text-dark text-justify">
                    College Park (the park rather than the building) is a 0.75 hectares (1.9 acres) 
                    greenspace located behind the buildings in the block bordered by Yonge, College,
                     Bay and Gerrard streets. It is the second largest park in downtown Toronto after 
                     Allan Gardens. It was built in the 1980s over an underground garage. The park was
                      closed for renovations in early 2016 and reopened in 2019. Today, the park 
                      contains the Barbara Ann Scott Ice Trail

                    Originally, the park's official name was Barbara Ann Scott Park, named after 
                    1948 Olympic champion figure skater Barbara Ann Scott. But, informally, the 
                    greenspace was commonly referred to as College Park,[2] a habit carried over 
                    in marketing the newer Aura condominium complex (at Yonge and Gerrard streets, 
                    north-west corner) as "Aura at College Park".
                </p>
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

        {CollegeparkProperties.length == 0 ? (
              <p className='text-center fw-bold'>No featured properties available.</p>
            ) : (
        <div className="container">
          <div className="row justify-content-center">
            <h2 className="text-dark text-center mb-5"> </h2>
            {CollegeparkProperties.map((property, index) => (
              <div key={index} className="col-lg-4 col-12 my-2">
                <div className="shad p-3">
                  <div className="artists-image-wrap">
                    {property.imageUrls && property.imageUrls[0] ? (
                      <img
                        src={`https://estate-tm2d.onrender.com/${property.imageUrls[0]}`}
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

export default Collegepark;
