import React from 'react';

const Company = props => (
  <li className="school-wrapper">
    <h4 className="school__degree">{props.company}</h4>
    <p className="school__school"> {props.start} - {props.end}</p>
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
    <div className="education-wrapper">
      <h3 className="education__header">Experience</h3>
      <ul className="education__schools">
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
