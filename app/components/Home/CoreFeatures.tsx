"use client";
import Link from "next/link";

export type CoreFeatureItem = {
  id: number;
  title: string;
  description: string;
  icon: string;
};

type CoreFeatureProps = {
  data: CoreFeatureItem[];
};

export default function CoreFeatures({ data }: CoreFeatureProps) {
  return (
    <div className="core-features" id="features-section">
      <div className="container">
        <div className="content-area">
          <div className="heading">
            <div className="discription">
              <img src="images/use-cases.svg" alt="" />
              <span>Core Features</span>
            </div>
            <h3>
              A Unified Support <span>Infrastructure</span>
            </h3>
            <p>
              Everything your team needs to manage customer support efficiently,
              from ticket management and automation to analytics, security, and
              collaboration.
            </p>

            <Link className="button btn-primary btn-xxl" href="/enquiry">
              Start Free Trial
            </Link>
          </div>

          <div className="features-wapper">
            {data?.map((item: any) => (
              <div className="item" key={item?.id}>
                <i className={`${item?.icon}`}></i>
                <h6>{item?.title}</h6>
                <p>{item?.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
