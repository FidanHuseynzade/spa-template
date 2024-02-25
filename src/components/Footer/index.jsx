import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { FacebookOutlined, InstagramOutlined, TwitterOutlined } from "@ant-design/icons";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-sm-6 col-12">
            <h3>Kayelux</h3>
            <span>BEAUTY SALON</span>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            <div className="media">
              <div className="social-icon twitter"><TwitterOutlined/></div>
              <div className="social-icon facebook"><FacebookOutlined/></div>
              <div className="social-icon instagram"><InstagramOutlined/></div>
            </div>
          </div>
          <div className="services col-xl-3 col-sm-6 col-12">
            <h3>Services</h3>
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-12">
                  <p>Beauty Massage</p>
                </div>
                <div className="col-xl-6 col-12">
                  <p>Eye Shadow</p>
                </div>
                <div className="col-xl-6 col-12">
                  <p>Facial Therapy</p>
                </div><div className="col-xl-6 col-12">
                  <p>Relaxation Room</p>
                </div><div className="col-xl-6 col-12">
                  <p>Skin Care</p>
                </div><div className="col-xl-6 col-12">
                  <p>Makeup</p>
                </div><div className="col-xl-6 col-12">
                  <p>Parlor & Beauty</p>
                </div><div className="col-xl-6 col-12">
                  <p>Aroma Therapy</p>
                </div>
              </div>
            </div>
          </div>
          <div className="posts col-xl-3 col-sm-6 col-12">
            <h3>Recent Posts</h3>
            <div className="container">
              <div className="image-section">
                <img src="https://preview.colorlib.com/theme/kayelux/images/image_1.jpg" alt="Descriptive Alt Text" />
              </div>
              <div className="info-section">
                <div className="date-admin">
                  <span className="date">Feb 22, 2024</span>
                  <span className="admin">Admin</span>
                </div>
                <div className="comment">
                  Tips For Perfect Makeup
                </div>
              </div>
              
            </div>
            <div className="container">
              <div className="image-section">
                <img src="https://preview.colorlib.com/theme/kayelux/images/image_2.jpg" alt="Descriptive Alt Text" />
              </div>
              <div className="info-section">
                <div className="date-admin">
                  <span className="date">Feb 22, 2024</span>
                  <span className="admin">Admin</span>
                </div>
                <div className="comment">
                Tips For Perfect Makeup
                </div>
              </div>
              
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 col-12">
            <h3>Have a Questions?</h3>
            <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
            <p>+2 392 3929 210</p>
            <p>	info@yourdomain.com</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer