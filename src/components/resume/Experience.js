import React from 'react';

const Company = props => (
  <li className="resume-sub-block-wrapper">
    <h4>{props.company}</h4>
    <p> {props.start} - {props.end}</p>
    <ul>
      {props.accomplishments.map(accomplishment => {
        return <li key={accomplishment}>
          {accomplishment}
        </li>
      }  )}
    </ul>
  </li>
)

const Experience = (props) => {

  return (
    <div className="resume-block-wrapper">
      <h3 className="resume-block__header">Experience</h3>
      <ul className="resume-block__list">
        { props.companies.map(company => {
          return (
            <Company
              key={company.company}
              company={company.company}
              role={company.role}
              start={company.start}
              end={company.end}
              accomplishments={company.accomplishments}
            />
          )
        })
        }
      </ul>
    </div>
  )
}

export default Experience;
