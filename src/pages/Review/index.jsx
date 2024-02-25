import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

const Review = () => {
  return (
    <div className="review">
      <p>Great Reviews for our services</p>
      <h1>Review for Our Services</h1>
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-sm-6 col-12">
            <h3>60</h3>
            <p>YEAR OF EXPERIENCED</p>
          </div>
          <div className="col-xl-3 col-sm-6 col-12">
            <h3>9,200</h3>
            <p>SATISFIED CUSTOMERS</p>
          </div>
          <div className="col-xl-3 col-sm-6 col-12">
            <h3>5.800</h3>
            <p>PROJECTS THAT COMPLETED</p>
          </div>
          <div className="col-xl-3 col-sm-6 col-12">
            <h3>1000</h3>
            <p>OUR PRESTIGIOUS AWARDS FOR OUR WORK IN THIS SECTOR</p>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Review