import './index.css';

function ProjectCard({ title, description, link }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        View Project
      </a>
    </div>
  );
}

function Portfolio() {
  const projects = [
    {
      title: 'Face Detection App',
      description: 'A React app using MediaPipe for real-time face detection.',
      link: 'https://github.com/yourusername/face-detection-app'
    },
    {
      title: 'Ticket Booking System',
      description: 'A MERN stack project for booking bus/train tickets.',
      link: 'https://github.com/yourusername/ticket-booking'
    },
  ];

  return (
    <main className="portfolio">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </main>
  );
}

export default Portfolio;  // ✅ THIS LINE IS MANDATORY
