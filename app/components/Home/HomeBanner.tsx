"use client";
import Link from "next/link";

import UserIcon from "../common/UserIcon";
import { userImages } from "../../data";
import useInView from "@/hooks/useInView";

export default function HomeBanner() {
  // const background = {
  //   backgroundImage: `url(images/home-banner-grid.svg)`,
  //   backgroundSize: "cover",
  //   backgroundPosition: "center",
  //   backgroundRepeat: "no-repeat",
  // };
  const { ref, active } = useInView();
  return (
    <div className={`home-banner ${active ? "active" : ""}`} ref={ref}>
      <div className="container">
        <div className="content--area">
          <div className="text-area">
            <div className="heading">
              <div className="discription">
                <img src="images/banner-discription-icon.svg" alt="" />
                <span>Multi-tenant helpdesk for growing teams</span>
              </div>
              <h1>
                Customer Support That Grows With <span>your</span>{" "}
                <UserIcon data={userImages} />
                <span>team</span>
              </h1>
            </div>

            <section>
              <p>
                Manage customer conversations, tickets, and team workflows from
                one workspace designed to keep support organized and efficient.
              </p>
              <ul>
                <li>Setup in minutes</li>
                <li>No credit card required</li>
                <li>Cancel anytime</li>
              </ul>
            </section>
          </div>

          <div className="image-area">
            <div className="main-image-container">
              <img
                src="images/banner-image-1.png"
                alt=""
                className="banner-1"
              />

              <img
                src="images/banner-image-2.png"
                alt=""
                className="banner-2"
              />

              <img
                src="images/banner-image-3.png"
                alt=""
                className="banner-3"
              />

              <img
                src="images/banner-image-4.png"
                alt=""
                className="banner-4"
              />
            </div>

            <div className="banner-rating">
              <span>Trusted by 500+ growing teams</span>
              <img src="images/rating-five-star.svg" alt="" />
            </div>
            <div className="cta">
              <Link
                className="button btn-primary btn-xxl"
                href="/"
                title="Start Free Trial"
              >
                Start Free Trial
              </Link>
              <Link
                className="button btn-primary-line btn-xxl"
                href="/"
                title="See How It Works"
              >
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
