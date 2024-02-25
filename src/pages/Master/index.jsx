import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { FacebookOutlined, GoogleOutlined, InstagramOutlined, TwitterOutlined } from '@ant-design/icons';

const Master = () => {
  return (
    <div className="master">
      <p>Meet Our Makeup Artist</p>
      <h1>Our Expert Makeup & <br /> Beautician Artist</h1>
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-sm-6 col-12">
            <img src="https://preview.colorlib.com/theme/kayelux/images/staff-1.jpg" alt="" />
            <div className="medias">
              <div className="twit"><TwitterOutlined /></div>
              <div className="fb"><FacebookOutlined /></div>
              <div className="google"><GoogleOutlined /></div>
              <div className="ig"><InstagramOutlined /></div>
            </div>
            <p>BEAUTICIAN</p>
            <span>Kaye Bruce</span>
          </div>
          <div className="col-xl-3 col-sm-6 col-12">
            <img src="https://preview.colorlib.com/theme/kayelux/images/staff-2.jpg" alt="" />
            <div className="medias">
              <div className="twit"><TwitterOutlined /></div>
              <div className="fb"><FacebookOutlined /></div>
              <div className="google"><GoogleOutlined /></div>
              <div className="ig"><InstagramOutlined /></div>
            </div>
            <p>BEAUTICIAN</p>
            <span>Lanie William</span>
          </div>
          <div className="col-xl-3 col-sm-6 col-12">
            <img src="https://preview.colorlib.com/theme/kayelux/images/staff-3.jpg" alt="" />
            <div className="medias">
              <div className="twit"><TwitterOutlined /></div>
              <div className="fb"><FacebookOutlined /></div>
              <div className="google"><GoogleOutlined /></div>
              <div className="ig"><InstagramOutlined /></div>
            </div>
            <p>BEAUTICIAN</p>
            <span>Catherine Smith</span>
          </div>
          <div className="col-xl-3 col-sm-6 col-12">
            <img src="https://preview.colorlib.com/theme/kayelux/images/staff-4.jpg" alt="" />
            <div className="medias">
              <div className="twit"><TwitterOutlined /></div>
              <div className="fb"><FacebookOutlined /></div>
              <div className="google"><GoogleOutlined /></div>
              <div className="ig"><InstagramOutlined /></div>
            </div>
            <p>BEAUTICIAN</p>
            <span>Sonya Lopez</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Master;
