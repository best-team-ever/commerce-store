import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
// import { deleteFromCartHandler, deleteCartHandler, updateQtyHandlers } from "../../store/handlers/cartHandlers";

import '../products/ProductsList.css';
import './contact.css';

class Contact extends Component {

  render(){
    return(
        <div className="container">

          <div className="product-grid">
            <div className="row">


              <div className="product-item">
                <div className="product discount product_filter">
                    <div className="product_image">
                      //<img src="./images/Yuanqin.png" class="img-thumbnail" alt="Yuanquin"/>
                    </div>
                    <div className="favorite favorite_left"></div>

                    <div className="product_info">
                      <h6 className="product_name">
                        Yuanqin
                      </h6>
                      <div className="product_price">Shanghai</div>
                    </div>
                </div>
                <div className="red_button add_to_cart_button">
                  <a onClick={console.log("toto")}>yd@dk.com</a>
                </div>
              </div>

              <div className="product-item">
                <div className="product discount product_filter">
                    <div className="product_image">
                     // <img src="./images/Mat.png" class="img-thumbnail" alt="Mat"/>
                    </div>
                    <div className="favorite favorite_left"></div>

                    <div className="product_info">
                      <h6 className="product_name">
                        Matt
                      </h6>
                      <div className="product_price">Campus</div>
                    </div>
                </div>
                <div className="red_button add_to_cart_button">
                  <a onClick={console.log("toto")}>md@dk.com</a>
                </div>
              </div>

              <div className="product-item">
                <div className="product discount product_filter">
                    <div className="product_image">
                     // <img src="./images/JPhi.png" class="img-thumbnail" alt="jphi"/>
                    </div>
                    <div className="favorite favorite_left"></div>

                    <div className="product_info">
                      <h6 className="product_name">
                        JeanPhi
                      </h6>
                      <div className="product_price">Campus</div>
                    </div>
                </div>
                <div className="red_button add_to_cart_button">
                  <a onClick={console.log("toto")}>jpb@dk.com</a>
                </div>
              </div>

              <div className="product-item">
                <div className="product discount product_filter">
                    <div className="product_image2">
                     // <img src="./images/Oliv.png" class="img-thumbnail" alt="Oliv"/>
                    </div>
                    <div className="favorite favorite_left"></div>

                    <div className="product_info">
                      <h6 className="product_name">
                        Oliv
                      </h6>
                      <div className="product_price">Campus</div>
                    </div>
                </div>
                <div className="red_button add_to_cart_button">
                  <a onClick={console.log("toto")}>om@dk.com</a>
                </div>
              </div>



            </div>
          </div>
        </div>

  //
    )
  }
};



export default withRouter(connect()(Contact));
