// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import { li } from "framer-motion/client";

// export type WhyChooseFeature = {
//   option: "yes" | "no";
//   point: string;
// };

// export type WhyChooseDataItem = {
//   id: number;
//   title: string;
//   features: WhyChooseFeature[];
//   priceIcon: string;
//   price: string;
// };

// type whyChooseProps = {
//   data: WhyChooseDataItem[];
// };

// export default function WhyFlockDesk({ data }: whyChooseProps) {
//   return (
//     <div className="why-flockdesk">
//       <div className="container">
//         <div className="content-area">
//           {/*  */}
//           <div className="text-area">
//             <div className="heading">
//               <section>
//                 <div className="discription">
//                   <img src="images/flockdesk-others.svg" alt="" />
//                   <span>Flockdesk vs Others</span>
//                 </div>
//                 <h3>Why Businesses Choose FlockDesk?</h3>
//               </section>

//               <div className="silder-navs">
//                 <button className="slider-right">
//                   <i className="icon-nav-left"></i>
//                 </button>
//                 <button className="slider-left">
//                   <i className="icon-nav-right"></i>
//                 </button>
//               </div>
//             </div>

//             <div className="slider-wrapper">
//               {data?.map((item: any) => (
//                 <div className="slide" key={item?.id}>
//                   <h6>{item?.title}</h6>

//                   <ul>
//                     {item?.features?.map(
//                       (feature: WhyChooseFeature, index: number) => (
//                         <li>
//                           {" "}
//                           <i
//                             key={index}
//                             className={`${feature?.option === "yes" ? "icon-tick-2" : "icon-close-2"}`}
//                           ></i>{" "}
//                           {feature?.point}
//                         </li>
//                       ),
//                     )}
//                   </ul>

//                   <div className="price">
//                     <i className={`${item?.priceIcon}`}></i>
//                     <section>
//                       <span className="title">Starting Price :</span>
//                       <h6>{item?.price}</h6>
//                     </section>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//           {/*  */}

//           <div className="image-area"></div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

export type WhyChooseFeature = {
  option: "yes" | "no";
  point: string;
};

export type WhyChooseDataItem = {
  id: number;
  title: string;
  features: WhyChooseFeature[];
  priceIcon: string;
  price: string;
};

type WhyChooseProps = {
  data: WhyChooseDataItem[];
};

export default function WhyFlockDesk({ data }: WhyChooseProps) {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="why-flockdesk">
      <div className="container">
        <div className="content-area">
          {/* Text Area */}
          <div className="text-area">
            <div className="heading">
              <section>
                <div className="discription">
                  <img src="images/flockdesk-others.svg" alt="" />
                  <span>Flockdesk vs Others</span>
                </div>

                <h3>Why Businesses Choose FlockDesk?</h3>
              </section>

              <div className="silder-navs">
                <button
                  className="slider-right"
                  onClick={() => swiperRef.current?.slidePrev()}
                >
                  <i className="icon-nav-left"></i>
                </button>

                <button
                  className="slider-left"
                  onClick={() => swiperRef.current?.slideNext()}
                >
                  <i className="icon-nav-right"></i>
                </button>
              </div>
            </div>

            <div className="price-wrapper">
              {data?.map((item) => (
                <div className="item" key={item.id}>
                  <h6>{item.title}</h6>

                  <ul>
                    {item.features.map((feature, index) => (
                      <li key={index}>
                        <i
                          className={
                            feature.option === "yes"
                              ? "icon-tick-2"
                              : "icon-close-2"
                          }
                        ></i>
                        {feature.point}
                      </li>
                    ))}
                  </ul>

                  <div className="price">
                    <i className={item.priceIcon}></i>

                    <section>
                      <span className="title">Starting Price :</span>
                      <h6>{item.price}</h6>
                    </section>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Area */}
          <div className="image-area">
            <div
              className="bg-image"
              style={{
                backgroundImage: `url('/images/why-business-bg.jpg')`,
              }}
            ></div>

            <div className="why-business">
              <div className="main-image-slider-wrapper">
                <Swiper
                  modules={[Navigation, Autoplay]}
                  slidesPerView={1}
                  spaceBetween={0}
                  loop={true}
                  onSwiper={(swiper) => (swiperRef.current = swiper)}
                  autoplay={{
                    delay: 3000, // 3 seconds
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  speed={800}
                >
                  <SwiperSlide>
                    <div className="slide">
                      <img
                        className="main-image"
                        src="images/why-business-image.png"
                        alt=""
                      />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="slide">
                      <img
                        className="main-image"
                        src="images/why-business-image.png"
                        alt=""
                      />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="slide">
                      <img
                        className="main-image"
                        src="images/why-business-image.png"
                        alt=""
                      />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>

              <div className="discription">
                <img src="images/king-icon.svg" alt="" />
                <p>
                  A unified support platform that helps teams resolve tickets
                  faster, collaborate better, and scale customer support without
                  operational complexity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
