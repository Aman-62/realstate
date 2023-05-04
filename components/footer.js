import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="skin-light-footer container mx-auto">
      <div>
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-5 mx-auto">
            <div className="col-span-12 md:col-span-3 lg:col-span-3 col-lg-3 col-md-4">
              <div className="footer-widget">
                <img src="/logo.png" className="img-footer" alt="" />
                <div className="footer-add">
                  <p>Collins Street West, Victoria 8007, Australia.</p>
                  <p>
                    <span className="ftp-info">
                      <i className="fa fa-phone" aria-hidden="true" />
                      +1 246-345-0695
                    </span>
                  </p>
                  <p>
                    <span className="ftp-info">
                      <i className="fa fa-envelope" aria-hidden="true" />
                      info@example.com
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className=" col-span-4 md:col-span-3 lg:col-span-3 col-lg-2 col-md-4">
              <div className="footer-widget">
                <h4 className="widget-title">Navigations</h4>
                <ul className="footer-menu">
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">FAQs Page</a>
                  </li>
                  <li>
                    <a href="checkout.html">Checkout</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-span-4 md:col-span-3 lg:col-span-3 col-lg-2 col-md-4">
              <div className="footer-widget">
                <h4 className="widget-title">The Highlights</h4>
                <ul className="footer-menu">
                  <li>
                    <a href="#">Apartment</a>
                  </li>
                  <li>
                    <a href="#">My Houses</a>
                  </li>
                  <li>
                    <a href="#">Restaurant</a>
                  </li>
                  <li>
                    <a href="#">Nightlife</a>
                  </li>
                  <li>
                    <a href="#">Villas</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-span-4 md:col-span-3 lg:col-span-3 col-lg-2 col-md-6">
              <div className="footer-widget">
                <h4 className="widget-title">My Account</h4>
                <ul className="footer-menu">
                  <li>
                    <a href="#">My Profile</a>
                  </li>
                  <li>
                    <a href="#">My account</a>
                  </li>
                  <li>
                    <a href="#">My Property</a>
                  </li>
                  <li>
                    <a href="#">Favorites</a>
                  </li>
                  <li>
                    <a href="#">Cart</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
