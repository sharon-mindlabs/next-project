import Link from "next/link";
import Image from "next/image";

import HomeAboutIcons from "./HomeAboutIcons";

import FeaturesBox from "../common/FeaturesBox";

export default function HomeAboutArea() {
  const features = [
    {
      icon: "icon-handle-all",
      title: "Handle all inbound requests",
      description:
        "Capture every customer query from email, chat, phone, and web forms—turning them into organized, trackable tickets.",
    },
    {
      icon: "icon-guided",
      title: "Guided conversations",
      description:
        "Create structured conversation flows that guide users to the right answers with agent intervention.",
    },
    {
      icon: "icon-lifeboy",
      title: "24/7 Supports",
      description:
        "Deliver round-the-clock assistance to ensure customers always get the help they need.",
    },
    {
      icon: "icon-service",
      title: "Service level agreements",
      description:
        "Promise customers the support they deserve with clear response and resolution commitments.",
    },
  ];

  return (
    <div className="home-about">
      <div className="container">
        <div className="content-area">
          <div className="about-main">
            <div className="text-area">
              <span className="subheading">About FlockDesk</span>
              <Image
                src="/images/logo.svg"
                alt="My Logo"
                width={157}
                height={157}
              />
              <h3>Use FlockDesk software in your own way</h3>
              <p>
                Thrive on customer happiness with MindDesk! Stay accessible,
                deliver quick and accurate resolutions, and make doing business
                with you effortless.
              </p>
            </div>

            <div className="image-area">
              <div className="image-container">
                <Image
                  className="main-image"
                  src="/images/about-section-lady.png"
                  alt="My Logo"
                  width={638}
                  height={771}
                  quality={75}
                />

                <HomeAboutIcons />
              </div>
            </div>
          </div>
          <div className="about-area-features">
            <FeaturesBox features={features} />
          </div>
        </div>
      </div>
    </div>
  );
}
