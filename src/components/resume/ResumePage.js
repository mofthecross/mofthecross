import React from 'react';
import Education from './Education';
import Experience from './Experience';
import FeatProjects from './FeatProjects'

import { degree, experience, projects } from '../../data/resumeData'

const sections = [
  'Education',
  'Experience',
  'Skills',
  'Courses',
  'References',
];

class ResumePage extends React.Component {
  constructor(){
    super();
    this.state = {
      degrees: null,
      experience: null,
      projects: null
    }
    this.loadResumeData = this.loadResumeData.bind(this);
  }

  loadResumeData() {
    this.setState({
      degrees: degree,
      experience: experience,
      projects:  projects
    })
  }

  componentWillMount() {
    this.loadResumeData();
  }

  render() {
    return (
      <article className="resume-page-wrapper">

        <header>
          <h2>Resume</h2>
        </header>
        <Education degrees={this.state.degrees}  />
        <Experience companies={this.state.experience}/>
        <FeatProjects projects={this.state.projects}/>
      </article>
    )
  }
}

export default ResumePage;
