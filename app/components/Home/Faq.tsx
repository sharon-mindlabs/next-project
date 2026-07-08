"use client";
import Link from "next/link";
import { useState } from "react";
import useInView from "@/hooks/useInView";

export type FaqItems = {
  id: number;
  qustion: string;
  answer: string;
};

type FaqProps = {
  data: FaqItems[];
};

export default function Faq({ data }: FaqProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const { ref, active } = useInView();

  const toggle = (id: number) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  return (
    <div className={`faq ${active ? "active" : ""}`} ref={ref}>
      <div className="container">
        <div className="heading-area">
          <h3>
            Frequently Asked <span>Questions</span>
          </h3>
          <span className="discription">
            Everything you need to know about FlockDesk.
          </span>
        </div>

        <div className="content-area">
          <div className="faq-wrapper">
            {data?.map((item: FaqItems) => (
              <div
                className={`item ${item?.id === activeFaq ? "active" : ""}`}
                onClick={() => toggle(item?.id)}
              >
                <h6>
                  {item?.qustion} <i className="icon-down-arrow-5"></i>
                </h6>
                {item?.id === activeFaq && <p>{item?.answer}</p>}
              </div>
            ))}
          </div>

          <div className="image-area">
            <div
              className="faq-cta"
              style={{
                backgroundImage: "url('/images/faq-bg.jpg')",
              }}
            >
              <div className="main-image-wrapper">
                <img src="images/faq-main-image.png" alt="" />
              </div>

              <div className="contact-support">
                <div className="text-area">
                  <img src="images/support.svg" alt="" />
                  <section>
                    <h5>Still have questions?</h5>
                    <span>Our team is here to help you get started.</span>
                  </section>
                </div>

                <Link className="button btn-primary btn-xl" href="/enquiry">
                  Contact Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
