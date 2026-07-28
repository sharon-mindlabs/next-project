"use client";

import Image from "next/image";
import { useState } from "react";
import { WizardProgressBar } from "../../components/auth/WizardProgressBar";
import SignUpStep1 from "../../components/auth/SignUpStep1";
import SignUpStep2 from "../../components/auth/SignUpStep2";
import SignUpStep3 from "../../components/auth/SignUpStep3";
import SignUpStep4 from "../../components/auth/SignUpStep4";
import SignUpStep5 from "../../components/auth/SignUpStep5";

export default function SignupPage() {
  const [currentStep, setCurrentStep] = useState<number>(5);
  const TotalStep = 5;

  return (
    <>
      <div className="signup-section">
        <div className="signup-left">
          <div className="header-section">
            <div className="heading">
              <Image
                src="/logo-2.svg" // path from /public
                alt="Hero Image"
                width={400}
                height={300}
                style={{ width: "138px", height: "auto" }}
              />
              <span className="step">
                Step {currentStep} of {TotalStep}
              </span>
            </div>

            <WizardProgressBar
              totalSteps={TotalStep}
              currentStep={currentStep}
            />
          </div>

          <Image
            className="signup-image"
            src="/images/sign-up-bg.png" // path from /public
            alt="Hero Image"
            width={416}
            height={438}
          />
        </div>
        <div className="signup-right">
          {currentStep === 1 && <SignUpStep1 />}
          {currentStep === 2 && <SignUpStep2 />}
          {currentStep === 3 && <SignUpStep3 />}
          {currentStep === 4 && <SignUpStep4 />}
          {currentStep === 5 && <SignUpStep5 />}
        </div>
      </div>
    </>
  );
}
