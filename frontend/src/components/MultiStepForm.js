import React, { useState } from "react";
import UploadResume from "./UploadResume";
import TakeInterview from "./TakeInterview";
import CompleteProfile from "./CompleteProfile";

const MultiStepForm = () => {
  const [step, setStep] = useState(1); // Step tracker: 1 = Upload Resume, 2 = Take Interview, 3 = Complete Profile

  // Render the content of the current step
  const renderStepContent = () => {
    switch (step) {
      case 1:
        return <UploadResume onNext={() => setStep(2)} />;
      case 2:
        return <TakeInterview onNext={() => setStep(3)} onBack={() => setStep(1)} />;
      case 3:
        return <CompleteProfile onBack={() => setStep(2)} />;
      default:
        return null;
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Get Hired with Mercor</h1>
      <p>Follow the steps to complete your application process.</p>

      {/* Step Content */}
      {renderStepContent()}

      {/* Progress Bar */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
        <div style={{ margin: "0 1rem", color: step === 1 ? "purple" : "gray" }}>
          Upload Resume
        </div>
        <div style={{ margin: "0 1rem", color: step === 2 ? "purple" : "gray" }}>
          Take Interview
        </div>
        <div style={{ margin: "0 1rem", color: step === 3 ? "purple" : "gray" }}>
          Complete Profile
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
