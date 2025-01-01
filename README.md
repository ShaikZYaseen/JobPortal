
# JobPortal Website(MERN Stack)

A Full-stack job portal application built using the MERN stack (MongoDB, Express.js, React, Node.js) with Cloudinary integration for media storage and an AI-powered resume maker. This platform allows users to search for jobs, upload resumes, and generate AI-assisted resumes, making job hunting and applying easier.

# Features : 
•  User Registration & Authentication: Users can register, log in, and manage their profiles.

• Job Listings: Employers can post job openings, and candidates can search and apply for jobs.

• Resume Upload: Users can upload their resumes, which are stored securely in Cloudinary.

• AI Resume Maker: Users can create an AI-powered resume by filling out necessary information (e.g., education, skills, experience). The AI engine helps generate a professional-looking resume.

• Job Search & Filters: Job seekers can search and filter jobs based on title, category, and location.

• Admin Panel: Admins can manage job postings, user roles, and oversee the job application process.

# Tech Stack
• Frontend: React.js, React Router, Axios, Redux (for state management), Shadcn Components, Tailwind CSS

• Backend: Node.js, Express.js, JWT (for authentication), Bcrypt (for password hashing)

• Database: MongoDB, Mongoose (for schema modeling)

• Cloud Storage: Cloudinary (for storing resumes and profile images)

• AI Integration: Custom AI model (integrated using Node.js API for resume generation)

Others: dotenv (for environment variables), Cors, Nodemailer (for email notifications)

# Setup and Installation
Follow the steps below to set up the project locally.

1. Clone the Repository




## Deployment

To deploy this project run

```bash
  git clone https://github.com/ShaikZYaseen/JobPortal
  cd job-portal

```

2. Install Dependencies

## Deployment

Backend (Node.js, Express)
Navigate to the backend directory and install dependencies.

```bash
  git clone https://github.com/ShaikZYaseen/JobPortal
  cd JobPortal

```

3. Create a .env file for environment variables in the backend directory and add the following:

```bash
 MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

```

Frontend (React.js) :

1. Navigate to the frontend directory and install dependencies.

```bash
 cd frontend
npm install

```
2. Create a .env file for environment variables in the frontend directory and add the following:

```bash
REACT_APP_API_URL=http://localhost:5000
```

3. Run the Application
Backend
Run the server using the following command:

```bash
cd backend
npm run start
```
This will start the backend server on http://localhost:8000

Frontend

Run the React development server:
```bash
cd frontend
npm run dev
```

# Cloudinary Integration

This application uses Cloudinary for storing user-uploaded media (resumes, profile images). Cloudinary provides easy management of images, videos, and files in the cloud.

Setup Cloudinary
Create a Cloudinary account at https://cloudinary.com.
Add your Cloudinary credentials (API key, API secret, and Cloud name) to the .env file on the backend as mentioned in the "Setup and Installation" section.
Resume Upload
When users upload their resumes, the file is uploaded to Cloudinary. The backend stores the Cloudinary URL in the MongoDB database for each user's resume.

# AI Resume Maker

The AI resume maker uses a custom model or third-party API to generate resumes based on the information provided by the user. The resume is created in PDF format and can be downloaded directly from the website.

AI Resume Generation Process
Users input their details: name, contact information, education, skills, work experience.
The AI processes this information to generate a polished and well-structured resume.
The resume is made available for download in PDF format.

# Contributing

We welcome contributions! If you'd like to contribute to this project, follow the steps below:

Fork the repository.

Create a new branch (git checkout -b feature-name).
Make your changes.

Commit your changes (git commit -am 'Add feature').

Push to the branch (git push origin feature-name).
Create a new pull request.




