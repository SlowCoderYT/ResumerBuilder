# 📄 AI Resume Builder

An AI-powered resume builder web application that lets users create professional resumes, select templates, check ATS (Applicant Tracking System) compatibility, and download them as PDF.  
Built with **React.js, TailwindCSS, Node.js, Express, Prisma ORM, and OpenAI API**.

---

## 🚀 Features

- **User Authentication**
  - Register & Login with JWT Authentication
  - Guest Mode (create resumes without registration, upgrade later)
  
- **Resume Builder**
  - Input personal, education, work, projects, and skills details
  - Live preview of resume
  - Template selector (multiple modern designs)
  - Generate PDF using [`@react-pdf/renderer`](https://react-pdf.org/)

- **AI ATS Score Checker**
  - Analyze resume using AI (OpenAI API)
  - Get ATS score, missing keywords, and improvement tips

- **Data Storage**
  - Save resume data in database (PostgreSQL/MySQL)
  - Edit and re-download resumes anytime

---

## 🧠 How It Works

1. **Guest or Registered User**  
   - Guests can start building resumes without logging in  
   - Registered users can save, edit, and manage multiple resumes  

2. **Build Resume**  
   - Fill out the form with details
   - Choose a template
   - Live preview in React

3. **Generate PDF**  
   - Use `react-pdf` to render the resume as PDF

4. **ATS Score Check**  
   - Send resume text to OpenAI
   - Receive feedback with score & keyword suggestions

---

## 🛠️ Tech Stack

**Frontend**
- React.js
- TailwindCSS
- React Router

**Backend**
- Node.js + Express.js
- Prisma ORM
- PostgreSQL / MySQL
- JWT Authentication
- OpenAI API (for ATS analysis)

---

## 📂 Project Structure

