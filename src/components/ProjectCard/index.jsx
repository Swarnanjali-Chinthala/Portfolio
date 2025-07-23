export default function ProjectCard({ title, description, link }) {
  return (
    <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="mb-4">{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">
        View Project
      </a>
    </div>
  );
}
