import React from 'react'
import Listing from '../components/Listing';
import Footer from '../components/Footer';
import MarketCoverage from '../components/MarketCoverage';

const ListingPage = () => {
  return (
    <div>
         <section className="ticket-section section-padding">
            <div className="container">
            </div>
        </section>
        
        <MarketCoverage/>

        {/* <Listing/> */}

        <Footer/>

    </div>
  )
}

export default ListingPage;