"use client";
import { useState } from "react";

// ✔ Only data — no JSX inside the object
const tabsData = [
  {
    id: "ticketlist",
    label: "Ticket list",
    image: "/images/home-tab-ticketlist.png",
    title: "Monitor and Respond to All Incoming Tickets",
    description:
      "View, organize, and manage all your customer support tickets from a single, unified dashboard. Track new issues, follow up on pending requests, and close resolved cases with ease. With filters, real-time updates, and intuitive tools, MindDesk helps you stay responsive and build lasting customer trust.",
  },
  {
    id: "features",
    label: "Features",
    image: "/images/home-tab-ticketview.png",
    title: "Comprehensive View of Your Support Requests",
    description:
      "This section provides you with a clear and organized overview of all your support requests. From open issues to resolved tickets, you can track progress, review updates, and stay informed at every step. Our goal is to ensure complete transparency and make it easy for you to manage your interactions with our support team in one convenient place.",
  },
  {
    id: "faq",
    label: "Automations",
    image: "/images/home-tab-ticketautomation.png",
    title: "Seamless Automations to Simplify Support",
    description:
      "Automations are designed to handle repetitive tasks so your team can focus on what truly matters—delivering great customer experiences. From auto-assigning tickets and sending timely updates to setting reminders and applying tags, our seamless automation ensures faster resolutions with minimal effort. This not only saves time but also brings consistency, accuracy, and efficiency to every support interaction.",
  },
  {
    id: "settings",
    label: "Settings",
    image: "/images/home-tab-ticketsettings.png",
    title: "Manage Your Account & Preferences",
    description:
      "View, organize, and manage all your customer support tickets from a single, unified dashboard. Track new issues, follow up on pending requests, and close resolved cases with ease. With filters, real-time updates, and intuitive tools, MindDesk helps you stay responsive and build lasting customer trust.",
  },
];

export default function DynamicTabs() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goNext = () => {
    if (activeIndex < tabsData.length - 1) setActiveIndex(activeIndex + 1);
  };

  const goPrev = () => {
    if (activeIndex > 0) setActiveIndex(activeIndex - 1);
  };

  const activeTab = tabsData[activeIndex];

  return (
    <div className="tabs-wrapper">
      <div className="container">
        {/* TAB BUTTONS */}
        <div className="tab-buttons">
          {tabsData.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => setActiveIndex(index)}
              className={activeIndex === index ? "active" : ""}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* TAB CONTENT */}
        <div className="tab-content">
          <div className="tab-item">
            <div className="image-area">
              <img src={activeTab.image} alt="" />
            </div>

            <section>
              <h3>{activeTab.title}</h3>
              <p>{activeTab.description}</p>
              {/* NEXT / PREVIOUS */}
              <div className="tab-navigation-buttons">
                <button
                  className="tab-nav-left"
                  onClick={goPrev}
                  disabled={activeIndex === 0}
                >
                  <i className="icon-arrow-left"></i>
                </button>
                <button
                  className="tab-nav-right"
                  onClick={goNext}
                  disabled={activeIndex === tabsData.length - 1}
                >
                  <i className="icon-arrow-right"></i>
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
