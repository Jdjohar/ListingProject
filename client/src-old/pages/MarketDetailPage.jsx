import React, {useState, useEffect} from "react";
import video from "../assets/video/bronte.mp4";
import city1 from "../assets/images/cities/1.jpg";
import CommonCarousel from "../components/CommonCarousel";
import { Link } from 'react-router-dom';
import Footer from "../components/Footer";

const MarketDetailPage = () => {

  const [bronteProperties, setBronteProperties] = useState([]);
  const [selectedPropertyType, setSelectedPropertyType] = useState('');
  const [selectedNumofBeds, setSelectedNumofBeds] = useState('');
  const [selectedNumofBathrooms, setSelectedNumofBathrooms] = useState('');


  useEffect(() => {
    fetchProperties();
  }, [selectedPropertyType, selectedNumofBeds, selectedNumofBathrooms]);


  const sendcityName = {
    neighborhoods: 'bronte'
  }

  const fetchProperties = async () => {
    try {

      const requestBody = {
        ...sendcityName,
        propertyType: selectedPropertyType, // Pass selected property type
        NumofBeds: selectedNumofBeds,
        NumofBathrooms: selectedNumofBathrooms
      };
    
      const response = await fetch('https://estate-70yd.onrender.comapi/getpropertiesbyNeighbourHood', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody), // Pass your neighborhoods array here
      });

      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }

      const data = await response.json();
      console.log(data, "data");
      setBronteProperties(data);
    } catch (error) {
      setError(error.message);
    }
  };

  const handlePropertyTypeChange = (event) => {
    setSelectedPropertyType(event.target.value);
  };

  const handleNumofBedsChange = (event) => {
    setSelectedNumofBeds(event.target.value);
  };

  const handleNumofBathroomsChange = (event) => {
    setSelectedNumofBathrooms(event.target.value);
  };


  return (
    <div>
      <section className="hero-section" id="section_1">
        <div className="section-overlay"></div>

        <div className="container d-flex justify-content-center align-items-center">
          <div className="row">
            <div className="col-12 mt-auto mb-5 text-center">
              <h1 className="text-white mb-5">BRONTE</h1>
              <p className="text-white">
                Bronte was a separate town before joining Oakville, and in the
                past 30 years has gone through many significant developments.
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
              <img src={city1} className="img-fluid" />
            </div>

            <div className="col-lg-6 col-12 mb-4 mb-lg-0 d-flex align-items-center">
              <div className="services-info ">
                <h2 className="text-dark mb-4">WELCOME TO BRONTE </h2>

                <p className="text-dark text-justify">
                  Bronte is the community that makes up much of the west end of
                  Oakville, in Ontario, Canada. Twelve Mile Creek (known
                  informally as Bronte Creek) flows through the middle of town
                  and empties into Lake Ontario. Main roads include Bronte Road
                  (north-south), Lakeshore Road West (east-west, parallel to
                  Lake Ontario) and Rebecca Street (east-west). Streets in the
                  business section include Lakeshore, Jones, Marine, and Ontario
                  Street. Bronte is also accessed via a superhighway (the Queen
                  Elizabeth Way) located to the north of the former village.
                  Other main roads include Third Line, Speers Road and Burloak
                  Drive to the west (the latter was named after the boundary of
                  Burlington and Oakville.)
                </p>

                <h6 className="text-dark  mt-4">Geography and information</h6>

                <h5 className="text-dark">CATHOLIC</h5>

                <p className="mb-0 text-dark">Population: about 10,000</p>
                <p className="mb-0 text-dark">Median age: 50</p>
                <p className="mb-0 text-dark">Population Density: Medium</p>
                <p className="mb-0 text-dark">
                  Name of inhabitants - Brontonian sing., -s pl.
                </p>
                <p className="mb-0 text-dark">
                  ET – English Track, FI – French Immersion
                </p>
              </div>
            </div>
          </div>
          <div className="row py-5">
            <h2>Culture and neighbourhood</h2>
            <p className="mb-0 text-dark text-justify">
              Bronte's neighbourhood stretches from Burloak Drive in the west to
              Third Line, and from Lake Ontario in the south to Rebecca Street.
              Coronation Park, in the adjacent neighbourhood of Southwest
              Oakville, has a large playground, plentiful parking space, a field
              room, and sandy beaches. It hosts the annual Waterfront Festival.
              Its greatest attraction is an outdoor stage fronting an area 256
              feet deep and 152 feet wide, with a hillock at the side. During
              the Waterfront Festival, the east field has carnival rides such as
              1001 Niches and Polar Express, and features game kiosks. The
              parking lot is turned into a string of kiosks offering food and
              product information. The stage has extra lighting installed with a
              projector screen, an autograph booth at the side, and a DJ booth
              in the middle.
            </p>
          </div>
        </div>
      </section>
      <section className="carousel-sec pt-4 pb-5">
        <h2 className="fw-bold display-4 p-2 text-center my-3">
          What our customers say
        </h2>
        <CommonCarousel />
      </section>

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
              <select className=" w-100 serachbtn" onChange={handlePropertyTypeChange}>
                <option>Select property type</option>
                <option value="residential">Residential</option>
                <option value="townhouse">Townhouse</option>
                <option value="condo">Condo</option>
                <option value="commercial">Commercial</option>
                <option value="multifamily">Multi-Family</option>
              </select>
            </div>
            <div className="col-md-4">
              <select className=" w-100 serachbtn" onChange={handleNumofBathroomsChange}>
                <option value="1+">1+ Bathrooms</option>
                <option value="2+">2+ Bathrooms</option>
                <option value="3+">3+ Bathrooms</option>
                <option value="4+">4+ Bathrooms</option>
                <option value="5+">5+ Bathrooms</option>
                <option value="6+">6+ Bathrooms</option>
              </select>
            </div>
            <div className="col-md-4">
              <select className=" w-100 serachbtn" onChange={handleNumofBedsChange}>
                <option value="1+">1+ Bedrooms</option>
                <option value="2+">2+ Bedrooms</option>
                <option value="3+">3+ Bedrooms</option>
                <option value="4+">4+ Bedrooms</option>
                <option value="5+">5+ Bedrooms</option>
                <option value="6+">6+ Bedrooms</option>
              </select>
            </div>
          </div>
        </div>

        {bronteProperties.length == 0 ? (
              <p className='text-center fw-bold'>No featured properties available.</p>
            ) : (
        <div className="container">
          <div className="row justify-content-center">
            <h2 className="text-dark text-center mb-5"> </h2>
            {bronteProperties.map((property, index) => (
              <div key={index} className="col-lg-4 col-12 my-2">
                <div className="shad p-3">
                  <div className="artists-image-wrap">
                    {property.imageUrls && property.imageUrls[0] ? (
                      <img
                        src={`https://estate-70yd.onrender.com${property.imageUrls[0]}`}
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
                        <strong>{property.NumofBathrooms} Bathroom</strong>{' '}
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

export default MarketDetailPage;
