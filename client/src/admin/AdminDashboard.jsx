import React from 'react'
import { Link } from 'react-router-dom'
import AdminNavbar from './AdminNavbar'
const AdminDashboard = () => {
  return (
    <div>
      <AdminNavbar/>
      <div>
        <Link to={'/admin/admin-listing'} className='btn btn-primary mt-3 mx-3'>Add New Property</Link>
        <Link to={'/admin/Admincontactinformation'} className='btn btn-primary mt-3 mx-3'>Add Contact Info</Link>
      </div>
    </div>
  )
}

export default AdminDashboard