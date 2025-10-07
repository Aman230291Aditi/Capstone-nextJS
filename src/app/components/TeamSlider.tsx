"use client";

import { FC, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; // Import Navigation from swiper
import { Pagination } from "swiper/modules"; // Import Pagination from swiper/modules
import { Autoplay } from "swiper/modules"; //
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface TeamsMember {
  src: string;
  alt: string;
  name?: string; // optional overlay subtitle
  designation?: string;
}

interface CustomHeroSliderProps {
  TeamsMembers: TeamsMember[];
}

const TeamsSlider: FC<CustomHeroSliderProps> = ({ TeamsMembers }) => {
  return (
    <section className="team-section fix">
      <div className="team-wrapper section-padding">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h6 className="sub-title wow fadeInUp">
              <span className="triangle triangle1"></span>
              <span className="triangle triangle2"></span>
              Our Team
            </h6>
            <h2 className="wow fadeInUp" data-wow-delay=".2s">
              Our Experienced <br />
              team member
            </h2>
          </div>
          <div className="team-bg-shape section-bg">
            <img src="/assets/images/home-1/team/team-bg-shape.png" alt="img" />
          </div>
          <div className="swiper team-slider">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={4}
              //   onSwiper={(swiper) => {
              //     // Delay assignment to ensure refs are set
              //     setTimeout(() => {
              //       if (prevRef.current && nextRef.current) {
              //         swiper.params.navigation.prevEl = prevRef.current;
              //         swiper.params.navigation.nextEl = nextRef.current;
              //         swiper.navigation.init();
              //         swiper.navigation.update();
              //       }
              //     });
              //   }}
              loop={true}
              autoplay={{ delay: 4000 }}
              //   navigation={{
              //     prevEl: prevRef.current,
              //     nextEl: nextRef.current,
              //   }}
            >
              {TeamsMembers.map((slide, index) => (
                <SwiperSlide key={index} className="team-box-items">
                  <div className="team-image">
                    <img src={slide.src} alt={slide.alt} />
                    <img src={slide.src} alt={slide.alt} />
                    <div className="arrow-shape">
                      <img
                        src="/assets/images/home-1/team/arrow-shape.png"
                        alt="img"
                      />
                    </div>
                    <div className="team-content">
                      <div className="content">
                        {slide.name && (
                          <h4>
                            <a href="about.html">{slide.name}</a>
                          </h4>
                        )}

                        {slide.designation && <p>{slide.designation}</p>}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="swiper-dot">
            <div className="dot"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamsSlider;
