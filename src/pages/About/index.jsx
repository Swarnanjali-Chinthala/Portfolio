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
          I’m Swarnanjali, a passionate MERN Stack Developer and dedicated software development mentor.
          Over the years, I’ve guided and trained hundreds of aspiring developers to master the MERN stack,
          Python, and foundational Data Structures & Algorithms. I love solving problems, building scalable web applications,
          and empowering others to grow their skills and careers in tech.
        </p>
      </section>

      <section className="about-experience reveal">
        <h3>Work Experience</h3>
        <h4>NXT Wave, Hyderabad</h4>
        <p><strong>Associate Software Developer | Academic Mentor</strong></p>
        <ul>
          <li>Developed a full-stack web application to analyze interview videos...</li>
          <li>Designed a React-based frontend for video uploads...</li>
          <li>Implemented a Node.js backend with Express and Multer...</li>
          <li>Engineered a custom scoring engine...</li>
          <li>Enabled scalable processing...</li>
          <li><strong>Technologies:</strong> React, Node.js, Express, Multer...</li>
          <li>Additionally, mentored aspiring developers...</li>
        </ul>
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
          <li>Successfully mentored 100+ students in MERN stack...</li>
          <li>Designed and delivered practical, project-based training programs.</li>
          <li>Helped students build real-world web applications...</li>
        </ul>
      </section>
    </main>
  );
}
