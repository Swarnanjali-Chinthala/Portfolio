import { Link } from "react-router-dom";
import "./index.css";

export default function ProjectCard({ id, title, summary }) {
  return (
    <div className="project-card">
      <h3 className="project-title">{title}</h3>

      {/* Show only first 100 characters */}
      <p className="project-desc">
        {summary.length > 100
          ? summary.substring(0, 100) + "..."
          : summary}
      </p>

      {/* "More" link goes to details page */}
      <Link to={`/project/${id}`} className="more-link">
        More
      </Link>
    </div>
  );
}
