import React from 'react';
import Education from './Education';

import { degree } from '../../data/resumeData'

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
      degrees: degree
    }
    this.loadResumeData = this.loadResumeData.bind(this);
  }

  loadResumeData() {
    this.setState({
      degree: degree
    })
  }

  componentDidMount() {
    this.loadResumeData();
  }

  render() {
    return (
      <article className="resume-page-wrapper">

        <header>
          <h2>Resume</h2>
        </header>
        <Education degrees={this.state.degrees}  />

      </article>
    )
  }
}

export default ResumePage;
