"use client";
import { useEffect, useRef, useState } from "react";
export default function HomeBannerIcons() {
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
        threshold: 0.2, // triggers when 20% of the div is visible
      }
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, []);
  return (
    <div className={`banner-icons ${active ? "in-view" : ""}`} ref={targetRef}>
      <img
        className="animate-icon animate-1 add-replay-img"
        src="images/home-banner-add-replay.svg"
        alt=""
      />

      <img
        className="animate-icon animate-4"
        src="images/home-banner-change-status.svg"
        alt=""
      />

      <img
        className="animate-icon animate-5 add-replay-img"
        src="images/home-banner-edit-icon.svg"
        alt=""
      />

      <img
        className="animate-icon animate-6 add-replay-img"
        src="images/home-banner-email.svg"
        alt=""
      />

      <img
        className="animate-icon animate-7 add-replay-img"
        src="images/home-banner-calender.svg"
        alt=""
      />

      <img
        className="animate-icon animate-8 add-replay-img"
        src="images/home-banner-ticket-create.svg"
        alt=""
      />

      <img
        className="animate-icon animate-9 add-replay-img"
        src="images/home-banner-setting.svg"
        alt=""
      />

      <img
        className="animate-icon animate-10 add-replay-img"
        src="images/home-banner-edit-team.svg"
        alt=""
      />

      <img
        className="animate-icon animate-10 add-replay-img"
        src="images/home-banner-edit-team.svg"
        alt=""
      />

      <img
        className="animate-icon animate-11 add-replay-img"
        src="images/home-banner-assign-ticket.svg"
        alt=""
      />
    </div>
  );
}
