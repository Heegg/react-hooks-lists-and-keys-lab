
import React from "react";
import ProjectItem from "./ProjectItem";


// const projectName = projects.map((project) => {
//   return <li key={project.id}>{project.name} {project.about} {project.technologies}</li>
//  })

//  const projectItems = projects.map((project) => {
//   return <ProjectItem>
//  })

function ProjectList({ projects }) {
console.log(projects);

  return (
    <div id="projects">
      <h2>My Projects</h2>

      <div id="project-list">
      {/* render ProjectItem components here */}

      <ProjectItem 
      name={projects[0].name}
      about={projects[0].about}
      technologies={projects[0].technologies}
      />
      <ProjectItem 
      name={projects[1].name}
      about={projects[1].about}
      technologies={projects[1].technologies}
      /> 
      <ProjectItem 
      name={projects[2].name}
      about={projects[2].about}
      technologies={projects[2].technologies}
      /> 

      {/* <h3 key={projects.id}>{projects.name} {projects.about} {projects.technologies}</h3> */}
      
      </div>
    </div>
  );
}


export default ProjectList;
