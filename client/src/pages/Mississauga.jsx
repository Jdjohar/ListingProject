import React, {useState, useEffect} from "react";
import video from "../assets/video/MISSISSAUGA.mp4";
import city7 from "../assets/images/cities/7.jpg";
import CommonCarousel from "../components/CommonCarousel";
import { Link } from 'react-router-dom';
import Footer from "../components/Footer";

const Mississauga = () => {

  const [MississaugaProperties, setMississaugaProperties] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [propertyType, setPropertyType] = useState('Select property type');
  const [numOfBathrooms, setNumOfBathrooms] = useState('Select bathrooms');
  const [numOfBeds, setNumOfBeds] = useState('Select beds');

  useEffect(() => {
    fetchProperties();
  }, [searchInput, propertyType, numOfBathrooms, numOfBeds]);


  const sendcityName = {
    neighborhoods: 'mississauga',
    propertyType,
    NumofBeds: numOfBeds,
    NumofBathrooms: numOfBathrooms,
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
      setMississaugaProperties(data);
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
              <h1 className="text-white mb-5">MISSISSAUGA</h1>
              <p className="text-white">
              Mississauga, a thriving city in Ontario, Canada, combines urban sophistication with suburban charm, featuring a diverse cultural scene, modern infrastructure, and a bustling economy.              </p>
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
              <img src={city7} className="img-fluid mb-4" />
            </div>

            <div className="col-lg-6 col-12 mb-4 mb-lg-0 d-flex align-items-center">
              <div className="services-info ">
                <h2 className="text-dark mb-4">WELCOME TO MISSISSAUGA </h2>

                <p className="text-dark text-justify">
                    The growth of Mississauga was attributed to its proximity to Toronto.[7] 
                    During the latter half of the 20th century, the city attracted a multicultural
                     population and built up a thriving central business district.[8][9] Malton, a 
                     neighbourhood of the city located in its northeast end, is home to Toronto 
                     Pearson International Airport, Canada's busiest airport, as well as the 
                     headquarters of many Canadian and multinational corporations. Mississauga is 
                     not a traditional city, but is instead an amalgamation of three former 
                     villages, two townships, and a number of rural hamlets (a general pattern 
                     common to several suburban GTA cities) that were significant population centres, 
                     with none being clearly dominant, prior to the city's incorporation that later 
                     coalesced into a single urban area.
                </p>

                <h6 className="text-dark  mt-4">Features</h6>
                <p className="text-dark text-justify">
                Indigenous people have lived in the area for thousands of years and Mississauga is 
                situated on the traditional territory of the Huron-Wendat, Haudenosaunee and 
                Anishinaabeg people, including the namesake Mississaugas.[11] Most of present-day 
                Mississauga was founded in 1805 as Toronto Township within York County, and became 
                part of Peel County when new counties were formed by splitting off parts of the 
                original county in 1851. Mississauga itself was established in 1968 as a town, and 
                was reincorporated as a city in 1974, when Peel was restructured into a regional 
                municipality.</p>
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
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
            </div>

            <div className="col-md-4">
              <select className=" w-100 serachbtn"
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
              >
                <option>Select property type</option>
                <option  value="residential">Residential</option>
                <option value="townhouse">Townhouse</option>
                <option value="condo">Condo</option>
                <option value="commercial">Commercial</option>
                <option value="multifamily">Multi-Family</option>
              </select>
            </div>
            <div className="col-md-4">
              <select className=" w-100 serachbtn"
                value={numOfBathrooms}
                onChange={(e) => setNumOfBathrooms(e.target.value)}
                >
                <option value="1">1+ Bathrooms</option>
                <option value="2">2+ Bathrooms</option>
                <option value="3">3+ Bathrooms</option>
                <option value="4">4+ Bathrooms</option>
                <option value="5">5+ Bathrooms</option>
                <option value="6">6+ Bathrooms</option>
              </select>
            </div>
            <div className="col-md-4">
              <select className=" w-100 serachbtn"
                value={numOfBeds}
                onChange={(e) => setNumOfBeds(e.target.value)}>
                <option value="1">1+ Bedrooms</option>
                <option value="2">2+ Bedrooms</option>
                <option value="3">3+ Bedrooms</option>
                <option value="4">4+ Bedrooms</option>
                <option value="5">5+ Bedrooms</option>
                <option value="6">6+ Bedrooms</option>
              </select>
            </div>
          </div>
        </div>

        {MississaugaProperties.length == 0 ? (
              <p className='text-center fw-bold'>No featured properties available.</p>
            ) : (
        <div className="container">
          <div className="row justify-content-center">
            <h2 className="text-dark text-center mb-5"> </h2>
            {MississaugaProperties.map((property, index) => (
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
                        <i className="bi bi-segmented-nav"></i>{' '}
                        <strong>{property.NumofBathrooms} Bath</strong>{' '}
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

export default Mississauga;
