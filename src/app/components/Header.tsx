"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
const Header = () => {
  return (
    <header className="main-header header-style-one header-1">
      <div className="header-lower">
        <div className="main-box">
          <div className="nav-outer">
            <div className="logo-box">
              <div className="logo">
                <a href="index.html">
                  <Image
                    src="/assets/images/black-logo.png"
                    alt="Capstone Logo"
                    width={120}
                    height={40}
                    priority
                  />
                </a>
              </div>
            </div>

            <div className="outer-box">
              <nav className="nav main-menu">
                <ul className="navigation">
                  <li className="current dropdown">
                    <Link href="/">Home</Link>
                  </li>

                  <li>
                    <Link href="/service">Services</Link>
                  </li>

                  <li>
                    <Link href="/about">About</Link>
                  </li>
                  <li className="dropdown">
                    <Link href="#">Asia</Link>
                    <ul>
                      <li>
                        <Link href="/blog/25">India</Link>
                      </li>
                      <li>
                        <Link href="/blog/30">Singapore</Link>
                      </li>
                      <li>
                        <Link href="/blog/22">Vietnam</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link href="#contact" aria-label="Jump to Contact section">
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>

              <div className="mobile-nav-toggler">
                <span className="icon lnr-icon-bars"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mobile-menu">
        <div className="menu-backdrop"></div>

        <nav className="menu-box">
          <div className="upper-box">
            <div className="nav-logo">
              <a href="index.html">
                
                 <Image
                    src="/assets/images/white-logo.png"
                    alt="Capstone Logo"
                    width={120}
                    height={40}
                    priority
                  />
              </a>
            </div>
            <div className="close-btn">
              <i className="icon fa fa-times"></i>
            </div>
          </div>

          <ul className="navigation clearfix"></ul>
          <ul className="contact-list-one">
            <li>
              <div className="contact-info-box">
                <i className="icon lnr-icon-phone-handset"></i>
                <span className="title">Call Now</span>
                <a href="tel:+92880098670">+92 (8800) - 98670</a>
              </div>
            </li>
            <li>
              <div className="contact-info-box">
                <span className="icon lnr-icon-envelope1"></span>
                <span className="title">Send Email</span>
                <a href="https://html.kodesolution.com/cdn-cgi/l/email-protection#751d10190535161a1805141b0c5b161a18">
                  <span
                    className="__cf_email__"
                    data-cfemail="274f424b576744484a5746495e0944484a"
                  >
                    [email&#160;protected]
                  </span>
                </a>
              </div>
            </li>
            <li>
              <div className="contact-info-box">
                <span className="icon lnr-icon-clock"></span>
                <span className="title">Send Email</span>
                Mon - Sat 8:00 - 6:30, Sunday - CLOSED
              </div>
            </li>
          </ul>

          <ul className="social-links">
            <li>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-pinterest"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="sticky-header">
        <div className="auto-container">
          <div className="inner-container">
            <div className="logo">
              <a href="index.html">
                 <Image
                    src="/assets/images/black-logo.png"
                    alt="Capstone Logo"
                    width={120}
                    height={40}
                    priority
                  />
              </a>
            </div>

            <div className="nav-outer">
              <nav className="main-menu">
                <div className="navbar-collapse show collapse clearfix">
                  <ul className="navigation clearfix"></ul>
                </div>
              </nav>

              <div className="mobile-nav-toggler">
                <span className="icon lnr-icon-bars"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
