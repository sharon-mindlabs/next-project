"use client";
import { useState } from "react";
import Link from "next/link";

export type HowWorksStepItem = {
  id: number;
  icon: string;
  title: string;
  discription: string;
  step: string;
};

type HowWorksStepProps = {
  data: any;
};

export default function HowItWorks({ data }: HowWorksStepProps) {
  return (
    <>
      <div className="how-it-works">
        <div className="container">
          <div className="working-steps">
            <div className="heading-area">
              <section>
                <div className="discription">
                  <img src="images/how-it-works.svg" alt="" />
                  <span>How It Works</span>
                </div>
                <h3>
                  Up and running in <span>4 steps</span>
                </h3>
              </section>
              <p>
                No complex setup. No lengthy onboarding. Just a clean, fast path
                to better support.
              </p>
            </div>

            <div className="steps-warpper">
              {data?.map((item: HowWorksStepItem) => (
                <div className="item">
                  <i className={`${item?.icon}`}></i>
                  <h6>{item?.title}</h6>
                  <p>{item?.discription}</p>

                  <div className="step-number">
                    <span>{item?.step}</span>
                    <img src="images/step-arrow.svg" alt="" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/*  */}
          <div className="why-teams-love">
            <div className="image-area">
              <img src="images/why-team-love.png" alt="" />
            </div>

            <div className="text-area">
              <div className="heading-area">
                <section>
                  <div className="discription">
                    <img src="images/why-team-love.svg" alt="" />
                    <span>Why Teams Love Flockdesk</span>
                  </div>
                  <h3>
                    Work smarter, <span>not harder</span>
                  </h3>
                </section>
                <ul>
                  <li>Reduce support response time by 60%</li>
                  <li>Handle unlimited tickets with the same team</li>
                  <li>Improve customer satisfaction scores</li>
                  <li>Eliminate email chaos and confusion</li>
                </ul>
                <Link className="button btn-primary btn-xxl" href="/about">
                  Learn from our case study
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
