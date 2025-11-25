"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function AnimateBox() {
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
        threshold: 0.3, // triggers when 20% of the div is visible
      }
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);
  return (
    <div
      className={`home-animate-box ${active ? "active" : ""}`}
      ref={targetRef}
    >
      <div className="container">
        <div className="content-area">
          <div className="animate-box-1">
            <div className="text-area">
              <h4>Manage all your customer messages</h4>
              <p>
                Keep customers informed with powerful messaging and real-time
                ticket updates. Deliver the high-quality support they expect.
              </p>

              <div className="image-area">
                <Image
                  className="image--1"
                  src="/images/animate-box-1-img-1.png"
                  alt="Image"
                  width={339}
                  height={428}
                />
                <Image
                  className="animate-box-1-arrow"
                  src="/images/animate-box-1-arrow.svg"
                  alt="Image"
                  width={59}
                  height={186}
                />
                <Image
                  className="image--2"
                  src="/images/animate-box-1-img-2.svg"
                  alt="Image"
                  width={71}
                  height={71}
                />

                <Image
                  className="image--3"
                  src="/images/animate-box-1-img-3.svg"
                  alt="Image"
                  width={71}
                  height={71}
                />

                <Image
                  className="image--4"
                  src="/images/animate-box-1-img-4.svg"
                  alt="Image"
                  width={71}
                  height={71}
                />
              </div>
            </div>
          </div>

          <div className="animate-box-2">
            <div className="text-area">
              <h4>Collaborate with your team </h4>
              <p>
                Work seamlessly with your team to resolve issues faster, while
                keeping customers updated every step of the way.
              </p>
            </div>

            <div className="image-area">
              <Image
                className="image--1"
                src="/images/animate-box-2-img-1.png"
                alt="Image"
                width={645}
                height={261}
              />

              <Image
                className="image--2"
                src="/images/animate-box-2-img-2.png"
                alt="Image"
                width={495}
                height={116}
              />

              <Image
                className="image--3"
                src="/images/animate-box-2-img-3.png"
                alt="Image"
                width={126}
                height={186}
              />

              <Image
                className="image--4"
                src="/images/animate-box-2-img-4.png"
                alt="Image"
                width={122}
                height={228}
              />
            </div>
          </div>

          {/*  */}

          <div className="animate-box-3">
            <div className="text-area">
              <h4>Automate your Ticket response</h4>
              <p>
                Effortlessly decrease support volumes and boost customer
                satisfaction with automation.
              </p>
            </div>

            <div className="image-area">
              <Image
                className="image--1"
                src="/images/animate-box-3-img-01.png"
                alt="Image"
                width={210}
                height={261}
              />

              <Image
                className="image--2"
                src="/images/animate-box-3-img-2.png"
                alt="Image"
                width={634}
                height={229}
              />
            </div>
          </div>

          <div className="animate-box-4">
            <div className="text-area">
              <h4>Clean and user friendly Ticket Compose</h4>
              <p>
                Create and send detailed responses directly from your helpdesk,
                with rich text formatting, attachments, and canned replies.
              </p>
            </div>
            <div className="image-area">
              <Image
                className="image--1"
                src="/images/animate-box-4-img-1.png"
                alt="Image"
                width={378}
                height={373}
              />

              <Image
                className="image--2"
                src="/images/animate-box-4-img-2.png"
                alt="Image"
                width={190}
                height={430}
              />

              <Image
                className="image--3"
                src="/images/animate-box-4-img-3.svg"
                alt="Image"
                width={68}
                height={68}
              />

              <Image
                className="image--4"
                src="/images/animate-box-4-img-4.svg"
                alt="Image"
                width={68}
                height={68}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
