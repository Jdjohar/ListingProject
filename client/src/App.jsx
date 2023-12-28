import React from 'react';
import {Route, Routes, useLocation} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import Components
import Navbar from './components/Navbar';

// import Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Team from './pages/Team';
import MarketPage from './pages/MarketPage';
import MarketDetailPage from './pages/MarketDetailPage';
import Brontecreek from './pages/Brontecreek';
import Burlington from './pages/Burlington';
import Oakville from './pages/Oakville';
import Clearview from './pages/Clearview';
import Collegepark from './pages/Collegepark';
import Mississauga from './pages/Mississauga';
import Brampton from './pages/Brampton';
import Gta from './pages/Gta';
import ListingPage from './pages/ListingPage';
import ListingDetailPage from './pages/ListingDetailPage';
import ServicePage from './pages/ServicePage';
import ContactPage from './pages/ContactPage';
import AdminLogin from './admin/AdminLogin';
import AdminDashboard from './admin/AdminDashboard';
import Admin from './admin/Admin';
import AdminListing from './admin/AdminListing';
import Admincontactinformation from './admin/Admincontactinformation';

function App() {
  const location = useLocation();

  const shouldShowNavbar = () => {
    return !location.pathname.includes('/admin');
  };


  return (
    <div>
      {shouldShowNavbar() && <Navbar />}
    <Routes>
      {/** Public Routes */}
      <Route index path='/' element={<HomePage/>}/>
      <Route path='/about-page' element={<AboutPage/>}/>
      <Route path='/team-page' element={<Team/>}/>
      <Route path='/neighbourhoods' element={<MarketPage/>}/>
      <Route path='/neighbourhoods/bronte' element={<MarketDetailPage/>}/>
      <Route path='/neighbourhoods/Brontecreek' element={<Brontecreek/>}/>
      <Route path='/neighbourhoods/Burlington' element={<Burlington/>}/>
      <Route path='/neighbourhoods/Oakville' element={<Oakville/>}/>
      <Route path='/neighbourhoods/Clearview' element={<Clearview/>}/>
      <Route path='/neighbourhoods/Collegepark' element={<Collegepark/>}/>
      <Route path='/neighbourhoods/Mississauga' element={<Mississauga/>}/>
      <Route path='/neighbourhoods/Brampton' element={<Brampton/>}/>
      <Route path='/neighbourhoods/Gta' element={<Gta/>}/>
      <Route path='/listing-page' element={<ListingPage/>}/>
      <Route path='/listing-page/:id' element={<ListingDetailPage/>}/>
      <Route path='/services' element={<ServicePage/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
      <Route path='/admin-login' element={<AdminLogin/>} />
      
      {/** Admin Routes */}
      <Route path='/admin' element={<Admin/>}>
      <Route path='admin-dashboard' element={<AdminDashboard/>}/>
      <Route path='admin-listing' element={<AdminListing/>}/>
      <Route path='/admin/Admincontactinformation' element={<Admincontactinformation/>}/>
      </Route>

    </Routes>
    </div>
  )
}

export default App
