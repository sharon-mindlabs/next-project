"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function GridViewUI() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(false);
  const items = Array.from({ length: 67 }, (_, i) => i + 1);

  useEffect(() => {
    const target = targetRef.current;

    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(true);
          } else {
            setActive(false);
          }
        });
      },
      {
        threshold: 0.2, // triggers when 20% of the div is visible
      }
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  const imagePositions: Record<number, string> = {
    6: "/images/gird-icon-1.svg",
    15: "/images/grid-icon-2.svg",
    20: "/images/grid-icon-3.svg",
    25: "/images/grid-icon-4.svg",
    29: "/images/grid-icon-5.svg",
    39: "/images/grid-icon-6.svg",
    43: "/images/grid-icon-7.svg",
    52: "/images/grid-icon-8.svg",
    59: "/images/grid-icon-9.svg",
    62: "/images/grid-icon-10.svg",
  };

  return (
    <div className={`grid-view-ui ${active ? "active" : ""}`} ref={targetRef}>
      <div className="container">
        <div className="content-area">
          {items.map((_, index) => {
            if (imagePositions[index]) {
              return (
                <div className="grid-image-box" key={index}>
                  <img
                    src={imagePositions[index]}
                    alt=""
                    className="grid-image"
                  />
                </div>
              );
            }

            if (index === 48 || index === 49) return <div key={index}></div>;

            if (index === 27)
              return (
                <div key={index} className="gird-content">
                  <section>
                    <h6>Integrates with apps you use daily</h6>
                    <h3>
                      The perfect hub for all your essential business apps.
                    </h3>
                    <p>
                      Discover our multi-channel toolset with 130+ ticketing
                      features and 200+ integrations with the tools you love.
                    </p>
                    <Link href="/" className="button-solid-primary button-lg">
                      Get Started
                    </Link>
                  </section>
                </div>
              );

            return <span key={index}></span>;
          })}
        </div>
      </div>
    </div>
  );
}
