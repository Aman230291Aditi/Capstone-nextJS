"use client";

import { FC, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; // Import Navigation from swiper
import { Pagination } from "swiper/modules"; // Import Pagination from swiper/modules
import { Autoplay } from "swiper/modules"; //
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Slide {
  src: string;
  alt: string;
  title?: string; // optional overlay title
  name?: string; // optional overlay subtitle
  designation?: string;
}

interface CustomHeroSliderProps {
  slides: Slide[];
}

const TestimonialSlider: FC<CustomHeroSliderProps> = ({ slides }) => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  return (
    <section className="testimonial-section-3 fix section-padding">
      <div className="auto-container">
        <div className="swiper testimonial-slider-3">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="testimonial-wrapper-3">
                <div className="mask-shape-style-3">
                  <img
                    src="/assets/images/home-3/testimonial/mask-shape.png"
                    alt="img"
                  />
                </div>

                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={0}
                  slidesPerView={1}
                  // onSwiper={(swiper) => {
                  //   // Delay assignment to ensure refs are set
                  //   setTimeout(() => {
                  //     if (prevRef.current && nextRef.current) {
                  //       swiper.params.navigation.prevEl = prevRef.current;
                  //       swiper.params.navigation.nextEl = nextRef.current;
                  //       swiper.navigation.init();
                  //       swiper.navigation.update();
                  //     }
                  //   });
                  // }}
                  loop={true}
                  autoplay={{ delay: 4000 }}
                  navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                  }}
                >
                  <div
                    className="demo"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "2rem",
                    }}
                  >
                    {slides.map((slide, index) => (
                      <SwiperSlide key={index}>
                        <div
                          className=""
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "2rem",
                          }}
                        >
                          <div className="image-box-style-3">
                            {/* Background Image */}
                            <div className="quate">
                              <i className="flaticon-finance-Quote"></i>
                            </div>
                            <div className="image">
                              <img src={slide.src} alt={slide.alt} />
                            </div>
                          </div>

                          <div className="content-box-style-3">
                            {slide.title && (
                              <h3 className="text">{slide.title} </h3>
                            )}

                            {slide.name && slide.designation && (
                              <h3 className="title">
                                {slide.name} / <span>{slide.designation}</span>
                              </h3>
                            )}
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </div>
                </Swiper>
              </div>
            </div>

            {/* <div className="swiper-slide">
						<div className="testimonial-wrapper-3">
							<div className="mask-shape-style-3">
								<img src="images/home-3/testimonial/mask-shape.png" alt="img">
							</div>
							<div className="image-box-style-3">
								<div className="quate">
									<i className="flaticon-finance-Quote"></i>
								</div>
								<div className="image">
									<img src="images/capstone-consultancy-Louis-Chua-3-1536x1455.jpg" alt="Image">
									
								</div>
						
							</div>
							<div className="content-box-style-3">
								<h3 className="text">We are an international team with talents from across industries who have years of experience excelling in what they do before joining us as consultants.       </h3>
								<h3 className="title">Louis  / <span>Business</span></h3>
							</div>
						</div>
					</div> */}
          </div>
          
          <div className="array-button justify-content-end">
            <button   ref={prevRef} className="array-prev">
              <i className="fa-regular fa-arrow-left"></i>
            </button>
            <button  ref={nextRef} className="array-next">
              <i className="fa-regular fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
