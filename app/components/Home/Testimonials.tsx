"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export interface TestimonialItem {
  id: number;
  content: string;
  rating: number;
  author: string;
  description: string;
}

type TestimonialProps = {
  data: TestimonialItem[];
};

export default function Testimonials({ data }: TestimonialProps) {
  return (
    <div className="trusted-by-teams">
      <div className="container">
        <div className="testimonials">
          <div className="header-area">
            <img className="qutes-icon-1" src="images/quote.svg" alt="" />

            <h3>Trusted by growing teams</h3>

            <section>
              <div className="discription">
                <img src="images/message-tick.svg" alt="" />
                <span>Loved by Support Teams</span>
              </div>

              <p>
                Join hundreds of teams delivering exceptional customer support
                with FlockDesk.
              </p>
            </section>

            <Link className="button btn-white btn-xxl" href="/enquiry">
              Start Free Trial
            </Link>
          </div>

          {/* <div className="testimonials-slider-wrapper">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              speed={800}
              breakpoints={{
                540: {
                  slidesPerView: 2,
                },

                991: {
                  slidesPerView: 3,
                },

                1400: {
                  slidesPerView: 4,
                },
              }}
            >
              {data?.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="slider">
                    <div className="top-section">
                      <div className="rating">
                        {Array.from({ length: 5 }, (_, index) => (
                          <i
                            key={index}
                            className={
                              index < item.rating
                                ? "icon-star"
                                : "icon-star-outline"
                            }
                          />
                        ))}
                      </div>

                      <p>{item.content}</p>
                    </div>

                    <div className="bottom-section">
                      <img src="images/quote-2.svg" alt="" />

                      <section>
                        <span className="author">{item.author}</span>
                        <span className="discription">{item.description}</span>
                      </section>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div> */}
        </div>
      </div>

      <div className="counter">
        <div className="container">
          <div className="content-area">
            <div className="item">
              <span className="title">
                Teams using
                <br />
                FlockDesk
              </span>
              <div className="counter-wrapper">
                <span className="count">500</span>+
              </div>
            </div>

            <div className="item">
              <span className="title">
                Faster
                <br />
                response times
              </span>
              <div className="counter-wrapper">
                <span className="count">50</span>%
              </div>
            </div>

            <div className="item">
              <span className="title">
                Average
                <br />
                setup time
              </span>
              <div className="counter-wrapper">
                &lt;
                <span className="count">1</span>hr
              </div>
            </div>

            <div className="item">
              <span className="title">
                Customer
                <br />
                satisfaction
              </span>
              <div className="counter-wrapper">
                <span className="count">4.9</span>/5
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
