"use client";
import Link from "next/link";

export default function HomeFooterCTA() {
  return (
    <div className="home-footer-cta">
      <div className="container">
        <div className="content-area">
          <div className="text-area">
            <div className="description">
              <img src="images/mouse-circle.svg" alt="" />
              <span>Built for Faster Customer Support</span>
            </div>
            <h2>Ready to Scale Customer Support Without the Complexity?</h2>

            <div className="cta">
              <Link className="button btn-white btn-xxl" href="/enquiry">
                Start Free Trial
              </Link>
            </div>
            <div className="note">
              <span className="text">Free 14-day trial</span>
              <span className="dot">•</span>
              <span className="text">No credit card required</span>
              <span className="dot">•</span>
              <span className="text">Get started in minutes</span>
            </div>
          </div>

          <div className="image-area">
            <img className="logo" src="images/cta-log-2.svg" alt="" />

            <div
              className="bg-image"
              style={{
                backgroundImage: `url('images/home-cta-blog.jpg')`,
              }}
            ></div>

            <div className="contents">
              <img
                className="main-image"
                src="images/cta-main-image.png"
                alt=""
              />

              <span>
                Join growing teams using FlockDesk to manage support tickets,
                automate workflows, and keep customer conversations organized
                from one workspace.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
