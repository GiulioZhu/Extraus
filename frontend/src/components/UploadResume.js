import React, { useState } from "react";

const UploadResume = ({ onNext }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleNext = () => {
    if (file) {
      alert("Resume uploaded successfully!");
      onNext(); // Proceed to the next step
    } else {
      alert("Please upload a file to proceed.");
    }
  };

  return (
    <div>
      <h2>Upload Your Resume</h2>
      <input type="file" accept=".pdf" onChange={handleFileChange} />
      <br />
      <button onClick={handleNext} style={{ marginTop: "1rem" }}>
        Next: Take Interview
      </button>
    </div>
  );
};

export default UploadResume;
