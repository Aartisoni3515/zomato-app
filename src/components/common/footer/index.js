import React from "react";
import "../footer/Footer.css";
import {AiFillLinkedin ,AiOutlineInstagram ,AiOutlineYoutube ,AiFillTwitterCircle } from "react-icons/ai"
import{BsFacebook} from "react-icons/bs"

const Footer = () => {
  return (
    <>
      <div className="footer-main">
        <div className="footer-top">
          <div className="heading">
            <div className="logos">
              <img
                className="footer-logo"
                src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*"
                alt=""
              />
            </div>

            <div className="right-logo">
              <div className="flag-logo">
                <div className="flag" style={{display:"flex"}}>
                  <div> India </div>

                  <img
                    className="flag-img"
                    src="https://uxwing.com/wp-content/themes/uxwing/download/flags-landmarks/india-flag-icon.png"
                    alt=""
                  />
                </div>
              </div>

                <div className="flag-logo">
              <div className="language"style={{display:"flex"}} >
                  <div>
                    English
                  </div>
                    <img
                      className="flag-img"
                      src="https://static.vecteezy.com/system/resources/previews/003/731/316/original/web-icon-line-on-white-background-image-for-web-presentation-logo-icon-symbol-free-vector.jpg"
                      alt=""
                    />
                </div>
              </div>
            </div>
          </div>

          <div className="list-heading">
            <div className="list">
              <div className="list-items">
                <ul>
                 <span> <li> ABOUT ZOMATO </li></span>
                  <li> Who We Are</li>
                  <li> Blog</li>
                  <li>Work With Us</li>
                  <li> Investor Relations</li>
                  <li>Report Fraud</li>
                  <li>Contact Us</li>
                </ul>
              </div>
              <div className="list-items">
                <ul>
                <span> <li>ZOMAVERSE</li></span> 
                  <li>Zomato</li>
                  <li> Blinkit</li>
                  <li>Feeding India</li>
                  <li>Hyperpure</li>
                  <li>Zomaland</li>
                </ul>
              </div>

              <div className="list-items">
                <ul>
                   <span> <li> FOR RESTAURANTS</li></span>
                  <li>Partner With Us</li>
                  <li> Apps For You</li>

                  <div style={{marginTop:"30px"}} >
                 <span> <li>FOR ENTERPRISES</li> </span>

                  <li>Zomato For Work</li>
                  </div>
                </ul>
              </div>

              <div className="list-items">
                <ul>
                 <span> <li>LEARN MORE</li></span>
                  <li> Privacy</li>
                  <li> Security</li>
                  <li>Terms</li>
                  <li>Sitemap</li>
                </ul>
              </div>

              <div className="list-items">
                <ul>
                 <span> <li>SOCIAL LINK</li></span>
                 <div className="flex-list" >
                  <li > <AiFillLinkedin/></li>
                  <li> <AiOutlineInstagram/></li>
                  <li><AiOutlineYoutube/></li>
                  <li><AiFillTwitterCircle/></li>
                  <li><BsFacebook/> </li>
                 
                  </div>
                 
                 <div className="store-logo" style={{marginTop :"20px"}}  >

                  <img src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" alt="" />
                 </div>
                 
                 <div className="store-logo" style={{marginTop :"10px"}} >

                    <img src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" alt="" />
                  </div>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <hr />
          </div>


          <div className="line" >
          By continuing past this page, you agree to our Terms of Service,
          Cookie Policy, Privacy Policy and Content Policies. All trademarks are
          properties of their respective owners. 2008-2023 © Zomato™ Ltd. All
          rights reserved.
        </div>







        </div>

       
      </div>
    </>
  );
};

export default Footer;
