import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AdminNavbar from './AdminNavbar'
const AdminDashboard = () => {
  const [allproperties, setAllProperties] = useState([]);
const [noFeaturedMessage, setNoFeaturedMessage] = useState('');

useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const response = await fetch('https://estate-tm2d.onrender.com/api/getproperties'); // Replace with your endpoint
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

  const handleSaleTypeChange = async (e, propertyId) => {
    const newSaleType = e.target.value;
  
    try {
      const response = await fetch(`https://estate-tm2d.onrender.com/api/update-sale-type/${propertyId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ newSaleType }),
      });
  
      if (response.ok) {
        // Update the state or re-fetch properties after successful update
        fetchProperties(); // You may need to define this function to update properties after the change.
      } else {
        console.error('Failed to update SaleType');
      }
    } catch (error) {
      console.error('Error updating SaleType:', error);
    }
  };
  
  return (
    <div>
      <AdminNavbar/>
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
                        src={`https://estate-tm2d.onrender.com/${property.coverImageUrl}`}
                        className="artists-image img-fluid"
                        alt={`Property ${index} cover`}
                      />
                    ) : (
                      ''
                    )}
                  </div>
                  <div className="py-3">
                    <div className="row">
                      <div className="col-8">
                        <h5>{property.PropertyName}</h5>
                      </div>
                      <div className="col-4">
                        <select
                          className="form-select"
                          value={property.SaleType}
                          onChange={(e) => handleSaleTypeChange(e, property._id)}
                        >
                          <option value="For Sale">For Sale</option>
                          <option value="Rent">Rent</option>
                          <option value="Sold Out">Sold Out</option>
                        </select>
                      </div>
                    </div>
                    
                    
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
  )
}

export default AdminDashboard