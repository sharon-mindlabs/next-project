"use client";

interface WizardProgressBarProps {
  totalSteps: number;
  currentStep: number;
}

export function WizardProgressBar({
  totalSteps,
  currentStep,
}: WizardProgressBarProps) {
  const progressPercent =
    totalSteps <= 1 ? 0 : ((currentStep - 1) / (totalSteps - 1)) * 100;

  return (
    <div className="wizard-track">
      <div className="wizard-line-bg" />
      <div
        className="wizard-line-fill"
        style={{ width: `${progressPercent}%` }}
      />

      <div className="wizard-steps">
        {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
          <div
            key={step}
            className={`wizard-step ${
              step < currentStep
                ? "completed"
                : step === currentStep
                  ? "active"
                  : "future"
            }`}
          >
            {/* <div className="wizard-dot" /> */}
          </div>
        ))}
      </div>
    </div>
  );
}
