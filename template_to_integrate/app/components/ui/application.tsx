'use client';

import { useState } from "react";

export default function Apply() {
  const [step, setStep] = useState(1);
  const [resume, setResume] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    education: "",
    workPreferences: "",
    jobPosition: "",
    phone: "",
    email: "",
  });

  const handleResumeUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setResume(event.target.files[0]);
    }
  };

  const handleStartInterview = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(() => alert("Camera access granted! Ready for AI interview."))
      .catch(() => alert("Please allow camera access to proceed."));
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Application Submitted Successfully!");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        {step === 1 && (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-black mb-4">Upload Your Resume</h2>
            <input type="file" accept=".pdf" onChange={handleResumeUpload} className="mb-4 text-black" />
            {resume && <p className="text-sm text-green-600">✅ {resume.name} uploaded</p>}
            <button onClick={() => setStep(2)} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">
              Next Step
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-black mb-4">AI Interview</h2>
            <button onClick={handleStartInterview} className="px-4 py-2 bg-green-600 text-black rounded">
              Start Interview
            </button>
            <button onClick={() => setStep(3)} className="mt-4 block mx-auto px-4 py-2 bg-blue-600 text-black rounded">
              Next Step
            </button>
          </div>
        )}

        {step === 3 && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-2xl font-bold mb-4 text-black text-center">Complete Your Profile</h2>
            <input type="text" name="name" placeholder="Full Name" required className="w-full p-2 border text-black rounded" onChange={handleFormChange} />
            <input type="text" name="location" placeholder="Location" required className="w-full p-2 border text-black rounded" onChange={handleFormChange} />
            <input type="text" name="education" placeholder="Education" required className="w-full p-2 border text-black rounded" onChange={handleFormChange} />
            <input type="text" name="workPreferences" placeholder="Work Preferences" required className="w-full p-2 border text-black rounded" onChange={handleFormChange} />
            <input type="text" name="jobPosition" placeholder="Desired Job Position" required className="w-full p-2 border text-black rounded" onChange={handleFormChange} />
            <input type="tel" name="phone" placeholder="Phone Number" required className="w-full p-2 border text-black rounded" onChange={handleFormChange} />
            <input type="email" name="email" placeholder="Email" required className="w-full p-2 border text-black rounded" onChange={handleFormChange} />
            <button type="submit" className="w-full bg-blue-600 text-black p-2 rounded">
              Submit Application
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
