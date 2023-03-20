import React from "react";


function ProjectItem({ name, about, technologies }) {
  return (
    <>
      <div className="project-item">
        <h3>{name}</h3>
        <p>{about}</p>
        <div className="technologies">
          {/* render a <span> for each technology in the technologies array */}
        <span>{technologies}</span>
        {
        technologies.map(technology => 
        <span key={technology}>{technology}</span>)
        }
        </div>
      </div>
    </>
    );
}


export default ProjectItem;


// function ProjectItem({ name, about, technologies }) {
//   return (
//     <>
//       <div className="project-item">
//         <h3>{name}</h3>
//         <p>{about}</p>
//         <div className="technologies">
//           {/* render a <span> for each technology in the technologies array */}
//         <span>{technologies[0]}</span>
//         <span>{technologies[1]}</span>
//         <span>{technologies[2]}</span>
//         </div>
//       </div>
//     </>
//     );
// }


