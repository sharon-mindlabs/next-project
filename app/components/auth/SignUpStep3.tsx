"use client";

export default function SignUpStep3() {
  return (
    <>
      <div className="sign-up-step-3">
        <form>
          <img src="/images/email-img.svg" alt="" />
          <h5>
            Verified <br /> Successfully
          </h5>
          <span className="subtitle">
            The verification of your email account has been completed
            successfully.
          </span>

          <div className="cta">
            <button className="button-primary" type="submit">
              Continue to FlockDesk
              <i className="icon-right-arrow"></i>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
