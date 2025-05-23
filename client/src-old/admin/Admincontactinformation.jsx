import React, { useState,useEffect } from 'react';
import AdminNavbar from './AdminNavbar';
import { useNavigate } from 'react-router-dom';

export default function AdminContactInformation() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    address: '',
    number: '',
    name: '',
    title: ''
  });

  useEffect(() => {
    fetchContactInfo();
  }, []);

  const fetchContactInfo = async () => {
    try {
      // const response = await fetch('https://estate-70yd.onrender.comapi/get-contact-info');
      const response = await fetch('https://estate-70yd.onrender.comapi/get-contact-info');
      if (response.ok) {
        const contactInfo = await response.json();
        if (contactInfo && contactInfo.length > 0) {
          // If contact info exists, set it into the form data state
          const { name, title, email, address, phoneNumber: number } = contactInfo[0];
          setFormData({ name, title, email, address, number });
        }
      }
    } catch (error) {
      console.error('Error fetching contact information:', error);
      // Handle error
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://estate-70yd.onrender.comapi/submit-contact-info', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Send formData directly
      });
      if (response.ok) {
        console.log('Contact information submitted successfully.');
        navigate("/")
      } else {
        throw new Error('Failed to submit contact information.');
      }
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div>
        <AdminNavbar />
      </div>

      <div className='mx-4 py-5'>
        <div className="container py-2">
          <div className="row">
            <div className="col-lg-10 col-12 mx-auto">
              <h2 className="text-center mb-4">Contact Information</h2>
              <div className="tab-content shadow-lg mt-5" id="nav-tabContent">
                <form action="" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-12 col-md-6 col-sm-6 col-lg-6">
                      <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-sm-6 col-lg-6">
                      <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input
                          type="text"
                          name="title"
                          className="form-control"
                          value={formData.title}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-sm-6 col-lg-6">
                      <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-sm-6 col-lg-6">
                      <div className="mb-3">
                        <label className="form-label">Address</label>
                        <input
                          type="text"
                          name="address"
                          className="form-control"
                          value={formData.address}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-sm-6 col-lg-6">
                      <div className="mb-3">
                        <label className="form-label">Phone Number</label>
                        <input
                          type="text"
                          name="number"
                          className="form-control w-100 contactt"
                          value={formData.number}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className='mt-3'>
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <form action="" onSubmit={handleSubmit}>
        <div className="container pt-4">
          <h3>Contact Information</h3>
          <div className="row pt-4">
            <div className="col-6">
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-6">
              <div className="mb-3">
                <label className="form-label">Title</label>
                <input
                  type="text"
                  name="title"
                  className="form-control"
                  value={formData.title}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-6">
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-6">
              <div className="mb-3">
                <label className="form-label">Address</label>
                <input
                  type="text"
                  name="address"
                  className="form-control"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-6">
              <div className="mb-3">
                <label className="form-label">Phone Number</label>
                <input
                  type="number"
                  name="number"
                  className="form-control w-100 contactt"
                  value={formData.number}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-7">
              <button type="submit" className="btn btn-primary mb-5">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form> */}
    </div>
  );
}
