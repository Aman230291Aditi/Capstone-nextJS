import React from 'react'

const TrustedPartner = () => {
  return (
   <section
        className="why-choose-section fix section-bg"
        style={{
          backgroundImage:
            "url('/assets/images/home-1/choose-us/choose-us-shape.png')",
        }}
      >
        <div className="auto-container">
          <div className="why-choose-us-wrapper">
            <div className="row g-4 align-items-center">
              <div className="col-xl-5">
                <div className="why-choose-us-image-1">
                  <img
                    src="/assets/images/capstone-consultancy-about-us-1536x1152.jpg"
                    alt="img"
                    className="wow img-custom-anim-left"
                  />
                </div>
                <div className="stats-container">
                  <div className="stat-item">
                    <span
                      className="stat-number"
                      style={{
                        transform: "scale(1)",
                        transition: "transform 0.3s",
                      }}
                      // style="transform: scale(1); transition: transform 0.3s;"
                    >
                      30
                    </span>
                    <div className="stat-label">Years Experience</div>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">7</span>
                    <div className="stat-label">Specialist Consultants</div>
                  </div>
                </div>
              </div>
              <div className="col-xl-7">
                <div className="why-choose-us-content-1">
                  <div className="sec-title mb-0">
                    <h6 className="sub-title">
                      <span className="triangle triangle1"></span>
                      <span className="triangle triangle2"></span>
                      Empowering Your Business Journey
                    </h6>
                    <h2 className="wow fadeInUp" data-wow-delay=".2s">
                      Trusted Partner for Asia Markets
                    </h2>
                  </div>

                  <div className="tab-content">
                    <div className="tab-pane fade show active">
                      <div
                        className="why-choose-list wow fadeInUp animated"
                        data-wow-delay=".3s"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.3s; animation-nam",
                        }}
                        // style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInUp;"
                      >
                        <div>
                          <p>
                            As a partner for Asia, we believe in guiding
                            businesses with passion and expertise to fully
                            unlock your brand’s potential and using our
                            expertise to execute your brand’s vision in Asia.
                          </p>
                          <p>
                            Our team is dedicated to your success and offers
                            tailored strategies that fit your unique needs. From
                            market research to local partnerships, we ensure
                            you’re ready to thrive.
                          </p>
                          <p>
                            Together, we build the roadmap to your growth in
                            this vibrant region, making your dream no longer a
                            dream but a reality.
                          </p>
                          <p>
                            We have deep expertise with our team in the Indian,
                            Vietnamese, Singapore and SEA markets. Do contact us
                            if you are keen to explore these markets further.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default TrustedPartner