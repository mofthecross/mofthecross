import React from 'react';

const Project = props => (
  <li className="resume-sub-block-wrapper">
    <h4 className="resume-sub-block__degree">{props.project}</h4>

    <p> { props.desc} {props.start} - {props.end}</p>
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
    <div className="resume-block-wrapper">
      <h3 className="resume-block__header">Projects</h3>
      <ul className="resume-block__list">
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
