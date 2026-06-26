"use client";

import Link from "next/link";

export default function SignUpStep2() {
  return (
    <>
      <div className="sign-up-step-2">
        <form>
          <h4>Verify Your Email Address</h4>
          <span className="subtitle">
            Get started with FlockDesk in just a few steps
          </span>

          <div className="verification-link">
            <span className="title">We sent a verification link to</span>
            <span className="email">johnsamuel@gmailc.om</span>
          </div>

          <div className="verification-steps">
            <div className="step">
              <span className="number">1</span>
              <span className="title">
                Check your email inbox for our verification message
              </span>
            </div>

            <div className="step">
              <span className="number">2</span>
              <span className="title">
                Click the verification link in the email
              </span>
            </div>

            <div className="step">
              <span className="number">3</span>
              <span className="title">Return here to continue your setup</span>
            </div>
          </div>

          <div className="cta">
            <button className="button-primary" type="submit">
              Create Account
            </button>
            <button className="button-secondary" type="submit">
              Resend Link
            </button>
          </div>
        </form>

        <div className="change-email-wrapper">
          <div className="change-email">
            <i className="icon-edit"></i>
            <span>Change Email Address</span>
          </div>
          <span className="discription">
            Didn't receive the email? Check your spam folder or try resending.
          </span>
        </div>

        <div className="demo-link">
          <Link href="#">
            <span>Continue</span> (Demo - Skip Verification)
            <i className="icon-right-arrow"></i>
          </Link>
        </div>
      </div>
    </>
  );
}
