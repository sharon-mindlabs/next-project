export default function SignUpFormInput() {
  return (
    <div className="signup-form-input">
      <form>
        <input type="text" placeholder="Enter work email" />
        <button type="submit" className="button-solid-primary button-md">
          Sign Up
        </button>
      </form>
      <div className="signup-notes">
        <span>Free 14-day trial</span>
        <span> No credit card required</span>
        <span>Advanced ticketing made easy</span>
      </div>
    </div>
  );
}
