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
        <h4>NXTWave, Hyderabad</h4>
        <p><strong>Software Development Mentor</strong></p>
        <h5>NxtWave Portal – Student Profile Page</h5>
        <p><strong>Frontend Developer | NxtWave, Hyderabad | July 2024 – Present</strong></p>
        <ul>
          <li>Developed a responsive student profile page using React.js and Styled Components.</li>
          <li>Built modular components for displaying personal, academic, and project information.</li>
          <li>Ensured cross-device compatibility and followed best practices in component architecture.</li>
        </ul>
        <p>
          Additionally, mentoring aspiring developers. Skilled in full-stack development using technologies like
          Python, JavaScript, Node.js, SQL, and React.js. Proven ability to translate complex technical concepts into
          easy-to-understand guidance while supporting learners in multiple programming languages and tools.
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
          <li>Successfully mentored 100+ students in MERN stack...</li>
          <li>Designed and delivered practical, project-based training programs.</li>
          <li>Helped students build real-world web applications...</li>
        </ul>
      </section>
    </main>
  );
}
