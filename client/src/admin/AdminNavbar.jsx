import React from "react";
import { Link, useNavigate } from "react-router-dom";

const AdminNavbar = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('token');
    return navigate('/')
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand text-white" to={"/admin/admin-dashboard"}>
            Dashboard
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to={'/admin/admin-listing'} className='btn btn-primary mx-3'>Add New Property</Link>
              </li>
              <li className="nav-item">
                <Link to={'/admin/Admincontactinformation'} className='btn btn-primary mx-3'>Add Contact Info</Link>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-primary"
                  onClick={()=>handleLogout()}
                  aria-current="page"
                >
                  LogOut
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default AdminNavbar;
