import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Listing = ({ properties }) => {
//   if (!properties || !Array.isArray(properties)) {
//     return <div>No properties available</div>;
//   }
const [allproperties, setAllProperties] = useState([]);
const [noFeaturedMessage, setNoFeaturedMessage] = useState('');

useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/getproperties'); // Replace with your endpoint
      const data = await response.json();
      if (data.message) {
          setNoFeaturedMessage(data.message);
      } else {
        setAllProperties(data);
      }
    } catch (error) {
      console.error('Error fetching properties:', error);
    }
  };

  return (
    <div>
      <section className="artists-section section-padding" id="section_3">
        <div className="container">
          <div className="row justify-content-center">
            <h2 className="text-dark text-center mb-5">Listing </h2>
            {noFeaturedMessage && <p className='text-center fw-bold'>{noFeaturedMessage}</p>}
            {allproperties.map((property, index) => (
              <div key={index} className="col-lg-4 col-12 my-2">
                <div className="shad p-3">
                  <div className="artists-image-wrap">
                    {property.coverImageUrl ? (
                      <img
                        src={`http://localhost:3001/${property.coverImageUrl}`}
                        className="artists-image img-fluid"
                        alt={`Property ${index} cover`}
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
      </section>
    </div>
  );
};

export default Listing;
