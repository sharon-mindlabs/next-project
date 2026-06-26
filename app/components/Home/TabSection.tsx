"use client";
import { useState } from "react";
import Link from "next/link";

export type HomeTabDataItem = {
  id: number;
  tabTitle: string;
  icon: string;
  heading: string;
  description: string;
  features: string[];
  image: string;
};

type TabSectionProps = {
  data: HomeTabDataItem[];
};

export default function TabSection({ data }: TabSectionProps) {
  const [activeTab, setActiveTab] = useState(data[0]?.id);
  const activeTabData = data.find((tab) => tab.id === activeTab);

  return (
    <>
      <div className="tab-section">
        <div className="container">
          <div className="content-area">
            <div className="heading-area">
              <div
                className="tab-bg-image"
                style={{
                  backgroundImage: "url('/images/home-slider-main-image.jpg')",
                }}
              ></div>
              <h2>A complete helpdesk platform</h2>
              <p>
                Manage customer tickets from a centralized workspace with
                organized workflows, smart filtering, and collaborative tools
                designed to keep support efficient and responsive.
              </p>

              <Link className="button btn-white btn-xxl" href="/about">
                Start Free Trial
              </Link>
            </div>

            <div className="tab-area">
              <div className="tabs">
                {data.map((tab) => (
                  <button
                    key={tab.id}
                    className={activeTab === tab.id ? "active" : ""}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    <i className={`${tab?.icon}`}></i>
                    {tab?.tabTitle}
                  </button>
                ))}
              </div>

              <div className="tab-contents-wrapper">
                <div className="tab-contents">
                  <section>
                    <h4>{activeTabData?.heading}</h4>
                    <p>{activeTabData?.description}</p>
                  </section>

                  <ul>
                    {activeTabData?.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                {activeTabData?.image && (
                  <div className="tab-image">
                    <img
                      src={activeTabData.image}
                      alt={activeTabData.heading}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
