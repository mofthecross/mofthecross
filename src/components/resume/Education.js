import React from 'react';


const School = props => (
  <li className="school-wrapper">
    <h4 className="school__degree">{props.degree}</h4>
    <p className="school__school"><a href={props.link}>{props.school}</a>, {props.year}</p>
  </li>
)

const Education = (props) => {
  return (
    <div className="education-wrapper">
      <h3 className="education__header">Education</h3>
      <ul className="education__schools">
        { props.degrees.map(degree => {
          return (
            <School
              key={degree.degree}
              degree={degree.degree}
              school={degree.school}
              url={degree.link}
              year={degree.year}
            />
          )
        })
        }
      </ul>
    </div>
  )
}

export default Education;
