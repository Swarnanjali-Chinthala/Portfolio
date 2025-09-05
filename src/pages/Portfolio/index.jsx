import projects from "../../data/projects";   // ✅ make sure this path is correct
import ProjectCard from "../../components/ProjectCard";
import './index.css'
export default function Portfolio() {
  return (
    <div className="portfolio">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projects.map((project) => (
  <ProjectCard
    key={project.id}
    id={project.id}
    title={project.title}
    summary={project.summary} // ✅ important
  />
))}

      </div>
    </div>
  );
}
