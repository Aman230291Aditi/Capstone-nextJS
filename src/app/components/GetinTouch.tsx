"use client";

import React, { useState } from "react";
import { postContact } from "../api/postContact";
interface FormData {
  title: string;
  email: string;
  phone: string;
  description: string;
}

interface MessageState {
  type: "success" | "error";
  text: string;
}
const GetinTouch = () => {
  const [formdata, setFormData] = useState<FormData>({
    title: "",
    email: "",
    phone: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<MessageState | null>(null);

  const token = "fd20fa89183b75e530029557dcc57976bb091a29";

  const handlleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const response = await postContact(formdata, token);
      // console.log(response);
      setMessage({
        type: "success",
        text: "Your message was sent successfully!",
      });

      setFormData({
        title: "",
        email: "",
        phone: "",
        description: "",
      });
    } catch (error) {
      console.error(error);
       setMessage({
        type: "success",
        text: "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <section
        id="contact"
        aria-label="Contact section"
        className="contact-section fix section-padding"
      >
        <div className="contact-shape">
          <img
            src="/assets/images/home-1/contact/contact-shape.png"
            alt="img"
          />
        </div>
        <div className="auto-container">
          <div className="contact-wrapper">
            <div className="row g-4">
              <div className="col-lg-6 col-md-8">
                <div className="contact-content-1">
                  <div className="sec-title mb-0">
                    <h6 className="sub-title text-white wow fadeInUp">
                      <span className="triangle triangle1"></span>
                      <span className="triangle triangle2"></span>
                      Contact Us
                    </h6>
                    <h2
                      className="text-white wow fadeInUp"
                      data-wow-delay=".2s"
                    >
                      Get In Touch With Us!
                    </h2>
                  </div>

                  <form
                    onSubmit={handlleSubmit}
                    className="form-box wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <div className="row g-4">
                      <div className="col-md-12">
                        <div className="form-clt">
                          <input
                            type="text"
                            value={formdata.title}
                            onChange={(e) =>
                              setFormData({
                                ...formdata,
                                title: e.target.value,
                              })
                            }
                            // onChange={(e) => setName(e.target.value)}
                            placeholder="Full Name*"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-clt">
                          <input
                            type="email"
                            value={formdata.email}
                            onChange={(e) =>
                              setFormData({
                                ...formdata,
                                email: e.target.value,
                              })
                            }
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-clt">
                          <input
                            type="text"
                            value={formdata.phone}
                            onChange={(e) =>
                              setFormData({
                                ...formdata,
                                phone: e.target.value,
                              })
                            }
                            id="phone"
                            placeholder="Phone"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-clt">
                          <textarea
                            value={formdata.description}
                            onChange={(e) =>
                              setFormData({
                                ...formdata,
                                description: e.target.value,
                              })
                            }
                            placeholder="Message"
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-clt">
                          <button
                            className="theme-btn btn-style-one w-100"
                            type="submit"
                            disabled={loading}
                          >
                            {loading ? (
                              <span className="d-flex align-items-center gap-2">
                                <span className="loader"></span> Sending...
                              </span>
                            ) : (
                              " Submit Now"
                            )}
                          </button>
                        </div>
                        {message && (
                          <p
                            className={`mt-4 text-center ${
                              message.type === "success"
                                ? "text-green-600"
                                : "text-red-600"
                            }`}
                          >
                            {message.text}
                          </p>
                        )}
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-6"></div>
            </div>
          </div>
        </div>
        <div className="contact-image-1">
          <img
            src="/assets/images/home-1/contact/contact-image.jpg"
            alt="img"
            className="wow img-custom-anim-right"
          />
          <div className="shape-image">
            <img src="/assets/images/home-1/contact/shape-1.png" alt="img" />
          </div>
          <div className="contact-info-box float-bob-y">
            <h2>Still Have you Any Question?</h2>
            <ul className="contact-list">
              <li>
                <div className="icon">
                  <i className="lnr-icon-phone-handset"></i>
                </div>
                <div className="content">
                  <h3>Call Us</h3>
                  <p>
                    <a href="tel:+6591916628">+65 9191 6628</a>
                  </p>
                  <p>
                    <a href="tel:+918962576628">+91 89625 76628</a>
                  </p>
                </div>
              </li>
              <li>
                <div className="icon">
                  <i className="lnr-icon-envelope"></i>
                </div>
                <div className="content">
                  <h3>Mail Us</h3>
                  <p>
                    <a href="#">
                      <span
                        className="__cf_email__"
                        data-cfemail="b6d0dfd8d5dadfcef6d9c3c4dbd7dfda98d5d9db"
                      >
                        cs@thecapstoneconsultancy.com
                      </span>
                    </a>
                  </p>
                </div>
              </li>
              <li>
                <div className="icon">
                  <i className="lnr-icon-location"></i>
                </div>
                <div className="content">
                  <h3>Locate Us</h3>
                  <p>
                    <a href="">
                      <span className="__cf_email__">
                        34 Đ. Lê Thị Chợ, Phú Mỹ, Quận 7, Hồ Chí Minh 700000
                      </span>
                    </a>
                  </p>
                </div>
              </li>
            </ul>
            <span className="ellipse-bg"></span>
          </div>
        </div>
      </section>
    </>
  );
};

export default GetinTouch;
