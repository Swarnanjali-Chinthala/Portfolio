import { useParams } from "react-router-dom";
import projects from "../../data/projects";
import './index.css'
export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id.toString() === id);

  if (!project) {
    return <h2>Project not found</h2>;
  }

  return (
    <div className="project-details">
  <h2>{project.title}</h2>

  <strong>Description:</strong>
  <p>{project.summary}</p>

  <strong>Key Features:</strong>
  <ul>
    {project.features.map((feature, index) => (
      <li key={index}>{feature}</li>
    ))}
  </ul>

  <a
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    className="project-link"
  >
    View Project
  </a>
</div>

  );
}
