import Link from "next/link";
import Image from "next/image";
import HomeBannerIcons from "./HomeBannerIcons";

export default function HomeBanner() {
  return (
    <div
      className="home-banner"
      style={{
        backgroundImage: "url('images/home-banner.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <div className="content-area">
          <section>
            <h1>
              <span>FlockDesk</span> speeds up support and boosts{" "}
              <span>retention</span>
            </h1>
            <p>
              Deliver outstanding support and achieve new goals with FlockDesk.
            </p>

            <div className="cta-section">
              <Link href="/" className="button-solid-primary button-lg">
                Get Started
              </Link>
              <Link href="/" className="button-line button-lg">
                Get a Demo
              </Link>
            </div>

            <HomeBannerIcons />
          </section>
        </div>
      </div>
    </div>
  );
}
