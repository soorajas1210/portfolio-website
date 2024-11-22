import React from "react";
import "@fortawesome/free-regular-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const labelsFirst = [
  "React.js",
  "Next.js",
  "HTML5",
  "CSS3",
  "JavaScript",
  "Node.js",
  "Express",
  "Tailwind CSS",
  "Mongo DB",
  "SQL",
  "PostgreSQL",
  "Postman",
];

function About() {
  return (
    <div className="container" id="about">
      <div className="skills-container">
        <h1>About</h1>
        <div className="">
          <div className="skill">
            <p>
              I am a Full Stack Developer with over 2 years of experience in
              building web applications and ERP solutions, including booking
              platforms and visitor management systems. My journey into
              development began through rigorous self-learning, transitioning
              from a leadership role in the IT industry, where I managed teams
              for 3.5+ years. This diverse background has honed my skills in
              problem-solving, adaptability, and collaboration, enabling me to
              deliver scalable, impactful applications.
            </p>
            <p>
              Currently, as a Full Stack Developer at Spadile Technologies LLC,
              I lead the development of responsive, optimized interfaces while
              enhancing backend functionality to ensure scalable and
              high-performance solutions. During my time as an intern at
              Brototype, I successfully built 10+ full-stack projects, ranging
              from document management systems to ERP platforms, while leading
              the frontend development for the majority of company projects.
            </p>
            <div className="flex-chips" style={{ width: "50%" }}>
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
