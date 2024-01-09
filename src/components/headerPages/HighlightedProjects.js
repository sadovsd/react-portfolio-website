import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  return (
    <div className="max-w-sm min-w-[24rem] h-[29rem] border border-gray-200 rounded-lg p-4 shadow-md flex flex-col">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <p className="text-sm text-gray-600">{project.description}</p>
        </div>
        <Link to={`/projects/project${project.id}`} className="text-blue-500 hover:underline cursor-pointer">
                    Learn More
        </Link>
      </div>
    </div>
  );
};

const HighlightedProjects = ({ projects }) => {
  console.log(projects);
  return (
    <div className="w-full flex-col flex items-center overflow-hidden overflow-x-auto ">
      <div className="flex items-center justify-between mb-4 max-w-6xl w-[100%] mx-auto">
        <h2 className="text-2xl font-bold">Highlighted Projects</h2>
      </div>
      <div className="overflow-hidden flex gap-3 max-w-6xl mx-auto">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default HighlightedProjects;
