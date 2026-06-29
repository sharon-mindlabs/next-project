"use client";
import { useState } from "react";
import Link from "next/link";
import useInView from "@/hooks/useInView";

export type HomeUseCaseItem = {
  id: number;
  title: string;
  description: string;
  icon: string;
  key: string;
  image: string;
};

type UseCaseProps = {
  data: HomeUseCaseItem[];
};

export default function TabSection({ data }: UseCaseProps) {
  const { ref, active } = useInView();
  return (
    <div className={`use-case ${active ? "active" : ""}`} ref={ref}>
      <div className="container">
        <div className="content-area">
          <div className="heading-area">
            <section>
              <div className="discription">
                <img src="images/use-cases.svg" alt="" />
                <span>Use Cases</span>
              </div>
              <h3>
                Built for teams <span>like yours</span>
              </h3>
            </section>
            <p>
              From early-stage startups to growing support teams, FlockDesk
              helps you deliver organized, scalable customer support.
            </p>
          </div>

          <div className="features">
            {data?.map((item: any) => (
              <div className="items" key={item?.id}>
                <section>
                  <h5>{item?.title}</h5>
                  <p>{item?.description}</p>
                  <div className="key-out">
                    Key Outcome{" "}
                    <span>
                      <i className={`${item?.icon}`}></i> {item?.key}
                    </span>
                  </div>
                </section>

                <img className="main-image" src={`${item?.image}`} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
