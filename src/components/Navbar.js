import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <h1 className="text-xl">File & Video Uploader</h1>
      <ul className="flex space-x-4">
        <li><Link to="/upload-pdf">Upload PDF</Link></li>
        <li><Link to="/record-video">Record Video</Link></li>
        <li><Link to="/preview">Preview</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
