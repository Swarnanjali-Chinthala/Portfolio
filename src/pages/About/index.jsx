import { useEffect } from "react";
import "./index.css";

export default function About() {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target); // run only once
          }
        });
      },
      { threshold: 0.2 }
    );

    reveals.forEach((el) => observer.observe(el));
  }, []);

  return (
    <main className="about">
      <h2 className="reveal">About Me</h2>

      <section className="about-intro reveal">
        <p>
          I’m Swarnanjali, a passionate React Developer and dedicated software development mentor.
          I specialize in building modern, responsive, and scalable web applications using React.js
          and related technologies. Over the years, I’ve mentored hundreds of aspiring developers,
          helping them master front-end development, core programming concepts, and real-world project building.
        </p>
      </section>

      <section className="about-experience reveal">
        <h3>Work Experience</h3>
        <h4>NXTWave, Hyderabad</h4>
        <p><strong>Software Development Mentor</strong></p>
        <h5>NxtWave Portal – Student Profile Page</h5>
        <p><strong>Frontend Developer | NxtWave, Hyderabad | July 2024 – Present</strong></p>
        <ul>
          <li>Developed a responsive student profile page using React.js and Styled Components.</li>
          <li>Built reusable components to showcase personal, academic, and project details.</li>
          <li>Ensured mobile responsiveness and followed React best practices and component design patterns.</li>
        </ul>
        <p>
          Alongside development, I also mentor aspiring developers in React, JavaScript, and programming fundamentals.
          I simplify complex technical topics into digestible lessons and support learners in building real-world web apps.
        </p>
      </section>

      <section className="about-education reveal">
        <h3>Education</h3>
        <ul>
          <li>
            <strong>Kakatiya Institute of Technology and Science, Warangal</strong><br />
            B.Tech in Computer Science & Engineering (CGPA: 8.0)<br />
            <span className="edu-year">2019 – 2023</span>
          </li>
          <li>
            <strong>Sri Gayatri Junior College, Jangaon</strong><br />
            MPC (95%)<br />
            <span className="edu-year">2017 – 2019</span>
          </li>
          <li>
            <strong>Scholars Grammar High School, Jangaon</strong><br />
            CGPA: 9.3<br />
            <span className="edu-year">2017</span>
          </li>
        </ul>
      </section>

      <section className="about-achievements reveal">
        <h3>Key Achievements</h3>
        <ul>
          <li>Mentored 100+ students in front-end development and React.js.</li>
          <li>Led project-based learning sessions focusing on real-world web applications.</li>
          <li>Recognized for making complex technical topics easy to understand for beginners.</li>
        </ul>
      </section>
   
      <section className="about-skills">
        <h3>Skills</h3>
        <ul className="skills-list">
          <li>React.js</li>
          <li>JavaScript (ES6+)</li>
          <li>HTML5 & CSS3</li>
          <li>Styled Components</li>
          <li>Bootstrap</li>
          <li>Git & GitHub</li>
          <li>REST APIs</li>
          <li>Node.js (Basics)</li>
          <li>Python (Basics)</li>
          <li>Responsive Web Design</li>
          <li>Problem Solving & Debugging</li>
          <li>Mentoring & Technical Training</li>
        </ul>
      </section>
    </main>
  );
}
