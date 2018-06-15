import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
// import { deleteFromCartHandler, deleteCartHandler, updateQtyHandlers } from "../../store/handlers/cartHandlers";

import '../products/ProductsList.css';
import './contact.css';

const urlImage = "https://www.decathlon.fr/media/";
let total = 0;

class Contact extends Component {

  render(){
    return(
        <div className="container">

          <div className="product-grid">
            <div className="row">


              <div className="product-item">
                <div className="product discount product_filter">
                    <div className="product_image">
                      <img src="./images/Yuanqin.png"  class="img-thumbnail"/>
                    </div>
                    <div className="favorite favorite_left"></div>

                    <div className="product_info">
                      <h6 className="product_name">
                        Yuanqin DENG
                      </h6>
                      <div className="product_price">Shanghai</div>
                    </div>
                </div>
                <div className="red_button add_to_cart_button">
                  <a onClick={console.log("toto")}>yuanqin.deng@decathlon.com</a>
                </div>
              </div>

              <div className="product-item">
                <div className="product discount product_filter">
                    <div className="product_image">
                      <img src="./images/Mat.png"  class="img-thumbnail"/>
                    </div>
                    <div className="favorite favorite_left"></div>

                    <div className="product_info">
                      <h6 className="product_name">
                        Matthieu DEBACK
                      </h6>
                      <div className="product_price">Campus</div>
                    </div>
                </div>
                <div className="red_button add_to_cart_button">
                  <a onClick={console.log("toto")}>matthieu.deback@decathlon.com</a>
                </div>
              </div>

              <div className="product-item">
                <div className="product discount product_filter">
                    <div className="product_image">
                      <img src="./images/JPhi.png"  class="img-thumbnail"/>
                    </div>
                    <div className="favorite favorite_left"></div>

                    <div className="product_info">
                      <h6 className="product_name">
                        Jean Philippe BORNIER
                      </h6>
                      <div className="product_price">Campus</div>
                    </div>
                </div>
                <div className="red_button add_to_cart_button">
                  <a onClick={console.log("toto")}>jeanphilippe.bornier@decathlon.com</a>
                </div>
              </div>

              <div className="product-item">
                <div className="product discount product_filter">
                    <div className="product_image2">
                      <img src="./images/Oliv.png" class="img-thumbnail"/>
                    </div>
                    <div className="favorite favorite_left"></div>

                    <div className="product_info">
                      <h6 className="product_name">
                        Olivier MASUREL
                      </h6>
                      <div className="product_price">Campus</div>
                    </div>
                </div>
                <div className="red_button add_to_cart_button">
                  <a onClick={console.log("toto")}>olivier.masurel@decathlon.com</a>
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
