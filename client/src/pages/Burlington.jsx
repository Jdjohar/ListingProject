import React, {useState, useEffect} from "react";
import video from "../assets/video/bronte.mp4";
import city3 from "../assets/images/cities/3.jpg";
import CommonCarousel from "../components/CommonCarousel";
import { Link } from 'react-router-dom';
import Footer from "../components/Footer";

const Burlington = () => {

  const [BurlingtonProperties, setBurlingtonProperties] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [propertyType, setPropertyType] = useState('Select property type');
  const [numOfBathrooms, setNumOfBathrooms] = useState('Select bathrooms');
  const [numOfBeds, setNumOfBeds] = useState('Select beds');

  useEffect(() => {
    fetchProperties();
  }, [searchInput, propertyType, numOfBathrooms, numOfBeds]);


  const sendcityName = {
    neighborhoods: 'burlington',
    propertyType,
    NumofBeds: numOfBeds,
    NumofBathrooms: numOfBathrooms,
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
      setBurlingtonProperties(data);
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
              <h1 className="text-white mb-5">BURLINGTON</h1>
              <p className="text-white">
              Burlington is a city in the Regional Municipality of Halton at the west end of Lake Ontario in Ontario, Canada. Located approximately halfway between Toronto and Niagara Falls, it is part of the Greater Toronto and Hamilton Area and Hamilton metropolitan census area.
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
              <img src={city3} className="img-fluid mb-4" />
            </div>

            <div className="col-lg-6 col-12 mb-4 mb-lg-0 d-flex align-items-center">
              <div className="services-info ">
                <h2 className="text-dark mb-4">WELCOME TO BURLINGTON </h2>

                <p className="text-dark text-justify">
                  Before the 19th century, the area between the provincial capital of York and the 
                  township of West Flamborough was home to the Mississauga nation. In 1792, John 
                  Graves Simcoe, the first lieutenant governor of Upper Canada, named the western 
                  end of Lake Ontario "Burlington Bay" after the town of Bridlington in the East 
                  Riding of Yorkshire, England.[4]</p>

                    
                <p className="text-dark text-justify">The British purchased the land on which Burlington 
                  now stands from the Mississaugas in Upper Canada Treaties 3 (1792), 8 (1797), 
                  14 (1806), and 19 (1818). Treaty 8 concerned the purchase of the Brant Tract, 14.0 km2 (3,450 acres) on Burlington Bay which the British granted to Mohawk chief Joseph Brant for his service in the American Revolutionary War.[5][6] Joseph Brant and his household settled on this tract of land around 1802.[7] Brant is accordingly often referred to as the founder of Burlington, and the city of Burlington still celebrates an annual Joseph Brant Day in early August.[8][9] Subsequent disputes between the Mississaugas of the Credit First Nation and the Canadian government over payment for the Brant Tract and the Toronto Purchase were settled in 2010 for the sum of $145 million (CAD).[6][10]
                </p>

                <h6 className="text-dark  mt-4">Geography</h6>
                <p className="text-dark text-justify">
                  Burlington is at the southwestern end of Lake Ontario, just to the north east 
                  of Hamilton and the Niagara Peninsula, roughly in the geographic centre of the 
                  urban corridor known as the Golden Horseshoe. Burlington has a land area of 187 
                  km2 (72 sq mi). The main urban area is south of the Parkway Belt and Hwy. 407. 
                  The land north of this, and north Aldershot is used primarily for agriculture, 
                  rural residential and conservation purposes. The Niagara Escarpment, Lake Ontario 
                  and the sloping plain between the escarpment and the lake make up the land area of 
                  Burlington. The city is no longer a port; sailing vessels in the area are used for 
                  recreational purposes and moor at a 215 slip marina in LaSalle Park.</p>
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
              <select 
                className=" w-100 serachbtn"
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

        {BurlingtonProperties.length == 0 ? (
              <p className='text-center fw-bold'>No featured properties available.</p>
            ) : (
        <div className="container">
          <div className="row justify-content-center">
            <h2 className="text-dark text-center mb-5">Listing </h2>
            {BurlingtonProperties.map((property, index) => (
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

export default Burlington;
