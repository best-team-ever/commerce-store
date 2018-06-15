import React, { Component } from 'react';
import './TopNav.css';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import {connect} from "react-redux";
import { signedHandler } from "../../store/handlers/signedHandlers";

// const family = "";

class TopNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      pic: "",

    }
  }



  getLoginStatus(){
    let { loggedIn } = this.props;
    return {
      loggedIn: loggedIn
    }
  }

  responseGoogle = (googleUser) => {
    const familyName = googleUser.profileObj.familyName;
    // family = googleUser.profileObj.familyName;
    const name =googleUser.profileObj.name;
    const pic =googleUser.profileObj.imageUrl;
    this.setState({pic: pic})
    this.setState({name: name})
    console.log(familyName);
    console.log(name);
    console.log(pic);

    this.props.signed(true);
    // window.location.reload();
  }

  logout = (response) => {
    console.log("sur le point de mettre délogué dans le state");
    this.props.signed(false);
  }


  render() {
    console.log("logué ", this.getLoginStatus().loggedIn);
    return (
      <div className="top_nav">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="top_nav_left">
                <img className="logonavbar" src="/images/dktlogo.png" alt="dktLogo"/>
              </div>
            </div>

            <div className="col-md-6 text-right">
              <div className="top_nav_right">
                <ul className="top_nav_menu">
                  {/* <li className="currency">
                    <a href="./">
                      usd
                      <i className="fa fa-angle-down"></i>
                    </a>
                    <ul className="currency_selection">
                      <li><a href="./">cad</a></li>
                      <li><a href="./">aud</a></li>
                      <li><a href="./">eur</a></li>
                      <li><a href="./">gbp</a></li>
                    </ul>
                  </li> */}
                  {/* <li className="language">
                    <a href="./">
                      English
                      <i className="fa fa-angle-down"></i>
                    </a>
                    <ul className="language_selection">
                      <li><a href="./">French</a></li>
                      <li><a href="./">Italian</a></li>
                      <li><a href="./">German</a></li>
                      <li><a href="./">Spanish</a></li>
                    </ul>
                  </li> */}
                  <li className="account">
                    <a href="./">
                    {
                      this.getLoginStatus().loggedIn

                      ? <p className="myAccountPicture" >
                          <img className="profilepic" src={this.state.pic} alt="statePic"/>{this.state.name}&nbsp;&nbsp;
                          <i className="fa fa-angle-down"></i>
                        </p>
                      : <p className="myAccount">&nbsp;My Account&nbsp;&nbsp;
                          <i className="fa fa-angle-down"></i>
                        </p>

                    }
                    </a>
                    <ul className="account_selection">
                      <li><a href="./"><i className="fa fa-sign-in" aria-hidden="true"></i>
                      {
                        this.getLoginStatus().loggedIn
                          ? <GoogleLogout
                            className="login"
                            buttonText="Logout"
                            onLogoutSuccess={this.logout}
                            />
                          : <GoogleLogin
                            className="login"
                            clientId="522866054012-3rk0smi2ss0fqn3irb0onpjj3to9g0e8.apps.googleusercontent.com"
                            buttonText="Login"
                            onSuccess={this.responseGoogle}
                            onFailure={this.responseGoogle}
                            />
                      }


                      </a></li>
                      <li><a href="/contact"><i className="fas fa-envelope" aria-hidden="true"></i>Contact Us</a></li>

                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}



const mapStateToProps = (state) => ({
  loggedIn: state.cartReducer.loggedIn
})

const mapDispatchToProps = (dispatch) => {
  return {
    signed: (signedInOut) => signedHandler(signedInOut, dispatch)
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(TopNav);
