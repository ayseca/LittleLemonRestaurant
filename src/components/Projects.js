import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  { title: 'Project 1', description: 'Description of project 1' },
  { title: 'Project 2', description: 'Description of project 2' },
  { title: 'Project 3', description: 'Description of project 3' },
  { title: 'Project 4', description: 'Description of project 4' }
];

const Projects = () => {
  return (
    <section id="projects">
      <h2>Featured Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} title={project.title} description={project.description} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
