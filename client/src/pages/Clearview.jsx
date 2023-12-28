import React, {useState, useEffect} from "react";
import video from "../assets/video/bronte.mp4";
import city5 from "../assets/images/cities/5.jpg";
import CommonCarousel from "../components/CommonCarousel";
import { Link } from 'react-router-dom';
import Footer from "../components/Footer";

const Clearview = () => {

  const [ClearviewProperties, setClearviewProperties] = useState([]);

  useEffect(() => {
    fetchProperties();
  }, []);


  const sendcityName = {
    neighborhoods: 'clearview'
  }

  const fetchProperties = async () => {
    try {
    
      const response = await fetch('https://real-estate-1kn6.onrender.com/api/getpropertiesbyNeighbourHood', {
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
      setClearviewProperties(data);
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
              <h1 className="text-white mb-5">CLEARVIEW</h1>
              <p className="text-white">
                College Park is a dynamic neighborhood known for its lively atmosphere, 
                diverse community, and proximity to educational institutions, making it a 
                vibrant hub for students and residents alike.
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
              <img src={city5} className="img-fluid" />
            </div>

            <div className="col-lg-6 col-12 mb-4 mb-lg-0 d-flex align-items-center">
              <div className="services-info ">
                <h2 className="text-dark mb-4">WELCOME TO CLEARVIEW </h2>

                <p className="text-dark text-justify">
                    Before the arrival of European settlers, the area of Clearview Township 
                    was part of the territory of the Petun, a confederation of Iroquoians who 
                    were closely related to the Huron and Neutral peoples. The Petun were ravaged 
                    by disease epidemics in the early 17th century and victim to raids by the 
                    Iroquois Confederacy (a part of the Beaver Wars), with much of their remaining 
                    population fleeing as refugees and vacating the territory. There are abundant 
                    archaeological remains in the township from the Petun period.
                </p>

                    
                <p className="text-dark text-justify">
                    Early settlement on the site of Stayner coincided with the construction of the 
                    Toronto, Simcoe and Huron Railway between 1851 and 1855. The community of 
                    Stayner, which was originally called Nottawasaga Station, developed into a 
                    significant agricultural and lumbering centre.[6] Stayner was incorporated as 
                    a village in 1872,[7] and as a Town in 1888.[8] The Village of Creemore was 
                    incorporated effective 20 November 1889.
                </p>

                <h6 className="text-dark  mt-4">Features</h6>
                <p className="text-dark text-justify">
                    Over 1 kilometre (0.62 mi; 3,300 ft) in length, and with over 60 miles 
                    (97 km) of roads, the site was designed to accommodate the Prime Minister, 
                    the entire Cabinet Office, other civil servants, and domestic support staff.

                    Blast-proof and self-sufficient, the complex could accommodate up to 4,000 
                    people in complete isolation from the outside world for up to three months. The 
                    underground city was equipped with all the facilities needed to survive: from 
                    hospitals, canteens, kitchens and laundries to storerooms for supplies, 
                    accommodation areas and offices. An underground lake and treatment plant could 
                    provide drinking water, and twelve tanks could store the fuel required to keep 
                    the four generators in the underground power station running for up to three 
                    months. The air within the complex could be kept at a constant humidity and 
                    heated to around 20 °C (68 °F). It was also equipped with the second-largest 
                    telephone exchange in Britain, a BBC studio from which the PM could address the 
                    nation, and an internal Lamson Tube system that could relay messages throughout 
                    the complex, using compressed air.
                </p>
              </div>
            </div>
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

        {ClearviewProperties.length == 0 ? (
              <p className='text-center fw-bold'>No featured properties available.</p>
            ) : (
        <div className="container">
          <div className="row justify-content-center">
            <h2 className="text-dark text-center mb-5">Listing </h2>
            {ClearviewProperties.map((property, index) => (
              <div key={index} className="col-lg-4 col-12 my-2">
                <div className="shad p-3">
                  <div className="artists-image-wrap">
                    {property.imageUrls && property.imageUrls[0] ? (
                      <img
                        src={`https://real-estate-1kn6.onrender.com/${property.imageUrls[0]}`}
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

export default Clearview;
