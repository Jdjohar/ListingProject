import React from 'react';
import { Navigate, Outlet} from 'react-router-dom';
import { isLoggedIn } from '../auth';

const Admin = () => {
 if (isLoggedIn()) {
    return <Outlet/>
 } else {
    return <Navigate to={'/admin-login'}/>
 }
}

export default Admin