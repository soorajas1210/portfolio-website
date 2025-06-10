import React from "react";
import "@fortawesome/free-regular-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const labelsFirst = [
  "React.js",
  "Next.js",
  "JavaScript (ES6+)",
  "TypeScript",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Styled Components",
  "Material UI",
  "Responsive Design",
  "Redux Toolkit",
  "zustand",
  "React Router",
  "API Integration",
  "Axios",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Git & GitHub",
  "Vercel",
  "Netlify",
  "Figma to Code",
  "Performance Optimization",
  "Basic SEO",
];

function About() {
  return (
    <div className="container" id="about">
      <div className="skills-container">
        <h1>About</h1>
        <div className="">
          <div className="skill">
            <p>
              I'm a Frontend Developer with 6 years of total experience,
              including 2.5+ years building responsive, high-performance web
              applications using React.js, Next.js, JavaScript, and Tailwind
              CSS. I specialize in scalable UI development, API integration, and
              delivering real-world solutions such as ERP dashboards, booking
              platforms, and e-commerce features.
            </p>
            <p>
              Currently, I lead frontend development at Spadile Technologies
              LLC, where I craft clean, optimized interfaces for document
              management systems, ERP solutions, and booking applications.
              Before that, I completed a 9-month intensive MERN stack program at
              Brototype, where I sharpened my frontend skills by building
              multiple mini-projects and two major full-stack applications,
              including an e-commerce site and a home service booking platform.
            </p>
            <p>
              Earlier in my journey, I spent 3.5 years gaining foundational
              experience in UI development and team collaboration in a
              fast-paced, tech-driven environment. That experience shaped my
              approach to problem-solving and cross-functional teamwork. I'm
              passionate about building fast, user-friendly, and
              production-ready web experiences.
            </p>
            <div className="flex-chips" style={{ width: "100%" }}>
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
