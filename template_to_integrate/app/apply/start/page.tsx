import React, { useState } from "react";

export default function ApplicationPage() {
  const [step, setStep] = useState(1);
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [chatInput, setChatInput] = useState("");
  const [interviewLog, setInterviewLog] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    education: "",
    background: "",
    goals: "",
    careerObjectives: "",
  });

  const handlePDFSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Upload pdfFile
    // Page reload or advanced step
    setStep(2);
  };

  const handleAIInterview = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Send chatInput to MiniMax AI and store response
    setInterviewLog([...interviewLog, `User: ${chatInput}`]);
    setChatInput("");
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Process formData
    alert("Form submitted!");
  };

  return (
    <div className="p-4">
      {step === 1 && (
        <form onSubmit={handlePDFSubmit}>
          <input
            type="file"
            accept="application/pdf"
            onChange={(e) =>
              setPdfFile(e.target.files?.[0] || null)
            }
          />
          <button type="submit">Upload PDF</button>
        </form>
      )}

      {step === 2 && (
        <div>
          <h3>AI Interview (MiniMax)</h3>
          <form onSubmit={handleAIInterview}>
            <input
              type="text"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              placeholder="Ask the AI model"
            />
            <button type="submit">Send</button>
          </form>
          <button onClick={() => setStep(3)}>Next Step</button>
          <div>
            {interviewLog.map((msg, idx) => (
              <p key={idx}>{msg}</p>
            ))}
          </div>
        </div>
      )}

      {step === 3 && (
        <form onSubmit={handleFormSubmit}>
          <div>
            <label>Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
          <div>
            <label>Education</label>
            <input
              type="text"
              value={formData.education}
              onChange={(e) =>
                setFormData({ ...formData, education: e.target.value })
              }
            />
          </div>
          <div>
            <label>Background</label>
            <input
              type="text"
              value={formData.background}
              onChange={(e) =>
                setFormData({ ...formData, background: e.target.value })
              }
            />
          </div>
          <div>
            <label>Goals</label>
            <input
              type="text"
              value={formData.goals}
              onChange={(e) =>
                setFormData({ ...formData, goals: e.target.value })
              }
            />
          </div>
          <div>
            <label>Career Objectives</label>
            <input
              type="text"
              value={formData.careerObjectives}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  careerObjectives: e.target.value,
                })
              }
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}