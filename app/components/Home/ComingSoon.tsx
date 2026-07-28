"use client";

export default function HomeBanner() {
  return (
    <div className={`home-banner coming-soon active`}>
      <div className="container">
        <div className="content--area">
          <div className="text-area">
            <div className="heading">
              <div className="logo">
                <img src="/logo-2.svg" alt="" />
              </div>
              <h1>
                Coming <span>Soon</span>
              </h1>
            </div>

            <section>
              <p>
                Manage customer conversations, tickets, and team workflows from
                one workspace designed to keep support organized and efficient.
              </p>
              <ul>
                <li>Setup in minutes</li>
                <li>No credit card required</li>
                <li>Cancel anytime</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
