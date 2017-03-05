import React from 'react';

const Project = props => (
  <li className="school-wrapper">
    <h4 className="school__degree">{props.project}</h4>

    <p className="school__school"> { props.desc} {props.start} - {props.end}</p>
    <ul>
      {
        props.accomplishments.map(accomplishment => {
          return (
            <li key={accomplishment}>
              {accomplishment}
            </li>)
        })
      }
    </ul>
  </li>
)

const FeatProjects = (props) => {
  return (
    <div className="education-wrapper">
      <h3 className="education__header">Projects</h3>
      <ul className="education__schools">
        { props.projects.map( project=> {
          return (
            <Project
              key={project.name}
              project={project.name}
              desc={project.desc}
              start={project.start}
              end={project.end}
              accomplishments={project.accomplishments}
            />
          )
        })
        }
      </ul>
    </div>
  )
}

export default FeatProjects;
