import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="footer_nav_container d-flex flex-sm-row flex-column align-items-center justify-content-lg-start justify-content-center text-center">
                <ul className="footer_nav">
                  <li><a href="contact.html">Contact us</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="footer_social d-flex flex-row align-items-center justify-content-lg-end justify-content-center">
                <ul>
                  <li><a href="./"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                  <li><a href="./"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>

                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="footer_nav_container">
                <div className="cr">©2018 All Rights Reserverd.</div>

              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}