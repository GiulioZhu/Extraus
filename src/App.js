import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import UploadPDF from './components/UploadPDF';
import RecordVideo from './components/RecordVideo';
import Preview from './components/Preview';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/upload-pdf" element={<UploadPDF />} />
        <Route path="/record-video" element={<RecordVideo />} />
        <Route path="/preview" element={<Preview />} />
      </Routes>
    </Router>
  );
}

export default App;
