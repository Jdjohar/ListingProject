import React, {useState, useEffect} from "react";
import video from "../assets/video/REST OF GTA.mp4";
import city9 from "../assets/images/cities/9.jpg";
import CommonCarousel from "../components/CommonCarousel";
import { Link } from 'react-router-dom';
import Footer from "../components/Footer";

const Gta = () => {

  const [GtaProperties, setGtaProperties] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [propertyType, setPropertyType] = useState('Select property type');
  const [numOfBathrooms, setNumOfBathrooms] = useState('Select bathrooms');
  const [numOfBeds, setNumOfBeds] = useState('Select beds');

  useEffect(() => {
    fetchProperties();
  }, [searchInput, propertyType, numOfBathrooms, numOfBeds]);


  const sendcityName = {
    neighborhoods: 'restofgta',
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
      setGtaProperties(data);
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
              <h1 className="text-white mb-5">GTA</h1>
              <p className="text-white">
              The Greater Toronto Area, which is an economic area defined by the Government of Ontario

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
              <img src={city9} className="img-fluid mb-4" />
            </div>

            <div className="col-lg-6 col-12 mb-4 mb-lg-0 d-flex align-items-center">
              <div className="services-info ">
                <h2 className="text-dark mb-4">WELCOME TO GTA </h2>

                <p className="text-dark text-justify">
                The Greater Toronto Area, commonly referred to as the GTA, includes the City of Toronto and the regional municipalities of Durham, Halton, Peel, and York. In total, the region contains 25 urban, suburban, and rural municipalities.[2][3] The Greater Toronto Area begins in Burlington in Halton Region to the west, and extends along Lake Ontario past downtown Toronto eastward to Clarington in Durham Region. According to the 2021 census, the Census Metropolitan Area (CMA) of Toronto has a total population of 6.202 million residents, making it the nation's largest, and the 6th-largest in North America.[4] However, the Greater Toronto Area, which is an economic area defined by the Government of Ontario, includes communities which are not included in the CMA as defined by Statistics Canada. Extrapolating the data for all 25 communities in the Greater Toronto Area from the 2021 Census, the total population for the economic region included 6,711,985 people.
                </p>

                <h6 className="text-dark  mt-4">Etymology</h6>
                <p className="text-dark text-justify">
                The term "Greater Toronto" was first used in writing as early as the 1900s, although at the time, the term only referred to the old city of Toronto and its immediate townships and villages, which became Metropolitan Toronto in 1954 and became the current city of Toronto in 1998.[7] The use of the term involving the four surrounding regional municipalities came into formal use in the mid-1980s, after it was used in a widely discussed report on municipal governance restructuring in the region and was later made official as a provincial planning area. However, it did not come into everyday usage until the mid- to late 1990s.                </p>
              </div>
            </div>
          </div>
          <div className="row py-5">
            <h2>Census metropolitan area</h2>
            <p className="mb-0 text-dark text-justify">
            Some municipalities considered part of the GTA are not within the Toronto Census Metropolitan Area (CMA) which is smaller than the land area and population of the GTA planning area. For example, Oshawa is the centre of its own CMA, yet deemed part of the Greater Toronto Area, while other municipalities, such as New Tecumseth in southern Simcoe County and Mono Township in Dufferin County are included in the Toronto CMA but not in the GTA.[10] These different border configurations result in the GTA's population being higher than the Toronto CMA by nearly one-half million people, often leading to confusion amongst people when trying to sort out Toronto's urban population.
            </p>
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

        {GtaProperties.length == 0 ? (
              <p className='text-center fw-bold'>No featured properties available.</p>
            ) : (
        <div className="container">
          <div className="row justify-content-center">
            <h2 className="text-dark text-center mb-5"> </h2>
            {GtaProperties.map((property, index) => (
              <div key={index} className="col-lg-4 col-12 my-2">
                <div className="shad p-3">
                  <div className="artists-image-wrap">
                    {property.imageUrls && property.imageUrls[0] ? (
                      <img
                        src={`https://estate-tm2d.onrender.com/${property.coverImageUrl}`}
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

export default Gta;
