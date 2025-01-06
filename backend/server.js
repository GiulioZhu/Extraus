const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Multer configuration
const storage = multer.diskStorage({
  destination: './uploads',
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
});
const upload = multer({ storage });

// Upload routes
app.post('/api/upload-pdf', upload.single('pdf'), (req, res) => {
  res.status(200).json({ message: 'PDF uploaded successfully!', file: req.file });
});

app.post('/api/upload-video', upload.single('video'), (req, res) => {
  res.status(200).json({ message: 'Video uploaded successfully!', file: req.file });
});

// Serve uploaded files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
