import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="footer-section-1 fix footer-bg bg-cover grd">
      <div className="auto-container">
        <div className="footer-widget-wrapper">
          <div className="row justify-content-between">
            <div
              className="col-xl-3 col-lg-3 col-md-4 col-sm-6 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="footer-widget-items mt-30">
                <div className="widget-title mb-25">
                  <a href="index.html" className="footer-logo">
                    <Image
                      src="/assets/images/white-logo.png"
                      alt="Capstone Logo"
                      width={120}
                      height={40}
                      priority
                    />
                  </a>
                </div>
                <div className="footer-content">
                  <p>
                    Together, weʼll turn your ambitions into reality. Trust us
                    to guide you, and let’s achieve remarkable success in india
                    and Southeast Asia, hand in hand!
                  </p>
                  <div className="footer-social-text2">
                    <div className="social-icon">
                      <a href="https://www.facebook.com/capstoneconsultancysingapore/">
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                      <a href="http://linkedin.com/company/104409718/admin/dashboard/">
                        <i className="fa-brands fa-linkedin"></i>
                      </a>
                    </div>
                    <div>
                      <a href="privacy-policy.html" id="url-privacy">
                        Privacy Policy
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-2 col-lg-3 col-md-4 col-sm-6 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="footer-widget-items mt-30">
                <div className="widget-title mb-25">
                  <h3 className="font-size-24 text-white font-weight-500">
                    Company
                  </h3>
                </div>
                <ul className="user-links">
                  <li>
                    <a href="india.html">India</a>
                  </li>
                  <li>
                    <a href="singapore.html">Singapore</a>
                  </li>
                  <li>
                    <a href="vietnam.html">Vietnam</a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-3 col-md-4 col-sm-6 wow fadeInUp"
              data-wow-delay=".8s"
            >
              <div className="footer-widget-items mt-30">
                <div className="widget-title mb-25">
                  <h3 className="font-size-24 text-white font-weight-500">
                    Office
                  </h3>
                </div>
                <ul className="contact-list">
                  <h5 className="font-size-24 text-white font-weight-500">
                    Singapore
                  </h5>
                  <li>
                    <i className="lnr-icon-map-marker"></i>
                    <p>
                      <a href="tel:+1050055900">60 Anson Road S079914</a>
                    </p>
                  </li>
                  <li>
                    <i className="lnr-icon-envelope"></i>
                    <p>
                      <a href="#">
                        <span
                          className="__cf_email__"
                          data-cfemail="f8be91969b949180b8909d9488d68d8b"
                        >
                          cs@thecapstoneconsultancy.com
                        </span>
                      </a>
                    </p>
                  </li>
                  <li>
                    <i className="lnr-icon-phone-handset"></i>
                    <p>
                      <a href="tel:+6591916628">+65 9191 6628</a>
                    </p>
                  </li>
                  <li>
                    <i className="lnr-icon-phone-handset"></i>
                    <p>
                      <a href="tel:+918962576628">+91 89625 76628</a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-3 col-md-4 col-sm-6 wow fadeInUp"
              data-wow-delay=".8s"
            >
              <div className="footer-widget-items mt-30">
                <div className="widget-title mb-25">
                  <h3 className="font-size-24 text-white font-weight-500">
                    Office
                  </h3>
                </div>
                <ul className="contact-list">
                  <h5 className="font-size-24 text-white font-weight-500">
                    Vietnam
                  </h5>
                  <li>
                    <i className="lnr-icon-map-marker"></i>
                    <p>
                      <a href="tel:+1050055900">
                        34 Đ. Lê Thị Chợ, Phú Mỹ, Quận 7, Hồ Chí Minh 700000
                      </a>
                    </p>
                  </li>
                  <li>
                    <i className="lnr-icon-envelope"></i>
                    <p>
                      <a href="#">
                        <span
                          className="__cf_email__"
                          data-cfemail="f8be91969b949180b8909d9488d68d8b"
                        >
                          cs@thecapstoneconsultancy.com
                        </span>
                      </a>
                    </p>
                  </li>
                  <li>
                    <i className="lnr-icon-phone-handset"></i>
                    <p>
                      <a href="tel:+6591916628">+65 9191 6628</a>
                    </p>
                  </li>
                  <li>
                    <i className="lnr-icon-phone-handset"></i>
                    <p>
                      <a href="tel:+918962576628">+91 89625 76628</a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="auto-container">
          <p className="wow fadeInUp" data-wow-delay=".3s">
            Copyright © 2025 Capstone Consultancy. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
