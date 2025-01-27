import React from "react";

const CompleteProfile = ({ onBack }) => {
  const handleComplete = () => {
    alert("Profile completed! You’re all set.");
  };

  return (
    <div>
      <h2>Complete Your Profile</h2>
      <p>Fill in your details to finalise the process.</p>
      <button onClick={onBack} style={{ marginRight: "1rem" }}>
        Back
      </button>
      <button onClick={handleComplete}>Finish</button>
    </div>
  );
};

export default CompleteProfile;
