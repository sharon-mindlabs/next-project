"use client";
import Link from "next/link";

export default function SignUpStep4() {
  return (
    <>
      <div className="sign-up-step-5">
        <form>
          <h4>Choose Your Subdomain</h4>
          <span className="subtitle">
            This will be your helpdesk URL that customers use to reach you
          </span>
          <div className="form-input">
            <label>Work Email</label>
            <div className="input-text-wapper">
              <i className="icon-icon-1"></i>
              <input type="text" className="textbox" />
              {/* <span className="textbox">puretech</span> */}
              <span className="main-domain">.flockdesk.com</span>
            </div>
          </div>
          {/* <span className="subdomain-avilable">
            <i className="icon-tick-round"></i>
            This subdomain is available!
          </span> */}
          {/* <span className="subdomain-not-avilable">
            <i className="icon-close"></i>
            This subdomain not available!
          </span> */}

          <div className="requirements">
            <div className="title">Requirements:</div>
            <span className="requirement">
              <span className="count">1</span>Check your email inbox for our
              verification message
            </span>

            <span className="requirement">
              <span className="count">2</span>Click the verification link in the
              email
            </span>

            <span className="requirement">
              <span className="count">3</span>
              Return here to continue your setup
            </span>
          </div>

          <div className="cta">
            <button className="button-primary" type="submit">
              Continue
              <i className="icon-right-arrow"></i>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
