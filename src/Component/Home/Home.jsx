import React, { Component } from 'react';

import img from '../img/avataaars (1).svg';

export default class Home extends Component {
    render() {
        return (
        <>
            <div className="home">
            <div className="container">
                <div className="row">
                <img src={img} className="w-25 mx-auto" alt="" />

                <h2 className="text-uppercase mb-3 fs-1 fw-bolder text-center">Start Framework</h2>

                <div className="d-flex align-items-center justify-content-center mb-3">
                <div _ngcontent-ofb-c6="" class="line ms-3" style={{ backgroundColor: 'white' , width:`100px`, height: `5px`  }}></div>
                <i className="fas fa-star ms-3"></i>
                <div _ngcontent-ofb-c6="" class="line ms-3" style={{ backgroundColor: 'white' , width:`100px`, height: `5px`  }}></div>
                </div>
            </div>
            <p className='text-center'>Graphic Artist - Web Designer - Illustrator</p>
            </div>
            </div>
        </>
        );
    }
    }