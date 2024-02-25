import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

const Blog = () => {
  return (
    <div className="blog">
      <p>Our Blog</p>
      <h1>Recent From Blog</h1>
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-sm-6 col-12">
            <img src="https://preview.colorlib.com/theme/kayelux/images/image_1.jpg" alt="" />
            <p>ADMIN  FEB. 24, 2024</p>
            <h4>Tips for Perfect Makeup</h4>
            <span>A small river named Duden flows by their place.</span>
          </div>
          <div className="col-xl-3 col-sm-6 col-12">
            <img src="https://preview.colorlib.com/theme/kayelux/images/image_2.jpg" alt="" />
            <p>ADMIN  FEB. 24, 2024</p>
            <h4>Tips for Perfect Makeup</h4>
            <span>A small river named Duden flows by their place.</span>
          </div>
          <div className="col-xl-3 col-sm-6 col-12">
            <img src="https://preview.colorlib.com/theme/kayelux/images/image_3.jpg" alt="" />
            <p>ADMIN  FEB. 24, 2024</p>
            <h4>Tips for Perfect Makeup</h4>
            <span>A small river named Duden flows by their place.</span>
          </div>
          <div className="col-xl-3 col-sm-6 col-12">
            <img src="https://preview.colorlib.com/theme/kayelux/images/image_4.jpg" alt="" />
            <p>ADMIN  FEB. 24, 2024</p>
            <h4>Tips for Perfect Makeup</h4>
            <span>A small river named Duden flows by their place.</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog