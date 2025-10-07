import Image from "next/image";
import TestimonialSlider from "./components/TestimonialSlider";
import TeamsSlider from "./components/TeamSlider";
import GetinTouch from "./components/GetinTouch";
import TrustedPartner from "./components/TrustedPartner";
export default function Home() {
  const slides = [
    {
      src: "/assets/images/capstone-consultancy-Louis-Chua-3-1536x1455.jpg",
      alt: "Slide 1",
      name: "Louis",
      title:
        "We are an international team with talents from across industries who have years of experience excelling in what they do before joining us as consultants.",
      designation: "Business",
    },
    {
      src: "/assets/images/capstone-consultancy-Louis-Chua-3-1536x1455.jpg",
      alt: "Slide 2",
      name: "Louis",
      title:
        "We are an international team with talents from across industries who have years of experience excelling in what they do before joining us as consultants.",
      designation: "Business",
    },
    {
      src: "/assets/images/capstone-consultancy-Louis-Chua-3-1536x1455.jpg",
      alt: "Slide 2",
      name: "Louis",
      title:
        "We are an international team with talents from across industries who have years of experience excelling in what they do before joining us as consultants.",
      designation: "Business",
    },
  ];

  const TeamsMembers = [
    {
      src: "/assets/images/teams/Rakesh.png",
      alt: "Rakesh Nanda",
      name: "Rakesh Nanda",
      designation: "Consultant Mentor",
    },
    {
      src: "/assets/images/teams/Akshansh2.jpg",
      alt: "Akshansh Saxena",
      name: "Akshansh Saxena",
      designation: "Consultant",
    },
    {
      src: "/assets/images/teams/IMG_6569-scaled.jpg",
      alt: "Louis Chua",
      name: "Louis Chua",
      designation: "Consultant",
    },
    {
      src: "/assets/images/teams/capstone-consultancy-mex-cao-e1725244246837.jpeg",
      alt: "Mex Cao",
      name: "Mex Cao",
      designation: "Principal Consultant",
    },
    {
      src: "/assets/images/teams/36e8b43d-b2ef-4643-8861-a8b01f99e31e-e1734515055912.jpeg",
      alt: "Slide 2",
      name: "Edric Ho",
      designation: "Consultant",
    },
    {
      src: "/assets/images/teams/capstone-consultancy-Niick-Ruzzo.png",
      alt: "Niick Ruzzo",
      name: "Niick Ruzzo",
      designation: "Consultant",
    },
    {
      src: "/assets/images/teams/IMG_6569-scaled.jpg",
      alt: "Slide 2",
      name: "Louis Chua",
      designation: "Consultant",
    },
  ];
  return (
    <>
      <section className="hero-section hero-1">
        <div className="hero-image wow img-custom-anim-right">
          <img src="/assets/images/hero-01.png" alt="img" />
          {/* <Image
          src="/assets/images/hero-01.png"
          alt="img"
          className="img-fluid w-100 h-100" // Bootstrap responsive image className
          fill={false} // default, so we can use className
          width={0} // trick to avoid fixed width
          height={0} // trick to avoid fixed height
          sizes="100vw" // tells browser it should be full width
        /> */}
          {/* <img src="images/hero-01.png" alt="img" /> */}
          <div className="shape-2">
            <Image
              src="/assets/images/home-1/shape-2.png"
              alt="img"
              width={180}
              height={180}
              priority
            />
          </div>
        </div>
        <div className="shape-1 float-bob-x">
          <Image
            src="/assets/images/home-1/shape-2.png"
            alt="img"
            width={180}
            height={180}
            priority
          />
        </div>
        <div className="shape-3">
          {/* <img src="/assets/images/home-1/shape-2.png" alt="img" /> */}
          <Image
            src="/assets/images/home-1/shape-2.png"
            alt="img"
            width={180}
            height={180}
            priority
          />
        </div>
        <div className="auto-container">
          <div className="row g-4">
            <div className="col-xl-6 col-lg-12">
              <div className="hero-content">
                <h6 className="wow fadeInUp">
                  <span className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                    >
                      <path
                        d="M15 12.5H23.75L10 27.5L13.75 16.25H6.25L16.25 2.5L15 12.5Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  Reliable And Fast Business Consultancy
                </h6>
                <h1 className="wow fadeInUp" data-wow-delay=".2s">
                  Market Entry And Expansion
                </h1>
                <p className="wow fadeInUp" data-wow-delay=".4s">
                  We advise companies the best route-to-market to India market
                </p>
                <div className="hero-button wow fadeInUp" data-wow-delay=".6s">
                  <a href="#contact" className="theme-btn btn-style-one">
                    Lets Connect With Us
                    <span className="icon">
                      <i className="flaticon-finance-fi_3385625"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6"></div>
          </div>
        </div>
      </section>

      <section className="business-solution-section">
        <div className="container pt-5 pb-5">
          <div className="row g-4">
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="feature-business-solution-items-2">
                <div className="content">
                  <h3>Advisory</h3>
                  <p>
                    We advise companies the best route-to-market to India market
                  </p>
                  <div className="icon">
                    <i className="flaticon-finance-business-expense-svgrepo-com-1"></i>
                  </div>
                </div>
                <div className="business-image">
                  {/* <Image
          src="/assets/images/home-1/shape-2.png"
          alt="img"
          width={180}
          height={40}
          priority
        /> */}
                  <img
                    src="/assets/images/capstone-advisory-business-partnership.jpg"
                    alt="img"
                  />
                  <img
                    src="/assets/images/capstone-advisory-business-partnership.jpg"
                    alt="img"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-8">
              <div className="row g-4">
                <div
                  className="col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  <div className="feature-business-solution-items-1">
                    <div className="business-image">
                      <img
                        src="/assets/images/capstone-consultancy-able-pack-scaled.jpg"
                        alt="img"
                      />
                      <img
                        src="/assets/images/capstone-consultancy-able-pack-scaled.jpg"
                        alt="img"
                      />
                    </div>
                    <div className="content">
                      <div className="icon">
                        <i className="flaticon-business-028-briefcase"></i>
                      </div>
                      <h3>Market Entry</h3>
                      <p>
                        We find the most suitable partners for your business
                        entry
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <div className="feature-business-solution-items-2">
                    <div className="content">
                      <h3>Market Growth</h3>
                      <p>We work on your business together for growth</p>
                      <div className="icon">
                        <i className="flaticon-finance-business-expense-svgrepo-com-1"></i>
                      </div>
                    </div>
                    <div className="business-image">
                      <img
                        src="/assets/images/capstone-consultancy-Pune-3-scaled.jpg"
                        alt="img"
                      />
                      <img
                        src="/assets/images/capstone-consultancy-Pune-3-scaled.jpg"
                        alt="img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section section-padding">
        <div className="star-shape bounce-y">
          <img src="/assets/images/home-1/about/star-shape.png" alt="img" />
        </div>
        <div className="arrow-shape-1 bounce-x">
          <img src="/assets/images/home-1/about/arrow-1.png" alt="img" />
        </div>
        <div className="arrow-shape-2 bounce-y">
          <img src="/assets/images/home-1/about/arrow-2.png" alt="img" />
        </div>
        <div className="auto-container">
          <div className="row g-4 align-items-center">
            <div className="col-xl-6">
              <div className="about-image-1 wow img-custom-anim-left">
                <img
                  src="/assets/images/capstone-consultancy-Pune-1536x862.jpg"
                  alt="img"
                  style={{ height: "400px", objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="col-xl-6">
              <div className="about-content-1">
                <div className="sec-title mb-0">
                  <h2 className="wow fadeInUp" data-wow-delay=".2s">
                    Louis Chua
                  </h2>
                </div>
                <div className="icon-items wow fadeInUp" data-wow-delay=".4s">
                  <p>
                    Expert Business Consultant Taking Singapore Businesses
                    Global
                  </p>
                </div>
                <p className="about-text wow fadeInUp" data-wow-delay=".6s">
                  Meet Louis, an entrepreneur and business consultant dedicated
                  to helping Singapore companies expand and thrive in
                  international markets…
                </p>
                <div className="about-list-items">
                  <ul className="about-list wow fadeInUp" data-wow-delay=".8s">
                    <li>Protecting your company</li>
                    <li>We offer you solutions</li>
                    <li>we take care of you</li>
                    <li>everyone with high</li>
                  </ul>
                  <div
                    className="counter-box bg-cover wow fadeInUp"
                    data-wow-delay=".8s"
                  >
                    <div className="count-box">
                      <h2>
                        <span
                          className="count-text"
                          data-speed="3000"
                          data-stop="25"
                        >
                          0
                        </span>
                        +
                      </h2>
                    </div>
                    <div className="counter-bottom">
                      <p>Years of Experience</p>
                      <div className="icon">
                        <i className="flaticon-business-006-target"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="counter-section section-padding pt-0">
        <div className="auto-container">
          <div className="counter-wrapper">
            <div
              className="counter-box-1 wow bounceInUp"
              data-wow-delay="00ms"
              data-wow-duration="1500ms"
            >
              <div className="count-box">
                <h2>
                  <span className="count-text" data-speed="3000" data-stop="36">
                    36
                  </span>
                </h2>
                <p>States and Union Territories</p>
              </div>
            </div>
            <div
              className="counter-box-1 wow bounceInUp"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="count-box">
                <h2>
                  <span
                    className="count-text"
                    data-speed="3.00"
                    data-stop="1.45"
                  >
                    1.45
                  </span>
                  B
                </h2>
                <p>Population</p>
              </div>
            </div>
            <div
              className="counter-box-1 wow bounceInUp"
              data-wow-delay="300ms"
              data-wow-duration="1500ms"
            >
              <div className="count-box">
                <h2>
                  <span
                    className="count-text"
                    data-speed="3.00"
                    data-stop="4.73"
                  >
                    4.73
                  </span>
                  B
                </h2>
                <p>Spending Consumers</p>
              </div>
            </div>
            <div
              className="counter-box-1 wow bounceInUp"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <div className="count-box">
                <h2>
                  <span className="count-text" data-speed="3000" data-stop="1">
                    1
                  </span>
                </h2>
                <p>Viksit Bharat 2047 Initiative</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="service-section section-padding fix bg-cover"
        // style="background-image: url('images/home-1/service/service-bg.jpg')"
        style={{
          backgroundImage:
            "url('/assets/images/home-1/service/service-bg.jpg')",
        }}
      >
        <span className="ellipse-bg"></span>
        <div className="auto-container">
          <div className="sec-title">
            <div className="row g-4 justify-content-between align-items-center">
              <div className="col-xl-7 col-lg-7">
                <h6 className="text-white sub-title wow fadeInUp">
                  <span className="triangle triangle1"></span>
                  <span className="triangle triangle2"></span>
                  OUR SERVICES
                </h6>
                <h2 className="text-white wow fadeInUp" data-wow-delay=".2s">
                  Full Suite Of Front-End Support
                </h2>
              </div>
              <div
                className="col-xl-3 col-lg-4 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="section-counter-content">
                  <h3 className="count-box">
                    <span
                      className="count-text"
                      data-speed="3000"
                      data-stop="5"
                    >
                      0
                    </span>
                    k+
                  </h3>
                  <h6 className="text-white font-size-20 line-height-1 font-weight-400">
                    Satisfied Clients
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="service-wrapper">
          <div className="row">
            <div
              className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="service-card-items">
                <div className="icon">
                  <i className="flaticon-finance-business-expense-svgrepo-com-1"></i>
                </div>
                <div className="content">
                  <h3>
                    <a href="page-services.html">Business Development</a>
                  </h3>
                  <p>Find Best-Fit Partners</p>

                  <p>Open New Territories</p>

                  <p>Find Best-Fit Partners</p>

                  <p>New Territories Development</p>
                  <a href="page-services.html" className="link-btn">
                    <i className="lnr-icon-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="service-card-items">
                <div className="icon">
                  <i className="lnr-icon-layers"></i>
                </div>
                <div className="content">
                  <h3>
                    <a href="page-services.html">Key Account Management</a>
                  </h3>
                  <p>KA Negotiation </p>

                  <p>Formulate A&P Plans </p>

                  <p>Distribution Points Management </p>

                  <p>Category Management</p>
                  <a href="page-services.html" className="link-btn">
                    <i className="lnr-icon-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="service-card-items">
                <div className="icon">
                  <i className="flaticon-business-023-lifesaver"></i>
                </div>
                <div className="content">
                  <h3>
                    <a href="page-services.html">Marketing</a>
                  </h3>
                  <p>Social Media Marketing </p>

                  <p>Trade Marketing </p>

                  <a href="page-services.html" className="link-btn">
                    <i className="lnr-icon-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".8s"
            >
              <div className="service-card-items">
                <div className="icon">
                  <i className="lnr-icon-folder-open"></i>
                </div>
                <div className="content">
                  <h3>
                    <a href="page-services.html">MFP Management</a>
                  </h3>
                  <p>Best Practice Implementation</p>
                  <p>Brand, CS, Products Audit</p>

                  <p>Revenue and Door Growth</p>
                  <a href="page-services.html" className="link-btn">
                    <i className="lnr-icon-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     <TrustedPartner/>

      <section>
        <TestimonialSlider slides={slides} />
      </section>

      <section>
        <TeamsSlider TeamsMembers={TeamsMembers} />
      </section>

      <section>
        <GetinTouch />
      </section>
    </>
  );
}
