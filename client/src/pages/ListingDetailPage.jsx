import React, { useState, useEffect } from "react";
import { useParams,useNavigate } from 'react-router-dom';
import PropertySpotlight from "../components/PropertySpotlight";

import img1 from "../assets/images/Fateh_burj_Minar_in_chapparchiri.jpg";
import img2 from "../assets/images/-1173169478.jpg";
import img3 from "../assets/images/-1246815963.jpg";
import bathtub from "../assets/bath-tub.png";
import bed from "../assets/double-bed.png";
import fullSize from "../assets/full-size.png";
import Footer from "../components/Footer";
import he from 'he';

const ListingDetailPage = () => {
  
  const navigate = useNavigate()
  
  const  { id: propertyId }  = useParams(); // Accessing propertyId from URL params
  const [property, setProperty] = useState(null);
  const [contactInfo, setContactInfo] = useState(null);


  const convertHtmlEntitiesToText = (htmlString) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');
    return doc.body.textContent || "";
  };

  useEffect(() => {
    console.log(propertyId, "not found");
    if (propertyId) {
      fetchPropertyDetails(); // Fetch data only if propertyId is available
    }
    fetchContactInfo();
  }, [propertyId]);

  const fetchPropertyDetails = async () => {
    console.log(propertyId , "asd");
    try {
      const response = await fetch(`https://estate-tm2d.onrender.com/api/property/${propertyId}`); // Replace with your endpoint
      const data = await response.json();
      console.log(data)
      setProperty(data);
    } catch (error) {
      console.error('Error fetching property details:', error);
    }
  };

  // Fetch contact information from your backend
  const fetchContactInfo = async () => {
    try {
      const response = await fetch('https://estate-tm2d.onrender.com/api/get-contact-info');
      if (response.ok) {
        const data = await response.json();
        setContactInfo(data); // Set the received data to state
        console.log(data); // Log the fetched data for debugging
      } else {
        throw new Error('Failed to fetch contact information.');
      }
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  const handlecontactpage = () => {
    navigate('/contact');
  }

  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel slide listing-carousel">
     <div className="carousel-indicators">
    {property && property.imageUrls && property.imageUrls.map((imageUrl, index) => (
      <button
        key={index}
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to={index}
        className={index === 0 ? "active h-25 w-25" : "h-25 w-25"}
        aria-label={`Slide ${index + 1}`}
      >
        <img src={`https://estate-tm2d.onrender.com/${imageUrl}`} alt={`Slide ${index + 1}`} className="d-block w-100" />
      </button>
    ))}
  </div>
  <div className="carousel-inner listing-inner">
    {property && property.imageUrls && property.imageUrls.map((imageUrl, index) => (
      <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
        <img src={`https://estate-tm2d.onrender.com/${imageUrl}`} className="d-block w-100 h-100" alt={`Image ${index + 1}`} />
      </div>
    ))}
  </div>  
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {property && (
      <section className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <button type="button" className="btn btn-primary">
                {property.SaleType}
              </button>
              <div className="titlepro">
                <h3>{property.PropertyName}</h3>
                <p>{property.Address}</p>
                <p>{property.price || 'No'}</p>
              </div>
              <div className="prodesc text-justify">
              <div dangerouslySetInnerHTML={{ __html: he.decode(property.Description) }} />
              </div>
            </div>
            <div className="col-md-4">
              <div className="ullipoints">
                <ul className="list-group w-75 mx-auto">
                  <div className="list-group-item">
                    <span
                      className="d-inline-flex align-items-center justify-content-center text-white rounded m-1 me-2"
                      style={{ width: "40px", height: "40px" }}
                    >
                      <img src={bathtub} className="img-fluid" />
                    </span>
                    {property.NumofBeds} bath
                  </div>
                  <div className="list-group-item">
                    <div
                      className="d-inline-flex align-items-center justify-content-center text-white rounded m-1 me-2"
                      style={{ width: "40px", height: "40px" }}
                    >
                      <img src={bed} className="img-fluid" />
                    </div>
                    {property.NumofBathrooms} Bed
                  </div>
                  <div className="list-group-item">
                    <div
                      className="d-inline-flex align-items-center justify-content-center text-white rounded m-1 me-2"
                      style={{ width: "40px", height: "40px" }}
                    >
                      <img src={fullSize} className="img-fluid" />
                    </div>
                    {property.Area} SQ.FT. LIVING AREA
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      )}

    {contactInfo ? (
      <section className="section-padding bg-light">
        <div className="container">
          <div className="row">
            <div className="d-flex flex-wrap">
              <div className="agent-detail d-flex flex-column justify-content-center">
                <div>
                  <h3 className="p-3 text-uppercase lato">{contactInfo[0].name}</h3>

                  <ul
                    className="d-flex flex-wrap "
                    style={{ listStyle: "none" }}
                  >
                    <li className="list-group-item pe-4 mb-2">
                      <strong className="agendetail d-block fs-4 text-uppercase">
                        Title
                      </strong>
                      <span className="agendetail  fs-5 d-block">
                      {contactInfo[0].title}
                      </span>
                    </li>
                    <li className="list-group-item pe-4 mb-2">
                      <strong className="d-block agendetail fs-4 text-uppercase">
                        PHONE
                      </strong>
                      <span className="agendetail fs-5 d-block">
                      {contactInfo[0].phoneNumber}
                      </span>
                    </li>
                    <li className="list-group-item pe-4 mb-2">
                      <strong className="d-block agendetail fs-4 text-uppercase">
                        EMAIL
                      </strong>
                      <span className="agendetail fs-5 d-block">
                      {contactInfo[0].email}
                      </span>
                    </li>
                    <li className="list-group-item pe-4 mb-2">
                      <button
                        onClick={()=>handlecontactpage()}
                        data-type="CONTACT_US"
                        className="btn btn-outline-primary agendetail"
                        style={{ padding: "20px 46px", lineHeight: "1" }}
                      >
                        CONTACT AGENT
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      ) : (
        <p>Loading contact information...</p>
      )}


    {/* <PropertySpotlight/> */}
    <Footer/>
    </div>
  );
};

export default ListingDetailPage;
