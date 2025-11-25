import Link from "next/link";
import Image from "next/image";
import SignUpFormInput from "./forms/SignUpFormInput";

export default function FooterCTA() {
  return (
    <div className="footer-cta">
      <div className="container">
        <div className="content-area">
          <div className="form-area">
            <h3>Ready to Transform Your Customer Support?</h3>
            <p>
              Join over 50,000 companies using HelpDesk to deliver exceptional
              customer experiences. Start your free trial today and see the
              difference in minutes.
            </p>
            <SignUpFormInput />
          </div>

          <div className="signup-image-area">
            <img src="/images/ready-to-transform.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
