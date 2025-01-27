import React from "react";

const TakeInterview = ({ onNext, onBack }) => {
  const handleStartInterview = () => {
    alert("Interview process simulated. Proceeding to the next step.");
    onNext();
  };

  return (
    <div>
      <h2>Take Interview</h2>
      <p>Prepare yourself and record a short video to proceed.</p>
      <button onClick={onBack} style={{ marginRight: "1rem" }}>
        Back
      </button>
      <button onClick={handleStartInterview}>Next: Complete Profile</button>
    </div>
  );
};

export default TakeInterview;
