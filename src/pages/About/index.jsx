import './index.css';

export default function About() {
  return (
    <main className="about">
      <h2>About Me</h2>

      <section className="about-intro">
        <p>
          I’m Swarnanjali, a passionate MERN Stack Developer and dedicated software development mentor.
          Over the years, I’ve guided and trained hundreds of aspiring developers to master the MERN stack,
          Python, and foundational Data Structures & Algorithms. I love solving problems, building scalable web applications,
          and empowering others to grow their skills and careers in tech.
        </p>
      </section>

      <section className="about-experience">
        <h3>Work Experience</h3>
        <h4>NXT Wave, Hyderabad</h4>
        <p><strong>Associate Software Developer | Academic Mentor</strong></p>
        <ul>
          <li>Developed a full-stack web application to analyze interview videos by generating transcripts and computing performance scores using predefined evaluation metrics.</li>
          <li>Designed a React-based frontend for video uploads and result display, providing a seamless user experience and real-time feedback.</li>
          <li>Implemented a Node.js backend with Express and Multer to handle large video uploads and integrated Assembly AI/OpenAI Whisper for accurate transcription.</li>
          <li>Engineered a custom scoring engine to assess transcript content based on clarity, confidence, and response relevance.</li>
          <li>Enabled scalable processing and future integration of advanced NLP/ML techniques through a modular backend architecture.</li>
          <li><strong>Technologies:</strong> React, Node.js, Express, Multer, Assembly AI, Whisper, MongoDB, Axios, JavaScript, HTML/CSS</li>
          <li>Additionally, mentored aspiring developers — translating complex technical concepts into clear, practical guidance across Python, JavaScript, Node.js, SQL, and more.</li>
        </ul>
      </section>

      <section className="about-education">
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

      <section className="about-achievements">
        <h3>Key Achievements</h3>
        <ul>
          <li>Successfully mentored 100+ students in MERN stack, Python, and DSA basics.</li>
          <li>Designed and delivered practical, project-based training programs.</li>
          <li>Helped students build real-world web applications and prepare for technical interviews.</li>
        </ul>
      </section>
    </main>
  );
}
