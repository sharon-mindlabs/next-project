"use client";

export default function SignUpStep1() {
  return (
    <>
      <div className="sign-up-step-1">
        <form>
          <h4>Create Your Account</h4>
          <span className="subtitle">
            Get started with FlockDesk in just a few steps
          </span>

          <div className="form-input">
            <label>Full Name</label>
            <div className="input-text-wapper">
              <i className="icon-user"></i>
              <input type="text" className="textbox" />
            </div>
          </div>

          <div className="form-input">
            <label>Work Email</label>
            <div className="input-text-wapper">
              <i className="icon-email"></i>
              <input type="text" className="textbox" />
            </div>
          </div>

          <div className="agree">
            <input type="checkbox" />{" "}
            <span>
              {" "}
              I agree to the <a href="#">Teams of service </a> and{" "}
              <a href="#">Privacy Policy</a>
            </span>
          </div>

          <button className="button-primary" type="submit">
            Create Account
          </button>
        </form>

        <span className="already-have">
          Already have an account? <a href="#">Sign In</a>
        </span>
      </div>
    </>
  );
}
