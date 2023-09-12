import React, { Component } from 'react'

export default class Footer extends Component {
render() {
    return <>
        <footer className="text-center text-white">
        <div className="container p-4">
            
            <section className="">
            <form action="">
                <div className="row d-flex justify-content-center">
                <div className="col-auto">
                    <p className="pt-2">
                    <strong>Sign up for our newsletter</strong>
                    </p>
                </div>
                <div className="col-md-5 col-12">
                    <div className="form-outline form-white mb-4">
                    <input type="email" placeholder='Email address' id="form5Example21" className="form-control" />
                    </div>
                </div>
                <div className="col-auto">
                    <button type="submit" className="btn btn-outline-light mb-4">
                    Subscribe
                    </button>
                </div>
                </div>
            </form>
            </section>

            <section className="">
            <div className="row">
                <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <ul className="list-unstyled mb-0">
                    <li>
    <h3>LOCATION</h3>      
            </li>
                    <li>
    <p>2215 John Daniel Drive</p> 
                </li>
                    <li>
    <p>
    Clark, MO 65243</p>                </li>

                </ul>
                </div>
                <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled mb-0">
                    <li>
    <h3>AROUND THE WEB</h3>                </li>
            
                    <li>
                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                <i className="fab fa-facebook-f"></i>
            </a>
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                <i className="fab fa-twitter"></i>
            </a>
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                <i className="fab fa-google"></i>
            </a>
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                <i className="fab fa-instagram"></i>
            </a>
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                <i className="fab fa-linkedin-in"></i>
            </a>                </li>
                
                </ul>
                </div>
                <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled mb-0">
                    <li>
    <h3>ABOUT FREELANCER</h3>                </li>
                    <li>
    <p>Freelance is a free to use, licensed Bootstrap theme created by Route </p>                </li>
                    
                </ul>
                </div>
                </div>
            </section>
        </div>
    
        <div className="text-center p-3" style={{ backgroundColor: '#1A252F' }}>
            ©CopyWrite 2023 mo7amede9am
        </div>
        </footer>
    </>
    }
    }

