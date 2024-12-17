import React, { useRef, useState } from 'react';
import axios from 'axios';

const RecordVideo = () => {
  const videoRef = useRef(null);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [recording, setRecording] = useState(false);
  const [videoBlob, setVideoBlob] = useState(null);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    videoRef.current.srcObject = stream;

    const recorder = new MediaRecorder(stream);
    const chunks = [];
    recorder.ondataavailable = (e) => chunks.push(e.data);
    recorder.onstop = () => setVideoBlob(new Blob(chunks, { type: 'video/mp4' }));

    recorder.start();
    setMediaRecorder(recorder);
    setRecording(true);
  };

  const stopRecording = () => {
    mediaRecorder.stop();
    videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
    setRecording(false);
  };

  const uploadVideo = async () => {
    if (!videoBlob) return alert('No video to upload');
    const formData = new FormData();
    formData.append('video', videoBlob);

    try {
      await axios.post('http://localhost:5000/api/upload-video', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert('Video uploaded successfully!');
    } catch (error) {
      console.error(error);
      alert('Error uploading video.');
    }
  };

  return (
    <div className="container">
      <h2>Record Video</h2>
      <video ref={videoRef} autoPlay muted></video>
      <div>
        {!recording ? (
          <button onClick={startRecording}>Start Recording</button>
        ) : (
          <button onClick={stopRecording}>Stop Recording</button>
        )}
      </div>
      {videoBlob && <button onClick={uploadVideo}>Upload Video</button>}
    </div>
  );
};

export default RecordVideo;
