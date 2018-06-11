import React, { Component } from 'react';
//import './Banner.css';

export default class Banner extends Component {
  render() {
    return (
      <div className="Banner">
        <div class="banner">
          <div class="container">
            <div class="row">
              <div class="col-md-4">
                <div class="banner_item align-items-center">
                  <div class="banner_category">
                    <a href="categories.html">women's</a>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="banner_item align-items-center">
                  <div class="banner_category">
                    <a href="categories.html">accessories</a>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="banner_item align-items-center">
                  <div class="banner_category">
                    <a href="categories.html">men's</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
