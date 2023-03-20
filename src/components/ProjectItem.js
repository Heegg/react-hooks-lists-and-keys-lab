import React from "react";


function ProjectItem({ name, about, technologies }) {
  return (
    <>
      <div className="project-item">
        <h3>{name}</h3>
        <p>{about}</p>
        <div className="technologies">
          {/* render a <span> for each technology in the technologies array */}
        <span>{technologies[0]}</span>
        <span>{technologies[1]}</span>
        <span>{technologies[2]}</span>
        </div>
      </div>
    </>
    );
}
// console.log(ProjectItem)

export default ProjectItem;


    {/* <>
    <div className="project-item">
      <h3>{name}Reciplease</h3>
      <p>{about}A recipe tracking app</p>
      <div className="technologies">
        <span>{technologies}Rails</span> <span>Bootstrap CSS</span>
      </div>
    </div>
        <div className="project-item">
        <h3>{name}Kibbles N Bitz</h3>
        <p>{about}Tinder for dogs</p>
        <div className="technologies">
          <span>{technologies}React</span> <span>Redux</span>
        </div>
      </div>
          <div className="project-item">
          <h3>{name}Alienwares</h3>
          <p>{about}Etsy for aliens</p>
          <div className="technologies">
            <span>{technologies}React</span> <span>Redux</span> <span>Rails</span>
          </div>
        </div>
    </> */}
