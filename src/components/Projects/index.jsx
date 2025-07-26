import { projectsData } from '@/utils/data/project-data'; // Adjust path based on your Vite project structure
import ProjectCard from './project-card';

const Projects = () => {
  return (
    <div id="projects" className="relative z-50 my-12 lg:my-24">
      <h1 className="text-center text-light sticky-top z-[-1]" style={{ marginBottom: "1rem" }}>
        Projects
      </h1>

      <div className="pt-24">
        <div className="flex flex-col gap-6">
          {projectsData.slice(0, 5).map((project, index) => (
            <div
              id={`sticky-card-${index + 1}`}
              key={index}
              className="sticky-card w-[80%] mx-auto max-w-2xl sticky"
            >
              <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s]">
                <ProjectCard project={project} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;