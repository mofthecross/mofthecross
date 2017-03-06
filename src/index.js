import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';
import './css/style.css';

import Main from './components/Main';
import ResumePage from './components/resume/ResumePage'
import NotFound from './components/NotFound'
import SkillsPage from './components/skills/SkillsPage'

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Main/>
        <Match exactly pattern="/skills" component={ SkillsPage  }/>
        <Match exactly pattern="/resume" component={ ResumePage }/>
        <Miss component={ NotFound }/>
      </div>
    </BrowserRouter>
  )
}

render(<Root/>, document.querySelector('#main'));
