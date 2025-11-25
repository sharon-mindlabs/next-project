"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
export default function HomeAboutIcons() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(false);

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
        threshold: 0.7, // triggers when 20% of the div is visible
      }
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, []);
  return (
    <div
      className={`home-about-animate-image ${active ? "active" : ""}`}
      ref={targetRef}
    >
      <Image
        className="one"
        src="/images/about-animate-icon-01.png"
        alt="My Logo"
        width={896}
        height={159}
        quality={75}
      />

      <Image
        className="two"
        src="/images/about-animate-icon-02.png"
        alt="My Logo"
        width={242}
        height={276}
        quality={75}
      />

      <Image
        className="three"
        src="/images/about-animate-icon-3.png"
        alt="My Logo"
        width={181}
        height={181}
        quality={75}
      />

      <Image
        className="four"
        src="/images/about-animate-icon-3.png"
        alt="My Logo"
        width={181}
        height={181}
        quality={75}
      />

      <Image
        className="five"
        src="/images/about-animate-icon-05.png"
        alt="My Logo"
        width={255}
        height={276}
        quality={75}
      />
    </div>
  );
}
