import React, { useState } from 'react';
import axios from 'axios';

const UploadPDF = () => {
  const [pdfFile, setPdfFile] = useState(null);

  const handleFileChange = (e) => {
    setPdfFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!pdfFile) return alert('Please select a PDF file');
    const formData = new FormData();
    formData.append('pdf', pdfFile);

    try {
      await axios.post('http://localhost:5000/api/upload-pdf', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert('PDF uploaded successfully!');
    } catch (error) {
      console.error(error);
      alert('Error uploading PDF.');
    }
  };

  return (
    <div className="container">
      <h2>Upload PDF</h2>
      <input type="file" accept="application/pdf" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload PDF</button>
    </div>
  );
};

export default UploadPDF;
