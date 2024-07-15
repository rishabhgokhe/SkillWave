![SkillWave Banner](src/assets/images/SkillWave%20Banner.png)

# SkillWave (Ed-Tech Platform)

## Description

SkillWave is an innovative online platform dedicated to empowering learners worldwide. Our mission is to provide accessible, high-quality courses that enable individuals to acquire new skills, advance their careers, and achieve personal growth.

## Table of Contents

- [✨ Features](#-features)
- [🚀 Upcoming Features](#-upcoming-features)
- [Tech Stack](#tech-stack)
- [⚙️ Setup Instructions](#️-setup-instructions)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Future Enhancements](#future-enhancements)
- [Live Preview](#live-preview)
- [Acknowledgments](#acknowledgments)
- [Code of Conduct](#code-of-conduct)
- [License](#license)
- [Contribution Guidelines](#contribution-guidelines)
- [👨🏻‍💻 Authors](#-authors)
- [🚀 About Me](#-about-me)
- [Feedback](#feedback)

## ✨ Features

- User-friendly interface designed with Chakra UI React Library.
- Comprehensive course catalog with diverse learning paths.
- Real-time updates and notifications for course progress.
- Interactive dashboards for both learners and instructors.
- Secure user authentication and authorization system.
- Integrated feedback system for continuous improvement.

## 🚀 Upcoming Features

- Implement user authentication for accessing course content.
- Create dedicated routes for each section of the user dashboard.
- Enable users to become instructors and publish their courses.
- Enhanced data storage and management capabilities.

## Currently Working on Feature (User Authentication)

I am currently working on Backend APIs.

## Tech Stack

- **Frontend:** HTML, SCSS, JavaScript, React
- **UI Library:** Chakra UI React Library
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (MongoDB Atlas)

## ⚙︎ Setup Instructions

### Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/)

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/rishabhgokhe/SkillWave.git

   ```

2. **Navigate to Repository**

   ```bash
   cd SkillWave

   ```

3. **Install Node Modules**

   ```bash
   npm install

   ```

4. **Setup Environment Variables:**  
   Create a `.env.local` file in new [Backend-Config-config.env] directory and add the following:  
    JWT_SECRET- is essential for generating login cookies
   <br/>
   MONGODB_URI - required for add and fetching data
   <br/>

   ```plaintext
   PORT=4000
   MONGODB_URI=<your-mongodb-connection-string>
   JWT_SECRET=<randomString>
   WEBSITE_URL="http://localhost:3000"

   ```

5. **Run project and start Development**

   ```bash
   npm start

   ```

6. **Access the Application:**  
   Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

## Future Enhancements

- Implement user authentication for accessing their course content.
- Creating Routes for Each Dashboard Button.
- Users can also become a Instructors.
- Upadating Data Storage

## Live Preview

SkillWave is live on Vercel [skillwave20.vercel.app/](https://skillwave20.vercel.app/) .

## Acknowledgments

- [React](https://react.dev/) library for web and native user interfaces
- [Chakra React UI Library](https://v2.chakra-ui.com/) UI Component Library for React
- [MongoDB](https://www.mongodb.com/) for the database management system
- [Node.js](https://nodejs.org/) for the JavaScript runtime.
- [Express.js](https://expressjs.com/) for the web application framework.

## Code of Conduct

We expect all participants in our community to adhere to our Code of Conduct. Please read the full text [here](CODE_OF_CONDUCT.md).

## License

This project is proprietary and not open for public use. All rights are reserved by Rishabh Gokhe.
For inquiries regarding the licensing of this software, please contact: rishabhgokhe@gmail.com

---

Ready to collaborate and improve your skill or share it worldwide? Contact me at [![Email Me](https://img.shields.io/badge/Email-Me-black?style=flat&logo=[YOUR_ICON_URL]&logoColor=white)](mailto:rishabhgokhe2004@gmail.com)

## Contribution Guidelines

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature`).
6. Create a new Pull Request.

## 👨🏻‍💻 Authors

- [Rishabh Gokhe](https://www.github.com/rishabhgokhe)

## 🚀 About Me

Hi there! 👋 I'm Rishabh Gokhe, the developer behind SkillWave. I'm passionate about creating useful and user-friendly web applications that help people improve their productivity and organization. Still learning new technology...

Feel free to reach out if you have any questions, suggestions, or just want to chat about programming and technology. I'm always excited to connect with fellow developers and enthusiasts!

### My Vision

At SkillWave, our vision is to democratize education by providing a platform where anyone, anywhere can access high-quality learning resources. We believe that education should be accessible, affordable, and engaging for all, regardless of geographical location or financial means.

Our vision is to empower individuals to pursue their passions, advance their careers, and transform their lives through lifelong learning. We aim to cultivate a global community of learners, instructors, and mentors who collaborate, innovate, and inspire each other to reach new heights of knowledge and skill.

## Feedback

If you have any feedback, please reach out to us at
[![Email Me](https://img.shields.io/badge/Email-Me-black?style=flat&logo=[YOUR_ICON_URL]&logoColor=white)](mailto:rishabhgokhe2004@gmail.com)
