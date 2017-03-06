import React from 'react';


const School = props => (
  <li className="resume-sub-block-wrapper">
    <h4>{props.degree}</h4>
    <p><a href={props.link}>{props.school}</a>, {props.year}</p>
  </li>
)

const Education = (props) => {
  return (
    <div className="resume-block-wrapper">
      <h3 className="resume-block__header">Education</h3>
      <ul className="resume-block__list">
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
