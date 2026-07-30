const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');
const multer = require('multer');
require('dotenv').config();

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// 📸 ইমেজ আপলোডের জন্য ফোল্ডার ও মুলটার সেটআপ
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

// 📁 ব্লগ ডেটা সংরক্ষণের JSON ফাইলের পাথ
const BLOG_FILE = path.join(__dirname, 'blogs.json');

// Helper: JSON থেকে ব্লগ পড়া
const readBlogs = () => {
  if (!fs.existsSync(BLOG_FILE)) return [];
  const data = fs.readFileSync(BLOG_FILE, 'utf8');
  return JSON.parse(data);
};

// Helper: JSON-এ ব্লগ লেখা
const writeBlogs = (blogs) => {
  fs.writeFileSync(BLOG_FILE, JSON.stringify(blogs, null, 2));
};

// ---------- API রুটস ----------

// 1. সব ব্লগ পাওয়া (GET)
app.get('/api/blogs', (req, res) => {
  const blogs = readBlogs();
  res.json(blogs);
});

// 2. নতুন ব্লগ যোগ করা (POST) - ইমেজ সহ!
app.post('/api/blogs', upload.single('image'), (req, res) => {
  const { title, desc } = req.body;
  const file = req.file;

  if (!title || !desc) {
    return res.status(400).json({ message: 'Title and description required' });
  }

  const blogs = readBlogs();
  
  // ইমেজের লিংক তৈরি করা
  let imageUrl = null;
  if (file) {
    imageUrl = `http://localhost:5000/uploads/${file.filename}`;
  }

  const newBlog = {
    id: Date.now(),
    title,
    desc,
    imageUrl, // ✅ ইমেজ যুক্ত করা হলো
    date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
  };

  blogs.unshift(newBlog);
  writeBlogs(blogs);

  res.status(201).json({ message: 'Blog added successfully!', blog: newBlog });
});

// 3. ইমেজ সার্ভ করার জন্য স্ট্যাটিক ফোল্ডার সেটআপ
app.use('/uploads', express.static(uploadDir));

// 4. কন্টাক্ট ফর্ম (আগের কোড)
app.post('/api/contact', async (req, res) => {
  const { name, email, service, message } = req.body;
  if (!name || !email || !service || !message) {
    return res.status(400).json({ message: 'Please fill in all fields.' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New Contact Request: ${service} from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Service Needed: ${service}
        
        Message:
        ${message}
      `
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ message: 'Failed to send message.' });
  }
});


// 📧 নিউজলেটার সাবস্ক্রাইব করার API (যোগ করুন)
const SUBSCRIBE_FILE = path.join(__dirname, 'subscribers.json');

// Helper: JSON থেকে সাবস্ক্রাইবার পড়া
const readSubscribers = () => {
  if (!fs.existsSync(SUBSCRIBE_FILE)) return [];
  const data = fs.readFileSync(SUBSCRIBE_FILE, 'utf8');
  return JSON.parse(data);
};

// Helper: JSON-এ সাবস্ক্রাইবার লেখা
const writeSubscribers = (subs) => {
  fs.writeFileSync(SUBSCRIBE_FILE, JSON.stringify(subs, null, 2));
};

// নতুন সাবস্ক্রাইব API
app.post('/api/subscribe', (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  const subscribers = readSubscribers();
  
  // চেক করা হচ্ছে ইমেইলটি আগে থেকেই আছে কিনা
  if (subscribers.find((sub) => sub.email === email)) {
    return res.status(400).json({ message: 'This email is already subscribed!' });
  }

  const newSubscriber = {
    id: Date.now(),
    email,
    date: new Date().toLocaleDateString('en-US')
  };

  subscribers.push(newSubscriber);
  writeSubscribers(subscribers);

  res.status(200).json({ message: 'Successfully subscribed to our newsletter!' });
});












app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});

