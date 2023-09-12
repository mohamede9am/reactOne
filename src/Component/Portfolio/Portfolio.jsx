import React from 'react';
import port1 from '../img/poert1.png';
import port2 from '../img/port2.png';
import port3 from '../img/port3.png';

export default function Portfolio() {
  return (
    <div className="Portfolio">
      <h2 className="text-uppercase mb-3 fs-1 fw-bolder text-center">
        PORTFOLIO COMPONENT
      </h2>
      <div className="container">
        <div className="row">
          <div className="d-flex align-items-center justify-content-center mb-3">
            <div
              _ngcontent-ofb-c6=""
              class="line ms-3"
              style={{ backgroundColor: '#2C3E50', width: '100px', height: '5px' }}
            ></div>
            <i className="fas fa-star ms-3"></i>
            <div
              _ngcontent-ofb-c6=""
              class="line ms-3"
              style={{ backgroundColor: '#2C3E50', width: '100px', height: '5px' }}
            ></div>
          </div>
        </div>
        <div className="row ">
          <div className="col-md-4 ">
            <div className="img-1 mb-2">
              <img className="w-100" src={port1} alt="" />
            </div>
            <div className="img-2 mb-2">
              <img className="w-100" src={port1} alt="" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="img-1 mb-2">
              <img className="w-100" src={port2} alt="" />
            </div>
            <div className="img-2 mb-2">
              <img className="w-100" src={port2} alt="" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="img-1 mb-2">
              <img className="w-100" src={port3} alt="" />
            </div>
            <div className="img-2 mb-2">
              <img className="w-100" src={port3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}